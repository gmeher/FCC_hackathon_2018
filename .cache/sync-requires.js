// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("D:/projects/Freecodecamp_Hackathon/FCC_hackathon_2018/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\src\\pages\\page-2.js"))
}

exports.json = {
  "layout-index.json": require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\.cache\\json\\layout-index.json"),
  "dev-404-page.json": require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\.cache\\json\\dev-404-page.json"),
  "404.json": require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\.cache\\json\\404.json"),
  "index.json": require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\.cache\\json\\index.json"),
  "page-2.json": require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\.cache\\json\\page-2.json"),
  "404-html.json": require("D:\\projects\\Freecodecamp_Hackathon\\FCC_hackathon_2018\\.cache\\json\\404-html.json")
}