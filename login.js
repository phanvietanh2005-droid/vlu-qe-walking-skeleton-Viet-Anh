function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Xử lý form trên giao diện
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

// Export để Jest có thể kiểm thử
if (typeof module !== "undefined") {
    module.exports = login;
}
