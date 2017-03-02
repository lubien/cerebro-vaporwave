'use strict';
const vaporwavefy = require('aesthetics')
const icon = require('../icon.png')
const title = 'Vaporwave'
const keyword = 'vaporwave'

const plugin = ({term, display, actions}) => {
  const rgx = /^vaporwave (.+)/

  if (rgx.test(term)) {
    const [, query] = rgx.exec(term)
    const vaporwave = vaporwavefy(query)

    display({
      icon,
      title,
      subtitle: `cmd+c to copy ${vaporwave}`,
      clipboard: vaporwave
    })
  }
}

module.exports = {
  keyword,
  fn: plugin
}
