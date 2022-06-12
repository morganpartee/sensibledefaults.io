---
title: "'Error with Permissions-Policy'? Disqus Content Security Policy Code"
date: "2022-06-11T00:00:00.01Z"
description: Here is the code you can copy and paste to make Disqus work with your content security policy. Working with Next.js!
postAuthor: John
---
I was setting up the comments for [WorthHearing](https://worthhearing.co), my new music blog, when I ran into an issue with Disqus and my content security policy (CSP) that wasn't well documented.


`
Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.
`

A CSP essentially tells our browser where to allow code to run, and where it can pull data from. If you are using a CSP (and you probably should!), you'll need these lines to make Disqus work.

*Make sure* to include your Disqus subdomain, in my case: `https://worthhearing.disqus.com`.

```bash
  default-src https://disqus.com https://c.disquscdn.com;
  connect-src https://links.services.disqus.com;
  img-src https://referrer.disqus.com
  script-src 'unsafe-eval' 'unsafe-inline' https://*your-shortname*.disqus.com
```

If you have any of these keys (like `script-src`), you'll need to combine the above with your old security policy. In my case, it looked like:

```
  default-src 'self' https://disqus.com https://c.disquscdn.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://worthhearing.disqus.com;
  style-src 'unsafe-inline';
  img-src * blob: data:;
  connect-src *;
```

Which is working now!

Huge thanks to [csplite.com](https://csplite.com/csp/test66/) who did all of the work for me.
