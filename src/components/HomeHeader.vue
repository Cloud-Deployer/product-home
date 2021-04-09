<template>
    <v-app>
        <div class="header-bar">
            <div class="header-top">
                <div style="flex:1">
                    <br class="break"/>
                </div>
                <div>
                    <router-link class="normal-font" to="/notice">Register </router-link>|
                    <router-link class="normal-font" to="/notice">Login</router-link>
                </div>
            </div>
            <div class="logo" @click="goHomePage">
                <img class="logo-img-size" src="../assets/logo/os_logo_blue_white.png"/>
                <br class="break"/>
                <p class="logo-font">Orchestra</p>
            </div>
            <div class="tab-style">
                <v-tabs
                        exact="true"
                        exact-active-class
                        background-color="#F6FAFE"
                        right
                >
                    <v-tab class="title-font" to="/about">About</v-tab>
                    <v-tab class="title-font" to="/team">Team</v-tab>
                    <v-tab class="title-font" to="/pricing">Pricing</v-tab>
                </v-tabs>
                <br class="block-break"/>
            </div>

        </div>
        <div>
            <v-main>
                    <!-- if using vue-router -->
                    <router-view/>

            </v-main>
        </div>
    </v-app>
</template>
<script>
    export default {
        name: "HomeHeader",
        methods:{
            goHomePage(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .header-bar{
        background-color: #F6FAFE;
        z-index: 100;
        box-shadow: 0 8px 6px -6px lightgray;
    }
    .break {
        content: "";
        margin-right: 2em;
        display: block;
        font-size: 24%;
    }
    .block-break {
        content: "";
        margin-right: 100em;
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
    .normal-font{
        font-size: 18px;
        font-family: "Lucida Grande",serif;
        color: #6F6C6C;
    }
    .logo{
        flex:1;
        display: flex;
        flex-direction: row;
        align-items:baseline;
        margin-left: 10%;
        position: absolute;
        z-index: 50;
    }
    .header-top{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px;
    }
    .logo-img-size{
        width: 60px;
        height: 60px;
    }
    .tab-style{
        display: flex;
        flex-direction: row;
        margin-top: 80px;
    }
</style>