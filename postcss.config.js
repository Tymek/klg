const dir = `${__dirname}`

module.exports = () => ({
  plugins: [
    require("tailwindcss")(`${dir}/tailwind.config.js`),
    require("autoprefixer"),
  ],
})
