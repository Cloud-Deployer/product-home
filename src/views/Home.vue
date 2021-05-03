<template>
  <v-container >
    <div class="container text-sm-left" style="margin-top: 50px; margin-bottom: 50px">
      <h3 class="content-title">{{$t('goal')}}</h3>
      <h4 class="content-text">{{$t('goalContent')}}</h4>
    </div>
    <div style="display: flex; justify-content: center; max-height: 700px;">
      <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"

              style="text-shadow: 1px 1px 2px #333; max-height: 640px; width: 1024px"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/deploy-sample-screen.png"/>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/tech-stack.png"/>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/team.png"/>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="container text-sm-left" style="margin-top: 80px; margin-bottom: 50px">
      <h3 class="content-title">{{$t('overview')}}</h3>
      <h4 class="content-text">{{$t('overviewContent')}}</h4>
      <p class="text-break" style="max-width: 4rem;"/>
      <v-divider/>
      <h3 class="content-title">{{$t('usecase')}}</h3>
      <h4 class="content-text">{{$t('usecaseContent')}}</h4>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style>
  @import url("https://fonts.googleapis.com/css?family=Didact Gothic' rel='stylesheet");
  .img-size{
    width: 1024px;
    max-height: 550px;
  }
  .content-text{
    font-family: 'Didact Gothic';
    font-size: 22px;
  }
  .content-title{
    font-family: 'Didact Gothic';
    font-size: 28px;
    font-weight: bold;
  }
</style>
