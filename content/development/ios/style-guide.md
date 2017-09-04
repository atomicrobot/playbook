+++
date = "2017-05-12T06:46:57-04:00"
title = "Swift Style Guide"

+++


## Optionals

When accessing an optional value, use optional chaining if the value is only accessed once or if there are many optionals in the chain.

```swift
self.textContainer?.textLabel?.setNeedsDisplay()
```

Use `if let` binding to avoid force unwrapping (`!`) or repeated access of the same optional value. 

```swift
if let address = address {
    print("\(address.street), \(address.city), \(address.state) \(address.zip) )
}
```

Use `guard` for functions that should exit early for a nil value or if the `if let` optional binding would produce a *pyramid of doom* (nested optional binding). 

```swift
function centerMap(to location: CLLocation?) {
    guard let location = location else { return }
    moveTo(location)
}
```

## Use of `self`

Reference `self` only when required to differentiate between property names and arguments in initializers, and when referencing properties in closure expressions.

```swift
class Position {
  let row: Int, column: Int

  init(row: Int, column: Int) {
    self.row = row
    self.column = column

    loadData { 
       print("Finished loading x: \(self.row) y: \(self.column) position") 
    }
  }
  ...
}
```

## Protocol Conformance

When implementing protocol conformance, prefer adding a separate extension for the methods. This keeps the related methods grouped together.

```swift
class MyViewcontroller: UIViewController {
  // class stuff here
}

extension MyViewcontroller: UITableViewDataSource {
  // table view data source methods
}

extension MyViewcontroller: UIScrollViewDelegate {
  // scroll view delegate methods
}
```

## Closures

Use trailing closure syntax wherever possible.

```swift
URLSession.shared.dataTask(with: URL) { (data, response, error) in
    ...
}.resume()
```

It is acceptable to use shorthand argument names such as `$0` if the closure is one line and readability is maintained.

```swift
reversedNames = names.sorted { $0 > $1 }
```

Use a typealias when closures are referenced in multiple places.

```swift
typealias CompletionHandler = (Int) -> Bool
```

When referencing `self` in an async closure it is possible to create an unintended retain cycle. Use `[weak self]` then "strongify" inside the closure 

```swift
APIClient.fetch { [weak self] result in
  guard let `self` = self else { return }
  self.stopLoading()
  self.show(result)
}
```

# Formatting

Example:

```swift

// MARK: Types and naming

// Types begin with a capital letter
struct User {
  let name: String

  // if the first letter of an acronym is lowercase, the entire thing should
  // be lowercase
  let json: Any

  // if the first letter of an acronym is uppercase, the entire thing should
  // be uppercase
  static func decode(from json: JSON) -> User {
    return User(json: json)
  }
}

// Use () for void arguments and Void for void return types
let f: () -> Void = { }

// Use typealias when closures are referenced in multiple places
typealias Callback = (Int) -> Bool

class MyViewController: UIViewController {
  // Prefer strong IBOutlet references
  @IBOutlet var button: UIButton!

  // Declare variables/constants using type interference instead of explicit 
  // type decalarations when appropriate
  var subtitle = ""

  // Define arrays and dictionaries using the type
  var users: [User] = []
}

// MARK: Organization

// Use an extension for group methods for protocol conformance
extension MyViewController: UITableView {
  func numberOfSections(in tableView: UITableView) -> Int {
     ...
  }

  func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    ...
  }

  func tableView(_ tableView: UITableView, 
      cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    ...
  }
}
```
