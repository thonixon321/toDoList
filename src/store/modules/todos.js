

//data goes here
const state = {
  todos: []

};


//retrieve data with these methods
const getters = {
  allTodos: (state) => state.todos

};

//call mutations and getters from here (step 1)
const actions = {
  callAddToDo (state, todo) {
    state.commit('addAToDo', todo);
  },

  callCompleteToDo (state, todo) {
    state.commit('completeAToDo', todo);
  },

  callIncompleteToDo (state, todo) {
    state.commit('incompleteAToDo', todo);
  }
};

//set/update/add data with these methods (step 2)
const mutations = {
  addAToDo (state, todo) {

    state.todos.push(todo);

  },

  completeAToDo (state, todo) {
    state.todos.forEach(function(el){
      if (el.id == todo.id) {
        el.status = 'complete';
      }
    });
  },

  incompleteAToDo (state, todo) {
    state.todos.forEach(function(el){
      if (el.id == todo.id) {
        el.status = 'incomplete';
      }
    });
  }



};

export default {
  state,
  getters,
  actions,
  mutations
};
