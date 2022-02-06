<template>
  <div class="center">
    <h1>Machine List</h1>
    <div>
    </div>
    <a-list item-layout="horizontal" :data-source="machines">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta v-bind:description="item.sensors.length + ' sensors'" >
          <a slot="title" href="#/">
            <router-link :to="{ name: 'machine', params: { id: item.id } }">
              {{ item.name }}
            </router-link>
          </a>
          <a-avatar
            slot="avatar"
          > {{ item.id }}
          </a-avatar>
        </a-list-item-meta>
        <div>
          <router-link :to="{ name: 'machine', params: { id: item.id } }">more</router-link>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

import gql from 'graphql-tag'

export default {
  props: {
    msg: String
  },
  apollo:{
    machines: gql`
      query {
        machines {
          id
          name
          sensors{
            name
          }
        }
      }
    `
  },
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
    margin: 0 500px;
  }
</style>
