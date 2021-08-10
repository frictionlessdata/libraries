---
title: tableschema-swift
---

[![Build](https://travis-ci.org/frictionlessdata/tableschema-swift.svg?branch=master)](https://travis-ci.org/frictionlessdata/tableschema-swift)
[![Coverage](https://coveralls.io/repos/github/frictionlessdata/tableschema-swift/badge.svg?branch=master)](https://coveralls.io/github/frictionlessdata/tableschema-swift?branch=master)
[![Codebase](https://img.shields.io/badge/codebase-github-brightgreen)](https://github.com/frictionlessdata/tableschema-swift)
[![Support](https://img.shields.io/badge/support-discord-brightgreen)](https://discordapp.com/invite/Sewv6av)

This is a *draft* Swift language implementation of [TableSchema](https://frictionlessdata.io/specs/table-schema/) for defining schemas to work with tabular data.

A schema on tabular data defines types, imposes constraints, and creates foreign key relationships on fields as data values move from some physical representation to a logical one and vice versa. For instance, a stored CSV file (physical) can be loaded in-memory along with a corresponding schema descriptor to be transformed from string values to Swift Standard Library types like `Date` or `Int` (logical).

## Requirements
 * Source compatibility with Swift 4.2
 * Target platforms
    * Apple platforms, specifically iOS and macOS
       * Full functionality in iOS >= 10 and macOS >= 10.12
    * Linux, limited by features available in `swift-corelibs-foundation`
 * Apple's `Foundation` framework is the only dependency
 * Independent from any one particular physical representation

## Implementation Status
Being a draft implementation means APIs have not been solidified and are subject to change. However, much of the foundation has been laid, there is a testing suite to keep what should be working in check, and it is being used in at least one shipping product over a subset of the available features. The approach has been implementing features on an as-needed basis.

### Feature Status
| Feature                         | Status                            |
|:--------------------------------|:----------------------------------|
| Streaming and cast on iteration | Available                         |
| Casting field types and formats | Partial                           |
| [De]serialization               | Available in Tabular Data Package |
| Schema inference                | Missing (Unlikely to implement)   |
| Strict mode                     | Missing                           |
| Constraint validation           | Missing                           |
| Foreign key validation          | Missing                           |
| Rich (RDF) Types                | Missing (Unlikely to implement)   |

### Casting Field Types and Formats Status
| Type      | Formats                    | Additional Properties   | Forward Status (Physical to Logical) | Reverse Status (Logical to Physical) |
|:----------|:---------------------------|:------------------------|:-------------------------------------|:-------------------------------------|
| string    | default, uri, binary, uuid | *N/A*                   | Available                            | Available                            |
| string    | email                      | *N/A*                   | Unavailable                          | Unavailable                          |
| number    | *N/A*                      | *Any*                   | Unavailable                          | Unavailable                          |
| integer   | *N/A*                      | bareNumber = false      | Available*                           | Available                            |
| integer   | *N/A*                      | bareNumber = true       | Available                            | Available                            |
| boolean   | *N/A*                      | trueValues, falseValues | Available                            | Available                            |
| object    | *N/A*                      | *N/A*                   | Available                            | Unavailable                          |
| array     | *N/A*                      | *N/A*                   | Available                            | Available                            |
| date      | *N/A*                      | default                 | Available*                           | Unavailable                          |
| date      | *N/A*                      | any, pattern            | Unavailable                          | Unavailable                          |
| time      | *N/A*                      | default                 | Available*                           | Unavailable                          |
| time      | *N/A*                      | any, pattern            | Unavailable                          | Unavailable                          |
| datetime  | *N/A*                      | default                 | Available*                           | Available*                           |
| datetime  | *N/A*                      | any, pattern            | Unavailable                          | Unavailable                          |
| year      | *N/A*                      | *N/A*                   | Available*                           | Unavailable                          |
| yearmonth | *N/A*                      | *N/A*                   | Available*                           | Unavailable                          |
| duration  | *N/A*                      | *N/A*                   | Available*                           | Unavailable                          |
| geopoint  | default, array, object     | *N/A*                   | Available                            | Unavailable                          |
| geojson   | default, topo              | *N/A*                   | Unavailable                          | Unavailable                          |
| any       | *N/A*                      | *N/A*                   | Unavailable                          | Unavailable                          |

\* Only available on Apple products (namely iOS and macOS) due to an incomplete implementation in `swift-corelibs-foundation`

## Integration into Your Project
This project is set up using [Swift Package Manager](https://swift.org/package-manager/). Ideally add it to your project's SPM dependencies or use Xcode's integrated Swift Package Manager. Alternatively, generate your own Xcode `.xcodeproj` to integrate with your build system using:

```bash
swift package generate-xcodeproj --xcconfig-overrides ./Configuration.xcconfig
```

## Example Usage

### Cast on Iteration from a Data Source
Deserializing of data (from, say, a CSV file) can be accomplished by setting up a `Table` with an iterator that provides row information using a `TableProvider` data source. This allows for the data source to stream data rather than necessarily loading everything in-memory. `Table` is agnostic from the specific data source but expects the data source to convert to `String` representations.

```swift
let sourcePath = "import.csv"
let sourceDialect = DialectalCSV.Dialect()

let fields = [Field("name", type: .string), Field("birthday", type: .date)]
let schema = Schema(fields)

guard let provider = MyTableProvider(atPath: sourcePath, dialect: sourceDialect) else {
    fatalError("Oops")
}
let table = Table(provider: AnyTableProvider(provider), schema: schema)
let objects = table.map { $0 }
```

And defining `MyTableProvider` together with a CSV parsing library like `DialectalCSV`:

```swift
class MyTableProvider: TableProvider {

    private let handler: DialectalCSV.InputHandler
    private let streamIterator: DialectalCSV.InputIterator

    init?(atPath path: String, dialect: DialectalCSV.Dialect) {
        guard let handler = DialectalCSV.InputHandler(atPath: path, dialect: dialect) else {
            return nil
        }
        self.handler = handler
        self.streamIterator = handler.makeIterator()
    }

    // MARK: - TableProvider

    var header: Header? {
        return self.streamIterator.header
    }

    // MARK: - Sequence

    func makeIterator() -> AnyIterator<[String?]> {
        return AnyIterator {
            return self.streamIterator.next()
        }
    }

}
```

### Reverse Casting (Logical to Physical)

Cast the entire data set in-memory:

```swift
let objects = [[Any?]]()
let rows = objects.map { schema.reverseCast(row: $0) }
```

Or streaming output using a CSV parsing library like `DialectalCSV`:

```swift
let objects: [[Any?]] = [["River Tam", Date(timeIntervalSince1970: 16725225600)],["Simon Tam", nil]]

let destinationPath = "export.csv"
var destinationDialect = DialectalCSV.Dialect()
destinationDialect.nullSequence = "null"

FileManager.default.createFile(atPath: destinationPath, contents: nil)
guard let outputHandler = DialectalCSV.OutputHandler(atPath: destinationPath, dialect: destinationDialect) else {
    fatalError("Oops")
}

let header = schema.fields.map { $0.name }
try? outputHandler.open(header: header)

for object in objects {
    let row = schema.reverseCast(row: object).map { $0 }
    try? outputHandler.append(records: [row])
}

try? outputHandler.close()
```
