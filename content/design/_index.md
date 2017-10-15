+++
date = "2017-05-12T06:46:57-04:00"
title = "Design Standards"

+++

The following are standards and guidelines used at Atomic Robot when designing user interfaces for native mobile applications.

# Tools

For user interface design and wireframing we favor Sketch. Sketch has strong support for vector based designs and integration with tools for graphic production and prototyping. When needed we may also leverage Adobe Creative Cloud tools.

* Use vector drawing tools only to enable scaling to different screen resolutions - avoid raster based tools
* Leverage symbols (or smart objects in Photoshop) for reusable assets like buttons, switches, etc.
* Design in 1x scale - avoids accidentally creating half pixel sizes when scaling designs
* Snap to pixel grid 
* Keep layers and layer groups well organized and use meaningful names

# Glyphs and Icons

Glyphs and icons are used 

* Use the vector based drawing tools in Sketch or Adobe Creative Cloud (Illustrator, XD, Photoshop)
* Use artboards or slices to speecify exact sizing and for visually centering glyphs/icons
* Use a consitent style of line weight, corner radius and fill for icons to maintain a coherent design
* Export the artboars or slices for glyphs and icons as PDF vector files

# Photography

* When using photography in an app, export the images as JPG for best comparison and quality

# Asset Generation

To simplify the workflow of asset production we use [Generator](http://blogs.adobe.com/photoshopdotcom/2013/09/introducing-adobe-generator-for-photoshop-cc.html) in Photoshop and the [export](https://www.sketchapp.com/docs/exporting/) feature of Sketch. This becomes even more valuable as we iterate on a design. These tools allow the assets to be generated, scaled and named appropriately for each device and resolution required.

# Naming Conventions

## General

Use lower case for names of graphics.

Use hyphen to separate words.

`ex. button-standard-highlighted.pdf`

Use prefix when appropriate to indicate use of graphic.

<pre>ex. button-standard.pdf</pre>

Common prefixes include:
* icon
* button
* background

## Control State

Use state suffix to indicated alternate states of a control such as a button. Do not include a suffix for the normal or default state.

The following are the common states for a control. Often only the normal state is required as iOS will dim or highlight the image for the highlighted and disabled states by default

* normal (do not include in image name): `ex. button-delete.pdf`
* selected: `button-delete-selected.pdf`
* highlighted: `button-delete-highlighted.pdf`
* disabled: `button-delete-disabled.pdf`

# References

## Interface Guidelines

* Apple’s [Human Interface Guidelines](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/index.html#//apple_ref/doc/uid/TP40006556-CH66-SW1) 
* Google’s [Material Design Guidelines](http://www.google.com/design/spec/material-design/introduction.html)

## Design Pattern Catalogs

* [pttrns](http://www.pttrns.com)
* [Mobile Patterns](http://www.mobile-patterns.com)
* [Inspired UI](http://inspired-ui.com)

## Additional Resources

* [Starter’s Guide to iOS Design](http://taybenlor.com/2013/05/21/designing-for-ios.html)
