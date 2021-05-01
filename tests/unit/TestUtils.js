import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {cn} from '../../src/assets/lang/cn.js'
import {en} from '../../src/assets/lang/en.js'
import {sp} from '../../src/assets/lang/sp.js'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import {BootstrapVue} from "bootstrap-vue";

//setup local vue for testing and export plugins as necessary which will be later import in the test for wrapper

// Use a local vue
const localVue = Vue;
localVue.use(VueI18n);
localVue.use(Vuetify);
localVue.use(VueRouter);
localVue.use(BootstrapVue);

const router = new VueRouter()

const messages = {
    cn: cn,
    en: en,
    sp: sp,
};

// Create new i18n instance
module.exports = {
    localVue,
    i18n: new VueI18n({
        locale: 'en',
        fallbackLocale: 'en',
        messages
    }),
    router
};