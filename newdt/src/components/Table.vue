<template>
  <div id="datatable">
    <h1>ContentMine DataTables</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
  </div>
</template>

<script>
  import freqHorizBar from './FreqHorizBar'
  import WordCloud from './WordCloud'

  export default {
    data() {
      return {
        columns: ['Paper ID', 'Human Genes', 'Species Binomial', 'Species Genus', 'Word Frequencies'],
        rawData: [
          {
            'Paper ID': 'PMC4683095',
            'Human Genes': "",
            "Species Binomial": { "Plasmodium falciparum": 6 },
            'Word Frequencies': {              	
              'falciparum': 21,
              'vivax': 39, 
              'severe': 35, 
              'Sabah': 28, 
              'Plasmodium': 47
            }
          },
          {
            'Paper ID': 'PMC4696710',
            'Human Genes': '',
            "Species Binomial":
              {
                "Plasmodium knowlesi": 102,
                "Plasmodium vivax": 24,
                "Plasmodium malariae": 24,
                "Plasmodium falciparum": 20,
                "Klebsiella pneumoniae": 1
              },
            'Word Frequencies': {              	
              'falciparum': 21,
              'vivax': 39, 
              'severe': 35, 
              'Sabah': 28, 
              'Plasmodium': 47
            }
          }
        ],
        tableData: [],
        options: {
          templates: {
            'Species Binomial': freqHorizBar,
            'Word Frequencies': WordCloud
        }
        }
      }
    },
    created: function () {
      this.mungeTableData()
    },
    methods: {
      mungeTableData() {
        this.tableData = this.rawData.map((x) => {
          return {
            'Paper ID': x['Paper ID'],
            'Human Genes': x['Human Genes'],
            'Species Binomial': x['Species Binomial'],
            'Word Frequencies': x['Word Frequencies']
            // xc: x.xc
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>