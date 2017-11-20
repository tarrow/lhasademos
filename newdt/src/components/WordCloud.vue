<template>
    <div id="wordfreqcloud">
        <wordcloud
        :data="Words"
        nameKey="name"
        valueKey="value">
        </wordcloud>
    </div>
</template>

<script>
  import wordcloud from 'vue-wordcloud'
  export default {
    name: 'wordfreqcloud',
    components: {
      wordcloud
    },
    data()  { return {
      Words: []
    }},
    mounted() {
      console.log(this.data)
      this.Words = this.BuildWords()
    },
    methods: {
      BuildWords() {
        var me = this
        return Object.keys(me.data['Word Frequencies']).map(function (key) {
          return {name: key, value: me.data['Word Frequencies'][key]}
        })
      }
  },
    props:['data', 'index'],
  }
</script>
