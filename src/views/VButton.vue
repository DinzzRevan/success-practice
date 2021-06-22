<template>
  <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">VButton Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
        <v-sheet max-width="500" class="mt-8">
            <v-btn class="mr-10" color="purple darken-1">Button</v-btn>
            
            <v-btn class="mr-10" color="indigo lighten-4" dark>Button</v-btn>

            <v-btn class="mr-10" color="red lighten-1" depressed >Button</v-btn>

             <v-btn class="mt-10" color="purple darken-1" fab>dinesh</v-btn>

             <v-btn class="mt-10" color="purple darken-1" large>
                 <template v-slot:loader>
                            Loading..
                        </template>
                 dinesh
             </v-btn>


            <!-- <v-btn class="mr-10" color="purple darken-1" dark>Button</v-btn>
            <v-btn class="mr-10" color="purple darken-1" dark>Button</v-btn>  -->


        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>