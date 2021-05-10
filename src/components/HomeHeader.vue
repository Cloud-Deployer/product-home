<template>
    <v-app>
        <div class="team-backgroud"/>
        <v-app-bar
                style="background-color: #F6FAFE; max-height: 110px"
        >
            <v-toolbar-title class="logo" @click="goHomePage">
                <img class="logo-img-size" src="../assets/logo/os_logo_blue_white.png"/>
                <br class="break"/>
                <p class="logo-font">Orchestra</p>
            </v-toolbar-title>
            <a :href="`http://orchestra-deployer.com:8080/#/register`" class="normal-font" >{{$t('register')}} </a> |
            <a :href="`http://orchestra-deployer.com:8080/#/login`" class="normal-font">{{$t('login')}}</a>
            <span style="padding: 5px"></span>
            <div style="width: 130px; height: 38px;">
                <v-select
                        v-model="language"
                        :items="lang"
                        dense
                        solo
                ></v-select>
            </div>
            <v-menu
                    v-if="isMobile"
                    bottom
                    left
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list
                        nav
                        dense
                >
                    <v-list-item-group
                            v-model="group"
                            active-class="deep-purple--text text--accent-4"
                    >
                        <v-list-item>
                            <v-list-item-title><router-link to="/about">{{$t('about')}}</router-link></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title><router-link to="/team">{{$t('team')}}</router-link></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title><router-link to="/pricing">{{$t('pricing')}}</router-link></v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <template v-slot:extension>
                <v-tabs
                        v-if="!isMobile"
                        exact="true"
                        exact-active-class
                        background-color="#F6FAFE"
                        :key="tabKey"
                        centered
                >
                    <v-tab class="title-font" to="/about">{{$t('about')}}</v-tab>
                    <v-tab class="title-font" to="/team">{{$t('team')}}</v-tab>
                    <v-tab class="title-font" to="/pricing">{{$t('pricing')}}</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <div>
            <v-main>
                    <!-- if using vue-router -->
                    <router-view/>

            </v-main>
        </div>
        <v-footer
                padless
                bottom
        >
            <v-card
                    flat
                    tile
                    style="background-color: #F6FAFE;"
                    width="100%"
            >
                <v-card-text class="footer-note">
                    <strong class="normal-font">{{$t('contactMsg')}}</strong>
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            icon
                    >
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text>
                    {{ new Date().getFullYear() }} — <strong>Ochestra</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>
<script>
    // import Vue from 'vue'
    // import i18n from '../plugins/i18n.js'
    export default {
        name: "HomeHeader",
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
            isMobile: false,
            group: null,
            language: 0,
            lang: [
                {
                    text: 'English',
                    value: 0
                },
                {
                    text: '中文',
                    value: 1
                },
                {
                    text: 'Español',
                    value: 2
                },

            ],
            tabKey: 0,
        }),
        methods:{
            goHomePage(){
                this.$router.push('/')
            },
            onResize(){
                this.isMobile = window.innerWidth < 700
            }
        },
        created: function(){
            this.isMobile = false
        },
        beforeDestroy () {
            if (typeof window === 'undefined') return
            window.removeEventListener('resize', this.onResize, { passive: true })
        },
        mounted () {
            this.onResize();
            window.addEventListener('resize', this.onResize, { passive: true })
            switch(this.$i18n.locale){
                case 'en':
                    this.language = 0;
                    break;
                case 'zh':
                    this.language = 1;
                    break;
                case 'es':
                    this.language = 2;
                    break;
                default:
                    break;
            }

        },
        watch: {
            language: function (val) {
                switch(val){
                    case 0:
                        this.$i18n.locale = 'en';
                        this.tabKey += 1;
                        break;
                    case 1:
                        this.$i18n.locale = 'zh';
                        this.tabKey += 1;
                        break;
                    case 2:
                        this.$i18n.locale = 'es';
                        this.tabKey += 1;
                        break;
                    default:
                        break;
                }
            }
        },
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
        font-size:60px;
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
        margin-top: 20px;
        margin-left: 5%;
    }
    .logo-img-size{
        width: 50px;
        height: 50px;
    }
    @media (max-width: 700px) {
        .logo-img-size{
            width: 40px;
            height: 40px;
        }
        .logo-font{
            visibility: hidden;
        }
    }
    @media (min-width: 700px) and (max-width: 1200px) {
        .logo-img-size{
            width: 40px;
            height: 40px;
        }
        .logo-font{
            font-size:40px;
            font-weight: bold;
            font-family: "Lucida Grande",serif;
            color: #403D3B;
        }
    }
    .footer-note{
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        align-items: baseline;
    }
    .team-backgroud{
        background-image: url("../assets/logo/bg-logo-pattern.jpeg");
        background-repeat: repeat;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        /*filter: blur(5px);*/
        opacity: 0.1;
        height: 100%;
    }
</style>