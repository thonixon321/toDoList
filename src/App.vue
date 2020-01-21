<template>
  <div id="app">
    <h1>To Do List</h1>
    <add-to-do />
    <incomplete-tasks />
    <completed-tasks />
  </div>
</template>

<script>
import addToDo from './components/add-to-do.vue';
import completedTasks from './components/completed-tasks.vue';
import incompleteTasks from './components/incomplete-tasks.vue';

export default {
  name: 'app',

  data: function() {
    return {
      createToDo: false
    }
  },

  computed: {

  },


  methods: {

  },



  created: function() {

  },



  components: {
    addToDo,
    completedTasks,
    incompleteTasks
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
