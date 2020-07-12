import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

// react-bootstrap
import { Card } from "react-bootstrap";

import styles from "./PostItem.module.scss";

const PostItem = ({ collection }) => {
  const {
    frontmatter: { title, smallImage },
    fields,
  } = collection;

  const { small } = smallImage.childImageSharp;

  return (
    <Link
      className={styles.postItem}
      to={fields.slug}
      // open modal
      state={{
        modal: true,
      }}
    >
      <Card className="shadow-sm">
        <Card.Img as="div">
          <Img fluid={{ ...small }} />
        </Card.Img>
      </Card>
      {/* overlay */}
      <div className={styles.textWrapper}>
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default PostItem;
