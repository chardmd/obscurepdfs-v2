/* eslint-disable operator-linebreak */
import chunk from "lodash/chunk";
import isNil from "lodash/isNil";
import React from "react";

// react-bootstrap
import { Table } from "react-bootstrap";

import PostItem from "../PostItem";
import shuffle from "../../utils/shuffle";

const POST_TO_SHOW = 12;

// This would normally be in a Redux store or some other global data store.
if (typeof window !== "undefined") {
  window.postsToShow = POST_TO_SHOW;
}

class Gallery extends React.Component {
  constructor(props) {
    super();
    let postsToShow = POST_TO_SHOW;
    if (typeof window !== "undefined") {
      postsToShow = window.postsToShow;
    }

    const originalCollection = !isNil(props.collection) ? props.collection : [];
    this.state = {
      shuffledCollection: shuffle(originalCollection),
      showingMore: true,
      postsToShow,
    };
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight);
    if (
      this.state.showingMore &&
      distanceToBottom < 100 &&
      // prevent any render, once all the post has been shown
      this.state.postsToShow <= this.state.shuffledCollection.length
    ) {
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
    const { shuffledCollection } = this.state;

    // check if collection is null
    if (isNil(shuffledCollection)) {
      return [];
    }

    return (
      <Table borderless size="sm" responsive>
        <tbody>
          {/* posts */}
          {chunk(shuffledCollection.slice(0, this.state.postsToShow), 3).map(
            (chunk, i) => (
              <tr key={i}>
                {chunk[0] && (
                  <td>
                    <PostItem
                      key={chunk[0].id}
                      collection={chunk[0]}
                      onClick={(post) => this.setState({ activePost: post })}
                    />
                  </td>
                )}
                {chunk[1] && (
                  <td>
                    <PostItem
                      key={chunk[1].id}
                      collection={chunk[1]}
                      onClick={(post) => this.setState({ activePost: post })}
                    />
                  </td>
                )}
                {chunk[2] && (
                  <td>
                    <PostItem
                      key={chunk[2].id}
                      collection={chunk[2]}
                      onClick={(post) => this.setState({ activePost: post })}
                    />
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </Table>
    );
  }
}

export default Gallery;
