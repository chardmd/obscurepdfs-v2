import { useStaticQuery, graphql } from "gatsby";

const useFeaturedArtists = () => {
  const data = useStaticQuery(graphql`
    query FeaturedArtistQuery {
      allArtistJson(filter: { featured: { eq: true } }) {
        nodes {
          ..._Artist
          smallImage: image {
            childImageSharp {
              small: fluid(maxWidth: 180, maxHeight: 180) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const { allArtistJson } = data;
  const featuredArtists = allArtistJson.nodes;
  return featuredArtists;
};

export default useFeaturedArtists;
