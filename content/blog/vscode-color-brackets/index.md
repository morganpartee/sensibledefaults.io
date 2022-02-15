---
title: VSCode Colorized Bracket Pairs
date: "2022-02-14T00:00:00.50Z"
description: Paste this into your settings.json and you're set.
postAuthor: John
---

In VSCode, open your settings.json (Control+Shift+P, enter 'open settings json', hit enter), and paste this in to enable bracket pair colorization.

```json
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs":"active",
```

Find this useful? I have more VSCode sensible defaults [here](/vscode-defaults-feb22)

This is a part of a series of quick defaults to make your life easier, based on how we show up in search results.

While you're in there, add autosaving too. It's handy.
```json
"files.autoSave": "afterDelay",
"files.autoSaveDelay": 10000,
```
