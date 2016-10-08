import contentful from 'contentful'
import config from './config'

const CONTENT_TYPE_POST = '2wKn6yEnZewu2SCCkus4as'
const CONTENT_TYPE_CATEGORY = '5KMiN6YPvi42icqAUQMCQe'

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: config.space,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: config.accessToken
})

const entriesOpts = {
  content_type: CONTENT_TYPE_POST,
  limit: config.pageSize
}
// client.getEntries({content_type: CONTENT_TYPE_POST})
// .catch( err => console.error(err))
// .then(function (entry) {
//   console.log('Entry:', entry)
// })


// getSpace
// getContentType
// getContentTypes
// getEntry
// getEntries
// getAsset
// getAssets
// parseEntries
// sync

const getEntries = (opts) => client.getEntries(Object.assign({}, entriesOpts, opts))
const getPosts = client.getEntries({content_type: CONTENT_TYPE_POST})
const getCategories = client.getEntries({content_type: CONTENT_TYPE_CATEGORY})
const searchByCategory = (cat) => client.getEntries({content_type: CONTENT_TYPE_POST, 'fields.tags[in]': cat.toLowerCase()})
const getEntrySlug = (entrySlug) => client.getEntries({'fields.slug': entrySlug, content_type: CONTENT_TYPE_POST})
const getEntry = (entryId) => client.getEntry(entryId)

export {
  getPosts,
  getEntry,
  getEntrySlug,
  getCategories,
  searchByCategory,
  getEntries
}
