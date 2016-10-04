import {markdown} from 'markdown'

const main = document.getElementById('main')
const categories = document.getElementById('categories')

const getFirstParagraph = (body) => markdown.toHTML(body)
const categoryLi = (name) => `<li>
    <a href="/search/${name}">${name}</a>
</li>`
const item = ({bgImg = '', link, title, subtitle = '', body = ''}) =>
`<article class="post" style="background-image: url(${bgImg});">
  <div class="post__inner">
    <h1 class="post__title"><a href="${link}">${title}</a></h1>
    <p class="post__subtitle">${subtitle || getFirstParagraph(body)}</p>
  </div>
</article>`

const pageLink = (number, href) => `<a href="${href}">${number}</a>`
const article = (content) => `<article class="article">${markdown.toHTML(content)}</article>`

const insertHTML = (html) => main.innerHTML = html
const insertCategories = (categoryNames) => categories.innerHTML = categoryNames.map(cat => categoryLi(cat)).join('')

export {
  item,
  article,
  insertHTML,
  pageLink,
  insertCategories
}
