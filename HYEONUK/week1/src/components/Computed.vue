<template>
    <div>
        <p>
            yes/no 질문을 물어보세요:
            <input v-model="question" />
        </p>
        <p>{{ answer }}</p>

        <div>x : {{ x }}</div>
        <div>y : {{ y }}</div>
        <div>z : {{ z }}</div>

        <div>now: {{ date }}</div>

        <div>
            <input v-model="message" />
        </div>
        <div v-for="n in 10" :key="n">reversed : {{ reversedMessage }}</div>
        <!-- 동일 인풋 캐싱 -->
    </div>
</template>

<script>
export default {
    data: () => ({
        date: "",
        y: "y",
        z: "",
        message: "",
        question: "",
        answer: "질문을 하기 전까지는 대답할 수 없습니다."
    }),
    created() {
        setTimeout(() => (this.y = "Not y"), 3000);
        this.date = Date.now();
        setInterval(() => {
            this.date = Date.now(); // 종속성이 없는 Date.now() 등은 업데이트할 수 없음.
        }, 1000);
    },
    computed: {
        reversedMessage() {
            return this.message
                .split("")
                .reverse()
                .join("");
        },
        x() {
            console.log("computed - x");
            return this.y;
        }
    },
    watch: {
        question: function(newQuestion) {
            this.answer = "입력을 기다리는 중...";
            this.getAnswer();
        },
        y(newVal, oldVal) {
            console.log("watch - " + oldVal + " to " + newVal);
            this.z = newVal;
        }
    },
    methods: {
        now() {
            return Date.now(); // 종속하는 대상이 없는 경우 methods
        },
        // _.debounce는 lodash가 제공하는 기능으로
        // 특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한합니다.
        // 이 경우, 우리는 yesno.wtf/api 에 액세스 하는 빈도를 제한하고,
        // 사용자가 ajax요청을 하기 전에 타이핑을 완전히 마칠 때까지 기다리길 바랍니다.
        // _.debounce 함수(또는 이와 유사한 _.throttle)에 대한
        // 자세한 내용을 보려면 https://lodash.com/docs#debounce 를 방문하세요.
        getAnswer: _.debounce(
            function() {
                if (this.question.indexOf("?") === -1) {
                    this.answer =
                        "질문에는 일반적으로 물음표가 포함 됩니다. :(";
                    return;
                }
                this.answer = "생각중...";
                var vm = this;
                axios
                    .get("https://yesno.wtf/api")
                    .then(function(response) {
                        vm.answer = _.capitalize(response.data.answer);
                    })
                    .catch(function(error) {
                        vm.answer =
                            "에러! API 요청에 오류가 있습니다. " + error;
                    });
            },
            // 사용자가 입력을 기다리는 시간(밀리세컨드) 입니다.
            500
        )
    }
};
</script>
