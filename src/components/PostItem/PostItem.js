import React, { useState } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

// react-bootstrap
import { Card } from "react-bootstrap";

import styles from "./PostItem.module.scss";

let touched = false;

const PostItem = ({ collection }) => {
  const [hovering, setHovering] = useState(false);
  const {
    frontmatter: { title, category, smallImage },
    fields,
  } = collection;
  const { small } = smallImage.childImageSharp;

  return (
    <Link
      className={styles.postItem}
      to={fields.slug}
      onTouchStart={() => {
        touched = true;
      }}
      onMouseEnter={() => {
        if (!touched) {
          setHovering(true);
        }
      }}
      onMouseLeave={() => {
        if (!touched) {
          setHovering(false);
        }
      }}
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
        <cite>{category}</cite>
      </div>
    </Link>
  );
};

export default PostItem;
