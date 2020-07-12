import React from "react";

// react-bootstrap
import { Row, Col, Card } from "react-bootstrap";

import SEO from "../components/SEO";
import Page from "../components/Page";
import Layout from "../components/Layout";

import useSiteMetadata from "../hooks/use-site-metadata";

const Contact = ({ location }) => {
  const siteMetadata = useSiteMetadata();
  return (
    <Layout location={location}>
      <SEO seoTitle="Contact" />
      <Page title="Contact">
        <Row>
          <Col lg={12}>
            <Card className="border-0">
              <Card.Body>
                <p className="lead">
                  If you need help with anything, please email{" "}
                  <span>{siteMetadata.email}</span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Page>
    </Layout>
  );
};
export default Contact;
