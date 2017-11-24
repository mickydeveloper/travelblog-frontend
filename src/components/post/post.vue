<template src="./post.html"></template>
<script>
import sanity from '../../sanity'

const query = `*[_type == "post" && _id == $id] {
  _id,
  author,
  "imageUrl": cover.asset->url,
  content,
  title,
}[0]
`

export default {
  props: {
    id: {
      type: String
    }
  },
  name: 'post',
  data () {
    return {
      loading: true,
      post: null
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
      sanity.fetch(query, {id: this.id}).then(post => {
        this.loading = false
        this.post = post
      }, error => {
        this.error = error
      })
    }
  }
}
</script>
<style src="./post.scss" lang="scss" scoped></style>
