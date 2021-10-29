module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': false
      }
    })
  ]
}
