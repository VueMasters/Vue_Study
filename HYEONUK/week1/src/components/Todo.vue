<template>
    <div class="todo-app">
        <form class="todo-input-form" @submit.prevent="addNewTodo">
            <input class="todo-input" v-model="newTodo" placeholder="What need to be done?" />
        </form>
        <ul class="todo-items" v-if="list.length != 0">
            <li v-for="(item, index) in list" :key="index">
                <div class="todo-item" :value="index">
                    <span class="text">{{item}}</span>
                    <button class="delete-button" @click="deleteToto(index)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        list: [],
        newTodo: ""
    }),
    methods: {
        deleteToto(index) {
            this.list.splice(index, 1);
        },
        addNewTodo() {
            if (this.newTodo.length == 0) {
                return;
            }
            this.list.push(this.newTodo);
            this.newTodo = "";
        }
    }
};
</script>

<style scoped>
.todo-app {
    position: relative;
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todo-input-form {
    border: 1px solid lightgray;
    height: 2.3em;
    padding: 3px;
    box-sizing: content-box;
}
.todo-input {
    text-align: left;
    border: none !important;
    width: 100%;
    height: 100%;
}
.todo-input:focus {
    outline: none !important;
}

.todo-items {
    display: block;
    margin: 0 !important;
    padding-left: 3px;
    list-style: none;
    border: 1px solid lightgray;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-item {
    padding: 3px;
    position: relative;
    margin: 0 !important;
    height: 2.3em;
    line-height: 2.3em;
    border-bottom: 1px solid lightgray;

    text-align: left;
}

.delete-button {
    line-height: 2.3em;
    float: right;
    margin-right: 5px;
}
</style>