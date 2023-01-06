// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

document.addEventListener('DOMContentLoaded', () => {
  const tw = new Typewriter(document.querySelector('#typed-logo') as HTMLElement, {
    loop: false,
    autoStart: true,
  });
  tw.typeString('MCS />').start();
});
