export const starSVG = 
`
<svg style="position: absolute" viewBox="0 0 32 32" width="0" height="0">
<defs>
  <linearGradient id="grad-purple" x1="0" x2="100%" y1="0" y2="0">
    <stop offset="0%" stop-color="#C9085B"></stop>
    <stop offset="100%" stop-color="#EFCE4A"></stop>
  </linearGradient>
  
  <mask id="stars-mask">
    <use xlink:href="#star" x="0"></use>
    <use xlink:href="#star" x="32"></use>
    <use xlink:href="#star" x="64"></use>
    <use xlink:href="#star" x="96"></use>
    <use xlink:href="#star" x="128"></use>
    <use xlink:href="#star" x="160"></use>
    <use xlink:href="#star" x="192"></use>
    <use xlink:href="#star" x="224"></use>
    <use xlink:href="#star" x="256"></use>
    <use xlink:href="#star" x="288"></use>
  </mask>

  <symbol viewBox="0 0 32 32" id="star">
    <path fill="#fff" d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
  </symbol>
</defs>
</svg>

<svg class="star-rate" width="350" height="32">
<g mask="url(#stars-mask)">
  <rect width="100%" height="100%" fill="url(#grad-purple)"/>
</g>
</svg>

`;