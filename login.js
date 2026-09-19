function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Chỉ chạy phần giao diện khi đang ở trình duyệt
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const message = document.getElementById("message");

        if (login(username, password)) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai username hoặc password!";
        }
    });
}

// Cho phép Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
