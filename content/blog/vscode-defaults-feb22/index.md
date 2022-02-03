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
// TODO: Make these links

- **Python Docstring Generator**

- **Python Indent**

- **Python Preview**

Particularly for solving puzzles, python preview is a HUGE help. Exercism, codewars, leetcode are all made easier with this as you learn.

**Python Extension Pack**

## For Data Science-y work:
- **Rainbow CSV**
- **Markdown All in One**
- **Markdown Preview Mermaid Support**
- MySQL (For nearly any database. It's so nice not having another tool.)

Make your life easier, don't store documentation in notebooks. Store it in markdown, where you make a site or whatever from it later.

Learn a little Mermaid too, it makes making charts and graphs as markdown-y code so easy. Making diagrams with a mouse is for chumps.

## For JS/TS/GCP Development:
- **ESLint**
- **JavaScript and TypeScript Nightly**
- **Prettier - Code Formatter**
- Tailwind CSS IntelliSense (If you use Tailwind)
- Tailwind Docs (If you use Tailwind)
- Material-UI Snippets
  (Only if you do MUI work)
- Google Cloud Platform SSH (If you use VM's on GCP. Super damned handy, works just like remote-ssh, but does the config for you.)

Again, ping me if I'm missing an extension. I'm sure I've missed something great!

Honorable mentions:
- Toggle Zen Mode
- UNotes (Meh, use markdown)