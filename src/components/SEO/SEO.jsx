import React, { Component } from "react";
import { Helmet } from "react-helmet";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import picture from "../../../static/fadee.jpg";

class SEO extends Component {
  render() {
    const { url, postSEO, pageSEO } = this.props;
    let { title, description, image } = pageSEO || {};
    let postURL;
    let author;
    let authorTwitter;
    let datePublished;
    let dateModified;
    if (postSEO) {
      const postMeta = postSEO.frontmatter;
      ({ title, author, authorTwitter, dateModified } = postMeta);
      description = postMeta.description
        ? postMeta.description
        : postSEO.excerpt;
      image = postMeta.coverURL || postMeta.coverFile.publicURL;
      datePublished = postMeta.date;
      postURL = urljoin(config.siteUrl, config.pathPrefix, url);
    }
    if (image) image = urljoin(config.siteUrl, config.pathPrefix, image);
    else image = picture;
    const blogURL = urljoin(config.siteUrl, config.pathPrefix);
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: config.siteTitle,
      },
    ];
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image: {
                  "@type": "ImageObject",
                  url: image,
                },
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: postURL,
          name: title,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          author: {
            "@type": "Person",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            url: blogURL,
            name: author,
            logo: urljoin(config.siteUrl, config.pathPrefix, config.siteLogo),
          },
          datePublished,
          dateModified,
          description,
        }
      );
    }

    return (
      <Helmet title={title}>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* /!* Schema.org tags *!/ */}
        {/* <script type="application/ld+json"> */}
        {/* {JSON.stringify(schemaOrgJSONLD)} */}
        {/* </script> */}

        {/* /!* OpenGraph tags *!/ */}
        <meta property="og:url" content={postSEO ? postURL : url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {postSEO ? <meta property="og:type" content="article" /> : null}

        {/* /!* Twitter Card tags *!/ */}
        <meta name="twitter:card" content="summary_large_image" />
        {authorTwitter ? (
          <meta name="twitter:creator" content={authorTwitter} />
        ) : null}
        <meta name="twitter:site" content="@fadeenk" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
}

export default SEO;
