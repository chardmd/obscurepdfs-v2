const path = require("path");
const createPostsPages = require("./build-pages/create-post-pages");
const createArtistPages = require("./build-pages/create-artist-pages");

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Home
  createPage({
    path: "/",
    component: path.resolve("./src/templates/home-template.js"),
  });

  // 404
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.js"),
  });

  // About
  createPage({
    path: "/about",
    component: path.resolve("./src/templates/about-template.js"),
  });

  // Privacy
  createPage({
    path: "/privacy",
    component: path.resolve("./src/templates/privacy-template.js"),
  });

  // Terms
  createPage({
    path: "/terms",
    component: path.resolve("./src/templates/terms-template.js"),
  });

  // Terms
  createPage({
    path: "/contact",
    component: path.resolve("./src/templates/contact-template.js"),
  });

  // create post pages
  await createPostsPages({ graphql, actions, reporter });

  // create artist pages
  await createArtistPages({ graphql, actions, reporter });
};

module.exports = createPages;
