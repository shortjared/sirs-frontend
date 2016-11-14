<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container style="float:left;width:400px" >
      <label>Copypaste an image URL and hit enter!</label>
      <md-input v-model="shareUrl" placeholder="Share an image url..." ></md-input>
    </md-input-container>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import mqttClient from '../mqttClient'

export default {
  name: 'share-bar',
  data () {
    return {
      shareUrl: null
    }
  },
  methods: {
    submit: function () {
      mqttClient.publish('sandbox-sirs', this.shareUrl);
      this.$store.commit('incrementMe');
      this.shareUrl = null;
    }
  }
}

</script>

<style>
</style>
