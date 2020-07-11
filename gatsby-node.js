"use strict";

// see 'gatsby' folder for dynamic creation of pages and other customisation
exports.createPages = require("./gatsby/create-pages");

exports.createSchemaCustomization = require("./gatsby/create-schema-customization");

exports.onCreateNode = require("./gatsby/on-create-node");
