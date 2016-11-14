<template>
  <div id="image-list-container">
    <ul>
      <li v-for="image of images">
        <md-card md-with-hover class="image-card">
          <md-card-media v-md-ink-ripple>
            <img :src="image">
          </md-card-media>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>bookmark</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'image-list',
  computed: mapState({
    count: state => state.images.length,
    images: state => state.images
  })
}

</script>

<style>
.image-card{
  width:300px;
}

img {
    width: 100%;
    height: auto;
}
</style>
