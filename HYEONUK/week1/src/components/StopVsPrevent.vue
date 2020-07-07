<template>
    <div @click="handle('div')">
        <button @click="handle('button-out')">Root event</button>
        <a href="/" @click="handle('a')">
            <button @click.prevent.stop="handle('button-in')">Prevent & stop</button>

            <button @click.prevent="handle('button-in')">Prevent</button>

            <button @click.stop="handle('button-in')">Stop</button>

            <button @click="handle('button-in')">Nothing</button>
        </a>
        <button @click.self="handle('button-self')">
            <span @click="handle('span')">Span</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "StopVsPrevent",
    methods: {
        handle(tag) {
            alert(tag);
        }
    }
};
</script>

<style scoped>
div {
    border: lightslategrey 1px solid;
}
* {
    box-sizing: border-box;
    padding: 5px;
}
button {
    background: white;
    border: steelblue 1px solid;
    border-radius: 5px;
    margin-right: 5px;
}

button:hover {
    background: skyblue;
    border: steelblue 1px solid;
    border-radius: 5px;
    margin-right: 5px;
}

span {
    background: lightskyblue;
}

span:hover {
    background: blue;
}
</style>