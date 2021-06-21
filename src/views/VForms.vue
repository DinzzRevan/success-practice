<template>
  <div>
    <v-container>
      <v-row>
        <v-col xs12>
          <h3 class="text-h5 mt-1">Tabl Component</h3>
          <v-divider class="grey lighten-3 mt-4"></v-divider>

          <v-autocomplete :items="autoCom" :allow-overflow="false"></v-autocomplete>

          <div class="mt-16">
            <v-autocomplete :items="autoCom" background-color="yellow">
              <template v-slot:label>lable</template>
            </v-autocomplete>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autoCom: ["One", "Two", "Three", "Four"],
    };
  },
};
</script>

