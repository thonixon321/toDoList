<template>
  <div class="list">
    <h3>Incomplete Tasks: </h3>
    <div class="toDoItem" v-for="(item, index) in allTodos" :key="index">
      <div v-if="item.status == 'incomplete'">
        <input @click='callCompleteToDo(item)' :id="'task_'+index" type='checkbox'>
        <label :for="'task_'+index">{{ item.description }}</label>
      </div>
    </div>

  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex';


  export default {

    name: 'Incomplete',

    data: function() {
      return{

      }
    },



    computed: {
    ...mapGetters({
      allTodos: 'allTodos'
    })

    },



    props: {

    },



    methods: {
      ...mapActions({
        callCompleteToDo: 'callCompleteToDo'
      }),


    },



    watch: {

    },



    mounted: function() {

    },

    components: {

    }
  }

</script>


<style scoped>
  .list {
    display: flex;
    flex-direction: column;
  }
  .toDoItem {
    display: flex;
  }
</style>