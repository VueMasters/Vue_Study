<template>
  <div>
    <div class="worried-face">😟</div>
    <div class="code">404</div>
    <div class="not-found">Server Not Response</div>
  </div>
</template>

<script>
export default {
    created() {
        console.log('Server not response...');
    }
}
</script>

<style scoped>
.worried-face {
    font-size: 60px;
}
.code {
    font-size: 60px;
    color: coral;
    text-decoration: underline;
}
.not-found {
    font-size: 36px;
}
</style>
