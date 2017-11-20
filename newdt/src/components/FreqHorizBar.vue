
<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted () {
    // Overwriting base render method with actual data.
    var dataToRender = this.data['Species Binomial']
    this.renderChart({
      labels: Object.keys(dataToRender),
      datasets: [
        {
          backgroundColor: '#f87979',
          data: Object.values(dataToRender)
        }
      ]
    },
    {
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        responsive: false,
      }
    )
  },
  props: [ 'data', 'index', 'height', 'width' ]
}
</script>

<style scoped>
  canvas {

  }
</style>