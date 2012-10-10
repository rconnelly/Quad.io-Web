---
layout: post
title: "Source Control Branch Management with Git"
category: blog
name: blog
tags: [source control, git, branch management]
author: Ryan Connelly
---

We try to keep a structured approach to branch management. We love GIT because it provides a straight forward approach
to branching and merging. For those that have yet to embrace the power of [DVCS](http://en.wikipedia.org/wiki/Distributed_revision_control),
I hightly recommend you at least explore it.

[Read about DVCS here](http://en.wikipedia.org/wiki/Distributed_revision_control).

Below is a graph that illustrates how we manage our builds. The goal is to keep our production code stable, without
slowing our dev cycle down. After some trial and error, we came up with this approach.

***

![Alt Branch Mgt Illustration](/img/blogs/git_branch_mgt.png)

***

## Production vs Development ##

There are two types of branches: Production and Development (QA).  Active development is always done on Development branches. Code can only be merged into production branches from Development (never feature branches). Code can be committed directly to Patch branches, but great care should be taken. Only critical, pre-approved bug fixes should go into a patch branch.

***

### Permanent Branches ###

There are two main, permanent branches that are always available: Master and Development. All continuous integration builds and QA builds come from Development branches Feature and Development.


#### Master Branch ####

No active development is ever done on master. Master is always contains a production stable version of the application. Developers always merge from Development to Master

*Naming Convention:* master


#### Development Branch ####

The development branch is a some-what-stable version of the software. QA builds from this branch. New features should never be put directly into this branch but instead a Feature branch should first be created to keep the Development branch clean.

*Naming Convention:* development

***

### Temporary Branches ###

Patch and Features branches are typically have short lifespans and are there for the purpose of keeping the master and development branches stable.


#### Patch Branches ####

From time to time, a critical issue will arise in a production build. When this occurs, a temporary Patch Branch is created. Any critical bug fixes can be worked on in this branch. Once a tested stable version is ready, it can be merged back into master. At that point, the code will also be merged back into the development branch.

*Naming Convention:* patch-v{major}.{minor}.{patch}
*Example:* patch-v2.3.1


#### Feature Branches ####

When new features are required, a new branch should always be created. While this branch may only be on a developer's local repository, the branch can also be pushed to remote if multiple developers need to work on the same feature.

*Naming Convention:* feature-{description}
*Example:* feature-inventory-tracking

