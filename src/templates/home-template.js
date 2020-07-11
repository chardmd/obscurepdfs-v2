import React from "react";
import { graphql } from "gatsby";

// react-strap
import { Container } from "react-bootstrap";

import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const Index = ({ location, data }) => {
  const { allMarkdownRemark } = data;
  const collections = allMarkdownRemark.edges.map((e) => e.node);
  return (
    <Layout location={location}>
      <SEO />
      <Banner />
      <Container>
        <h4 className="pb-4 mb-4 mt-5 font-italic border-bottom">
          From the Collections
        </h4>
        <Gallery collection={collections} />
      </Container>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          ..._MarkdownRemark
          frontmatter {
            bigImage: image {
              childImageSharp {
                # Here we query for *multiple* image thumbnails to be
                # created. So with no effort on our part, 100s of
                # thumbnails are created. This makes iterating on
                # designs effortless as we change the args
                # for the query and we get new thumbnails.
                big: fluid(maxWidth: 640) {
                  src
                  srcSet
                }
              }
            }
            smallImage: image {
              childImageSharp {
                small: fluid(maxWidth: 292, maxHeight: 292) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
