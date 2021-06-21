<template>
  <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">VAlert Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
        <v-sheet max-width="500" class="mt-8">
          <v-chip active close >
              dinesh
          </v-chip>

           <v-chip active color="yellow" draggable>
              dinesh
          </v-chip>

           <v-chip active color="red" draggable  close @click:close="chipone = false">
              dinesh
          </v-chip>
            <v-chip
          class="ma-2"
      close
      color="orange"
      label
      outlined
      filter
      @click:close="chip4 = false"
    >
      Complete
    </v-chip>


        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            chipone:true,
            chip4:true
        }
    }
}
</script>