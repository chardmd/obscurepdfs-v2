const slug = require("slug");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const kebabCase = require("lodash/kebabCase");

// we dynamically create slugs on build time
const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // This takes every node returned by your gatsby-source plugins
  // and converts any absolute paths in markdown frontmatter data
  // into relative paths if a matching file is found.
  fmImagesToRelative(node);

  // create artist slug
  if (node.internal.type === "ArtistJson") {
    const ARTISTS_PATH = "/artists";
    const artistSlug = `${ARTISTS_PATH}/${kebabCase(slug(node.authorName))}/`;
    createNodeField({ node, name: "artistSlug", value: artistSlug });
  }

  // create collection slug
  if (node.internal.type === "CollectionJson") {
    const COLLECTIONS_PATH = "/c";
    const collectionSlug = `${COLLECTIONS_PATH}/${kebabCase(
      slug(node.title)
    )}/`;
    createNodeField({ node, name: "collectionSlug", value: collectionSlug });
  }

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

module.exports = onCreateNode;
