<template>
 <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">VAlert Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
        <v-sheet max-width="500" class="mt-8">
         

          <v-btn class="ml-10" color="error" @click="dialog = true">dinesh</v-btn>
          <v-btn class="ml-10" color="green" @click="dialog1 = true">dinesh</v-btn>
          <v-btn class="ml-10" color="" @click="dialog2 = true">dinesh</v-btn>


          <v-btn class="mt-15 ml-10" color="info" @click="dialog3 = true">dinesh</v-btn>
        



          <v-dialog :close-delay="900000000000" keydown v-model="dialog" width="600">this dialog00</v-dialog>
          <v-dialog v-model="dialog1" fullscreen width="600">this dialog0001111</v-dialog>
          <v-dialog v-model="dialog2" width="600" hide-overlay >this dialog</v-dialog>
          <v-dialog v-model="dialog3" width="600" keydown persistent no-click-animation open-on-focus>this dialog

              <!-- <template v-slot:activator> 
                  name
              </template> -->
          </v-dialog> 


        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            dialog:false,
            dialog1:false,
            dialog2:false,
            dialog3:false,
            
        }
    }
}
</script>