import type { itemsNavegacion } from "../types"
enum color {
  primary = "tooltip-primary",
  secondary = "tooltip-secondary",
  success = "tooltip-success",
  danger = "tooltip-error",
  warning = "tooltip-warning",
}
interface navbarItemsObjects extends itemsNavegacion {
  color: color
}
export const navbarItems = ["Proyectos", "Sobre Mi", "Contacto"]
export const navbarItemsObjects:navbarItemsObjects[] = [
  {
    link: "https://drive.google.com/file/d/1M3K_x-BCax5n230JmCpbEIJGEkvwEYd_/view?usp=share_link",
    dataTooltip: "CV",
    color:color.primary,
    imgSvg: `<svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-file-certificate'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    stroke-width='2'
    stroke='currentColor'
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>
    <path d='M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5'></path>
    <circle cx='6' cy='14' r='3'></circle>
    <path d='M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5'></path>
  </svg>`,
  },
  {
    link: "https://github.com/MarioSC21",
    dataTooltip: "Github",
    color:color.success,
    imgSvg: `<svg
    xmlns='http://www.w3.org/2000/svg'
    class='icon icon-tabler icon-tabler-brand-github'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    stroke-width='2'
    stroke='currentColor'
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path
      d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'
    ></path>
  </svg>`,
  },
]
