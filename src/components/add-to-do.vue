<template>
  <div class="addToDoContainer">
    <button v-if="addToDo ==  false" class="addButton" @click="addToDo = true">+ Add Task</button>

    <input v-model="toDoItem" placeholder="do dishes" v-if="addToDo" type='text'>
    <button v-if="addToDo" @click="updateTasks">Submit</button>
    <button v-if="addToDo" @click="addToDo = false">Cancel</button>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AddToDo',
  data: function () {

    return {
      addToDo: false,
      toDoItem: '',
      idIteration: 0
    }

  },

  computed: {

    ...mapGetters({
      allTodos: 'allTodos'
    })

  },



  methods: {
     ...mapActions({
      callAddToDo: 'callAddToDo'
    }),

    updateTasks: function () {
      var toDoObj = {},
          idNum = parseFloat(this.allTodos.length);

      if (this.toDoItem !== '') {
        this.idIteration = idNum++;
        toDoObj.status = 'incomplete';
        toDoObj.description = this.toDoItem;
        toDoObj.id = this.idIteration;
        toDoObj.saved = true;
        toDoObj.deleted = false;

        this.callAddToDo(toDoObj);
      }
      this.addToDo = false;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addButton {
  padding: 1em;
}

</style>
