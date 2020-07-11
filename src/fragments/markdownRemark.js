/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

/**
 * Fragments are available globally, somehow, gatsby is reading these files without being imported
 */
export const markdownRemarkFragment = graphql`
  fragment _MarkdownRemark on MarkdownRemark {
    # Specify the fields from the post we need.
    id
    fields {
      slug
    }
    excerpt(pruneLength: 250)
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      category
      url
      path
      image
    }
    # do not specify the image here, as custom images have different size specifications
  }
`;
