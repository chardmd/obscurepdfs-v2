/* eslint-disable operator-linebreak */
import chunk from "lodash/chunk";
import isNil from "lodash/isNil";
import React from "react";

import PostItem from "../PostItem";

import styles from "./Gallery.module.scss";

const POST_TO_SHOW = 12;

// This would normally be in a Redux store or some other global data store.
if (typeof window !== "undefined") {
  window.postsToShow = POST_TO_SHOW;
}

class Gallery extends React.Component {
  constructor() {
    super();
    let postsToShow = POST_TO_SHOW;
    if (typeof window !== "undefined") {
      postsToShow = window.postsToShow;
    }

    this.state = {
      showingMore: postsToShow > POST_TO_SHOW,
      postsToShow,
    };
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight);
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState({ postsToShow: this.state.postsToShow + POST_TO_SHOW });
    }
    this.ticking = false;
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => this.update());
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.postsToShow = this.state.postsToShow;
  }

  render() {
    const { collection } = this.props;

    // check if collection is null
    if (isNil(collection)) {
      return [];
    }

    return (
      <div className={styles.gallery}>
        {/* posts */}
        {chunk(collection.slice(0, this.state.postsToShow), 3).map(
          (chunk, i) => (
            <div key={`chunk-${i}`} className={styles.wrapper}>
              {chunk.map((node) => (
                <PostItem
                  key={node.id}
                  collection={node}
                  onClick={(post) => this.setState({ activePost: post })}
                />
              ))}
            </div>
          )
        )}
        {!this.state.showingMore && collection.length >= POST_TO_SHOW && (
          <a
            className={styles.loadMore}
            onClick={() => {
              this.setState({
                postsToShow: this.state.postsToShow + POST_TO_SHOW,
                showingMore: true,
              });
            }}
          >
            Load More
          </a>
        )}
      </div>
    );
  }
}

export default Gallery;
