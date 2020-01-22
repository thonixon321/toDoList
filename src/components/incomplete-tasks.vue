<template>
  <div class="list">
    <h3>Incomplete Tasks: </h3>
    <div class="toDoItem" v-for="(item, index) in allTodos" :key="index">
      <div v-if="item.status == 'incomplete'">
        <div v-if="item.saved == true">
          <input @click='callCompleteToDo(item)' :id="'task_'+index" type='checkbox'>
          <label :for="'task_'+index">{{ item.description }}</label>
          <button @click="item.saved = false">
            <edit-icon />
          </button>
          <button>
            <delete-icon />
          </button>
        </div>
        <div v-else>
          <input @click='callCompleteToDo(item)' :id="'task_'+index" type='checkbox'>
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

    name: 'Incomplete',

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
        callCompleteToDo: 'callCompleteToDo'
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

</style>