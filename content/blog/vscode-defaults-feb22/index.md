---
title: VSCode Sensible Defaults (Update!)
date: "2022-02-03T00:00:00.50Z"
description: 2022 is somehow here already, and I still love VSCode. Here's what I use now!
postAuthor: John
---

In the last year I've shifted from doing fullstack/MLOps work in the federal space, to Cloud Engineering as my dayjob, and doing GCP based full stack dev on the side. I really haven't done as much data science work, but it's all Python, right? I do still use Jupyter for testing/iterative development sometimes, but haven't looked at "data science" extensions otherwise. Here's the 2022 update!

**This is opinionated! If you dislike an extension, drop it. Let me know what I’m missing.**

## Universal Must haves:
- [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)

- [Tabnine AI Autocomplete](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)

On Tabnine - They'll try to sell you on pro edition. I pay for it because I love the product, but I'm not sold on the utility for the price. If you like it, try it! It completes ~20% of my code.

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

- [Indented Block Highlighting](https://marketplace.visualstudio.com/items?itemName=byi8220.indented-block-highlighting)

- [GitLens — Git supercharged
](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

It might not be truly universal, but everybody *can* use docker to make their lives easier.

## Enable what should be defaults:

In your config json (Control+shift+p, open settings (JSON)), add these options to enable bracket pair colorization, autosave, auto linting, and auto formatting for Python.

```json
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs":"active",
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 10000,
  "python.linting.lintOnSave": true
```

## Optional Universal:
- [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

It's kinda heavyweight and requires java (Yuck!) but it's pretty good for writing better and more secure code. It does WAY more than a regular linter.

- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

It's pretty. Which matters more than you think.

- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

Holy crap is that useful. You'll see. Even if you don't do JS/HTML, get this one if you do anything with colors.

## For Python:

- [Python Extension Pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-extension-pack)

This is a grab-bag of good python stuff. Docstring generator is a big favorite, use it!

- [Python Preview](https://marketplace.visualstudio.com/items?itemName=dongli.python-preview)

Particularly for solving puzzles, python preview is a HUGE help. Exercism, codewars, leetcode are all made easier with this as you learn.

## For Data Science-y work:
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)

Make your life easier, don't store documentation in notebooks. Store it in markdown, where you make a site or whatever from it later.

Learn a little Mermaid too, it makes making charts and graphs as markdown-y code so easy. Making diagrams with a mouse is for chumps.

- [MySQL](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-mysql-client2)

This isn't just for MySQL, despite the name. Postgres, elasticsearch, whatever. I used PGAdmin before this, and this is SO MUCH BETTER.

## For JS/TS/GCP Development:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)

- [JavaScript Booster](https://marketplace.visualstudio.com/items?itemName=sburg.vscode-javascript-booster)

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### If you do Tailwind CSS:

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

- [Tailwind Docs](https://marketplace.visualstudio.com/items?itemName=austenc.tailwind-docs)

### If you work with material UI (and you should, it rocks):

- [Material-UI Snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets)

### If you use GCP VM's directly:

- [Google Cloud Platform SSH](https://marketplace.visualstudio.com/items?itemName=andrewdircks.google-cloud-platform-ssh)

I love this because figuring out how to connect to an instance was annoying the first time. I use GCP instances for bigger data (not quite big data!) personal work, and this makes it **super** easy to use.

**Again, ping me if I'm missing an extension. I'm sure I've missed something great!**
## Honorable mentions:
- [Toggle Zen mode](https://marketplace.visualstudio.com/items?itemName=fudd.toggle-zen-mode)

Adds a button to cut out a lot of the visual distration in VSCode, if you're doing focused work. Very optional, but if you like it it rocks.

- [UNOTES - Markdown Notes WYSIWYG](https://marketplace.visualstudio.com/items?itemName=ryanmcalister.Unotes)

If you think direct markdown is annoying, you'll like this. It's still markdown, but they have some neat shortcuts to make it easier. I've stopped using this altogether, and just use regular markdown/mermaid now.

## Retired from the list:

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

This extension was so good that it became a vscode feature. You've enabled basically this if you've added the lines up top to your `settings.json`. RIP Bracket Pair Colorizer 2, you rocked.

- [AREPL for python](https://marketplace.visualstudio.com/items?itemName=almenon.arepl)

It still works fine, it just doesn't fit my workflow anymore. It's rare these days that I need to run a few lines of code and test it continuously when I save. If you're doing exercism or codewars this is an *okay* fit, but I'd still use Python Preview.
