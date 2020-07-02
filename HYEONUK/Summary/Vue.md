> ### \# 들어가기 전에...
> &nbsp;&nbsp;이 글은 Vue 스터디를 시작하기 전에 Vue와 관련있는 개념들을 정리하기 위해 작성하였습니다. 본인은 Vue를 짧게 배워본 경험이 있으며 구현보다는 이론적인 부분에 초점을 맞추어 학습할 예정입니다.


# \# Contents
* [Introduce Vue](#introduce-vue)
* [What is MVVM](#what-is-mvvm)
* [Comparison with other frameworks](#comparison-with-other-frameworks)
* [Companion Libraries](#companion-libraries)


# \# Introduce ***Vue***
> Vue is a progressive framework for building user interfaces.

&nbsp;&nbsp;Vue는 사용자 UI를 위한 프레임워크이다. 코어 라이브러리는 뷰 레이어에만 초점을 맞추어 다른 라이브러리와 결합하고, 점진적으로 채택할 수 있다.

&nbsp;&nbsp;Vue(Core)는 컴포넌트, 라우팅, 상태관리 등 여러 기능을 종합하여 프레임워크처럼 사용할 수 있다.  


# \# What is MVVM?
&nbsp;&nbsp;Vue.js core library는 View 레이어에 집중한다. Vue의 모티브가 된 MVVM에서 기존의 View 레이어에 로직을 작성하는 방법은 View-Model간의 의존성이 커지게 되어 코드가 복잡해질수록 유지보수가 어려워진다는 단점이 있다. 따라서  이런 문제를 해결하고자 MVVM에서는 View와 ViewModel(ViewModel에서는 View의 존재를 알지 못함), View와 Model간의 의존성을 제거하였다. 

> 엄격히 MVVM 패턴과 관련이 없지만 Vue의 디자인은 부분적으로 그것에 영감을 받았습니다. 관례적으로, Vue 인스턴스를 참조하기 위해 종종 변수 vm(ViewModel의 약자)을 사용합니다.  
> [Vue.js는 MVVM 인가](/HYEONUK/Summary/Question.md#vuejs는-mvvm-인가)


# \# Comparison with other frameworks
> React and Vue share many similarities.

&nbsp;&nbsp;Vue.js는 React, Angular의 영향을 많이 받았다.

&nbsp;&nbsp;가장 큰 차이점은 **배우기 쉽다**라고 생각한다. React는 모든 것을 js로 처리해서 어렵다고 생각하여 그와 대비되게 쉽게 만들어진 것이 Vue.js다. 기존 html을 이용하던 개발자들, 경험이 적은 개발자가 쉽게 배울 수 있도록 방향성을 잡았다.  

![learning curve of frameworks](/HYEONUK/resources/learning_curve_of_frameworks.png "learning curve of frameworks")  
다른 두 프레임워크의 러닝커브는 악명이 높다.

- [Vue.js 공식문서](https://kr.vuejs.org/v2/guide/comparison.html)에서 세 프레임워크를 잘 비교하고 있다.


# \# Companion Libraries
> &nbsp;&nbsp;Vue CLI(Command-line-interface)는 프로젝트를 편리하게 관리할 수 있는 도구이다. webpack 위에서 자동으로 Vue 프로젝트를 개발/배포할 수 있다.
> 
> [Vue CLI Guide](https://cli.vuejs.org/guide/)

### Vuex
> &nbsp;&nbsp;Vuex는 상태관리를 위한 라이브러리이다. Vue 프로젝트의 중앙 저장소 역할을 수행하한다. 컴포넌트간의 통신방식상 프로젝트가 복잡해지면 흐름을 파악하기 어려운데, 이를 한 곳에서 관리하여 알기 쉬워진다.
> 
> [Vuex Guide](https://vuex.vuejs.org/kr/)

### Vue Router
> &nbsp;&nbsp;Vue 라우터는 SPA를 만들기 위해 URI에서 어떤 컴포넌트를 렌더링할 지 알려주는 역할을 한다. 
> 
> [Vue Router Guide](https://router.vuejs.org/kr/guide/)
