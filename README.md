[![Code Climate](https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter/badges/gpa.svg)](https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter)
[![Issue Count](https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter/badges/issue_count.svg)](https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/990fb54ea8094f2aa0ed77f14e859820)](https://www.codacy.com/app/Vagr9K/gatsby-advanced-starter?utm_source=github.com&utm_medium=referral&utm_content=Vagr9K/gatsby-advanced-starter&utm_campaign=Badge_Grade)

<div align="center">
    <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
</div>

# Gatsby Advanced Starter

A blog starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/).

**NOTE**: This branch contains Gatsby v2 compatible version of the starter. To get the Gatsby v1 compatible version, use the [`v1`](https://github.com/Vagr9K/gatsby-advanced-starter/tree/v1) branch.

## Why?

This project aims to provide a minimal base for building advanced GatsbyJS powered blogs.

It doesn't define any UI limitations in any way, and only gives you the basic components for SEO/Social Media/etc.

You are free to use any UI framework/styling options available to you.

NOTE: This project is a stripped down version of [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter), but will evolve separately.

## How can I use this?

If you are a newcomer to Gatsby who's interested in the implementations of most needed features, this is a great place to start.

If you are interested in a foundation for building ultra-fast websites, you can use this project as a "minimal" starter.

[Demo website.](https://vagr9k.github.io/gatsby-advanced-starter/)

## Features

- Gatsby v2 support
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Separate components for everything
- High configurability:
  - User information
  - User social profiles
  - Copyright information
  - More!
- Author segment
  - Name
  - Location
  - Description
  - Links
  - Follow Me button
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- Disqus support
  - Notifications about new disqus comments
- Google Analytics support
- NPM scripts for GitHub Pages deployment
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - Google+ share button
  - LinkedIn share button
  - Telegram share button
- SEO
  - Sitemap generation
  - robots.txt
  - General description tags
  - Schema.org JSONLD (Google Rich Snippets)
  - OpenGraph Tags (Facebook/Google+/Pinterest)
  - Twitter Tags (Twitter Cards)
- RSS feeds
- Loading progress for slow networks
- Offline support
- Web App Manifest support
- `/static/` and content folders are available to use with `gatsby-image` out of the box
- Netlify deploy configuration
- Development tools
  - ESLint for linting
  - Prettier for code style
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - CodeClimate configuration file and badge

NOTE: Feel free to check out [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter) if you are interested in a more opinionated starter with Material Design in mind.

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-advanced-starter
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/Vagr9K/gatsby-advanced-starter YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration

Edit the export object in `data/SiteConfig`:

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: "/gatsby-advanced-starter" // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
};
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
