const slug = require("slug");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const kebabCase = require("lodash/kebabCase");

// we dynamically create slugs on build time
const onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // This takes every node returned by your gatsby-source plugins
  // and converts any absolute paths in markdown frontmatter data
  // into relative paths if a matching file is found.
  fmImagesToRelative(node);

  if (node.internal.type === "MarkdownRemark") {
    const value = `/${kebabCase(slug(node.frontmatter.title))}/`;
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

module.exports = onCreateNode;
