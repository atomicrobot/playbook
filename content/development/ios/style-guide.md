+++
date = "2017-05-12T06:46:57-04:00"
title = "Style Guide"

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
// Don't include generated header comments

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

// When using classes, default to marking them as final
final class MyViewController: UIViewController {
  // Prefer strong IBOutlet references
  @IBOutlet var button: UIButton!
}

// Use typealias when closures are referenced in multiple places
typealias CoolClosure = (Int) -> Bool

// Use aliased parameter names when function parameters are ambiguous
func yTown(some: Int, withCallback callback: CoolClosure) -> Bool {
  return CoolClosure(some)
}

// It's OK to use $ variable references if the closure is very short and
// readability is maintained
let cool = yTown(5) { $0 == 6 }

// Use full variable names when closures are more complex
let cool = yTown(5) { foo in
  if foo > 5 && foo < 0 {
    return true
  } else {
    return false
  }
}

// Strongify weak references in async closures
APIClient.getAwesomeness { [weak self] result in
  guard let `self` = self else { return }
  self.stopLoadingSpinner()
  self.show(result)
}

// If the API you are using has implicit unwrapping you should still use if-let
func someUnauditedAPI(thing: String!) {
  if let string = thing {
    print(string)
  }
}

// When the type is known you can let the compiler infer
let response: Response = .Success(NSData())

func doSomeWork() -> Response {
  let data = ...
  return .Success(data)
}

switch response {
case let .Success(data):
  print("The response returned successfully \(data)")

case let .Failure(error):
  print("An error occured: \(error)")
}

// MARK: Organization

// Group methods into specific extensions for each level of access control
private extension MyClass {
  func doSomethingPrivate() { }
}

// MARK: Breaking up long lines

// One expression to evaluate and short or no return
guard let singleTest = somethingFailable() else { return }
guard statementThatShouldBeTrue else { return }

// If there is one long expression to guard or multiple expressions
// move else to next line
guard let oneItem = somethingFailable(),
  let secondItem = somethingFailable2()
  else { return }

// If the return in else is long, move to next line
guard let something = somethingFailable() else {
  return someFunctionThatDoesSomethingInManyWordsOrLines()
}
```
