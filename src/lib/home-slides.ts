import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = Array.from(document.querySelectorAll<HTMLElement>('.home-slide'));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (slides.length > 0 && !reduceMotion) {
  const motion = gsap.matchMedia();

  motion.add('(min-width: 768px)', () => {
    slides.forEach((slide, index) => {
      const inner = slide.querySelector<HTMLElement>('.home-slide__inner, .home-slide__end-inner');
      const copy = slide.querySelector<HTMLElement>('.home-slide__copy, .home-slide__end-inner');
      const aside = slide.querySelector<HTMLElement>('.home-slide__aside');
      const indexLabel = slide.querySelector<HTMLElement>('.home-slide__index');
      const title = slide.querySelector<HTMLElement>('h1');
      const splash = slide.querySelector<HTMLElement>('.home-splash__particle-wrap');
      const splashName = slide.querySelector<HTMLElement>('.home-splash__name');
      const items = slide.querySelectorAll<HTMLElement>('.eyebrow, h1, .lede, .home-slide__summary, .hero-actions');

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
          invalidateOnRefresh: true,
          onEnter: () => slide.dataset.active = 'true',
          onEnterBack: () => slide.dataset.active = 'true',
          onLeave: () => slide.dataset.active = 'false',
          onLeaveBack: () => slide.dataset.active = 'false',
          id: `home-slide-${index + 1}`,
        },
      });

      if (splash) timeline.fromTo(splash, { yPercent: -8, scale: 0.94 }, { yPercent: 8, scale: 1.04, ease: 'none' }, 0);
      if (splashName) timeline.fromTo(splashName, { xPercent: -4, y: 30, autoAlpha: 0.4 }, { xPercent: 4, y: -30, autoAlpha: 1, ease: 'none' }, 0);
      if (inner) timeline.fromTo(inner, { y: 70, autoAlpha: 0.55 }, { y: -40, autoAlpha: 1, ease: 'none' }, 0);
      if (copy && copy !== inner) timeline.fromTo(copy, { x: -28 }, { x: 24, ease: 'none' }, 0.05);
      if (title) timeline.fromTo(title, { x: -18, letterSpacing: '0.015em' }, { x: 16, letterSpacing: '0em', ease: 'none' }, 0.1);
      if (aside) timeline.fromTo(aside, { x: 34, y: 28, autoAlpha: 0.42 }, { x: -20, y: -18, autoAlpha: 1, ease: 'none' }, 0.08);
      if (indexLabel) timeline.fromTo(indexLabel, { y: 20, autoAlpha: 0.35 }, { y: -20, autoAlpha: 1, ease: 'none' }, 0);
      if (items.length > 0) timeline.fromTo(items, { y: 22, autoAlpha: 0.5 }, { y: -4, autoAlpha: 1, stagger: 0.035, ease: 'none' }, 0.16);
    });
  });

  motion.add('(max-width: 767px)', () => {
    slides.forEach((slide, index) => {
      const content = slide.querySelectorAll<HTMLElement>('.home-slide__inner, .home-slide__end-inner, .home-splash__name, .home-slide__index');
      if (content.length === 0) return;

      gsap.fromTo(content, { y: 32, autoAlpha: 0.55 }, {
        y: -16,
        autoAlpha: 1,
        ease: 'none',
        stagger: 0.04,
        scrollTrigger: { trigger: slide, start: 'top 92%', end: 'bottom 12%', scrub: 0.6, id: `home-slide-mobile-${index + 1}` },
      });
    });
  });

  ScrollTrigger.refresh();
}
