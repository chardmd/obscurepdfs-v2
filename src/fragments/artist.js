/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

/**
 * Fragments are available globally, somehow, gatsby is reading these files without being imported
 */
export const artistFragment = graphql`
  fragment _Artist on ArtistJson {
    # Specify the common fields
    id
    authorId
    authorName
    bio
    birthdate
    fields {
      artistSlug
    }
    collection {
      id
      category
      description
      date
      title
      fields {
        collectionSlug
      }
    }
    # do not specify the image here, as custom images have different size specifications
  }
`;
