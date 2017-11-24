<template src="./posts.html"></template>
<script>
import sanity from '../../sanity'

const query = `*[_type == "post"] {
  _id,
  author,
  "imageUrl": cover.asset->url,
  content,
  title,
}[0...50]`

export default {
  name: 'posts',
  data () {
    return {
      loading: true,
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
      }, error => {
        this.error = error
      })
    }
  }
}
</script>
<style src="./posts.scss" lang="scss" scoped></style>
