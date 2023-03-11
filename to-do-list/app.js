const loginForm = document.querySelector("#login-form"); //�Է�â+��ư
const loginInput = document.querySelector("#login-form input"); //����ڰ� ���� �Է��ϴ� �κ�(���� ���� ����)
const greeting = document.querySelector("#greeting"); //hello+���� ������ �κ�
const HIDDEN_CLASSNAME = "hidden"; // �����Էºκ�, �λ�κ� �����


//����� �Է°� ������ �������� �ϴ� �ϵ�
function happy(a) {
    greeting.innerText = "Hello, "+a+"!";//�ȳ� ������
    greeting.classList.remove(HIDDEN_CLASSNAME);//h1 hidden ����2
}

//first thing: ����� �̸� local storage�� ����Ǿ����� ã�´�
const savedUsername = localStorage.getItem("username");//���� ����� �̸� ��������
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);//���� ����� ����x�̸� form hidden ����(form ��Ÿ����)1
    loginForm.addEventListener("submit", handle);//����ڰ� �̸� �Է��ϸ� handle �Լ� ����
} else {
    happy(savedUsername);//���� ����� ����o�̸� ����� �Է°� ������ �������� �ϴ� �ϵ� �ϱ�
}

//second thing: ����Ǹ� �ϴ� �ϵ�
function handle(event) {
    event.preventDefault();//�⺻ ���� ����
    loginForm.classList.add(HIDDEN_CLASSNAME);//�⺻ form �����
    const username = loginInput.value;//����� �Է°� ��������
    localStorage.setItem("username", username);//����� �Է°� local storage�� ����
    happy(username);//����� �Է°� ������ �������� �ϴ� �ϵ�
}