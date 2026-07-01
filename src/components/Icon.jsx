const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  stroke: 'currentColor',
  strokeWidth: '1.8',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const icons = {
  download: <path d="M12 3v11m0 0 4-4m-4 4-4-4M4 18v2h16v-2" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5h6v2M3 12h18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  github: (
    <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-8 0C3.27.65 2.09 1 2.09 1A5.07 5.07 0 0 0 2 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 6 18.13V22" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  external: (
    <>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v5h-14v-14h5" />
    </>
  ),
  send: (
    <>
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
}

export default function Icon({ name }) {
  return <svg {...baseProps}>{icons[name]}</svg>
}
