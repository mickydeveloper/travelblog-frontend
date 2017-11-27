<template src="./posts.html"></template>
<script>
import sanity from '../../sanity'
import aboutWidget from './aboutWidget/aboutWidget.vue'

const query = `*[_type == "post"] | order(_createdAt desc) {
  _createdAt,
  _id,
  author ->{name},
  "imageUrl": cover.asset->url,
  content,
  title,
}[0...50]`

export default {
  name: 'posts',
  components: {
    'about-widget': aboutWidget
  },
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
<style src="./posts.scss" lang="scss" scoped></style>
