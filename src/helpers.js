import {markdown} from 'markdown'

const getFirstParagraph = (html) => {
  const df = document.createDocumentFragment()
  const div = document.createElement('div')

  df.appendChild(div)
  div.innerHTML = html
  return df.querySelector('p').innerText
}

const getFirstParagraphFromString = (htmlString) => getFirstParagraph(markdown.toHTML(htmlString))


export {
  getFirstParagraph,
  getFirstParagraphFromString
}
