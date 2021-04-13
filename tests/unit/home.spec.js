import { shallowMount,} from '@vue/test-utils'
import Home from "./../../src/views/Home.vue"
import {BootstrapVue} from "bootstrap-vue";
import Vuetify from 'vuetify'

describe("App", () => {
    // Inspect the raw component options
    it("has data", () => {
        expect(typeof Home.data).toBe("function");
    });
});


describe("Mounted App", () => {
    let localVue;
    let wrapper;
    beforeAll(() => {
        localVue = require('vue');
        localVue.use(Vuetify);
        localVue.use(BootstrapVue);
        wrapper = shallowMount(Home, { localVue });
    });

    test("is a Vue instance", () => {
        expect(wrapper).toBeTruthy();
    });

    it("renders the correct markup", () => {
        expect(wrapper.html()).toContain(
            "<h3>Project Overview</h3>"
        );
    });

});