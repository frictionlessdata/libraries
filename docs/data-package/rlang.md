---
title: datapackage-r
---

[![CRAN\_Status\_Badge](https://www.r-pkg.org/badges/version/datapackage.r)](https://cran.r-project.org/package=datapackage.r)
[![Build Status](https://travis-ci.org/frictionlessdata/datapackage-r.svg?branch=master)](https://travis-ci.org/frictionlessdata/datapackage-r)
[![Coverage Status](https://coveralls.io/repos/github/frictionlessdata/datapackage-r/badge.svg?branch=master)](https://coveralls.io/github/frictionlessdata/datapackage-r?branch=master)<!-- [![Coverage Status](https://img.shields.io/codecov/c/github/frictionlessdata/datapackage-r/master.svg)](https://codecov.io/github/frictionlessdata/datapackage-r?branch=master) -->
[![Project Status: Active – The project has reached a stable, usable state but is no longer being actively developed; support/maintenance will be provided as time allows.](http://www.repostatus.org/badges/latest/active.svg)](http://www.repostatus.org/#active)
[![minimal R version](https://img.shields.io/badge/R%3E%3D-3.6-6666ff.svg)](https://cran.r-project.org/)
[![Stats](http://cranlogs.r-pkg.org/badges/grand-total/datapackage.r)](http://cran.rstudio.com/web/packages/datapackage.r/index.html)
[![Licence](https://img.shields.io/badge/licence-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Codebase](https://img.shields.io/badge/codebase-github-brightgreen)](https://github.com/frictionlessdata/datapackage-r)
[![Support](https://img.shields.io/badge/support-discord-brightgreen)](https://discordapp.com/invite/Sewv6av)

## Description

R package for working with [Frictionless Data
Package](https://specs.frictionlessdata.io/data-package/).

### Features

-   `Package` class for working with data packages
-   `Resource` class for working with data resources
-   `Profile` class for working with profiles
-   `validate` function for validating data package descriptors
-   `infer` function for inferring data package descriptors

## Getting started

### Installation

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

### Load package

    # load the package using
    library(datapackage.r)

## Examples

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

## Documentation

Json objects are not included in R base data types. [Jsonlite
package](https://CRAN.R-project.org/package=jsonlite) is internally used
to convert json data to list objects. The input parameters of functions
could be json strings, files or lists and the outputs are in list format
to easily further process your data in R environment and exported as
desired. The examples below show how to use jsonlite package to convert
the output back to json adding indentation whitespace. More details
about handling json you can see jsonlite documentation or vignettes
[here](https://CRAN.R-project.org/package=jsonlite).

### Working with Package

A class for working with data packages. It provides various capabilities
like loading local or remote data package, inferring a data package
descriptor, saving a data package descriptor and many more.

Consider we have some local `csv` files in a `data` directory. Let’s
create a data package based on this data using a `Package` class:

> inst/extdata/readme\_example/cities.csv

    city,location
    london,"51.50,-0.11"
    paris,"48.85,2.30"
    rome,"41.89,12.51"

> inst/extdata/readme\_example/population.csv

    city,year,population
    london,2017,8780000
    paris,2017,2240000
    rome,2017,2860000

First we create a blank data package:

    dataPackage <- Package.load()

Now we’re ready to infer a data package descriptor based on data files
we have. Because we have two csv files we use glob pattern `csv`:

    jsonlite::toJSON(dataPackage$infer('csv'), pretty = TRUE)

    ## {
    ##   "profile": ["tabular-data-package"],
    ##   "resources": [
    ##     {
    ##       "path": ["cities.csv"],
    ##       "profile": ["tabular-data-resource"],
    ##       "encoding": ["utf-8"],
    ##       "name": ["cities"],
    ##       "format": ["csv"],
    ##       "mediatype": ["text/csv"],
    ##       "schema": {
    ##         "fields": [
    ##           {
    ##             "name": ["city"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["location"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           }
    ##         ],
    ##         "missingValues": [
    ##           [""]
    ##         ]
    ##       }
    ##     },
    ##     {
    ##       "path": ["population.csv"],
    ##       "profile": ["tabular-data-resource"],
    ##       "encoding": ["utf-8"],
    ##       "name": ["population"],
    ##       "format": ["csv"],
    ##       "mediatype": ["text/csv"],
    ##       "schema": {
    ##         "fields": [
    ##           {
    ##             "name": ["city"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["year"],
    ##             "type": ["integer"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["population"],
    ##             "type": ["integer"],
    ##             "format": ["default"]
    ##           }
    ##         ],
    ##         "missingValues": [
    ##           [""]
    ##         ]
    ##       }
    ##     }
    ##   ]
    ## }

    jsonlite::toJSON(dataPackage$descriptor, pretty = TRUE)

    ## {
    ##   "profile": ["tabular-data-package"],
    ##   "resources": [
    ##     {
    ##       "path": ["cities.csv"],
    ##       "profile": ["tabular-data-resource"],
    ##       "encoding": ["utf-8"],
    ##       "name": ["cities"],
    ##       "format": ["csv"],
    ##       "mediatype": ["text/csv"],
    ##       "schema": {
    ##         "fields": [
    ##           {
    ##             "name": ["city"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["location"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           }
    ##         ],
    ##         "missingValues": [
    ##           [""]
    ##         ]
    ##       }
    ##     },
    ##     {
    ##       "path": ["population.csv"],
    ##       "profile": ["tabular-data-resource"],
    ##       "encoding": ["utf-8"],
    ##       "name": ["population"],
    ##       "format": ["csv"],
    ##       "mediatype": ["text/csv"],
    ##       "schema": {
    ##         "fields": [
    ##           {
    ##             "name": ["city"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["year"],
    ##             "type": ["integer"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["population"],
    ##             "type": ["integer"],
    ##             "format": ["default"]
    ##           }
    ##         ],
    ##         "missingValues": [
    ##           [""]
    ##         ]
    ##       }
    ##     }
    ##   ]
    ## }

An `infer` method has found all our files and inspected it to extract
useful metadata like profile, encoding, format, Table Schema etc. Let’s
tweak it a little bit:

    dataPackage$descriptor$resources[[2]]$schema$fields[[2]]$type <- 'year'
    dataPackage$commit()

    ## [1] TRUE

    dataPackage$valid

    ## [1] TRUE

Because our resources are tabular we could read it as a tabular data:

    jsonlite::toJSON(dataPackage$getResource("population")$read(keyed = TRUE),auto_unbox = FALSE,pretty = TRUE)

    ## [
    ##   {
    ##     "city": ["london"],
    ##     "year": [2017],
    ##     "population": [8780000]
    ##   },
    ##   {
    ##     "city": ["paris"],
    ##     "year": [2017],
    ##     "population": [2240000]
    ##   },
    ##   {
    ##     "city": ["rome"],
    ##     "year": [2017],
    ##     "population": [2860000]
    ##   }
    ## ]

Let’s save our descriptor on the disk. After it we could update our
`datapackage.json` as we want, make some changes etc:

    dataPackage.save('datapackage.json')

To continue the work with the data package we just load it again but
this time using local `datapackage.json`:

    dataPackage <- Package.load('datapackage.json')
    # Continue the work

It was one basic introduction to the `Package` class. To learn more
let’s take a look on `Package` class API reference.

### Resource

A class for working with data resources. You can read or iterate tabular
resources using the `iter/read` methods and all resource as bytes using
`rowIter/rowRead` methods.

Consider we have some local csv file. It could be inline data or remote
link - all supported by `Resource` class (except local files for
in-brower usage of course). But say it’s `cities.csv` for now:

    city,location
    london,"51.50,-0.11"
    paris,"48.85,2.30"
    rome,N/A

Let’s create and read a resource. We use static `Resource$load` method
instantiate a resource. Because resource is tabular we could use
`resourceread` method with a `keyed` option to get an list of keyed
rows:

    resource <- Resource.load('{"path": "cities.csv"}')
    resource$tabular

    ## [1] TRUE

    jsonlite::toJSON(resource$read(keyed = TRUE), pretty = TRUE)

    ## [
    ##   {
    ##     "city": ["london"],
    ##     "location": ["\"51.50 -0.11\""]
    ##   },
    ##   {
    ##     "city": ["paris"],
    ##     "location": ["\"48.85 2.30\""]
    ##   },
    ##   {
    ##     "city": ["rome"],
    ##     "location": ["\"41.89 12.51\""]
    ##   }
    ## ]

As we could see our locations are just a strings. But it should be
geopoints. Also Rome’s location is not available but it’s also just a
`N/A` string instead of `null`. First we have to infer resource
metadata:

    jsonlite::toJSON(resource$infer(), pretty = TRUE)

    ## {
    ##   "path": ["cities.csv"],
    ##   "profile": ["tabular-data-resource"],
    ##   "encoding": ["utf-8"],
    ##   "name": ["cities"],
    ##   "format": ["csv"],
    ##   "mediatype": ["text/csv"],
    ##   "schema": {
    ##     "fields": [
    ##       {
    ##         "name": ["city"],
    ##         "type": ["string"],
    ##         "format": ["default"]
    ##       },
    ##       {
    ##         "name": ["location"],
    ##         "type": ["string"],
    ##         "format": ["default"]
    ##       }
    ##     ],
    ##     "missingValues": [
    ##       [""]
    ##     ]
    ##   }
    ## }

    jsonlite::toJSON(resource$descriptor, pretty = TRUE)

    ## {
    ##   "path": ["cities.csv"],
    ##   "profile": ["tabular-data-resource"],
    ##   "encoding": ["utf-8"],
    ##   "name": ["cities"],
    ##   "format": ["csv"],
    ##   "mediatype": ["text/csv"],
    ##   "schema": {
    ##     "fields": [
    ##       {
    ##         "name": ["city"],
    ##         "type": ["string"],
    ##         "format": ["default"]
    ##       },
    ##       {
    ##         "name": ["location"],
    ##         "type": ["string"],
    ##         "format": ["default"]
    ##       }
    ##     ],
    ##     "missingValues": [
    ##       [""]
    ##     ]
    ##   }
    ## }

    # resource$read( keyed = TRUE )
    # # Fails with a data validation error

Let’s fix not available location. There is a `missingValues` property in
Table Schema specification. As a first try we set `missingValues` to
`N/A` in `resource$descriptor.schema`. Resource descriptor could be
changed in-place but all changes should be commited by
`resource$commit()`:

    resource$descriptor$schema$missingValues <- 'N/A'
    resource$commit()

    ## [1] TRUE

    resource$valid # FALSE

    ## [1] FALSE

    resource$errors

    ## [[1]]
    ## [1] "Descriptor validation error:\n            data.schema.missingValues - is the wrong type"

As a good citiziens we’ve decided to check out recource descriptor
validity. And it’s not valid! We should use an list for `missingValues`
property. Also don’t forget to have an empty string as a missing value:

    resource$descriptor$schema[['missingValues']] <- list('', 'N/A')
    resource$commit()

    ## [1] TRUE

    resource$valid # TRUE

    ## [1] TRUE

All good. It looks like we’re ready to read our data again:

    jsonlite::toJSON(resource$read( keyed = TRUE ), pretty = TRUE)

    ## [
    ##   {
    ##     "city": ["london"],
    ##     "location": ["\"51.50 -0.11\""]
    ##   },
    ##   {
    ##     "city": ["paris"],
    ##     "location": ["\"48.85 2.30\""]
    ##   },
    ##   {
    ##     "city": ["rome"],
    ##     "location": ["\"41.89 12.51\""]
    ##   }
    ## ]

Now we see that: - locations are lists with numeric lattide and
longitude - Rome’s location is a native JavaScript `null`

And because there are no errors on data reading we could be sure that
our data is valid againt our schema. Let’s save our resource descriptor:

    resource$save('dataresource.json')

Let’s check newly-crated `dataresource.json`. It contains path to our
data file, inferred metadata and our `missingValues` tweak:

    {
    "path": "data.csv",
    "profile": "tabular-data-resource",
    "encoding": "utf-8",
    "name": "data",
    "format": "csv",
    "mediatype": "text/csv",
    "schema": {
    "fields": [
    {
    "name": "city",
    "type": "string",
    "format": "default"
    },
    {
    "name": "location",
    "type": "geopoint",
    "format": "default"
    }
    ],
    "missingValues": [
    "",
    "N/A"
    ]
    }
    }

If we decide to improve it even more we could update the
`dataresource.json` file and then open it again using local file name:

    resource <- Resource.load('dataresource.json')
    # Continue the work

It was one basic introduction to the `Resource` class. To learn more
let’s take a look on `Resource` class API reference.

#### Working with Profile

A component to represent JSON Schema profile from [Profiles
Registry](https://specs.frictionlessdata.io/schemas/registry.json):

    profile <- Profile.load('data-package')
    profile$name # data-package

    ## [1] "data-package"

    profile$jsonschema # List of JSON Schema contents

    valid_errors <- profile$validate(descriptor)
    valid <- valid_errors$valid # TRUE if valid descriptor
    valid

    ## [1] TRUE

#### Working with validate

A standalone function to validate a data package descriptor:

    valid_errors <- validate('{"name": "Invalid Datapackage"}')

#### Working with infer

A standalone function to infer a data package descriptor.

    descriptor <- infer("csv",basePath = '.')
    jsonlite::toJSON(descriptor, pretty = TRUE)

    ## {
    ##   "profile": ["tabular-data-package"],
    ##   "resources": [
    ##     {
    ##       "path": ["cities.csv"],
    ##       "profile": ["tabular-data-resource"],
    ##       "encoding": ["utf-8"],
    ##       "name": ["cities"],
    ##       "format": ["csv"],
    ##       "mediatype": ["text/csv"],
    ##       "schema": {
    ##         "fields": [
    ##           {
    ##             "name": ["city"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["location"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           }
    ##         ],
    ##         "missingValues": [
    ##           [""]
    ##         ]
    ##       }
    ##     },
    ##     {
    ##       "path": ["population.csv"],
    ##       "profile": ["tabular-data-resource"],
    ##       "encoding": ["utf-8"],
    ##       "name": ["population"],
    ##       "format": ["csv"],
    ##       "mediatype": ["text/csv"],
    ##       "schema": {
    ##         "fields": [
    ##           {
    ##             "name": ["city"],
    ##             "type": ["string"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["year"],
    ##             "type": ["integer"],
    ##             "format": ["default"]
    ##           },
    ##           {
    ##             "name": ["population"],
    ##             "type": ["integer"],
    ##             "format": ["default"]
    ##           }
    ##         ],
    ##         "missingValues": [
    ##           [""]
    ##         ]
    ##       }
    ##     }
    ##   ]
    ## }

#### Working with Foreign Keys

The package supports foreign keys described in the [Table
Schema](https://specs.frictionlessdata.io/table-schema/#foreign-keys)
specification. It means if your data package descriptor use
`resources[]$schema$foreignKeys` property for some resources a data
integrity will be checked on reading operations.

Consider we have a data package:

    DESCRIPTOR <- '{
    "resources": [
    {
    "name": "teams",
    "data": [
    ["id", "name", "city"],
    ["1", "Arsenal", "London"],
    ["2", "Real", "Madrid"],
    ["3", "Bayern", "Munich"]
    ],
    "schema": {
    "fields": [
    {"name": "id", "type": "integer"},
    {"name": "name", "type": "string"},
    {"name": "city", "type": "string"}
    ],
    "foreignKeys": [
    {
    "fields": "city",
    "reference": {"resource": "cities", "fields": "name"}
    }
    ]
    }
    }, {
    "name": "cities",
    "data": [
    ["name", "country"],
    ["London", "England"],
    ["Madrid", "Spain"]
    ]
    }
    ]
    }'

Let’s check relations for a `teams` resource:

    package <- Package.load(DESCRIPTOR)
    teams <- package$getResource('teams')

    teams$checkRelations()

    ## Error: Foreign key 'city' violation in row '4'

    # tableschema.exceptions.RelationError: Foreign key "['city']" violation in row "4"

As we could see there is a foreign key violation. That’s because our
lookup table `cities` doesn’t have a city of `Munich` but we have a team
from there. We need to fix it in `cities` resource:

    package$descriptor$resources[[2]]$data <- rlist::list.append(package$descriptor$resources[[2]]$data, list('Munich', 'Germany'))
    package$commit()

    ## [1] TRUE

    teams <- package$getResource('teams')
    teams$checkRelations()

    ## [1] TRUE

    # TRUE

Fixed! But not only a check operation is available. We could use
`relations` argument for `resource$iter/read` methods to dereference a
resource relations:

    jsonlite::toJSON(teams$read(keyed = TRUE, relations = FALSE), pretty =  TRUE)

    ## [
    ##   {
    ##     "id": [1],
    ##     "name": ["Arsenal"],
    ##     "city": ["London"]
    ##   },
    ##   {
    ##     "id": [2],
    ##     "name": ["Real"],
    ##     "city": ["Madrid"]
    ##   },
    ##   {
    ##     "id": [3],
    ##     "name": ["Bayern"],
    ##     "city": ["Munich"]
    ##   }
    ## ]

Instead of plain city name we’ve got a dictionary containing a city
data. These `resource$iter/read` methods will fail with the same as
`resource$check_relations` error if there is an integrity issue. But
only if `relations = TRUE` flag is passed.

## API Referencer

### Package

Package representation

-   [Package](#Package)
-   *instance*
-   [$valid](#Package+valid) ⇒ `Boolean`
-   [$errors](#Package+errors) ⇒ `List.&lt;Error&gt;`
-   [$profile](#Package+profile) ⇒ `Profile`
-   [$descriptor](#Package+descriptor) ⇒ `Object`
-   [$resources](#Package+resources) ⇒
    `List.&lt;Resoruce&gt;`
-   [$resourceNames](#Package+resourceNames) ⇒
    `List.&lt;string&gt;`
-   [$getResource(name)](#Package+getResource) ⇒ `Resource`
    \| `null`
-   [$addResource(descriptor)](#Package+addResource) ⇒
    `Resource`
-   [$removeResource(name)](#Package+removeResource) ⇒
    `Resource` \| `null`
-   [$infer(pattern)](#Package+infer) ⇒ `Object`
-   [$commit(strict)](#Package+commit) ⇒ `Boolean`
-   [$save(target, raises, returns)](#Package+save)
-   *static*
-   [.load(descriptor, basePath, strict)](#Package.load) ⇒
    [`Package`](#Package)

#### package$.valid ⇒ `Boolean`

Validation status

It always `true` in strict mode.

**Returns**: `Boolean` - returns validation status

#### package$errors ⇒ `List.&lt;Error&gt;`

Validation errors

It always empty in strict mode.

**Returns**: `List.&lt;Error&gt;` - returns validation errors

#### package$profile ⇒ `Profile`

Profile

#### package$descriptor ⇒ `Object`

Descriptor

**Returns**: `Object` - schema descriptor

#### package$resources ⇒ `List.&lt;Resoruce&gt;`

Resources

#### package$resourceNames ⇒ `List.&lt;string&gt;`

Resource names

#### package$getResource(name) ⇒ `Resource` \| `null`

Return a resource

**Returns**: `Resource` \| `null` - resource
instance if exists

| Param | Type                |
|-------|---------------------|
| name  | `string` |

#### package$addResource(descriptor) ⇒ `Resource`

Add a resource

**Returns**: `Resource` - added resource instance

| Param      | Type                |
|------------|---------------------|
| descriptor | `Object` |

#### package$removeResource(name) ⇒ `Resource` \| `null`

Remove a resource

**Returns**: `Resource` \| `null` - removed
resource instance if exists

| Param | Type                |
|-------|---------------------|
| name  | `string` |

#### package$infer(pattern) ⇒ `Object`

Infer metadata

| Param   | Type                | Default            |
|---------|---------------------|--------------------|
| pattern | `string` | `false` |

#### package$commit(strict) ⇒ `Boolean`

Update package instance if there are in-place changes in the descriptor.

**Returns**: `Boolean` - returns true on success and false if
not modified
**Throws**:

-   `DataPackageError` raises any error occurred in the
    process

| Param  | Type                 | Description                          |
|--------|----------------------|--------------------------------------|
| strict | `boolean` | alter `strict` mode for further work |

**Example**

    dataPackage <- Package.load('{
    "name": "package",
    "resources": [{"name": "resource", "data": ["data"]}]
    }')
    dataPackage$descriptor$name # package

    ## [1] "package"

    dataPackage$descriptor$name <- 'renamed-package'
    dataPackage$descriptor$name # renamed-package

    ## [1] "renamed-package"

    dataPackage$commit()

    ## [1] TRUE

#### package$save(target, raises, returns)

Save data package to target destination.

If target path has a zip file extension the package will be zipped and
saved entirely. If it has a json file extension only the descriptor will
be saved.

| Param   | Type                          | Description                       |
|---------|-------------------------------|-----------------------------------|
| target  | `string`           | path where to save a data package |
| raises  | `DataPackageError` | error if something goes wrong     |
| returns | `boolean`          | true on success                   |

#### Package.load(descriptor, basePath, strict) ⇒ [`Package`](#Package)

Factory method to instantiate `Package` class.

This method is async and it should be used with await keyword or as a
`Promise`.

**Returns**: [`Package`](#Package) - returns data package
class instance
**Throws**:

-   `DataPackageError` raises error if something goes wrong

| Param      | Type                                       | Description                                                                                                                                |
|------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| descriptor | `string` \| `Object` | package descriptor as local path, url or object. If ththe path has a `zip` file extension it will be unzipped to the temp directory first. |
| basePath   | `string`                        | base path for all relative paths                                                                                                           |
| strict     | `boolean`                       | strict flag to alter validation behavior. Setting it to `true` leads to throwing errors on any operation with invalid descriptor           |

### Resource

Resource representation

-   [Resource](#Resource)
-   *instance*
-   [$valid](#Resource+valid) ⇒ `Boolean`
-   [$errors](#Resource+errors) ⇒ `List.&lt;Error&gt;`
-   [$profile](#Resource+profile) ⇒ `Profile`
-   [$descriptor](#Resource+descriptor) ⇒ `Object`
-   [$name](#Resource+name) ⇒ `string`
-   [$inline](#Resource+inline) ⇒ `boolean`
-   [$local](#Resource+local) ⇒ `boolean`
-   [$remote](#Resource+remote) ⇒ `boolean`
-   [$multipart](#Resource+multipart) ⇒ `boolean`
-   [$tabular](#Resource+tabular) ⇒ `boolean`
-   [$source](#Resource+source) ⇒ `List` \|
    `string`
-   [$headers](#Resource+headers) ⇒ `List.&lt;string&gt;`
-   [$schema](#Resource+schema) ⇒ `tableschema.Schema`
-   [$iter(keyed, extended, cast, forceCast, relations,
    stream)](#Resource+iter) ⇒ `AsyncIterator` \|
    `Stream`
-   [$read(limit)](#Resource+read) ⇒ `List.&lt;List&gt;` \|
    `List.&lt;Object&gt;`
-   [$checkRelations()](#Resource+checkRelations) ⇒ `boolean`
-   [$rawIter(stream)](#Resource+rawIter) ⇒ `Iterator` \|
    `Stream`
-   [$rawRead()](#Resource+rawRead) ⇒ `Buffer`
-   [$infer()](#Resource+infer) ⇒ `Object`
-   [$commit(strict)](#Resource+commit) ⇒ `boolean`
-   [$save(target)](#Resource+save) ⇒ `boolean`
-   *static*
-   [$load(descriptor, basePath, strict)](#Resource.load) ⇒
    [`Resource`](#Resource)

#### resource$valid ⇒ `Boolean`

Validation status

It always `true` in strict mode.

**Returns**: `Boolean` - returns validation status

#### resource$errors ⇒ `List.&lt;Error&gt;`

Validation errors

It always empty in strict mode.

**Returns**: `List.&lt;Error&gt;` - returns validation errors

#### resource$profile ⇒ `Profile`

Profile

#### resource$descriptor ⇒ `Object`

Descriptor

**Returns**: `Object` - schema descriptor

#### resource$name ⇒ `string`

Name

#### resource$inline ⇒ `boolean`

Whether resource is inline

#### resource$local ⇒ `boolean`

Whether resource is local

#### resource$remote ⇒ `boolean`

Whether resource is remote

#### resource$multipart ⇒ `boolean`

Whether resource is multipart

#### resource$tabular ⇒ `boolean`

Whether resource is tabular

#### resource$source ⇒ `List` \| `string`

Source

Combination of `resource.source` and
`resource.inline/local/remote/multipart` provides predictable interface
to work with resource data.

#### resource$headers ⇒ `List.&lt;string&gt;`

Headers

> Only for tabular resources

**Returns**: `List.&lt;string&gt;` - data source headers

#### resource$schema ⇒ `tableschema.Schema`

Schema

> Only for tabular resources

#### resource$iter(keyed, extended, cast, forceCast, relations, stream) ⇒ `AsyncIterator` \| `Stream`

Iterate through the table data

> Only for tabular resources

And emits rows cast based on table schema (async for loop). With a
`stream` flag instead of async iterator a Node stream will be returned.
Data casting can be disabled.

**Returns**: `AsyncIterator` \| `Stream` - async
iterator/stream of rows: - `[value1, value2]` - base -
`{header1: value1, header2: value2}` - keyed -
`[rowNumber, [header1, header2], [value1, value2]]` - extended
**Throws**:

-   `TableSchemaError` raises any error occurred in this
    process

| Param     | Type                 | Description                                                                                                                                                                                                                                                                           |
|-----------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| keyed     | `boolean` | iter keyed rows                                                                                                                                                                                                                                                                       |
| extended  | `boolean` | iter extended rows                                                                                                                                                                                                                                                                    |
| cast      | `boolean` | disable data casting if false                                                                                                                                                                                                                                                         |
| forceCast | `boolean` | instead of raising on the first row with cast error return an error object to replace failed row. It will allow to iterate over the whole data file even if it’s not compliant to the schema. Example of output stream: `[['val1', 'val2'], TableSchemaError, ['val3', 'val4'], ...]` |
| relations | `boolean` | if true foreign key fields will be checked and resolved to its references                                                                                                                                                                                                             |
| stream    | `boolean` | return Node Readable Stream of table rows                                                                                                                                                                                                                                             |

#### resource$read(limit) ⇒ `List.&lt;List&gt;` \| `List.&lt;Object&gt;`

Read the table data into memory

> Only for tabular resources; the API is the same as `resource.iter` has
> except for:

**Returns**: `List.&lt;List&gt;` \|
`List.&lt;Object&gt;` - list of rows: - `[value1, value2]` -
base - `{header1: value1, header2: value2}` - keyed -
`[rowNumber, [header1, header2], [value1, value2]]` - extended

| Param | Type                 | Description           |
|-------|----------------------|-----------------------|
| limit | `integer` | limit of rows to read |

#### resource$checkRelations() ⇒ `boolean`

It checks foreign keys and raises an exception if there are integrity
issues.

> Only for tabular resources

**Returns**: `boolean` - returns True if no issues
**Throws**:

-   `DataPackageError` raises if there are integrity issues

#### resource$rawIter(stream) ⇒ `Iterator` \| `Stream`

Iterate over data chunks as bytes. If `stream` is true Node Stream will
be returned.

**Returns**: `Iterator` \| `Stream` - returns
Iterator/Stream

| Param  | Type                 | Description                  |
|--------|----------------------|------------------------------|
| stream | `boolean` | Node Stream will be returned |

#### resource$rawRead() ⇒ `Buffer`

Returns resource data as bytes.

**Returns**: `Buffer` - returns Buffer with resource data

#### resource$infer() ⇒ `Object`

Infer resource metadata like name, format, mediatype, encoding, schema
and profile.

It commits this changes into resource instance.

**Returns**: `Object` - returns resource descriptor

#### resource$commit(strict) ⇒ `boolean`

Update resource instance if there are in-place changes in the
descriptor.

**Returns**: `boolean` - returns true on success and false if
not modified
**Throws**:

-   DataPackageError raises error if something goes wrong

| Param  | Type                 | Description                          |
|--------|----------------------|--------------------------------------|
| strict | `boolean` | alter `strict` mode for further work |

#### resource$save(target) ⇒ `boolean`

Save resource to target destination.

> For now only descriptor will be saved.

**Returns**: `boolean` - returns true on success
**Throws**:

-   `DataPackageError` raises error if something goes wrong

| Param  | Type                | Description                   |
|--------|---------------------|-------------------------------|
| target | `string` | path where to save a resource |

#### Resource.load(descriptor, basePath, strict) ⇒ [`Resource`](#Resource)

Factory method to instantiate `Resource` class.

This method is async and it should be used with await keyword or as a
`Promise`.

**Returns**: [`Resource`](#Resource) - returns resource class
instance
**Throws**:

-   `DataPackageError` raises error if something goes wrong

| Param      | Type                                       | Description                                                                                                                      |
|------------|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| descriptor | `string` \| `Object` | resource descriptor as local path, url or object                                                                                 |
| basePath   | `string`                        | base path for all relative paths                                                                                                 |
| strict     | `boolean`                       | strict flag to alter validation behavior. Setting it to `true` leads to throwing errors on any operation with invalid descriptor |

### Profile

Profile representation

-   [Profile](#Profile)
-   *instance*
-   [$name](#Profile+name) ⇒ `string`
-   [$jsonschema](#Profile+jsonschema) ⇒ `Object`
-   [$validate(descriptor)](#Profile+validate) ⇒ `Object`
-   *static*
-   [$load(profile)](#Profile.load) ⇒ [`Profile`](#Profile)

#### profile$name ⇒ `string`

Name

#### profile$jsonschema ⇒ `Object`

JsonSchema

#### profile$validate(descriptor) ⇒ `Object`

Validate a data package `descriptor` against the profile.

**Returns**: `Object` - returns a `{valid, errors}` object

| Param      | Type                | Description                                        |
|------------|---------------------|----------------------------------------------------|
| descriptor | `Object` | retrieved and dereferenced data package descriptor |

#### Profile.load(profile) ⇒ [`Profile`](#Profile)

Factory method to instantiate `Profile` class.

This method is async and it should be used with await keyword or as a
`Promise`.

**Returns**: [`Profile`](#Profile) - returns profile class
instance
**Throws**:

-   `DataPackageError` raises error if something goes wrong

| Param   | Type                | Description                                    |
|---------|---------------------|------------------------------------------------|
| profile | `string` | profile name in registry or URL to JSON Schema |

### validate(descriptor) ⇒ `Object`

This function is async so it has to be used with `await` keyword or as a
`Promise`.

**Returns**: `Object` - returns a `{valid, errors}` object

| Param      | Type                                       | Description                                           |
|------------|--------------------------------------------|-------------------------------------------------------|
| descriptor | `string` \| `Object` | data package descriptor (local/remote path or object) |

### infer(pattern) ⇒ `Object`

This function is async so it has to be used with `await` keyword or as a
`Promise`.

**Returns**: `Object` - returns data package descriptor

| Param   | Type                | Description       |
|---------|---------------------|-------------------|
| pattern | `string` | glob file pattern |

### DataPackageError

Base class for the all DataPackage errors.

### TableSchemaError

Base class for the all TableSchema errors.

## Contributing

The project follows the [Open Knowledge International coding
standards](https://github.com/okfn/coding-standards). There are common
commands to work with the project.Recommended way to get started is to
create, activate and load the package environment. To install package
and development dependencies into active environment:

    devtools::install_github("frictionlessdata/datapackage-r", dependencies=TRUE)

To make test:

    test_that(description, {
    expect_equal(test, expected result)
    })

To run tests:

    devtools::test()

more detailed information about how to create and run tests you can find
in [testthat package](https://github.com/hadley/testthat)

## Changelog - News

In
[NEWS.md](https://github.com/frictionlessdata/datapackage-r/blob/master/NEWS.md)
described only breaking and the most important changes. The full
changelog could be found in nicely formatted
[commit](https://github.com/frictionlessdata/datapackage-r/commits/master)
history.
