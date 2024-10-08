module.exports = {
  siteMetadata: {
    title: `Arpan Gupta | Front End Develoepr | UI/UX | Rajagiri College`,
    titleTemplate: "%s · Arpan Gupta - Developer",
    description: `Welcome to Arpan Gupta's Web Resume. Arpan Gupta is a final year undergrad at Rajagiri School of Engineering and Technology, Kakkanad, India. Arpan Gupta is a Front End Developer and recently into Machine Learning and blockchain. mojojojo20, Arpan Gupta, Rajagiri School of Engineering and Technology, RSET, Web Developers in kochi, Kochi, Kerala, India, UI/UX, travelngo, Rajagiri College, Front End Developers, Designers, Abhiyanthriki, Deadlock, Navrachana International School Vadodara, NISV, Machine Learning, Blockchain, Hyperledger. iTRAXX, Rajagiri, IT Department, APJ KTU`,
    author: `Arpan Gupta, mojojojo20`,
    url: "https://www.karthikmenon.com", 
    siteUrl: `https://www.karthikmenon.com`,
    image: "/images/og-main.jpeg",  
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,   
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {        
        trackingId: "UA-144718643-1",
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Arpan Gupta",
        short_name: "Arpan Gupta",
        start_url: "https://karthikmenon.com/",
        background_color: "#1f2b3b",
        theme_color: "#1f2b3b",
        display: "standalone",
        icon: "src/images/icon.png", 
        crossOrigin: `use-credentials`,
      },
    },
    
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    
  ],
}
