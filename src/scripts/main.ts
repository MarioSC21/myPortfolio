  // splash screen
  import anime from 'animejs';
  anime
    .timeline()
    .add({ targets: '#hi', scale: 2, duration: 700, delay: 200 })
    .add({
      targets: '.zl-char',
      translateY: ['150%', 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 900,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: '#hi',
      scale: 1,
      color: '#ccc',
      zIndex: 0,
      duration: 500,
    });
  anime({
    targets: '#splash',
    scaleY: 0,
    duration: 1400,
    easing: 'easeInOutExpo',
    delay: 1700,
  });
  anime({ targets: '#zl', color: '#fff', zIndex: 0, duration: 100, delay: 2400 });
  anime({
    targets: '#title',
    translateY: ['150%', 0],
    opacity: [0, 1],
    duration: 300,
    easing: 'easeInOutQuad',
    delay: 2400,
  });
  
  // smooth scrolling
  import Scrollbar from 'smooth-scrollbar';
  import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
  Scrollbar.use(OverscrollPlugin);
  const scroll = Scrollbar.init(document.getElementById('scroll-wrapper') as HTMLElement, {
    plugins: { overscroll: { damping: 0.15, maxOverscroll: 200 } },
  });
  //  custom scrollbar
  Scrollbar.detachStyle();
  const track = document.querySelector('.scrollbar-track-y') as HTMLElement;
  track.style.cssText = 'position: absolute; right: 0; top: 0; width: 6px; height: 100%';
  const thumb = document.querySelector('.scrollbar-thumb-y') as HTMLElement;
  thumb.style.cssText =
    'background-color: #393f61; border-radius: 10px; opacity: 0; transition: opacity 200ms';
  let timeout: ReturnType<typeof setTimeout>;
  scroll.addListener(() => {
    thumb.style.opacity = '1';
    clearTimeout(timeout);
    timeout = setTimeout(() => (thumb.style.opacity = '0'), 2000);
  });
  // icono de mouse para navegar hacia abajo (I mean navigation)
  const navs = document.querySelectorAll('.nav');
  const ele = document.querySelectorAll('.sitw');
  const mouse = document.getElementById('mouse') as HTMLElement;
  navs.forEach((nav, i) =>
    nav.addEventListener('click', () => scroll.scrollIntoView(ele[i] as HTMLElement))
  );
  mouse.addEventListener('click', () => scroll.scrollIntoView(ele[1] as HTMLElement));
  // tippy
  import tippy from 'tippy.js';
  tippy('[data-tippy-content]', {
    animation: 'shift-away-extreme',
    theme: 'light',
    allowHTML: true,
    touch: true,
  });
  // dynamic tooltip for email
  const emailInstance = tippy('#email', {
    content: 'Copy',
    theme: 'light',
    hideOnClick: false,
    touch: true,
    onHidden: (e) => e.setContent('Copy'),
  })[0];
  // copy email
  const copyEmail = document.getElementById('email') as HTMLElement;
  copyEmail.addEventListener('click', () => {
    navigator.clipboard.writeText('mariocamna@gmail.com');
    emailInstance.setContent('Copied!! 😁');
  });