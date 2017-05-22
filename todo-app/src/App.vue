<!--This is how you comment in a vue file. vue uses html like syntax as opposed to React which uses Javascript.-->

<!--If you have not used AngularJS before, you probably don’t know what a directive is. 
Essentially, a directive is some special token in the markup that tells the library to do something to a DOM element. 
In Vue.js, the concept of directive is drastically simpler than that in Angular. 
A Vue.js directive can only appear in the form of a prefixed HTML attribute-->

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todo-list v-bind:todos='todos'> <!--v-bind is a directive. This here is similar to props in React.-->
    </todo-list> <!--Uses css style component names as opposed to camelCase like React uses.-->
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app', // Main or 'parent' component.
  components: {
    TodoList // Needs to match the import line.
  },
  /* Components' available data to their respective templates using a data function.
  This function returns an object with the properties intended for the template. */
  data () {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
