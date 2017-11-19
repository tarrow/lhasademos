<template>
  <a :href="edit(data.id)">Edit</a>
</template>
<script>
  export default {
    props:['data', 'index'],
  }
</script>
