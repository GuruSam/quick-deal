import Vue from 'vue'
import { BButton, BLink, BFormInput, BFormGroup, BIconX, ListGroupPlugin, FormPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('b-button', BButton)
Vue.component('b-link', BLink)
Vue.component('b-form-input', BFormInput)
Vue.component('b-form-group', BFormGroup)
Vue.component('b-icon-x', BIconX)

Vue.use(ListGroupPlugin)
Vue.use(FormPlugin)
