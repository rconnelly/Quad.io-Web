Quad IO Website
===============

The quad io web site uses several tools to generate the web site.

* It uses Jekyll to build a deploy staticly generated html files from templates.
* It uses boilerplate html5 to generate minified html, css, and javascript.
* It uses 1140 css grid to create a fluid design.

Running Locally
---------------

    jekyll --server

    browse to http://localhost:4000

When making changes int the source code, you'll need to do a commit and push.

    git add . --all
    git commit -m "Changes message"
    git push origin master

This will push to the Quad.io-Web and not actually "deploy" the site. That's actually a different repo.


Build and Deploy Instructions
-----------------------------

The website is actually two repositories. One is the source (Quad.io-Web). The other is the deployed website
(rconnelly.github.com).

Because we host on Github pages, we need this separate "deployed" website repo. We have http://www.quad.io pointed to
rconnelly.github.com.

Steps to Deploy
---------------

    rm -rf publish

    cd ./build/
    ant build
    cd ../

    cd publish
    git add . --all
    git commit -m "<message here>"
    git push origin master

This last step will deploy the code to the server. Github will then make this code available to the public.

For convenience, these  steps are all done with the following command:

    ant deploy