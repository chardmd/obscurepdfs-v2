import React from "react";

import SEO from "../components/SEO";
import Page from "../components/Page";
import Layout from "../components/Layout";

const About = ({ location }) => (
  <Layout location={location}>
    <SEO seoTitle="About" />
    <Page title="About">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </Page>
  </Layout>
);

export default About;
