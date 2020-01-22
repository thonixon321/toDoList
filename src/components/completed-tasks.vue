<template>
  <div class="list">
    <h3>Completed Tasks: </h3>
    <div class="toDoItem" v-for="(item, index) in allTodos" :key="index">
      <div v-if="item.status == 'complete'">
        <div v-if="item.saved == true">
          <input @click='callIncompleteToDo(item)' :id="'task_'+index" type='checkbox' checked>
          <label :for="'task_'+index">{{ item.description }}</label>
          <button @click="item.saved = false">
            <edit-icon />
          </button>
          <button>
            <delete-icon />
          </button>
        </div>
        <div v-else>
          <input @click='callIncompleteToDo(item)' :id="'task_'+index" type='checkbox' checked>
          <input type='text' v-model="item.description">
          <button @click="item.saved = true">
            <save-icon />
          </button>
          <button>
            <delete-icon />
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex';
  import EditIcon from '../assets/editIcon.vue';
  import DeleteIcon from '../assets/deleteIcon.vue';
  import SaveIcon from '../assets/saveIcon.vue';

  export default {

    name: 'Completed',

    data: function() {
      return{
        editing: false
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
      EditIcon,
      DeleteIcon,
      SaveIcon
    }
  }

</script>


<style scoped>
  button {
    background: transparent;
  }
</style>