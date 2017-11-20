<template>
    <div id="wordcloud">
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
    name: 'wordcloud',
    components: {
      wordcloud
    },
    data() {
    return {
      defaultWords: [{
          "name": "Cat",
          "value": 26
        }
      ]
    }
  },
    props:['data', 'index'],
  }
</script>
