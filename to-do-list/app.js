const loginForm = document.querySelector("#login-form"); //입력창+버튼
const loginInput = document.querySelector("#login-form input"); //사용자가 정보 입력하는 부분(정보 추출 위함)
const greeting = document.querySelector("#greeting"); //hello+ㄴㄱ 나오는 부분
const HIDDEN_CLASSNAME = "hidden"; // 정보입력부분, 인사부분 숨기기


//사용자 입력값 가지고 해줬으면 하는 일들
function happy(a) {
    greeting.innerText = "Hello, "+a+"!";//안녕 ㄴㄱ야
    greeting.classList.remove(HIDDEN_CLASSNAME);//h1 hidden 제거2
}

//first thing: 사용자 이름 local storage에 저장되었는지 찾는다
const savedUsername = localStorage.getItem("username");//먼저 사용자 이름 변수정의
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);//만약 사용자 지정x이면 form hidden 제거(form 나타나기)1
    loginForm.addEventListener("submit", handle);//사용자가 이름 입력하면 handle 함수 실행
} else {
    happy(savedUsername);//만약 사용자 지정o이면 사용자 입력값 가지고 해줬으면 하는 일들 하기
}

//second thing: 제출되면 하는 일들
function handle(event) {
    event.preventDefault();//기본 동작 정지
    loginForm.classList.add(HIDDEN_CLASSNAME);//기본 form 숨기기
    const username = loginInput.value;//사용자 입력값 변수정의
    localStorage.setItem("username", username);//사용자 입력값 local storage에 저장
    happy(username);//사용자 입력값 가지고 해줬으면 하는 일들
}