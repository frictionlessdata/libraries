---
title: datapackage-swift
---

[![TravisCI Build Status](https://travis-ci.org/frictionlessdata/datapackage-swift.svg?branch=master)](https://travis-ci.org/frictionlessdata/datapackage-swift)
[![Coveralls Coverage Status](https://coveralls.io/repos/github/frictionlessdata/datapackage-swift/badge.svg?branch=master)](https://coveralls.io/github/frictionlessdata/datapackage-swift?branch=master)

A *draft* Swift library for working with [Data Packages](https://frictionlessdata.io/specs/data-package/). It also includes a profile for [Tabular Data Package](https://specs.frictionlessdata.io/tabular-data-package/) in conjunction with the corresponding [Table Schema](https://github.com/frictionlessdata/tableschema-swift) library.

## Requirements
 * Source compatibility with Swift 4.2
 * Target platforms
    * Apple platforms, specifically iOS and macOS
       * Full functionality in iOS >= 10 and macOS >= 10.12
    * Linux, limited by feature availability in `swift-corelibs-foundation`
 * Apple's `Foundation` framework is the only dependency

## Implementation Status

### High-Level Status

| Feature                                 | Status                       |
|:----------------------------------------|:-----------------------------|
| Read/Write Data Package JSON descriptor | Available                    |
| Tabular Data Package profile            | Available                    |
| Validation                              | Available                    |
| Validation against JSON Schema          | Missing                      |
| Retrieving Remote Resources             | Missing, consumer may handle |
| Verification                            | Mostly Available             |
| Strict Mode                             | Partial, through log levels  |
| Schema Inference                        | Missing                      |
| Zipping                                 | Missing                      |
| Additional/Custom Properties            | Available                    |
| Extension through Profiles              | Available                    |

This is a *draft* implementation of Data Package and Tabular Data Package. It initially implemented a subset of features for use to serialize (and deserialize) a database into a human-usable format. It has since been expanded for more general use. Although this implementation provides access to all attributes in the spec, it has deprioritized some features, notably anything involving networking and schema verification.

The general strategy is to implement features only as needed.

### Data Package Profile Status

| Feature                      | Status    |
|:-----------------------------|:----------|
| Additional/Custom Properties | Available |

| Property     | Status                                    |
|:-------------|:------------------------------------------|
| Name         | Available, no validation                  |
| Id           | Available                                 |
| Licenses     | Available                                 |
| Title        | Available                                 |
| Description  | Available, no validation                  |
| Homepage     | Available                                 |
| Version      | Available, no semantic version validation |
| Sources      | Available                                 |
| Contributors | Available                                 |
| Keywords     | Available                                 |
| Image        | Available                                 |
| Created      | Available\*                               |

\* Only available on Apple products (iOS >= 10 and macOS >= 10.12) due to an incomplete Linux implementation in `swift-corelibs-foundation`. Fractional seconds currently unsupported.

#### Data Resource Profile Status

| Feature                      | Status                  |
|:-----------------------------|:------------------------|
| Locally Bundled Resources    | Available               |
| Retrieving Remote Resources  | Consumer must handle    |
| Inline Data                  | Consumer must interpret |
| Multiple Paths per Resources | Consumer must handle    |

| Property    | Status                                  |
|:------------|:----------------------------------------|
| Path        | Available, no validation                |
| Data        | Available, but consumer may interpret   |
| Name        | Available, no validation                |
| Title       | Available                               |
| Description | Available                               |
| Format      | Available                               |
| Mediatype   | Available                               |
| Encoding    | Available                               |
| Bytes       | Available, but consumer should validate |
| Hash        | Available, but consumer should validate |
| Sources     | Available                               |
| Licenses    | Available                               |
| Schema      | Available, but consumer may interpret   |

### Tabular Data Package Profile Status

| Feature     | Status                                   |
|:------------|:-----------------------------------------|
| CSV Support | Available, requires external CSV library |
|             |                                          |

#### Tabular Data Resource Profile Status

| Feature                      | Status                  |
|:-----------------------------|:------------------------|
| Table Schema                 | Available               |
| CSV Dialect                  | Available               |
| Locally Bundled Resources    | Available               |
| Retrieving Remote Resources  | Consumer must handle    |
| Inline Data                  | Consumer must interpret |
| Multiple Paths per Resources | Consumer must handle    |

##### Table Schema Status
See [Table Schema](https://github.com/frictionlessdata/tableschema-swift).

## Command Line Interface
A simple CLI tool is included which uses this library to display package validation warnings and errors and optionally re-export.

```bash
make
make install
datapackage-swift path/to/package
```

## Integrating into Your Project

### Swift Package Manager
This project is set up using [Swift Package Manager](https://swift.org/package-manager/). Ideally add it to your project's SPM dependencies or use Xcode's integrated Swift Package Manager. Alternatively, generate your own Xcode `.xcodeproj` to integrate with your build system using:

```bash
swift package generate-xcodeproj --xcconfig-overrides ./Configuration.xcconfig
```

## Example Usage

### Instantiation
A package can be instantiated from a JSON descriptor:

```swift
let registry = Registry(default: Package.self)
registry.add(profile: Package.self)
registry.add(profile: TabularDataPackage.self)

var importURL = URL(fileURLWithPath: "./")
importURL.appendPathComponent("2017-12-14", isDirectory: true)

var log = Log()

guard let package = Package.package(url: importURL, registry: registry, log: &log) else {
    // Error
}
```

Or it may be instantiated directly:

```swift
let package = Package()
```

### Serialization

```swift
var exportURL = URL(fileURLWithPath: "./")
exportURL.appendPathComponent("2017-12-15", isDirectory: true)

guard package.save(to: exportURL) else {
    // Error
}
```

## Understanding the Library

### Model Checking (Validation and Verification)
The library makes a distinction between validation and verification: Validation corresponds to the validity of the model at instantiation when it is deserialized from a JSON descriptor. Whereas verification corresponds to validity of the model at some point in time after instantiation.

The distinction is helpful because the specification imposes some constraints on a model that may not all be resolvable at compile time. Examples include whether the value of a required property is inappropriately formatted, or a property whose existence is conditional on another property. Additionally, the models should allow for transitioning as the model is updated to a new state. As such, it is necessary to check for validity at instantiation and through a model verification step while using the model.

Two methods are used for model checking. First, some initializers are failable. Second, a log is exposed that denotes errors and warnings about the model.

```swift
var log = Log()

let package = Package.package(url: importURL, registry: registry, log: &log)
let package?.verify(log: &log)

for item in log.items {
    print(item.message)
}
```

Logs are leveled by severity with errors resulting in models not being instantiated. An error corresponds to a `MUST`, `MUST NOT`, `REQUIRED`, `SHALL`, or `SHALL NOT` in the specification. A warning corresponds to `SHOULD`, `SHOULD NOT`, or `RECOMMENDED`.

### Model Representation
Rather than a model instance maintaining an underlying JSON descriptor that is modified when accessing various properties, this library decodes the JSON descriptor to model objects. This has implications for serialization where exporting of the model is not stable: Unchanged properties may be altered, and the ordering and formatting of properties may not be preserved.

### A Word on Swift Libraries
Swift 5 is source compatible with Swift 4 and the history has been that each new Swift version is source compatible with the last. Although ABI stability, module stability, and library evolution support are ongoing issues that address compatibility concerns over authoring and consumption of libraries, in practice binary compatibility is less of a concern than source code compatibility since code for this library is available. Additionally, Swift 5's ABI stability is only available on Apple's platforms -- other platforms like Linux are to implement it separately.
