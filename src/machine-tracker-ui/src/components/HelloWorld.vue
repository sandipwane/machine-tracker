<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  <div  v-for="machine in machines" :key="machine.id">
    <h2>{{ machine.name }}</h2>
    <p>{{ machine.id }}</p>
  </div>

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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
