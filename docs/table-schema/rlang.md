---
title: tableschema-r
---

[![CRAN\_Status\_Badge](https://www.r-pkg.org/badges/version/tableschema.r)](https://cran.r-project.org/package=tableschema.r)
[![Build Status](https://travis-ci.org/frictionlessdata/tableschema-r.svg?branch=master)](https://travis-ci.org/frictionlessdata/tableschema-r)
[![Coverage status](https://coveralls.io/repos/github/frictionlessdata/tableschema-r/badge.svg)](https://coveralls.io/r/frictionlessdata/tableschema-r?branch=master)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![minimal R version](https://img.shields.io/badge/R%3E%3D-3.6-6666ff.svg)](https://cran.r-project.org/)
[![Stats](http://cranlogs.r-pkg.org/badges/grand-total/tableschema.r)](http://cran.rstudio.com/web/packages/tableschema.r/index.html)
[![Licence](https://img.shields.io/badge/licence-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Codebase](https://img.shields.io/badge/codebase-github-brightgreen)](https://github.com/frictionlessdata/tableschema-r)
[![Support](https://img.shields.io/badge/support-discord-brightgreen)](https://discordapp.com/invite/Sewv6av)

# Description

R library for working with [Table
Schema](http://specs.frictionlessdata.io/table-schema/).

# Features

  - `Table` class for working with data and schema
  - `Schema` class for working with schemas
  - `Field` class for working with schema fields
  - `validate` function for validating schema descriptors
  - `infer` function that creates a schema based on a data sample

# Getting started

## Installation

In order to install the latest distribution of [R
software](https://www.r-project.org/) to your computer you have to
select one of the mirror sites of the [Comprehensive R Archive
Network](https://cran.r-project.org/), select the appropriate link for
your operating system and follow the wizard instructions.

For windows users you can:

1.  Go to CRAN
2.  Click download R for Windows
3.  Click Base (This is what you want to install R for the first time)
4.  Download the latest R version
5.  Run installation file and follow the instrustions of the installer.

(Mac) OS X and Linux users may need to follow different steps depending
on their system version to install R successfully and it is recommended
to read the instructions on CRAN site carefully.

Even more detailed installation instructions can be found in [R
Installation and Administration
manual](https://cran.r-project.org/doc/manuals/R-admin.html).

To install [RStudio](https://www.rstudio.com/), you can download
[RStudio Desktop](https://www.rstudio.com/products/rstudio/download/)
with Open Source License and follow the wizard instructions:

1.  Go to [RStudio](https://www.rstudio.com/products/rstudio/)
2.  Click download on RStudio Desktop
3.  Download on RStudio Desktop free download
4.  Select the appropriate file for your system
5.  Run installation file

To install the `tableschema` library it is necessary to install first
`devtools` library to make installation of github libraries available.

``` r
# Install devtools package if not already
install.packages("devtools")
```

Install `tableschema.r`

``` r
# from CRAN version
install.packages("tableschema.r")

# or install the development version from github
devtools::install_github("frictionlessdata/tableschema-r")
```

## Load library

``` r
# Install devtools package if not already
# install.packages("jsonlite")
library(jsonlite)
# Install devtools package if not already
# install.packages("future")
library(future)
# load the library using
library(tableschema.r)
```

> TODO: fix unicode error
