<template src="./aboutWidget.html"></template>
<script>
import sanity from '../../../sanity'

const query = `*[_type == "about"] | order(_createdAt desc) {
  _id,
  content,
  title,
  "coverImageUrl": cover.asset->url,
  secondaryContent,
  secondaryTitle,
  person -> {name,roles},
  "profileImageUrl": person -> profile.asset -> url
}[0]`

export default {
  name: 'aboutWidget',
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
<style src="./aboutWidget.scss" lang="scss" scoped></style>
