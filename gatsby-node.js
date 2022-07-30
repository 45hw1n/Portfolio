// const path = require(`path`);

// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`);
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const toursTemplate = path.resolve(`src/templates/tours.js`);
//   const result = await graphql(`
//     query tourTemplate {
//       MuruganTrvels {
//         tours {
//           link
//           backgroundMusic {
//             url
//           }
//           image {
//             url
//           }
//           noOfDay
//           place
//           price
//           date
//           mainImage {
//             url
//           }
//         }
//       }
//     }
//   `);
//   result.data.MuruganTrvels.tours.forEach((tours) => {
//     createPage({
//       path: `${tours.link}`,
//       component: toursTemplate,
//       context: {
//         tours: tours,
//       },
//     });
//   });
// };
