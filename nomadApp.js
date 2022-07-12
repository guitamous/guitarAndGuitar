const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === ''){
        alert("아이디를 입력하세요")
    } else if(username.length > 10) {
        alert(`너무길어요`)
    } else {
        alert(`안녕하세요 ${loginInput.value}`)
    }
}

loginButton.addEventListener("click", onLoginBtnClick);


