import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

// react-bootstrap
import { Container } from "react-bootstrap";

import Gallery from "../components/Gallery";
import SEO from "../components/SEO";
import Layout from "../components/Layout"; // layout should be the last one, to prevent the 'conflicting order' warning during 'yarn run build'

const ArtistTemplate = ({ data, location }) => {
  const { artist } = data;
  const { smallImage, authorName, bio, birthdate } = artist;
  const { small } = smallImage.childImageSharp;
  const { collection } = artist;
  return (
    <Layout location={location}>
      <SEO
        seoTitle={artist.authorName}
        seoDescription={artist.bio}
        seoImage={artist.image}
        seoSlug={artist.fields.artistSlug}
      />
      <Container>
        <div className="py-5 text-center">
          <Img fixed={{ ...small }} className="rounded-circle" />
          <h2>{authorName}</h2>
          <p>{birthdate}</p>
          <p className="text-muted">{bio}</p>
        </div>
        <Gallery collection={collection} />
      </Container>
    </Layout>
  );
};

export default ArtistTemplate;

export const pageQuery = graphql`
  query($authorName: String!) {
    # select the artist
    artist: artistJson(authorName: { eq: $authorName }) {
      ..._Artist
      smallImage: image {
        childImageSharp {
          small: fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      collection: collection {
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
`;
