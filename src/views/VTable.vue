<template>
  <v-container>
    <v-row>
      <v-col xs12>
        <h3 class="text-h5 mt-1">Tabl Component</h3>
        <v-divider class="grey lighten-3 mt-4"></v-divider>
        <v-sheet max-width="500" class="mt-8">
          <v-data-table
          :headers="headersList"
          :items="tableDateList">

          </v-data-table>
        </v-sheet>


          <v-sheet max-width="500" class="mt-8">
          <v-data-table :disable-pagination="true"
          :headers="headersList"
          :items="tableDateList">

          </v-data-table>
        </v-sheet>



         <v-sheet max-width="500" class="mt-8">
          <v-data-table :disable-pagination="true"
          :headers="headersList"
          :items="tableDateList">
          </v-data-table>
        </v-sheet>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headersList: [
        {
          text: "name",
          value: 'name',
        },
        {
          text: "age",
          value: 'age',
        },
        {
          text: "email",
          value: 'email',
        },
      ],
      tableDateList: [
        {
          name: "dinesh",
           age: "25",
          email: "dinesh@gmail.com",
        },
          {
          name: "gokulan",
           age: "25",
          email: "dinesh@gmail.com",
        },
          {
          name: "raja",
           age: "20",
          email: "dinesh@gmail.com",
        },
      ],
    };
  },
};
</script>