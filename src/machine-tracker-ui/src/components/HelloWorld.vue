<template>
  <div class="center">
    <h1>{{ msg }}</h1>
    <div>
      <table border="true" >
        <tbody>
          <tr v-for="machine in machines" :key="machine.id">
            <td>{{ machine.id }}</td>
            <td>{{ machine.name }}</td>
            <td>
             <router-link :to="{ name: 'machine', params: { id: machine.id } }">more</router-link>
              <!-- <a href="#" @click.prevent="addMachine">more</a> -->
            </td>
          </tr>
        </tbody>
      </table>
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
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
  }

</style>
