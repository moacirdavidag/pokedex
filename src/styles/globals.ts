type Size = {
    mobile: string
    minsm: string
    maxsm: string
    mintablets: string
    maxtablets: string
    minlarge: string
    maxlarge: string
    mindesktop: string
    maxdesktop: string
}

const size: Size = {
    mobile: '480px', // for small screen mobile
    minsm: '481px',
    maxsm: '768px', // for mobile screen,
    mintablets: '768px',
    maxtablets: '991px',
    minlarge: '992px',
    maxlarge: '1199px',
    mindesktop: '1200px',
    maxdesktop: '1919px'
}

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    small: `(${size.maxsm} <= width <= ${size.maxsm})`,
    tablets: `(${size.mintablets} <= width <= ${size.maxtablets})`,
    large: `(${size.minlarge} <= width <= ${size.maxlarge})`,
    desktop: `${size.mindesktop} <= width <= ${size.maxdesktop}`,
}
