<template>
  <div class="hello">
    <h1>Machine Details</h1>
    {{$route.params.id}}
  </div>
</template>

<script>

import gql from 'graphql-tag'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  apollo:{
    machines: gql`
      query {
        machines {
          id
          name
        }
      }
    `
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
