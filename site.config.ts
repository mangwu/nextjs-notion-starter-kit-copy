import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Mang-Wu-Blog-4910d907c9a54b0887e4493647b522da',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Mangwu Blogs',
  domain:
    'https://www.notion.so/mangwu/Mang-Wu-Blog-4910d907c9a54b0887e4493647b522da',
  author: 'mangwu',
  // open graph metadata (optional)
  description: `mangwu's blogs`,

  // social usernames (optional)
  // twitter: '',
  github: 'mangwu',
  zhihu: 'mang-wu-57-61',
  bilibili: '140111670',
  // linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6401d664-2a3b-450d-95a6-f42f65dc3a8d%2F168.png?table=block&id=8394d152-5663-47b1-9f3b-ffe26d500e62&spaceId=2c35fb4e-2557-457e-82c5-7003e13014e8&width=250&userId=8b4435a8-c819-4b45-852e-aba3fc192c8b&cache=v2',
  defaultPageCover:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F35c93634-e575-46be-8051-089827d8002e%2FKonachan.com_-_327455_ame246_book_building_dark_f.jpg?table=block&id=07e70a4a-3f22-42a5-a4a4-ea638e1e5930&spaceId=2c35fb4e-2557-457e-82c5-7003e13014e8&width=2000&userId=8b4435a8-c819-4b45-852e-aba3fc192c8b&cache=v2',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/JavaScript': 'JavaScript-2cd5015d1fd14e10a78aedbc74e60ac7',
  //   '/React': 'React-04d002640476440791cefb93895f6dad'
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'JavaScript',
      pageId: '2cd5015d1fd14e10a78aedbc74e60ac7',
      url: '2cd5015d1fd14e10a78aedbc74e60ac7'
    },
  ]
})
