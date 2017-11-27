<template src="./about.html"></template>
<script>
import sanity from '../../sanity'

const query = `*[_type == "about"] | order(_createdAt desc) {
  _id,
  "profileImageUrl": profile.asset->url,
  content,
  title,
  "coverImageUrl": cover.asset->url,
  secondaryContent,
  secondaryTitle,
}[0]`

export default {
  name: 'about',
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
      this.error = this.about = null
      this.loading = true
      sanity.fetch(query).then(about => {
        this.loading = false
        this.about = about
      }, error => {
        this.error = error
      })
    }
  }
}
</script>
<style src="./about.scss" lang="scss" scoped></style>
