import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  RedditIcon,
} from "react-share";

import useSiteMetadata from "../../hooks/use-site-metadata";

import styles from "./Share.module.scss";

const Share = ({ slug, title, tags, options = {} }) => {
  const siteMetadata = useSiteMetadata();
  const url = `${siteMetadata.siteUrl}${slug}`;
  return (
    <div className={styles.social}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={options.size} round={options.round} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} hashtags={tags}>
        <TwitterIcon size={options.size} round={options.round} />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={options.size} round={options.round} />
      </LinkedinShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon
          size={options.size}
          round={options.round}
          bgStyle={{ fill: "#FF4500" }}
        />
      </RedditShareButton>
    </div>
  );
};

export default Share;
