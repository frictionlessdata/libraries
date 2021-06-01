---
title: goodread-py
---

[![Build](https://img.shields.io/github/workflow/status/frictionlessdata/goodread/general/main)](https://github.com/frictionlessdata/goodread/actions)
[![Coverage](https://img.shields.io/codecov/c/github/frictionlessdata/goodread/main)](https://codecov.io/gh/frictionlessdata/goodread)
[![Registry](https://img.shields.io/pypi/v/goodread.svg)](https://pypi.python.org/pypi/goodread)
[![Codebase](https://img.shields.io/badge/codebase-github-brightgreen)](https://github.com/frictionlessdata/goodread)
[![Support](https://img.shields.io/badge/support-discord-brightgreen)](https://discord.com/channels/695635777199145130/695635777199145133)

> This software is in the early stages and not well-tested

Goodread executes Python and Bash codeblocks in Markdown and writes the results back.

## Purpose

- **Write your documentation**: You can write Python and Bash codeblocks in your Markdown documentation without executing it. Goodread will run them and add or update the results in-line.
- **Test your documentation**: It's commonplace when documentation gets buggy and outdated during software development. You can incorporate Goodread into your testing system to ensure correctness of your documentation.

## Features

- Open Source (MIT)
- Solves one problem well
- Simple command-line interface

## Example

```bash
$ goodread README.md
# Python and Bash executed and the results have been written back
```

## Documentation

This document and docstrings provide all available documentation for the project.
