function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.querySelector('[data-menu-toggle]');
  menu?.classList.add('opacity-0', 'invisible', 'pointer-events-none');
  menu?.classList.remove('opacity-100', 'visible');
  menu?.setAttribute('aria-hidden', 'true');
  button?.setAttribute('aria-expanded', 'false');
  button?.setAttribute('aria-label', 'Abrir menú');
  document.documentElement.style.overflow = '';
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
    button.setAttribute('aria-label', 'Cerrar menú');
    document.documentElement.style.overflow = 'hidden';
  }
  if (target.closest('[data-print]')) window.print();
  const tracked = target.closest<HTMLElement>('[data-event]');
  if (tracked) sendEvent(tracked.dataset.event!, tracked);
});
document.addEventListener('keydown', event => {
  const button = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  if (button?.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') { closeMenu(); button.focus(); }
  if (event.key === 'Tab') {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('#mobile-menu a'));
    const first = links[0], last = links.at(-1);
    if (event.shiftKey && document.activeElement === button) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === button) { event.preventDefault(); first?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); button.focus(); }
    else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); button.focus(); }
  }
});
window.matchMedia('(min-width:1280px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.addEventListener('submit', event => {
  const form = event.target as HTMLFormElement;
  if (form.dataset.submitEvent) sendEvent(form.dataset.submitEvent, form);
});
function sendEvent(name: string, element: HTMLElement) {
  if (!(window as any).__calvoAnalyticsActive) return;
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

