import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  const pantoneColorOfTheYear = '#ff6f61'
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    body: {
      color: '#3d3e44',
    },
    a: {
      color: pantoneColorOfTheYear,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
