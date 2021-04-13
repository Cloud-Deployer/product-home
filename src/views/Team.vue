<template>
  <div class=" text-sm-left team-container">
    <div class="team-backgroud"/>
    <v-data-iterator
            :items="teamFile.teamlead"
            hide-default-footer
    >
      <template v-slot:default="{items}">
        <v-row>
          <v-col
                  v-for="item in items"
                  :key="item.name"
                  cols="12"
                  sm="4"
                  md="4"
                  lg="6"
          >
            <v-card
                    width="100%"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                        class="ma-3"
                        size="250"
                        tile
                >
                  <v-img width="100%" :src="item.picture" />
                </v-avatar>
                <v-card-text class="justify-space-between">
                  <h4>{{item.name}}</h4>
                  <h5>{{item.role}}</h5>
                  <a :href="item.linkedin_link" target="_blank">
                    <svg color="rgb(10,102,194)" width="28" height="28" viewBox="0 0 34 34" class="global-nav__logo">
                      <title>
                        LinkedIn
                      </title>

                      <g>
                        <!---->          <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  </a>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-spacer style="margin: 50px"/>
    <v-data-iterator
            :items="teamFile.backend"
            hide-default-footer
    >
      <template v-slot:default="{items}">
        <v-row>
          <v-col
                  v-for="item in items"
                  :key="item.name"
                  cols="12"
                  sm="4"
                  md="4"
                  lg="6"
          >
            <v-card
                    width="100%"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                        class="ma-3"
                        size="250"
                        tile
                >
                  <v-img width="100%" :src="item.picture" />
                </v-avatar>
                <v-card-text class="justify-space-between">
                  <h4>{{ item.name }}</h4>
                  <h5>{{item.role}}</h5>
                  <a :href="item.linkedin_link" target="_blank">
                    <svg color="rgb(10,102,194)" width="28" height="28" viewBox="0 0 34 34" class="global-nav__logo">
                      <title>
                        LinkedIn
                      </title>

                      <g>
                        <!---->          <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  </a>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-spacer style="margin: 50px"/>
    <v-data-iterator
            :items="teamFile.ui"
            hide-default-footer
    >
      <template v-slot:default="{items}">
        <v-row>
          <v-col
                  v-for="item in items"
                  :key="item.name"
                  cols="12"
                  sm="4"
                  md="4"
                  lg="6"
          >
            <v-card
                    width="100%"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                        class="ma-3"
                        size="250"
                        tile
                >
                  <v-img width="100%" :src="item.picture" />
                </v-avatar>
                <v-card-text class="justify-space-between">
                  <h4>{{ item.name }}</h4>
                  <h5>{{item.role}}</h5>
                  <a :href="item.linkedin_link" target="_blank">
                    <svg color="rgb(10,102,194)" width="28" height="28" viewBox="0 0 34 34" class="global-nav__logo">
                      <title>
                        LinkedIn
                      </title>

                      <g>
                        <!---->          <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  </a>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    <v-spacer style="margin: 50px"/>
    <v-data-iterator
            :items="teamFile.devops"
            hide-default-footer
    >
      <template v-slot:default="{items}">
        <v-row>
          <v-col
                  v-for="item in items"
                  :key="item.name"
                  cols="12"
                  sm="4"
                  md="4"
                  lg="6"
          >
            <v-card
                    width="100%"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar
                        class="ma-3"
                        size="250"
                        tile
                >
                  <v-img width="100%" :src="item.picture" />
                </v-avatar>
                <v-card-text class="justify-space-between">
                  <h4>{{ item.name }}</h4>
                  <h5>{{item.role}}</h5>
                  <a :href="item.linkedin_link" target="_blank">
                    <svg color="rgb(10,102,194)" width="28" height="28" viewBox="0 0 34 34" class="global-nav__logo">
                      <title>
                        LinkedIn
                      </title>

                      <g>
                        <!---->          <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                      </g>
                    </svg>
                  </a>
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>

  </div>
</template>

<script>

  export default {
    name: "Team",
    data(){
      return {
        teamFile: {
                "teamlead":[
                  {
                    "name": "Anthony Knox",
                    "linkedin_link": "https://www.linkedin.com/in/adknox/",
                    "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/anthony_profile.jpeg",
                    "role":"Team Lead, DevOps",
                  },
                ],
                "backend":[
                  {
                    "name": "Aishwarya Parthasarathy",
                    "linkedin_link": "https://www.linkedin.com/in/aishwarya-parthasarathy-00b63939/",
                    "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/aishwarya_profile.jpeg",
                    "role":"Backend Lead",
                  },
                  {
                      "name": "Aarthi Parthipan",
                      "linkedin_link": "https://www.linkedin.com/in/aarthiparthipan/",
                      "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/aarthi_profile.jpeg",
                      "role":"Backend",
                  },

                  {
                    "name": "Radha Prashanthi Aakula Chinna",
                    "linkedin_link": "https://www.linkedin.com/in/radha-prashanthi/",
                    "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/radha_profile.jpeg",
                    "role":"Backend",
                  },
                  {
                    "name": "Yuyao Xie",
                    "linkedin_link": "https://www.linkedin.com/in/yuyao-xie-b5ba8aa0/",
                    "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/yuyao_profile.jpeg",
                    "role":"Backend",
                  }
                ],
              "ui":[
                {
                  "name": "Danielle Hu",
                  "linkedin_link": "https://www.linkedin.com/in/danielle-hu/",
                  "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/danielle_profile.jpeg",
                  "role":"UI Lead",
                },
                {
                  "name": "Nikhil Bhutani",
                  "linkedin_link": "https://www.linkedin.com/in/bhutani1991/",
                  "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/nikhil_profile.jpeg",
                  "role":"UI, Backend",
                },

              ],
              "devops":[
                {
                  "name": "John Fox",
                  "linkedin_link": "https://www.linkedin.com/in/johnvfoxiv/",
                  "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/john_profile.jpeg",
                  "role":"DevOps Lead",
                },
                {
                  "name": "Adarsh Srivastava",
                  "linkedin_link": "https://www.linkedin.com/in/adarsh-srivastava48/",
                  "picture": "https://github.com/Cloud-Deployer/product-home/raw/dev/src/assets/team/adarsh_profile.jpeg",
                  "role":"DevOps",
                },
              ]
        }
      }
    },
    methods:{


    },
    created() {
    }
  }
</script>

<style scoped>
  .team-container{
    position: relative;
    padding: 100px;
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
    opacity: 0.3;
  }
</style>