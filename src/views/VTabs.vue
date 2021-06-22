<template>
  <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">Tabs Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
        <v-sheet max-width="500" class="mt-8">
          <v-tabs background-color="yellow" grow>
            <v-tab>Tab One</v-tab>
            <v-tab>Tab Two</v-tab>
            <v-tab>Tab Three</v-tab>
            <v-tab>Tab Fore</v-tab>
            <v-tab>Tab Five</v-tab>
          </v-tabs>
        </v-sheet>

         <v-sheet max-width="500" class="mt-8">
          <v-tabs centered show-arrows grow>
            <v-tab>Tab One</v-tab>
            <v-tab>Tab Two</v-tab>
            <v-tab>Tab Three</v-tab>
            <v-tab>Tab Fore</v-tab>
            <v-tab>Tab Five</v-tab>
          </v-tabs>
        </v-sheet>

        <v-sheet max-width="500" class="mt-8"  v-model="tab">
          <v-tabs centered show-arrows grow>
            <v-tab>Tab One</v-tab>
            <v-tab>Tab Two</v-tab>
            <v-tab>Tab Three</v-tab>
            <v-tab>Tab Fore</v-tab>
            <v-tab>Tab Five</v-tab>
          </v-tabs>

         
        </v-sheet>

        <v-sheet max-width="500" class="mt-8">
          <v-tabs centered show-arrows slider-color="red" keydown >
            <v-tab >Tab One</v-tab>
            <v-tab>Tab Two</v-tab>
            <v-tab>Tab Three</v-tab>
            <v-tab>Tab Fore</v-tab>
            <v-tab>Tab Five</v-tab>
          </v-tabs>
        </v-sheet>




   <v-sheet max-width="500" class="mt-8">
           <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
   </v-sheet>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'one', 'two', 'three', 'fore',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
