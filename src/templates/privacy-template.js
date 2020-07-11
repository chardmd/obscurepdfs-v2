import React from "react";
import { Link } from "gatsby";

// react-bootstrap
import { Row, Col, Card } from "react-bootstrap";

import SEO from "../components/SEO";
import Page from "../components/Page";
import Layout from "../components/Layout";

import useSiteMetadata from "../hooks/use-site-metadata";

const Privacy = ({ location }) => {
  const siteMetadata = useSiteMetadata();
  return (
    <Layout location={location}>
      <SEO seoTitle="Privacy" />
      <Page title="Privacy">
        <Row>
          <Col lg={12}>
            <Card className="border-0">
              <Card.Body>
                <p>
                  <h4 className="text-dark">
                    Your privacy is important to us. It is {siteMetadata.title}'
                    policy to respect your privacy regarding any information we
                    may collect from you across our website,&nbsp;
                    <Link to="/">{siteMetadata.siteUrl}&nbsp;</Link>
                    and other sites we own and operate.
                  </h4>
                </p>
                <br />
                <p>
                  We only ask for personal information when we truly need it to
                  provide a service to you. We collect it by fair and lawful
                  means, with your knowledge and consent. We also let you know
                  why we’re collecting it and how it will be used.
                </p>
                <p>
                  We only retain collected information for as long as necessary
                  to provide you with your requested service. What data we
                  store, we’ll protect within commercially acceptable means to
                  prevent loss and theft, as well as unauthorised access,
                  disclosure, copying, use or modification.
                </p>
                <p>
                  We don’t share any personally identifying information publicly
                  or with third-parties, except when required to by law.
                </p>
                <p>
                  Our website may link to external sites that are not operated
                  by us. Please be aware that we have no control over the
                  content and practices of these sites, and cannot accept
                  responsibility or liability for their respective privacy
                  policies.
                </p>
                <p>
                  You are free to refuse our request for your personal
                  information, with the understanding that we may be unable to
                  provide you with some of your desired services.
                </p>
                <p>
                  Your continued use of our website will be regarded as
                  acceptance of our practices around privacy and personal
                  information. If you have any questions about how we handle
                  user data and personal information, feel free to contact us.
                </p>
                <p>This policy is effective as of {siteMetadata.policyDate}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Page>
    </Layout>
  );
};
export default Privacy;
