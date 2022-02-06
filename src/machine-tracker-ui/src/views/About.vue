<template>
  <div class="about">
    <MachineDetails msg="Machine List"/>
  </div>
</template>


<script>
// @ is an alias to /src
import MachineDetails from '@/components/machineDetails.vue'

export default {
  name: 'home',
  components: {
    MachineDetails
  }
}
</script>