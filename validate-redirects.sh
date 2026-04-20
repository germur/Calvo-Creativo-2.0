#!/usr/bin/env bash
# validate-redirects.sh
# Valida que redirects y URLs canónicas funcionan después del deploy.
# Uso: bash validate-redirects.sh

set -u  # error en variables no definidas
DOMAIN="https://calvocreativo.com"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

pass=0
fail=0
warn=0

# ---- HELPERS ----

# Valida que una URL devuelva un status esperado (200, 301, 308, etc.)
check_status() {
    local url="$1"
    local expected="$2"
    local label="$3"
    local actual
    actual=$(curl -s -o /dev/null -w "%{http_code}" -A "Mozilla/5.0" --max-time 10 "$url")

    if [ "$actual" = "$expected" ]; then
        echo -e "  ${GREEN}✓${NC} [$actual] $label"
        pass=$((pass+1))
    else
        echo -e "  ${RED}✗${NC} [$actual, esperado $expected] $label — $url"
        fail=$((fail+1))
    fi
}

# Valida que una URL redirija a un destino concreto Y luego el destino devuelva 200 (sin chains)
check_redirect() {
    local from="$1"
    local expected_to="$2"
    local label="$3"

    local first_status first_location final_status redirect_count
    first_status=$(curl -s -o /dev/null -w "%{http_code}" -A "Mozilla/5.0" --max-time 10 "$DOMAIN$from")
    first_location=$(curl -s -o /dev/null -w "%{redirect_url}" -A "Mozilla/5.0" --max-time 10 "$DOMAIN$from")
    redirect_count=$(curl -sL -o /dev/null -w "%{num_redirects}" -A "Mozilla/5.0" --max-time 15 "$DOMAIN$from")
    final_status=$(curl -sL -o /dev/null -w "%{http_code}" -A "Mozilla/5.0" --max-time 15 "$DOMAIN$from")

    # Normalizar: quitar dominio si está presente
    local loc_path="${first_location#$DOMAIN}"
    loc_path="${loc_path#https://calvocreativo.com}"

    if [ "$first_status" = "301" ] || [ "$first_status" = "308" ]; then
        if [ "$loc_path" = "$expected_to" ]; then
            if [ "$redirect_count" -le 1 ] && [ "$final_status" = "200" ]; then
                echo -e "  ${GREEN}✓${NC} [$first_status → 200] $label ($from → $expected_to)"
                pass=$((pass+1))
            else
                echo -e "  ${YELLOW}⚠${NC} [$first_status, $redirect_count hops, final $final_status] $label — posible redirect chain"
                warn=$((warn+1))
            fi
        else
            echo -e "  ${RED}✗${NC} [$first_status → $loc_path, esperado $expected_to] $label"
            fail=$((fail+1))
        fi
    else
        echo -e "  ${RED}✗${NC} [$first_status, esperado 301/308] $label — $from"
        fail=$((fail+1))
    fi
}

# ---- TESTS ----

echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}  VALIDACIÓN POST-DEPLOY — calvocreativo.com${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"

echo ""
echo -e "${BLUE}[1] URLs canónicas — deben responder 200 sin slash${NC}"
check_status "$DOMAIN/" "200" "Homepage"
check_status "$DOMAIN/consultoria" "200" "Consultoría hub"
check_status "$DOMAIN/consultoria/arquitectura-seo-geo" "200" "Arquitectura SEO GEO"
check_status "$DOMAIN/consultoria/estrategia-contenidos-autoridad" "200" "Estrategia contenidos"
check_status "$DOMAIN/consultoria/automatizacion-seo-ia" "200" "Automatización SEO IA"
check_status "$DOMAIN/consultoria/consultoria-seo-internacional" "200" "SEO Internacional"
check_status "$DOMAIN/lab" "200" "Lab hub"
check_status "$DOMAIN/liner-notes" "200" "Liner Notes hub"
check_status "$DOMAIN/el-artista" "200" "El Artista"
check_status "$DOMAIN/contacto" "200" "Contacto"
check_status "$DOMAIN/casos" "200" "Casos"

echo ""
echo -e "${BLUE}[2] URLs con trailing slash — deben redirigir a versión sin slash${NC}"
check_redirect "/consultoria/" "/consultoria" "Trailing slash: /consultoria/"
check_redirect "/lab/" "/lab" "Trailing slash: /lab/"
check_redirect "/contacto/" "/contacto" "Trailing slash: /contacto/"
check_redirect "/el-artista/" "/el-artista" "Trailing slash: /el-artista/"

echo ""
echo -e "${BLUE}[3] Redirects críticos de Lovable (los nuevos del patch)${NC}"
check_redirect "/contact" "/contacto" "/contact → /contacto"
check_redirect "/about" "/el-artista" "/about → /el-artista"
check_redirect "/how-we-work" "/consultoria" "/how-we-work → /consultoria"
check_redirect "/privacy-policy" "/politica-privacidad" "/privacy-policy → /politica-privacidad"
check_redirect "/terms-of-service" "/terminos" "/terms-of-service → /terminos"
check_redirect "/cookie-policy" "/politica-privacidad" "/cookie-policy → /politica-privacidad"

echo ""
echo -e "${BLUE}[4] Redirects de servicios en inglés (Lovable)${NC}"
check_redirect "/services/seo-audit" "/consultoria" "SEO Audit"
check_redirect "/services/ecommerce-seo" "/servicios/automatizacion" "Ecommerce SEO"
check_redirect "/services/seo-automation/miami-fl" "/consultoria" "Servicio+ciudad catch-all"
check_redirect "/services/personal-branding-consulting/orlando-fl" "/el-artista" "Personal branding"

echo ""
echo -e "${BLUE}[5] Redirects de case-studies y blog viejos${NC}"
check_redirect "/case-studies/flo-car-rental" "/casos" "Case study antiguo"
check_redirect "/case-studies/edu1st-preschools" "/casos" "Case study antiguo"
check_redirect "/blog/seo-didnt-die-hype-strategy" "/liner-notes/seo-didnt-die-hype-strategy" "Blog post antiguo"

echo ""
echo -e "${BLUE}[6] Archivos clave (robots, sitemap, llms.txt)${NC}"
check_status "$DOMAIN/robots.txt" "200" "robots.txt"
check_status "$DOMAIN/sitemap.xml" "200" "sitemap.xml"
check_status "$DOMAIN/sitemap-0.xml" "200" "sitemap-0.xml"
check_status "$DOMAIN/llms.txt" "200" "llms.txt"

echo ""
echo -e "${BLUE}[7] Canonical coincide con URL final servida${NC}"
echo -e "  Verificación manual — revisa que el <link rel=\"canonical\"> del HTML"
echo -e "  coincida con la URL final (sin trailing slash) para estas páginas:"
for path in "/" "/consultoria" "/consultoria/arquitectura-seo-geo" "/lab"; do
    canonical=$(curl -sL -A "Mozilla/5.0" --max-time 10 "$DOMAIN$path" | grep -oP '<link rel="canonical" href="[^"]+"' | head -1)
    echo -e "    ${YELLOW}$path${NC} → $canonical"
done

# ---- RESUMEN ----

echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}  RESUMEN${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════${NC}"
echo -e "  ${GREEN}✓ Pasaron:${NC}   $pass"
echo -e "  ${YELLOW}⚠ Advertencias:${NC} $warn"
echo -e "  ${RED}✗ Fallaron:${NC}  $fail"
echo ""

if [ $fail -eq 0 ] && [ $warn -eq 0 ]; then
    echo -e "${GREEN}🎉 Todo limpio. Ya puedes hacer \"Validate fix\" en GSC.${NC}"
    exit 0
elif [ $fail -eq 0 ]; then
    echo -e "${YELLOW}⚠ Hay advertencias pero nada crítico. Revisa redirect chains.${NC}"
    exit 0
else
    echo -e "${RED}✗ Hay fallos. Revisa antes de validar en GSC.${NC}"
    exit 1
fi
