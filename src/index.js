// import page from 'page'
//
// import {
//   item,
//   article,
//   insertHTML,
//   insertCategories
// } from './views'
//
// import {
//   getPosts,
//   getEntrySlug,
//   getCategories,
//   searchByCategory
// } from './content'
//
// import { getFirstParagraphFromString } from './helpers'
//
require('./styles/main.scss')
//
//
// getCategories.then( res => insertCategories(res.items.map(catItem => catItem.fields.title)))
//
// page('/', function(context, next) {
//   getPosts.catch(err => console.error(err))
//   .then(res => {
//     console.log(res)
//     insertHTML(res.items.map(articleItem => {
//         const fields = articleItem.fields
//         const imageUrl = fields.featuredImage ? fields.featuredImage.fields.file.url : null
//         return item({
//           title: fields.title,
//           link: `/article/${fields.slug}`,
//           bgImg: imageUrl,
//           subtitle: getFirstParagraphFromString(fields.body)
//         })
//       }).join('')
//     )
//   })
// })
//
// page('/article/:articleSlug', function(context, next) {
//   const articleSlug = context.params.articleSlug
//
//   getEntrySlug(articleSlug).catch(err => console.error(err))
//   .then(res => {
//     console.log(res)
//     insertHTML(article(res.items[0].fields.body))
//   })
// })
//
// page('/about', function(context, next) {
//   console.log('/about', context)
// })
//
// page('/search/:tag', function(context, next) {
//   searchByCategory(context.params.tag)
//   .catch(err => console.error(err))
//   .then(res => insertHTML(res.items.map(articleItem => {
//       const fields = articleItem.fields
//       const imageUrl = fields.featuredImage ? fields.featuredImage.fields.file.url : null
//       return item({
//         title: fields.title,
//         link: `/article/${fields.slug}`,
//         bgImg: imageUrl,
//         subtitle: getFirstParagraphFromString(fields.body)
//       })
//     }).join('')
//   ))
// })
//
// page({
//   hashbang: true
// })


import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/Routes'

ReactDOM.render(<Routes />, document.getElementById('main'))
