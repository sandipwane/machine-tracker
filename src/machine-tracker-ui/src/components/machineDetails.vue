<template>
  <div>
    <h1>Details for {{ machine.name }}</h1>
    <div>
      <strong> Sensors </strong>
      <table>
        <tbody>
          <tr v-for="sensor in machine.sensors" :key="sensor.id">
            <td>
              {{ sensor.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pre>
      {{machine}}
    </pre>
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
    machine: {
      query:  gql`
      query Machine($where: MachineWhereUniqInput!) {
        machine(where: $where) {
          id
          name
          sensors {
            id
            name
          }
          lastKnownPosition {
            location {
              latitude
              longitude
            }
          }
        }
      }
    `,
      variables() {
        return {
          where: {
            id: this.$route.params.id
          }
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
