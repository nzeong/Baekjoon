const clock = document.querySelector("#clock");//clock�� �ְڴ�

function a() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");//string���� ���μ� �������
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

a();//1���� �����̸� ���̱� ����
setInterval(a, 1000);