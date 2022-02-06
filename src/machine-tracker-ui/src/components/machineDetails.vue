<template>
  <div>
    <a-card :title="machine.name" style="width: 500px">
      <a slot="extra" href="#">
        <router-link to="/">
          <a-icon type="close" />
        </router-link>
      </a>
      <a-list size="small" bordered :data-source="machine.sensors">
        <a-list-item v-if="item.name"  slot="renderItem" slot-scope="item">
          {{ item.name || " "}}
        </a-list-item>
        <div slot="header">
          <strong>Sensors</strong>
        </div>
      </a-list>
      <br/>
      <div>
        <strong>Lat Long</strong>
        <p v-if="machine.lastKnownPosition">
          ({{machine.lastKnownPosition.location.latitude}}, {{machine.lastKnownPosition.location.longitude}})
        </p>
      </div>
    </a-card>
    <!-- <pre>
      {{machine}}
    </pre> -->
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
