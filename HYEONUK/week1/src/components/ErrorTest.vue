<template>
  <div>
    에러 테스트 컴포넌트 입니다. 응답없는 서버를 감지합니다.
  </div>
</template>

<script>
export default {
    created() {
        console.log('에러 테스트 컴포넌트 입니다. 응답없는 서버를 감지합니다.');
        this.$axios({
            url: 'test',
            method: 'get',
        }).then((response) => {
            console.log(response);
        }).catch(() => {});
    }
};
</script>

<style scoped>
</style>
