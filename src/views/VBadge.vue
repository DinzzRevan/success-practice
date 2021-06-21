<template>
  <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">VAlert Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
        <v-sheet max-width="500" class="mt-8">
          <v-badge content="gokulan">
            <template v-slot:badge>Loading..</template>
          </v-badge>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>