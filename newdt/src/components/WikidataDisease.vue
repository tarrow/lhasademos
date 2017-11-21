<template>
    <div id="Wikidata" v-show="disease">
      Disease {{disease}} causes {{numberofdeaths}} deaths each year
    </div>
</template>

<script>
  import wdk from 'wikidata-sdk'
  import axios from 'axios'
  export default {
    data() {
    return {
      disease: '',
      numberofdeaths: ''
    }
  },
    props:['data', 'index'],
    mounted() {
      this.getContentFromWD(this.data.Disease)
    },
    methods: {
      getContentFromWD(wid) {
        var me = this
        var url = wdk.getEntities(wid)
        axios.get(url)
        .then((resp) => {
          console.log(resp)
          me.disease = resp.data.entities[wid].labels.en.value
          console.log(resp.data.entities[wid].claims.P1120[0].mainsnak.datavalue.value)
          me.numberofdeaths = parseInt(resp.data.entities[wid].claims.P1120[0].mainsnak.datavalue.value.amount)
        })
      }
    }
  }
</script>
