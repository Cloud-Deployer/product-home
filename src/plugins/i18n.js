import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {cn} from '../assets/lang/cn.js'
import {en} from '../assets/lang/en.js'
import {sp} from '../assets/lang/sp.js'
Vue.use(VueI18n);

const messages = {
    cn: cn,
    en: en,
    sp: sp,
};
const i18n = new VueI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages
});

export default i18n;