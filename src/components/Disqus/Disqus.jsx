import React, { Component } from "react";
import { DiscussionEmbed, CommentCount } from 'disqus-react';
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }
  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = urljoin(
      config.siteUrl,
      config.pathPrefix,
      postNode.fields.slug
    );
    const disqusConfig = {
      url: url,
      identifier: post.title,
      title: post.title,
    };

    return (
      <DiscussionEmbed shortname={config.disqusShortname} config={disqusConfig} />
    );
  }
}

export default Disqus;
