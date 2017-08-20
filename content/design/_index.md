+++
date = "2017-05-12T06:46:57-04:00"
title = "Design Standards"

+++

The following are standards and guidelines used at Atomic Robot when designing user interfaces for native mobile applications.

# Tools

For user interface design we favor Sketch (or optionally Photoshop 2014+). These tools have strong support for vector based designs and integration with tools for graphic production and prototyping.

* Use vector drawing tools only to enable scaling to different screen resolutions - avoid raster based tools
* Leverage symbols (or smart objects in Photoshop) for reusable assets like buttons, switches, etc.
* Design in 1x scale - avoids accidentally creating half pixel sizes when scaling designs
* Snap to pixel grid 
* Keep layers and layer groups well organized and use meaningful names

# Asset Generation

To simplify the workflow of asset production we use [Generator](http://blogs.adobe.com/photoshopdotcom/2013/09/introducing-adobe-generator-for-photoshop-cc.html) in Photoshop and the [export](http://bohemiancoding.com/sketch/support/documentation/11-exporting/) feature of Sketch. This becomes even more valuable as we iterate on a design. These tools allow the assets to be generated, scaled and named appropriately for each device and resolution required.

# Naming Conventions

## General

Use lower case for names of graphics.

Use hyphen to separate words.

```ex. button-standard-highlighted@2x.png```

Use prefix when appropriate to indicate use of graphic.

<pre>ex. button-standard@2x.png</pre>

Common prefixes include:
* icon
* button
* background

## Form Factor

Use form factor suffix with tilde when graphic differs between form factors.

```ex. background~ipad@2x.png```

## Orientation

Use orientation suffix when graphic differs between orientations.

```ex. background~landscape@2x.png```

* ~landscape
* ~portrait
* -landscapeleft

## Screen Height

Use suffix for images specific to screen size for example the iPhone 4", 4.7" and 5.5" and  screen.

* 4" screen: ```background~568h@2x.png```
* 4.7" screen: ```background~667h@2x.png```
* 5.5" screen: ```background~736h@2x.png```

## Control State

Use state suffix to indicated alternate states of a control such as a button. Do not include a suffix for the normal or default state.

The following are the common states for a control. Often only the normal state is required as iOS will dim or highlight the image for the highlighted and disabled states by default

* normal (do not include in image name): ```ex. button-delete@2x.png```
* selected: ```button-delete-selected@2x.png```
* highlighted: ```button-delete-highlighted@2x.png```
* disabled: ```button-delete-disabled@2x.png```

# References

## Interface Guidelines

* Apple’s [Human Interface Guidelines](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/index.html#//apple_ref/doc/uid/TP40006556-CH66-SW1) 
* Google’s [Material Design Guidelines](http://www.google.com/design/spec/material-design/introduction.html)

## Design Pattern Catalogs

* [pttrns](http://www.pttrns.com)
* [Mobile Patterns](http://www.mobile-patterns.com)
* [Inspired UI](http://inspired-ui.com)
* [Capptivate](http://capptivate.co)

## Additional Resources

* [Starter’s Guide to iOS Design](http://taybenlor.com/2013/05/21/designing-for-ios.html)
