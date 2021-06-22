<template>
  <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">VAlert Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
        <v-sheet max-width="500" class="mt-8">
          <v-card elevation="2" height="100" dark hover color="green">Card Component</v-card>
          <v-card
            class="mt-10"
            elevation="2"
            height="100"
            light
            :hover="false"
            color="green"
            :elevation="20"
          >Card Component</v-card>

          <v-card
            class="mt-10"
            elevation="2"
            height="100"
            :ripple="{ class: `red--text` }"
            color="warning"
            :loading="true"
          >Card Component</v-card>

          <v-card
            class="mt-10"
            elevation="2"
            height="100"
            color="red"
            :loading="true"
            rounded="pill"
          >Card Component</v-card>

          <v-card loading  class="mt-10" color="pink">
            Hello
            <template v-slot:progress>Loading..</template>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>