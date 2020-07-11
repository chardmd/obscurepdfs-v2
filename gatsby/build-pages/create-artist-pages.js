const path = require("path");
const { slash } = require("gatsby-core-utils");

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allArtistJson {
          edges {
            node {
              id
              authorName
              fields {
                artistSlug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const artistTemplate = path.resolve("src/templates/artist-template.js");

  result.data.allArtistJson.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.fields.artistSlug}`, // was created in on-create-node
      component: slash(artistTemplate),
      context: {
        authorName: edge.node.authorName,
      },
    });
  });
};
