const path = require("path");
const { slash } = require("gatsby-core-utils");

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // The “graphql” function allows us to run arbitrary
  // queries against this ImageGallery's graphql schema. Think of
  // it like ImageGallery has a built-in database constructed
  // from static data that you can run queries against.
  //
  // Post is a data node type derived from data/posts.json
  // which is created when scraping Instagram. “allPostsJson”
  // is a "connection" (a GraphQL convention for accessing
  // a list of nodes) gives us an easy way to query all
  // Post nodes.
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
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

  // Create image post pages.
  const collectionTemplate = path.resolve(
    "src/templates/collection-template.js"
  );
  // We want to create a detailed page for each
  // Instagram post. Since the scraped Instagram data
  // already includes an ID field, we just use that for
  // each page's path.
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `${edge.node.fields.slug}`, // was created in on-create-node
      component: slash(collectionTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
};
