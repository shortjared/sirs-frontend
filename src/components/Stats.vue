<template>
  <div id="stats" style="float:left;width:400px">
    <div class="stat-box">
      <md-icon style="font-size:70px;width:70px">tag_faces</md-icon>
      <md-tooltip md-direction="bottom">My Shares</md-tooltip>
      <span class="stat-count">{{myCount}}</span>
    </div>

    <div class="stat-box">
      <md-icon style="font-size:70px;width:70px">group</md-icon>
      <md-tooltip md-direction="bottom">Group Shares</md-tooltip>
      <span class="stat-count">{{groupCount}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'stats',
  computed: mapState({
    myCount: state => state.stats.me,
    groupCount: state => state.stats.group
  })
}

</script>

<style>
.stat-count{
  font-size: 30px;
}
.stat-box {
  float: right;
  width:120px;
}
</style>
