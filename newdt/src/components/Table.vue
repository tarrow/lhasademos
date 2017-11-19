<template>
  <div id="datatable">
    <h1>ContentMine DataTables</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
  </div>
</template>

<script>
  import freqHorizBar from './FreqHorizBar'

  export default {
    data() {
      return {
        columns: ['Paper ID', 'Human Genes', 'Species Binomial', 'Species Genus', 'Word Frequencies', 'xc', 'edit'],
        rawData: [
          {
            'Paper ID': 'PMC4683095',
            'Human Genes': "",
            "Species Binomial": { "Plasmodium falciparum": 6 },
            // xc: 4
          },
          {
            'Paper ID': 'PMC4683095',
            'Human Genes': '',
            "Species Binomial":
              {
                "Plasmodium falciparum": 6,
                "Plasmodium vivax": 8
              },
          }
        ],
        tableData: [],
        options: {
          templates: {
            'Species Binomial': freqHorizBar,
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