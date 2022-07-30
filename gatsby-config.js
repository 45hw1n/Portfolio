module.exports = {
  siteMetadata: {
    title: `ashwin-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Portfolio",
        fieldName: "Portfolio",
        url: "https://api-ap-south-1.hygraph.com/v2/cl66slrhcbpww01ukezcob2pp/master",
      },
    },
  ],
};
