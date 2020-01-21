<template>
  <div>
    <h3>Completed Tasks: </h3>
    <div class="toDoItem" v-for="(item, index) in allTodos" :key="index">
      <div v-if="item.status == 'complete'">
        <input @click='callIncompleteToDo(item)' :id="'task_'+index" type='checkbox' checked>
        <label :for="'task_'+index">{{ item.description }}</label>
        <button>
          <edit-icon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex';
  import EditIcon from '../assets/editIcon.vue';

  export default {

    name: 'Completed',

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
        callIncompleteToDo: 'callIncompleteToDo'
      }),

    },



    watch: {

    },



    mounted: function() {

    },

    components: {
      EditIcon
    }
  }

</script>


<style scoped>
  button {
    background: transparent;
  }
</style>