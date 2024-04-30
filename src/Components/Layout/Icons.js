User
export const HamburgerMenuOpen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 17h18M3 12h18M3 7h18"
    />
  </svg>
);

export const HamburgerMenuClose = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
      <path
        fill="currentColor"
        d="m12 14.121 5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"
      />
    </g>
  </svg>
);

export const ShoppingCart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
  </svg>
);

export const SearchIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 68 68" id="search"><defs><linearGradient id="a" x1="33.79" x2="39.67" y1="39.13" y2="39.13" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eb6681"></stop><stop offset="1" stop-color="#9c89dd"></stop></linearGradient><linearGradient id="b" x1="37.01" x2="42.8" y1="36.33" y2="36.33" xlink:href="#a"></linearGradient><linearGradient id="c" x1="36.76" x2="63.29" y1="51.84" y2="51.84" xlink:href="#a"></linearGradient><linearGradient id="d" x1="4.71" x2="43.09" y1="20.69" y2="20.69" xlink:href="#a"></linearGradient><linearGradient id="e" x1="24.57" x2="36.86" y1="10.19" y2="10.19" xlink:href="#a"></linearGradient></defs><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-linejoin="round" d="m39.17 42.01-4.88-5.76"></path><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-linejoin="round" d="m42.3 39.16-4.79-5.66"></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-linejoin="round" d="m37.26 43.79 17.23 20.55a4.71 4.71 0 1 0 7.17-6.12L44.44 37.67Z"></path><circle cx="23.9" cy="20.69" r="18.69" fill="none" stroke="url(#d)" stroke-linecap="round" stroke-linejoin="round"></circle><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-linejoin="round" d="M25.07 6.66s7.79-1.19 11.29 7.11"></path></svg>
);