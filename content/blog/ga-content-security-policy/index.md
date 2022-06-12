---
title: "New Google Analytics Content Security Policy Code"
date: "2022-06-11T00:00:00.01Z"
description: Fix your Google Analytics CSP with just a few lines!
postAuthor: John
---
Setting up google analytics for [WorthHearing](https://worthhearing.co), my new music blog, I had an error I hadn't seen before!

`
Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.
`

A CSP essentially tells our browser where to allow code to run, and where it can pull data from. If you are using a CSP (and you probably should!), you'll need these lines to make Google Analytics work.

```
script-src:  *.googletagmanager.com
img-src:     *.google-analytics.com *.googletagmanager.com
connect-src: *.google-analytics.com *.analytics.google.com *.googletagmanager.com
```

If you have any of these keys (like `img-src`), you'll need to combine the above with your old security policy. In my case, it looked like:

```
  default-src 'self' https://disqus.com https://c.disquscdn.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://worthhearing.disqus.com *.googletagmanager.com;
  style-src 'unsafe-inline';
  img-src * blob: data:;
  connect-src *;
```

Because I allow all images and connections through my CSP currently. This is for a static site, so I'm not too worried.

Thanks to [Google](https://developers.google.com/tag-platform/tag-manager/web/csp) for documenting this well!
