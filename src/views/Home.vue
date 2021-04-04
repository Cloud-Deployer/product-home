<template>
  <div>
    <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
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
    <div class="container text-sm-left" style="margin-top: 50px; margin-bottom: 50px">
      <h3>Project Overview</h3>
      <h4>
        Deploying your project can be very cumbersome and confusing, especially for those who are inexperienced with deployment frameworks. Additionally, developing a deployment pipeline requires time and effort on the developers side, along with the necessity of maintaining the infrastructure. Our web application strives to automate the deployment process and abstract away the underlying details about deployment from start to finish. A user will be able to deploy multiple images that will have cross-container communication via automated orchestration tools. Additionally, we provide real-time monitoring of the provided infrastructure for users to view deployment progress and up to date statistics.
      </h4>
      <p class="text-break" style="max-width: 4rem;"/>
      <h3>Buesiness Use Cases</h3>
      <h4>
        Developers don't need to worry about the infrastructure needed for Cloud deployment. No manual configuration required like, auto scaling can be built in. Manage deployment status of multiple projects in one place. Bringing together a single deployment model for different kinds of projects. Takes care of full stack deployment. (different components of the product like backend, frontend)
      </h4>
      <p class="text-break" style="max-width: 4rem;"/>
      <h3>Goal</h3>
      <h4>
        Develop a platform as a service, for businesses and individuals alike to focus on what they do best, with better resources, without worrying about the nitty gritty details of infrastructure, allowing businesses to grow faster, smarter and better.
      </h4>
    </div>
  </div>
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
  .img-size{
    width: 1024px;
    height: auto;
    max-height: 780px;
  }
</style>
