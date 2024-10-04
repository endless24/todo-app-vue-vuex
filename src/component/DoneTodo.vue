<template>
   <div class="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" class="list-unstyled">
            <li v-for="todo in todos" :key="todo.id">
                {{todo.title}}
                <button class="remove-item btn btn-default btn-xs pull-right" @click="removeTodo(todo.id)">
                    <i class="fa fa-trash"></i>
                </button>
            </li>

        </ul>
        <div class="todo-footer">
            <strong>
              <span class="count-todos"></span>
            </strong>{{ todos.length }} Items completed
        </div>
    </div>
</template>

<script>

export default {
  name: "DoneTodo",

  props: {
    todos: {
      type: Array,
      Required: true,
    },
  },

  methods: {
    removeTodo(todoId) {
      this.$store.dispatch("deleteTodos", { id: todoId });
    },
  },
};
</script>
