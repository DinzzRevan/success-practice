<template>
    <v-app>
        <v-main>
            <v-sheet class="c-navbar" width="300" style="position: fixed; left: 0px; height: 100vh; overflow-y: auto; border-right: 3px solid rgba(0,0,0,0.05)">
                <v-list>
                    <v-list-item>
                        <v-list-item-content class="grey--text text--darken-2">
                            Vuetify Components
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-for="(link, index)  in links" :key="index" :to="link.path">
                        {{ link.label }}
                    </v-list-item>
                </v-list>
            </v-sheet>
            <v-sheet width="calc(100vw - 312px)" class="ml-auto px-8">
                <router-view />
            </v-sheet>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        links: [
            { label: 'Home', path: '/' },
            { label: 'Alert', path: '/alert' },
            { label: 'Avater', path: '/avatar' },
            { label: 'Abadge', path: '/badge' },
            { label: 'AButton', path: '/button' },
            { label: 'ACard', path: '/card' },
            { label: 'AChip', path: '/chip' },
            { label: 'ADialogs', path: '/dialogs' },
            { label: 'VExpansion', path: '/expansion' },
            { label: 'VTable', path: '/table' },
            { label: 'VTabs', path: '/tabs' },
            { label: 'VTootip', path: '/tooltip' },
            { label: 'VForms', path: '/forms' },
  

        ]
    })
};
</script>

<style scoped>
.c-navbar a {
    border-bottom: 1px solid #fff !important;
}

.c-navbar .v-list-item--active {
    color: #801b19 !important;
    border-bottom: 1px solid #cc423f !important;
}
</style>
