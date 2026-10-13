function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.querySelector('[data-menu-toggle]');
  menu?.classList.add('opacity-0', 'invisible', 'pointer-events-none');
  menu?.classList.remove('opacity-100', 'visible');
  menu?.setAttribute('aria-hidden', 'true');
  button?.setAttribute('aria-expanded', 'false');
  const icon = button?.querySelector('span');
  if (icon) icon.textContent = 'menu';
}
document.addEventListener('click', event => {
  const target = event.target as Element;
  const button = target.closest('[data-menu-toggle]');
  if (button) {
    const menu = document.getElementById('mobile-menu');
    if (button.getAttribute('aria-expanded') === 'true') return closeMenu();
    menu?.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
    menu?.classList.add('opacity-100', 'visible');
    menu?.setAttribute('aria-hidden', 'false');
    button.setAttribute('aria-expanded', 'true');
    const icon = button.querySelector('span');
    if (icon) icon.textContent = 'close';
  }
  if (target.closest('[data-print]')) window.print();
  const tracked = target.closest<HTMLElement>('[data-event]');
  if (tracked) sendEvent(tracked.dataset.event!, tracked);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('submit', event => {
  const form = event.target as HTMLFormElement;
  if (form.dataset.submitEvent) sendEvent(form.dataset.submitEvent, form);
});
function sendEvent(name: string, element: HTMLElement) {
  (window as any).gtag?.('event', name, { event_category: element.dataset.category, event_label: element.dataset.label });
}
document.addEventListener('input', event => {
  const slider = event.target as HTMLInputElement;
  if (!slider.matches('[data-mix-slider]')) return;
  const bar = document.querySelector<HTMLElement>('[data-mix-bar]');
  const knob = document.querySelector<HTMLElement>('[data-mix-knob]');
  if (bar) bar.style.width = `${slider.value}%`;
  if (knob) {
    knob.style.left = `calc(${slider.value}% - 32px)`;
    const label = knob.querySelector('span');
    if (label) label.textContent = slider.value;
  }
});

let analyticsStarted = false;
function syncAnalytics() {
  let consent: string | null;
  try { consent = localStorage.getItem('calvo-cookie-consent'); } catch { return; }
  if (analyticsStarted || (consent !== 'accepted' && consent !== 'true')) return;
  analyticsStarted = true;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () { w.dataLayer.push(arguments); };
  w.gtag('js', new Date());
  w.gtag('config', 'G-985SWJBWRZ');
  const google = document.createElement('script');
  google.async = true;
  google.src = 'https://www.googletagmanager.com/gtag/js?id=G-985SWJBWRZ';
  document.head.append(google);
  w.clarity = w.clarity || function () { (w.clarity.q = w.clarity.q || []).push(arguments); };
  const clarity = document.createElement('script');
  clarity.async = true;
  clarity.src = 'https://www.clarity.ms/tag/v2v2171aj3';
  document.head.append(clarity);
}
window.addEventListener('calvo:consent', syncAnalytics);
syncAnalytics();
const consentPanel = document.getElementById('cookie-consent');
try { if (!localStorage.getItem('calvo-cookie-consent') && consentPanel) consentPanel.hidden = false; }
catch { if (consentPanel) consentPanel.hidden = false; }
document.querySelectorAll<HTMLButtonElement>('[data-consent]').forEach(button => {
  button.addEventListener('click', () => {
    try { localStorage.setItem('calvo-cookie-consent', button.dataset.consent!); } catch { /* Storage can be disabled. */ }
    if (consentPanel) consentPanel.hidden = true;
    window.dispatchEvent(new Event('calvo:consent'));
  });
});
