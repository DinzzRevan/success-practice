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

          <div class="mt-16">
            <v-file-input truncate-length="16" show-size></v-file-input>
          </div>

          <div class="mt-16">
            <v-file-input truncate-length="16" chips></v-file-input>
          </div>

          <div class="mt-16">
            <v-file-input truncate-length="16" color="green"></v-file-input>
          </div>

          <div class="mt-16">
            <v-file-input truncate-length="16" color="green" :counter="10"></v-file-input>
          </div>

          <div class="mt-16">
            <v-file-input
              truncate-length="16"
              color="green"
              outlined
              :counter="10"
              counter-size-string
            >
              <template v-slot:label>name</template>
            </v-file-input>
          </div>

          <div class="mt-16">
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field 
                    label="Name" 
                    v-model="task.name" 
                    :rules="nameRules">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field label="Email" v-model="task.email"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
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
      valid: false,
      autoCom: ["One", "Two", "Three", "Four"],
      task:{
        name:"",
        email:""
      },
      nameRules:[
        v => !!v || 'Name is required',
      ]
    };
  },
};
</script>

