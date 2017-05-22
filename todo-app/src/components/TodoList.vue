<!--A component file consists three parts: template, component class and styles sections. 
1) The template area is the visual part of a component. 
2) Behaviour, events and data storage for the template are handled by the class. 
3) The style section serves to further improve the appearance of the template.-->

<!--JavaScript expressions in Vue are enclosed in double curly brackets.-->
<template>
  <div>
  <h3>Todo List</h3>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p> <!--Return in curly: 'Avoid using JS keyword as prop name.-->
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo v-on:delete-todo="deleteTodo" v-for='todo in todos' v-bind:todo='todo' :key='todo.title'></todo> <!--Needs keys like React does.-->
  </div>
</template>

<script type="text/javascript">
import Todo from './Todo'

export default {
  // name: 'todo-list' // For consistency, name the same way as when you instantiate it. Not necessarily needed?
  components: {
    Todo
  },
  props: ['todos'], // Has to match what we passed it as in the main component. Also have to declare the properties this will accept.
  deleteTodo (todo) {
    console.log('deleteTodo inside TodoList is firing.')
    const todoIndex = this.todos.indexOf(todo)
    this.todos.splice(todoIndex, 1)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  text-align: left;
}
</style>
