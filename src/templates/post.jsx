import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import urljoin from "url-join";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Layout from "../layout";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO url={slug} postNode={postNode} postSEO />
          <NavBar style={{background: config.secondary.dark}} location={{pathname: urljoin(config.pathPrefix, '/blog/')}} />
          <div style={{ textAlign: 'left', backgroundImage: `linear-gradient(${config.secondary.dark}, ${config.primary.light} 40%, ${config.primary.light} 60%, ${config.secondary.dark})`, padding: '1em 0' }}>
            <Card style={{width: '90%', margin: '10px auto', maxWidth: '800px'}}>
              <CardContent>
                <h1>{post.title}</h1>
                <div style={{marginLeft: '5px'}} dangerouslySetInnerHTML={{ __html: postNode.html }} />
                <PostTags tags={post.tags} />
                <div className="post-meta">
                  <SocialLinks postPath={slug} postNode={postNode} />
                </div>
                <Disqus postNode={postNode} />
              </CardContent>
            </Card>
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        coverURL
        coverFile {
          publicURL
        }
        date
        author
        publisher
        dateModified
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
