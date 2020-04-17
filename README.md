# valtech-cards

A simple project showcasing a card component created following the concepts of atomic design.

## Patterns and library choices
For this project, the chosen CSS preprocessor was [SCSS](https://sass-lang.com/) with [BEM](http://getbem.com/) as the metodology. It goes really well with the atomic component structure.

The grid system used was [Tailwind CSS](https://tailwindcss.com/), an unopinionated and low-level CSS framework. Because of it and [Purgecss](https://www.purgecss.com/), the CSS bundle of this project can be very small (7.6 KiB / 2.1 KiB Gzipped).

The JavaScript framework of choice was [Vue.js](https://vuejs.org/). Thanks to its flexible approach to visual components and [Vue CLI](https://cli.vuejs.org/), this project was much easier to bootstrap and develop.

The animations were all made with [GSAP](https://greensock.com/gsap/), a modern and high performant animation library. With it, its painless to coordenate multiple animations, using timelines. The API is also quite simple and extensible.

The component library used for the demo was [Fractal](https://fractal.build/), its previews can be used as documentation and example of component implementation.

The end-to-end tests were done with [Cypress](https://www.cypress.io/), a very fast and reliable test runner.

## Demo
The project is deployed in the Netlify platform. [Here](https://valtech-cards.netlify.app/) it is. The docs page is also available [here](https://valtech-cards-docs.netlify.app/).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Generate the demo assets
```
yarn run build:demo
```

### Generate a static html of the demo
```
yarn run build:fractal
```

### Serves a local version of the demo
```
yarn run serve:fractal
```

### Run end-to-end tests
```
yarn run test:e2e
```
