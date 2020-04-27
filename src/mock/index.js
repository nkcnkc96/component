import Mock from 'mockjs'

// const data = Mock.mock({
//   title: '@ctitle(5)',
//   sentence: '@csentence',
//   id: '@increment(1)'
// })
const data = Mock.mock({
  'list|8-20': [
    {
      name: '@cname()',
      address: '@city(true)',
      id: '@increment(1)'
    }
  ]
})
console.log(data)
