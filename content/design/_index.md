+++
date = "2017-05-12T06:46:57-04:00"
title = "Design Guidelines"

+++

The following are guidelines used at Atomic Robot when designing user interfaces for mobile applications.

# DESIGN PROCESS

The following is a high-level outline of our design process.

## RESEARCH

The discovery step focuses on understanding the user personas, user goals and client requirements. 

Activities:

- Audience research
- Competitive analysis
- Collect Existing brand and product info

Work products:

- Personas
- Goal Map/User Flow
- Mood board (Optional)


## SKETCH

The sketch step is focused on brainstorming interaction models and user experience designs to accomplish the user goals.

Activities:

- Wireframing and page/app flow


Work products: 

- App Flow
- Wireframes
- Style Tiles (Optional)


## CONCEPT DEVELOPMENT

Build on the sketches to produce high fidelity concept designs.

Activities:

- Concept Development

Work products: 

- Visual Concepts

## PROTOTYPE (OPTIONAL)

Create interactive prototype(s) for key user flow and interactions/animations. The prototype does not need to be a comprehensive representation on the final design.

Activities:

- Prototype creation
- Animation and interaction design

Work Products:

- Interactive Prototype

## ART PRODUCTION

Export design assets and create design specs for solution implementation and client hand-off/maintenance.

Activities:

- Export assets
- Create style guide/design specs as needed

Work Products:

- Design assets
- Design Specs
- Style Guide

# DESIGN TOOLS

## ABSTRACT 

Abstract is a version control tool for design files. Currently it only supports Sketch but support for other tools are in development. We use abstract for two main reasons: to have every project easily accessible to the entire team, and be able to access files from any point in time. We use this tool hand in tandem with Sketch. 

https://www.goabstract.com

Abstract tracks changes to Sketch files so you can reference or revert back to previous files. It also allows multiple people to work on a project at the same time without overwriting their changes. Always launch Sketch from Abstract to ensure that the changes are being captured. 

Abstract Guide: How it Works
Abstract Overview Video

## SKETCH

For user interface design and wireframing we favor Sketch. Sketch has strong support for vector based designs and integration with tools for graphic production and prototyping. When needed we may also leverage Adobe Creative Cloud tools.

Consider these general practices when designing user interfaces using Sketch.

- Use vector drawing tools only to enable scaling to different screen resolutions - avoid raster based tools
- Leverage symbols (or smart objects in Photoshop) for reusable assets like buttons, switches, etc.
- Design in 1x scale - avoids accidentally creating half pixel sizes when scaling designs
- Snap to pixel grid
- Keep layers and layer groups well organized and use meaningful names

https://www.sketchapp.com

## ZEPLIN 

Zeplin is used for developer handoff from the designer. Zeplin works with Sketch and Adobe XD. It provides design specs for the developer including exact colors, dimensions and positioning. Zeplin can also be used to create a style guide for the project. 

https://zeplin.io

## FLINTO

Flinto is great for animating simple UI interactions. For more detailed animations, we tend to use After Effects.

https://www.flinto.com

## ADOBE CREATIVE CLOUD

We do still use Illustrator, Photoshop, After Effects, XD, and InDesign as needed. 

## GOOGLE DRIVE

Shared assets, templates, and resources can be found in the the Creative Team Google Drive. 

https://drive.google.com

# ABSTRACT VERSION CONTROL

Abstract is for version control. It allows you to reference or revert back to previous files. It also allows multiple people to work on a project at the same time without overwriting their changes. Always launch Sketch from Abstract to ensure that the changes are being captured. 

Abstract Guide: How it Works
Abstract Overview Video

## SKETCH PLUGINS

SKETCH TOOLBOX

http://sketchtoolbox.com/

CRAFT

https://www.invisionapp.com/craft?utm_source=google&utm_medium=paid_search&utm_campaign=AW_EC_G_NAM_Search_SemiBranded_EM&utm_content=Craft_Sketch_EM&utm_term=craft%20sketch_e&_bk=craft%20sketch&_bt=205510473534&_bm=e&_bn=g&gclid=EAIaIQobChMI7_fNwr2w2gIVXVgNCh3ZyAZrEAAYASAAEgLMu_D_BwE

SYMBOL ORGANIZER

https://sketchapphub.com/resource/symbol-organiser-plugin/

RENAME IT

https://sketchapphub.com/resource/rename-it/

SKETCH RUNNER

http://sketchrunner.com/


## ASSET EXPORTING

Make sure that you are designing in 1x. Be aware of the artboard background. You can leave this option unchecked for a transparent background, or turn this on to include a background color in the export. The color can be manipulated.

To simplify the workflow of asset production we use the export feature of Sketch. This becomes even more valuable as we iterate on a design. These tools allow the assets to be generated, scaled and named appropriately for each device and resolution required.

GLYPHS

Consider these general guidelines when creating glyphs and icons. 
Use the vector based drawing tools in Sketch or Adobe Creative Cloud (Illustrator, XD, Photoshop)
Use artboards or slices to specify exact sizing and for visually centering glyphs/icons
Use a consistent style of line weight, corner radius and fill for icons to maintain a coherent design
Export the artboards or slices for glyphs and icons as vector files

IOS: 1x PDF
ANDROID: 1x SVG

PHOTOGRAPHY

When using stock photography it is important to ensure the photography is license appropriately. When using photography in an app, export the images as JPG for best comparison and quality

## INTERACTIVE PROTOTYPES

SKETCH

Sketch can be used for creating basic, interactive prototypes. However, it currently is fairly limited. Flinto or After Effects can be used for more advanced prototypes and animations.

https://sketchapp.com/docs/prototyping/

FLINTO

Flinto is used for easy UI animations. These animations cannot be created in InVision, but need to be visually shown to clients or the team. You can import you Sketch file into Flinto, so that each layer is available to manipulate. Be conscious of your layer grouping and symbols, as they will not be as editable in Flinto. For any complicated animations, use After Effects. 

## SKETCH BEST PRACTICES

SKETCH LIBRARIES

Sketch supports shared Libraries for common assets used across multiple projects. We store our Sketch libraries in Abstract.

https://www.goabstract.com/blog/sketch-libraries-abstract-per-project-libraries/

RESIZING CONSTRAINTS

Use resizing constraints in Sketch to make designs adaptive.

https://www.sketchapp.com/docs/layer-basics/constraints/

ARTBOARDS

Use artboards with meaningful names to group layers.

https://sketchapp.com/docs/grouping/artboards/

LAYER STYLES

Use layer styles to reuse stylistic elements throughout the Sketch document,. 

https://sketchapp.com/docs/styling/shared-styles/

TEXT STYLES

Define text styles to for text elements used throughout the document.

https://sketchapp.com/docs/text/text-styles/

SYMBOLS

Define symbols for design elements used throughout the document. Convert the symbols to libraries for reuse across documents.

https://sketchapp.com/docs/symbols/

# DESIGN RESOURCES

HUMAN INTERFACE GUIDELINES

https://developer.apple.com/design/human-interface-guidelines/

MATERIAL DESIGN GUIDELINES

https://material.io/design/

MATERIAL DESIGN THEME EDITOR

https://material.io/tools/theme-editor/

APPLE DESIGN RESOURCES

https://developer.apple.com/design/resources/

