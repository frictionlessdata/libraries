---
title: datapackage-rlang
---

[![CRAN\_Status\_Badge](https://www.r-pkg.org/badges/version/datapackage.r)](https://cran.r-project.org/package=datapackage.r)
[![Build
Status](https://travis-ci.org/frictionlessdata/datapackage-r.svg?branch=master)](https://travis-ci.org/frictionlessdata/datapackage-r)
[![Coverage
Status](https://coveralls.io/repos/github/frictionlessdata/datapackage-r/badge.svg?branch=master)](https://coveralls.io/github/frictionlessdata/datapackage-r?branch=master)<!-- [![Coverage Status](https://img.shields.io/codecov/c/github/frictionlessdata/datapackage-r/master.svg)](https://codecov.io/github/frictionlessdata/datapackage-r?branch=master) -->
[![Github
Issues](http://githubbadges.herokuapp.com/frictionlessdata/datapackage-r/issues.svg)](https://github.com/frictionlessdata/datapackage-r/issues)
[![Pending
Pull-Requests](http://githubbadges.herokuapp.com/frictionlessdata/datapackage-r/pulls.svg)](https://github.com/frictionlessdata/datapackage-r/pulls)
[![Project Status: Active – The project has reached a stable, usable
state but is no longer being actively developed; support/maintenance
will be provided as time
allows.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![minimal R
version](https://img.shields.io/badge/R%3E%3D-3.6-6666ff.svg)](https://cran.r-project.org/)
[![Rdoc](http://www.rdocumentation.org/badges/version/datapackage.r)](http://www.rdocumentation.org/packages/datapackage.r)
[![](http://cranlogs.r-pkg.org/badges/grand-total/datapackage.r)](http://cran.rstudio.com/web/packages/datapackage.r/index.html)
[![Licence](https://img.shields.io/badge/licence-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/frictionlessdata/chat)

# Description

R package for working with [Frictionless Data
Package](https://specs.frictionlessdata.io/data-package/).

## Features

-   `Package` class for working with data packages
-   `Resource` class for working with data resources
-   `Profile` class for working with profiles
-   `validate` function for validating data package descriptors
-   `infer` function for inferring data package descriptors

# Getting started

## Installation

In order to install the latest distribution of [R
software](https://www.r-project.org/) to your computer you have to
select one of the mirror sites of the [Comprehensive R Archive
Network](https://cran.r-project.org//), select the appropriate link for
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

To install the `datapackage` package it is necessary to install first
[devtools package](https://cran.r-project.org/package=devtools) to make
installation of github packages available.

    # Install devtools package if not already
    install.packages("devtools")

Install `datapackage.r`

    # And then install the development version from github
    devtools::install_github("frictionlessdata/datapackage-r")

## Load package

    # load the package using
    library(datapackage.r)

# Examples

Code examples in this readme requires R 3.3 or higher, You could see
even more
[examples](https://github.com/frictionlessdata/datapackage-r/tree/master/vignettes)
in vignettes directory.

    descriptor <- '{
      "resources": [
        {
          "name": "example",
          "profile": "tabular-data-resource",
          "data": [
            ["height", "age", "name"],
            [180, 18, "Tony"],
            [192, 32, "Jacob"]
          ],
          "schema":  {
            "fields": [
              {"name": "height", "type": "integer" },
              {"name": "age", "type": "integer" },
              {"name": "name", "type": "string" }
            ]
          }
        }
      ]
    }'

    dataPackage <- Package.load(descriptor)
    dataPackage

    ## <Package>
    ##   Public:
    ##     addResource: function (descriptor)
    ##     clone: function (deep = FALSE)
    ##     commit: function (strict = NULL)
    ##     descriptor: active binding
    ##     errors: active binding
    ##     getResource: function (name)
    ##     infer: function (pattern)
    ##     initialize: function (descriptor = list(), basePath = NULL, strict = FALSE,
    ##     profile: active binding
    ##     removeResource: function (name)
    ##     resourceNames: active binding
    ##     resources: active binding
    ##     save: function (target, type = "json")
    ##     valid: active binding
    ##   Private:
    ##     basePath_: C:/Users/akis_/Documents/datapackage-r
    ##     build_: function ()
    ##     currentDescriptor_: list
    ##     currentDescriptor_json: NULL
    ##     descriptor_: NULL
    ##     errors_: list
    ##     nextDescriptor_: list
    ##     pattern_: NULL
    ##     profile_: Profile, R6
    ##     resources_: list
    ##     resources_length: NULL
    ##     strict_: FALSE

    resource <- dataPackage$getResource('example')
    # convert to json and add indentation with jsonlite prettify function
    jsonlite::prettify(helpers.from.list.to.json(resource$read()))

    ## [
    ##     [
    ##         180,
    ##         18,
    ##         "Tony"
    ##     ],
    ##     [
    ##         192,
    ##         32,
    ##         "Jacob"
    ##     ]
    ## ]
    ##
