import { shallowMount,} from '@vue/test-utils'
import Home from "./../../src/views/Home.vue"
import {localVue, i18n, router} from './TestUtils'

describe("App", () => {
    // Inspect the raw component options
    it("has data", () => {
        expect(typeof Home.data).toBe("function");
    });
});

describe("Mounted App", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(Home, { localVue, i18n, router });
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