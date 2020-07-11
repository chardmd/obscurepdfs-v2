import React from "react";
import Img from "gatsby-image";

import Userbar from "./Userbar";
import Description from "./Description";
import Share from "../Share";

import styles from "./Post-Detail.module.scss";

const PostDetail = ({ collectionDetail }) => {
  const {
    id,
    frontmatter: { bigImage, category, url, title },
    fields: { collectionSlug },
  } = collectionDetail;
  const { big } = bigImage.childImageSharp;
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.postDetail}>
      <div className={styles.mainWrapper}>
        <Userbar avatar={title} title={title} />
        <Share
          slug={collectionSlug}
          title={title}
          options={{ size: 28, round: true }}
        />
        <div className={styles.detailWrapper}>
          <Description authorName={url} category={category} description={url} />
        </div>
      </div>
      <div to={`/${id}/`} className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Img fluid={{ ...big }} className={styles.imageItem} />
          <div className={styles.pad} />
        </div>
      </div>
      <div className={styles.detail}>
        <Description />
      </div>
    </div>
  );
};

export default PostDetail;
