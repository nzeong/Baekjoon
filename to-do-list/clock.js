const clock = document.querySelector("#clock");//clock에 넣겠다

function a() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");//string으로 감싸서 문자취급
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

a();//1초의 딜레이를 줄이기 위함
setInterval(a, 1000);