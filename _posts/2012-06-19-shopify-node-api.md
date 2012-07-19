---
layout: post
title: "shopnode: A Shopify Node Api"
category: blog
name: blog
author: Ryan Connelly
tags: [shopify, shopnode, github, node, nodejs]
---

![Alt Shopify Logo](/img/blogs/shopify.png)

Over the past week, I've been working on a node api for [Shopify](http://www.shopify.com). It's for a side project that
we are working on. Apparently, there are no solid node libraries out there for talking with shopify.
The only one I found was very limited and didn't support all of the api calls. So I decided to write my own module.

The goal is to get it production ready then get it registered with NPM.

Check it out:
<http://www.quad.io/shopnode>

Github:
<http://www.github.com/rconnelly/shopnode>

It's still in a very rough state, but I'm releasing it to the public. Before we submit it to be included in NPM, I'll need to test it a bit more. I'm also looking at writing a simple shopify public app which would use this library. Right now, we are only going to use this library for a private app.

It's been very helpful to develop a node application and I've gained a lot of experience on this little project.

______

## What we used

- [Node JS](http://www.nodejs.org) - Dev Platform
- [Travis-ci](http://www.travis-ci.org) - Continous Integration System
- [Vows](http://www.vowsjs.org) - BDD test framework
- [Github](http://www.github.com) - Source control



