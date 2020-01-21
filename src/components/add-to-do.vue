<template>
  <div class="addToDoContainer">
    <button v-if="addToDo ==  false" class="addButton" @click="addToDo = true">+ Add Task</button>

    <input v-model="toDoItem" placeholder="do dishes" v-if="addToDo" type='text'>
    <button v-if="addToDo" @click="updateTasks">Submit</button>
    <button v-if="addToDo" @click="addToDo = false">Cancel</button>

  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'AddToDo',
  data: function () {

    return {
      addToDo: false,
      toDoItem: '',
      idIteration: 0
    }

  },



  methods: {
     ...mapActions({
      callAddToDo: 'callAddToDo'
    }),

    updateTasks: function () {
      var toDoObj = {};

      this.idIteration++;

      toDoObj.status = 'incomplete';
      toDoObj.description = this.toDoItem;
      toDoObj.id = this.idIteration;

      this.callAddToDo(toDoObj);
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
