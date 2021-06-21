<template>
    <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">Tooltip Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
          <v-tooltip bottom>
      <template v-slot:acteivator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Button
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
      </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
        
        }
    }
}
</script>