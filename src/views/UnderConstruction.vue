<template>
    <div style="margin-top: 100px;">
        <div class="logo" @click="goHomePage">
            <img class="logo-img-size" src="../assets/os_logo_blue_white.png"/>
            <br class="break"/>
            <p class="logo-font">Orchestra</p>
        </div>
        <h1 class="title-font">Our website is under construction right now, please come back later, thank you!</h1>
    </div>
</template>

<script>
    export default {
        name: "UnderConstruction",
        methods:{
            goHomePage(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .break {
        content: "";
        margin-right: 2em;
        display: block;
        font-size: 24%;
    }
    .logo-font{
        font-size:72px;
        font-weight: bold;
        font-family: "Lucida Grande",serif;
        color: #403D3B;
    }
    .title-font{
        font-size: 21px;
        font-weight: bold;
        font-family: "Lucida Grande",serif;
        color: #6F6C6C;
    }
    .logo{
        flex:1;
        display: flex;
        flex-direction: row;
        align-items:baseline;
        margin-left: 10%;
        /*position: absolute;*/
        z-index: 50;
    }
    .logo-img-size{
        width: 60px;
        height: 60px;
    }
</style>