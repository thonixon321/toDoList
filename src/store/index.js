import Vue from 'vue';
import Vuex from 'vuex';

//load vuex
Vue.use(Vuex);

//create store
export const store = new Vuex.Store({
  //data goes here
 state: {
  todo: []
 },

//retrieve data with these methods
 getters: {
  allTodos: (state) => state.todo

 },

//call mutations and getters from here (step 1)
 actions: {

  callAddToDo (state, todo) {
    console.log(todo);
    state.commit('addAToDo', todo);
  },

  callCompleteToDo (state, todo) {
    state.commit('completeAToDo', todo);
  },

  callIncompleteToDo (state, todo) {
    state.commit('incompleteAToDo', todo);
  }
},

//set/update/add data with these methods (step 2)
 mutations: {
  initialiseStore(state) {
      if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );

			}

  },

  addAToDo (state, todo) {
    state.todo.push(todo);
    console.log(state);
  },

  completeAToDo (state, todo) {
    state.todo.forEach(function(el){
      if (el.id == todo.id) {
        el.status = 'complete';
      }
    });
  },

  incompleteAToDo (state, todo) {
    state.todo.forEach(function(el){
      if (el.id == todo.id) {
        el.status = 'incomplete';
      }
    });
  }



 }
});

store.subscribe((mutation, state) => {
  // Store the state object as a JSON string

  localStorage.setItem('store', JSON.stringify(state));

});