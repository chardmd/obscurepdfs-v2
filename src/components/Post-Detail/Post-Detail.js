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
        <Userbar title={title} />
        <Share
          slug={collectionSlug}
          title={title}
          options={{ size: 28, round: true }}
        />
        <div className={styles.detailWrapper}>
          <Description category={category} url={url} />
        </div>
      </div>
      <div to={`/${id}/`} className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Img fluid={{ ...big }} className={styles.imageItem} />
          <div className={styles.pad} />
        </div>
      </div>
      <div className={styles.detail}>
        <Description category={category} url={url} />
      </div>
    </div>
  );
};

export default PostDetail;
