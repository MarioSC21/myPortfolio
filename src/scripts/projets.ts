export function getScreenY(id: string) {
  const node = document.getElementById(id)?.getBoundingClientRect() as DOMRect;
  // return node;
  const y = node.y - window.innerHeight;
  return Math.abs(y > 100 ? 0 : y) / node.height; // > 0
}

export function useScroll() {
  return {
    y: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
  };
}

export function onResize(fn: () => void) {
  document.addEventListener('resize', fn);
}