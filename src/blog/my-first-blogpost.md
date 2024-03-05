---
title: My First Blogpost!
date: 2023-09-15
tags: ["blog"]
layout: blogpost.njk
image: https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f4572a25cd8b4dd8a4157a40b06fea71/static/light/4.0
description: My first blogpost talking about why I made a blog, what it means for me, and the future of my work!
---

# Hey!

Welcome to my first blog post!

I hope to use this to provide extended content and context to my released YouTube videos on my main channel, since I know I have more I want to talk about. I know that's not everyone's cup o' tea, so the blog posts are born!

This blog post will roll out with the new backend revamp of my website, allowing, well, a blog like this to exist! I use a [Static Website Generator](https://www.cloudflare.com/learning/performance/static-site-generator/) called [Eleventy](https://www.11ty.dev/) to handle the process of bundling special text-like files into dedicated webpages, defined by a bunch of rules and layouts to carry out the task! No more typing raw HTML code to edit products on my site, or blog posts! These files then get put into a directory which the generator reads, then transforms into its own webpage. 

{% img "showing a markdown file in a folder", "", "400" %}
/assets/images/blog/my-first-blogpost/md-file.png
{% endimg %}

This blog post for example, uses a text file format called [Markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) (the same as discord text!). I can generate pages so easily this way, and edit them just the same!

{%img "showing example of Markdown text from this page"%}
/assets/images/blog/my-first-blogpost/markdown.png
{%endimg%}

Whenever I save, I get a live update of my changes in real-time, It's super, super cool!

Enough nerdy talk though (for now).

# Why is this important?

Many reasons! But the biggest reason why is because I can pump out **more products** for everyone.

One of the biggest reasons why I had not updated the documentation for [LandiTube](http://landitube.landie.land) in so long is because it would take me ages if I had to edit the documentation in *raw* HTML. Markdown has the ability to include snippets of HTML, so I don't mind not being able to edit in HTML. I don't miss out on anything! for example, I can <span style="color: red;">make my text red using a span tag with a style attribute using **raw HTML** inside Markdown</span>. Not missing much!

I can even use chunks of pre-defined templates to generate quick snippets of HTML.

{%alert "success"%}
This alert is made with a template!
{%endalert%}

{%img "example of an HTML snippet", "Using eleventy shortcodes to input HTML snippets"%}
/assets/images/blog/my-first-blogpost/html-snippet.png
{%endimg%}

Ok! That's all I wanted to say. Expect future blog posts about YouTube videos, SAMMI Extensions, SAMMI in general, OBS, Streamer tools, and so much more! I'll try to keep things in categories so you can follow **exactly what you want from me!**
<br>
<br>
<br>
<br>
see ya~