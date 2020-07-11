const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
     type ArtistJson implements Node {
      collection: [CollectionJson] @link(by: "authorId", from: "authorId") # mapped artist to collection
    }
  `;
  createTypes(typeDefs);
};

module.exports = createSchemaCustomization;
