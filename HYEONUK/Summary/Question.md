> ### \# 들어가기 전에...
> &nbsp;&nbsp;이 글은 Vue.js 스터디를 진행하며 생긴 의문점을 정리해놓는 글입니다.
> &nbsp;&nbsp;답변에 오류나 개인적인 의견이 있을 수 있으니 참고하여 주시기 바랍니다.

# Contents
- [x] [Vue는 MVVM 인가](#vuejs는-mvvm-인가)
- [ ] [Vue에서의 프록시란 무엇인가](#vue에서의-프록시란-무엇인가)

# Vue.js는 MVVM 인가

Vue.js 2.x 버전 가이드를 살펴보면 다음과 같은 언급이 있다.

> 엄격히 MVVM 패턴과 관련이 없지만 Vue의 디자인은 부분적으로 그것에 영감을 받았습니다. 관례적으로, Vue 인스턴스를 참조하기 위해 종종 변수 vm(ViewModel의 약자)을 사용합니다.  
> https://kr.vuejs.org/v2/guide/instance.html

* * *
### *Vue is similar to MVVM*
&nbsp;&nbsp;1.x 이하의 Vue.js 공식 가이드를 살펴보면 다음과 같은 이미지를 확인할 수 있다.

![1.x Vue.js Design Pattern](https://v1.vuejs.org/images/mvvm.png "1.x Vue.js")

&nbsp;&nbsp;하지만 최근 가이드에서 이미 확인했듯이 Vue.js는 엄밀한 의미의 MVVM이 아니다.

&nbsp;&nbsp;v1까지의 공식문서에서는 Vue.js를 library 라고 지칭했지만, v2부터는 *progressive framework* 라는 표현을 이용하여 Vue를 설명한다.

&nbsp;&nbsp;Vue.js는 MVVM과 유사한 구조를 가지고 있다. 이는 구버전의 가이드에서 Vue.js를 Library라고 지칭하다가, 2.x 버전에서 Framework로 바꾼 것과 유관하다고 생각되는데, Core library만을 살펴보면 MVVM과 상당히 흡사하다. 물론 컴포넌트는 View(template)를 포함하고 있고, Vuex는 Model의 역할, 일부 기능은 Controller의 역할도 수행한다.  

&nbsp;&nbsp;이런 점을 볼 때, Vue.js 프레임워크는 MVVM이 아니라고 보는 것이 타당할 것이다. 하지만 MVVM과 큰 유사성이 있고, MVVM에서 모티브를 얻었기에 공식 가이드에서 해당 표현을 사용했으리라 생각한다.

&nbsp;&nbsp;이는 실제 Vue.js의 구조에는 큰 변화가 없었지만, 프레임워크를 바라보는 관점의 변화를 의미하는 듯하다.

# Vue에서의 프록시란 무엇인가
> 각 Vue 인스턴스는 data 객체에 있는 모든 속성을 프록시 처리 합니다.

* Vue3에서는 ES6의 프록시를 이용하여 해당 개념을 도입한다고 들었는데, Vue2에서는 어떤 의미로 표현한 것인지 잘 모르겠다.