/* eslint-disable operator-linebreak */
import * as PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import PostDetail from "../components/Post-Detail";
import SEO from "../components/SEO";

import Layout from "../components/Layout"; // layout should be the last one, to prevent the 'conflicting order' warning during 'yarn run build'

const propTypes = {
  data: PropTypes.shape({
    collectionDetail: PropTypes.object.isRequired,
  }),
};

const CollectionTemplate = ({ data, location }) => {
  const { collectionDetail } = data;

  const { frontmatter } = collectionDetail;
  return (
    <Layout location={location}>
      <SEO
        seoTitle={frontmatter.title}
        seoDescription={frontmatter.bigImage}
        seoImage={frontmatter.url}
        seoSlug={frontmatter.path}
      />
      <PostDetail collectionDetail={collectionDetail} />
    </Layout>
  );
};

CollectionTemplate.propTypes = propTypes;

export default CollectionTemplate;

// The post template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query($id: String!) {
    # Select the post which equals this id.
    collectionDetail: markdownRemark(id: { eq: $id }) {
      ..._MarkdownRemark
      frontmatter {
        bigImage: image {
          childImageSharp {
            # Here we query for *multiple* image thumbnails to be
            # created. So with no effort on our part, 100s of
            # thumbnails are created. This makes iterating on
            # designs effortless as we change the args
            # for the query and we get new thumbnails.
            big: fluid(maxWidth: 640, maxHeight: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
