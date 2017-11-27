<template src="./related-posts.html"></template>
<script>
import sanity from '../../../sanity'

const query = `*[_type == "post"][0...4]{
  _createdAt,
  _id,
  author ->{name},
  "imageUrl": cover.asset->url,
  content,
  title,
}`

export default {
  name: 'related-posts',
  data () {
    return {
      loading: true,
      randomPost: 0,
      posts: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      sanity.fetch(query).then(posts => {
        this.loading = false
        this.posts = posts
        this.randomPost = Math.floor(Math.random() * (this.posts.length - 1) + 1)
      }, error => {
        this.error = error
      })
    },
    parseDate (datestring) {
      var d = new Date(datestring)
      var currDate = d.getDate()
      var currMonth = d.getMonth()
      var currYear = d.getFullYear()
      return (currDate + '-' + currMonth + '-' + currYear)
    }
  }
}
</script>
<style src="./related-posts.scss" lang="scss" scoped></style>
