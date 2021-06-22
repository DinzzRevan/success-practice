import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import VAlert from '@/views/VAlert.vue'
import VAvatar from '../views/VAvatar.vue'
import VBadge from '../views/VBadge.vue'
import VButton from '../views/VButton.vue'
import VCard from '../views/VCard.vue'
import VChip from '../views/VChip.vue'
import VDialogs from '../views/VDialogs.vue'
import VExpansion from '../views/VExpansion.vue'
import VTable from '../views/VTable.vue'
import VTabs from '../views/VTabs.vue'
import VTootip from '../views/VTooltip.vue'
import VForms from '../views/VForms.vue'
import VList from '../views/VList.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/alert', name: 'alert', component: VAlert },
    { path: '/avatar', name: 'avater', component: VAvatar },
    { path: '/badge', name: 'badge', component: VBadge },
    { path: '/button', name: 'button', component: VButton },
    { path: '/card', name: 'card', component: VCard },
    { path: '/chip', name: 'chip', component: VChip },
    { path: '/dialogs', name: 'dialogs', component: VDialogs },
    { path: '/expansion', name: 'expansion', component: VExpansion },
    { path: '/table', name: 'table', component: VTable },
    { path: '/tabs', name: 'tabs', component: VTabs },
    { path: '/tooltip', name: 'tooltip', component: VTootip },
    { path: '/forms', name: 'forms', component: VForms },
    { path: '/list', name: 'list', component: VList },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
