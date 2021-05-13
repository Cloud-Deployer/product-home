import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {zh} from '../assets/lang/zh.js'
import {en} from '../assets/lang/en.js'
import {es} from '../assets/lang/es.js'
Vue.use(VueI18n);

function getBrowserLocale() {

    const navigatorLocale =
        navigator.languages !== undefined
            ? navigator.languages[0]
            : navigator.language

    if (!navigatorLocale) {
        return undefined
    }

    return navigatorLocale.substring(0,2);
}

const messages = {
    zh: zh,
    en: en,
    es: es,
};
const i18n = new VueI18n({
    locale: getBrowserLocale(),
    fallbackLocale: 'en',
    messages
});

export default i18n;