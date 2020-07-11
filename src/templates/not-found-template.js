import React from "react";
import Page from "../components/Page";
import Layout from "../components/Layout"; // layout should be the last one, to prevent the 'conflicting order' warning during 'yarn run build'

const NotFoundTemplate = ({ location }) => (
  <Layout location={location}>
    <Page title="Not Found">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Page>
  </Layout>
);

export default NotFoundTemplate;
