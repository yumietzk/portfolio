module.exports = {
  siteMetadata: {
    siteUrl: 'https://yumietsuzuki.netlify.app/',
    title: 'Yumie.T | Front-end Developer',
    social: {
      email: 'yumie.tsuzuki@gmail.com',
      github: 'yumietzk',
      linkedin: 'yumie-tsuzuki',
      facebook: 'tsuzuki.yumie',
      instagram: 'ymtzk',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logoicon.png',
      },
    },
  ],
};
