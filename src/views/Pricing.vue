<template>
    <v-container class="container-height">
        <v-row style="margin-top: 80px; height:400px">
            <v-col>
                <v-card
                        width="100%"
                        height="100%"
                >
                    <h3 class = free-tag>{{$t('free')}}</h3>
                    <v-card-text style="margin:50px; text-align: left;">
                        <ul>
                            <v-data-iterator
                                    :items="freeTier"
                                    hide-default-footer
                            >
                                <template v-slot:default="{items}">
                                    <li v-for="item in items" :key=item class="free-item"> {{item}}</li>
                                </template>
                            </v-data-iterator>
                        </ul>
                    </v-card-text>
<!--                    <router-link class="register-tag" to="/notice">-->
<!--                        {{$t('registerNow')}}-->
<!--                    </router-link>-->
                    <a href="http://orchestra-deployer.com:8080/#/register" class="register-tag" >{{$t('registerNow')}} </a>
                </v-card>
            </v-col>
            <v-col>
                <p class="coming-soon">{{$t('comingSoon')}}</p>
                <v-card
                        width="100%"
                        height="100%"
                >
                    <h3 class = vip-tag>{{$t('vip')}}</h3>
                    <v-card-text></v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-spacer style="margin-bottom: 100px"></v-spacer>
    </v-container>
</template>

<script>
    export default {
        name: "Pricing",
        computed:{
            freeTier(){
                return [
                    this.$i18n.t('unlimited'),
                    this.$i18n.t('limitAccess'),
                    this.$i18n.t('download'),
                ]
            }
        },
    }
</script>

<style scoped>
.free-tag{
    width: 100%;
    background-color: #77D170;
    color: white;
    font-weight: bold;
}
.vip-tag{
    width: 100%;
    background-color: #FBC62B;
    color: white;
    font-weight: bold;
}

.free-item{
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 80px;
}

.register-tag{
    width: 100%;
    color: dodgerblue;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: underline;
    text-underline: #40A0EE;
}

.coming-soon{
    position: absolute;
    background-color: lightgray;
    border-radius: 10px;
    width: 550px;
    height: 250px;
    top: 70px;
    left: 25px;
    right: 0px;
    bottom: 0px;
    z-index: 20;
    opacity: 0.5;
    font-weight: bold;
    font-size: 80px;
    transform: rotate(-20deg);
}
.container-height{
    height: 100vh;
}
</style>