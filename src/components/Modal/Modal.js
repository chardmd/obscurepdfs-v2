import React from "react";
import CaretRight from "react-icons/lib/fa/caret-right";
import CaretLeft from "react-icons/lib/fa/caret-left";
import Close from "react-icons/lib/md/close";
import findIndex from "lodash/findIndex";
import mousetrap from "mousetrap";
import * as PropTypes from "prop-types";
import { navigate, StaticQuery, graphql } from "gatsby";

import styles from "./Modal.module.scss";

let posts;

class CustomModal extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  componentDidMount() {
    mousetrap.bind("left", () => this.previous());
    mousetrap.bind("right", () => this.next());
    mousetrap.bind("space", () => this.next());
  }

  componentWillUnmount() {
    mousetrap.unbind("left");
    mousetrap.unbind("right");
    mousetrap.unbind("space");
  }

  findCurrentIndex() {
    const index = findIndex(posts, (post) => {
      const slugPath = this.props.location.pathname.split("/")[1];
      return post.slug.includes(slugPath);
    });
    return index;
  }

  next(e) {
    if (e) {
      e.stopPropagation();
    }
    const currentIndex = this.findCurrentIndex();
    if (currentIndex || currentIndex === 0) {
      let nextPost;
      // Wrap around if at end.
      if (currentIndex + 1 === posts.length) {
        [nextPost] = posts;
      } else {
        nextPost = posts[currentIndex + 1];
      }
      navigate(`${nextPost.slug}`, { state: { modal: true } });
    }
  }

  previous(e) {
    if (e) {
      e.stopPropagation();
    }
    const currentIndex = this.findCurrentIndex();
    if (currentIndex || currentIndex === 0) {
      let previousPost;
      // Wrap around if at start.
      if (currentIndex === 0) {
        [previousPost] = posts.slice(-1);
      } else {
        previousPost = posts[currentIndex - 1];
      }
      navigate(`${previousPost.slug}`, { state: { modal: true } });
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          if (!posts) {
            posts = data.allMarkdownRemark.edges.map((e) => e.node.fields);
          }
          return (
            <div
              onClick={() =>
                navigate(this.props.closeTo, { state: { noScroll: true } })
              }
              className={styles.ModuleModal}
            >
              <div className={styles.wrapperBody}>
                <CaretLeft
                  className={styles.caretLeft}
                  onClick={(e) => this.previous(e)}
                />
                {this.props.children}
                <CaretRight
                  className={styles.caretRight}
                  onClick={(e) => this.next(e)}
                />
              </div>
              <Close
                onClick={() =>
                  navigate(this.props.closeTo, { state: { noScroll: true } })
                }
                className={styles.closeButton}
                state={{
                  noScroll: true,
                }}
              />
            </div>
          );
        }}
      />
    );
  }
}

export default CustomModal;
