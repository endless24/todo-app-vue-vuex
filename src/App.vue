<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="todolist not-done">
                    <h1>Todos</h1>
                    <AddTodo />
                    <!-- <button id="checkAll" class="btn btn-success">Mark all as done</button> -->

                    <hr>
                  <TodoListView  :todos="unfinishedTodo" />
                  <div class="todo-footer">
                      <strong>
                          <span class="count-todos"></span>
                      </strong>{{ unfinishedTodo.length }} Items Left
                  </div>
                </div>
            </div>
            <div class="col-md-6">
                <DoneTodo :todos="finishedTodo"  />
            </div>
        </div>
    </div>
</template>


<script>
import TodoListView from "./component/TodoListView.vue";
import DoneTodo from "./component/DoneTodo.vue";
import AddTodo from "./component/AddTodo.vue";

export default {
  name: "app",

  components: {
    TodoListView,
    DoneTodo,
    AddTodo,
  },

  // finishedTodo and unfinishedTodo is use to display task that are completed and not completed

  computed: {
    finishedTodo() {
      return this.$store.getters.findTodos.filter(
        (todo) => todo.completed === true
      );
    },
    unfinishedTodo() {
      return this.$store.getters.findTodos.filter(
        (todo) => todo.completed === false
      );
    },
  },
};
</script>

<style>
body {
  background-color: #eeeeee;
}
.todolist {
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  margin-top: 30px;
}
.todolist h1 {
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
}
.form-control {
  border-radius: 0;
}
li.ui-state-default {
  background: #fff;
  border: none;
  border-bottom: 1px solid #ddd;
}

li.ui-state-default:last-child {
  border-bottom: none;
}

.todo-footer {
  background-color: #f4fce8;
  margin: 0 -20px -10px -20px;
  padding: 10px 20px;
}
#done-items li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  text-decoration: line-through;
}
#done-items li:last-child {
  border-bottom: none;
}
#checkAll {
  margin-top: 10px;
}
</style>
