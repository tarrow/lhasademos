<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted () {
    // Overwriting base render method with actual data.
    console.log(this.data)
    var dataToRender = this.data['Species Binomial']
    this.renderChart({
      labels: Object.keys(dataToRender),
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: Object.values(dataToRender)
        }
      ]
    })
  },
  props: [ 'data', 'index' ]
}
</script>