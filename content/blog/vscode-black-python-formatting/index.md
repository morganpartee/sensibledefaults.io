---
title: VSCode Python Formatting with Black
date: "2022-02-14T00:00:00.50Z"
description: Paste this into your settings json and you'll automatically have prettier code.
postAuthor: John
---

In VSCode, open your settings.json (Control+Shift+P, enter 'open settings json', hit enter), and paste this in to enable black formatting on save.

```json
  "python.formatting.provider": "black",
  "editor.formatOnSave": true,
```

Make sure you have it installed too.

```
pip install black
```

Find this useful? I have more VSCode sensible defaults [here](/vscode-defaults-feb22)

This is a part of a series of quick defaults to make your life easier, based on how we show up in search results.

While you're in there, add autosaving and auto linting too. It's handy.

```json

  "python.linting.enabled": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 10000,
  "python.linting.lintOnSave": true
```

Happy coding!
