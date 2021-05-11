<template>
  <v-container>
    <div class="container text-sm-left text-box">
      <h3 class="content-title">{{$t('goal')}}</h3>
      <h4 class="content-text">{{$t('goalContent')}}</h4>
    </div>
    <div class="slide-style">
      <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="5000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              style="text-shadow: 1px 1px 2px #333; min-height: 600px; max-height: 600px; width: 1024px"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/myapp-en.png"/>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/tech-stack.png"/>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="container text-sm-left text-box">
      <h3 class="content-title">{{$t('overview')}}</h3>
      <h4 class="content-text">{{$t('overviewContent')}}</h4>
      <p class="text-break" style="max-width: 4rem;"/>
      <v-divider/>
      <h3 class="content-title">{{$t('usecase')}}</h3>
      <h4 class="content-text">{{$t('usecaseContent')}}</h4>
    </div>
    <div class="slide1-style">
      <b-carousel
              id="carousel-1"
              v-model="slide1"
              :interval="5500"
              controls
              indicators
              background="#ababab"
              img-width="1024"

              style="text-shadow: 1px 1px 2px #333; min-height: 600px; max-height: 600px; width: 1024px"
              @sliding-start="onSlideStart1"
              @sliding-end="onSlideEnd1"
      >
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/deploy-success.png"/>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/terminate-service.png"/>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/ecs-aws.png"/>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <v-divider/>
    <div class="container text-sm-left text-box">
      <h3 class="content-title">{{$t('i18n')}}</h3>
      <h4 class="content-text">{{$t('i18nContent')}}</h4>
    </div>
    <div class="slide2-style">
      <b-carousel
              id="carousel-1"
              v-model="slide2"
              :interval="8000"
              controls
              indicators
              background="#ababab"
              img-width="1024"

              style="text-shadow: 1px 1px 2px #333; max-height: 640px; width: 1024px"
              @sliding-start="onSlideStart2"
              @sliding-end="onSlideEnd2"
      >
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/myapp-es.png"/>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img class="d-block img-fluid w-100 img-size" src="../assets/carousel/myapp-zh.png"/>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        slide: 0,
        slide1: 0,
        slide2: 0,
        sliding: null,
        sliding1: null,
        sliding2: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      onSlideStart1() {
        this.sliding1 = true
      },
      onSlideEnd1() {
        this.sliding1 = false
      },
      onSlideStart2() {
        this.sliding2 = true
      },
      onSlideEnd2() {
        this.sliding2 = false
      }
    }
  }
</script>
<style>
  @import url("https://fonts.googleapis.com/css?family=Didact Gothic' rel='stylesheet");
  .img-size{
    width: 1024px;
    max-height: 600px;
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
  .slide-style{
    display: flex;
    justify-content: center;
    max-height: 700px;
    min-height: 700px;
  }
  .slide1-style{
    display: flex;
    justify-content: center;
    max-height: 600px;
    min-height: 600px;
  }
  .slide2-style{
    display: flex;
    justify-content: center;
    max-height: 600px;
    min-height: 600px;
  }
  .text-box{
    margin-top: 60px;
    margin-bottom: 50px
  }
</style>
