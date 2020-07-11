/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

/**
 * Fragments are available globally, somehow, gatsby is reading these files without being imported
 */
export const collectionFragment = graphql`
  fragment _Collection on CollectionJson {
    # Specify the fields from the post we need.
    id
    category
    description
    date
    title
    fields {
      collectionSlug
    }
    # do not specify the image here, as custom images have different size specifications
  }
`;
