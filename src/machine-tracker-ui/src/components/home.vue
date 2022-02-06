<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      NOT THIS ONE
      <table border="true" class="center">
        <tbody>
          <tr v-for="machine in machines" :key="machine.id">
            <td>{{ machine.id }}</td>
            <td>{{ machine.name }}</td>
            <td>
              <!-- <a href="#" @click.prevent="addMachine">more</a> -->
              <router-link :to="{ name: 'machine', params: { id: machine.id } }">more</router-link>
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
  .center {
    margin-left: auto;
    margin-right: auto;
  }

</style>
