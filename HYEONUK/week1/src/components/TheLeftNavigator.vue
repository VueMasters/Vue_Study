<template>
        <nav>
            <ul>
                <li v-for="item in links" :key="item.name">
                    <div :style="{marginLeft : item.depth * 15 + 'px'}">
                        <template v-if="item.type === 'title'">
                            <h3>{{item.title}}</h3>
                        </template>
                        <template v-if="item.type === 'name'">
                            <router-link :to="{name: item.name, params: {title : item.title}}">{{item.title}}</router-link>
                        </template>
                        <template v-else-if="item.type === 'path'">
                            <router-link :to="{path: item.path, params: {title : item.title}}">{{item.title}}</router-link>
                        </template>
                        <template v-else-if="item.type === 'spacer'"></template>
                    </div>
                </li>
                <li v-for="n in 100" :key="n">{{n}}</li>
            </ul>
        </nav>
</template>

<script>
export default {
    data: () => ({
        links: [
            {
                type: "title",
                depth: 0,
                title: "Vue.js"
            },
            {
                type: "path",
                depth: 1,
                path: "/Vue.md",
                title: "What is Vue"
            },
            {
                type: "path",
                depth: 1,
                path: "/Question.md",
                title: "My Questions..."
            },
            {
                type: "path",
                depth: 1,
                path: "/Todo.md",
                title: "Todo"
            },
            {
                type: "spacer"
            },
            {
                type: "title",
                depth: 0,
                title: "Sources"
            },
            {
                type: "name",
                depth: 1,
                name: "computed",
                title: "Computed vs Watch"
            },
            {
                type: "name",
                depth: 1,
                name: "todo",
                title: "TODO List"
            },
            {
                type: "name",
                depth: 1,
                name: "acidrain",
                title: "Acid Rain"
            },
            {
                type: "name",
                depth: 1,
                name: "stop-vs-prevent",
                title: "Stop vs Prevent"
            },
            {
                type: "name",
                depth: 1,
                name: "ErrorTest",
                title: "If server not response"
            },
            {
                type: "path",
                depth: 1,
                path: "/prop-test/4",
                title: "Prop-test-4"
            },
            {
                type: "path",
                depth: 1,
                path: "/prop-test/5",
                title: "Prop-test-5"
            },
            {
                type: "spacer"
            }
        ]
    })
};
</script>

<style scoped>
nav {
    width: 220px;
    position: fixed;
    z-index: 100;
    top: 100px;
    left: 0;
    bottom: 0px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: white;
}

ul {
    list-style: none;
    padding-left: 18px;
    text-align: left;
}

li {
    height: 26px;
}

a {
    text-decoration: unset;
    color: black;
}

a:hover {
    color: rgb(36, 196, 134);
}

.router-link-exact-active {
    color: rgb(36, 196, 134);
}
</style>