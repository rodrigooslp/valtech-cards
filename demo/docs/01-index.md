---
title: docs
---

Welcome to the `valtech-cards` docs.

This project's components are structured following the concept of atomicity. The smaller pieces are called elements, they are used in conjunction to create blocks. Those blocks can be used to create widgets.

Exemples of elements in the context of this project could be the `CardTitle`, the `CardLogo` or the `CardBackground`. They are simple, atomic, with a single responsibility. All components are made, in their essence, of a combination of elements.

An example of a block is the `CardCityHeader`. It is made with one `CardTitle` and one `CardSubtitle`. A block can be made of other blocks, multiple elements or anything between.

Our top level UI components are the widgets. Here we have the `Card`. It is the conjunction of multiple elements and blocks working together.


### Sources
For a more interesting read about the concept of Atomic Design, you should see [this](http://atomicdesign.bradfrost.com/) awesome content by Brad Frost.