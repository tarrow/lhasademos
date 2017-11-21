<template>
    <div id="wordfreqcloud">
        <wordcloud
        :data="Words"
        nameKey="name"
        valueKey="value"
        :rotate="rotate"
        :fontSize="fontSize"
        >
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
      Words: [],
      rotate: {from: 0, to: 0, numOfOrientation: 1},
      fontSize: [10, 70]
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

<style scoped>
  .wordCloud {
  width: 400;
  height: 400
  }
</style>
