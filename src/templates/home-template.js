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
        }
      }
    }
  }
`;
