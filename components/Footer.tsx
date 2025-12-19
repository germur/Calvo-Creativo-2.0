const Footer = () => (
    <footer className="w-full border-t border-border py-8 px-6 md:px-12 bg-background/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">copyright</span>
                <span>2024 EL ESPECIALISTA. Todos los derechos reservados.</span>
            </div>
            <div className="flex gap-4">
                <span>Bogotá, D.C.</span>
                <span>•</span>
                <span>Hecho con Vibecoding v2</span>
            </div>
        </div>
    </footer>
);

export default Footer;
