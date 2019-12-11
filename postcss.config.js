const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.vue'],
  whitelistPatterns: [/^card__background/],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  'plugins': [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')(),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
