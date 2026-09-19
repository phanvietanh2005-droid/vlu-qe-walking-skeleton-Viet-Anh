const login = require("./login");

test("Đăng nhập thành công với admin và 123", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Đăng nhập thất bại khi sai username", () => {
    expect(login("user", "123")).toBe(false);
});

test("Đăng nhập thất bại khi sai password", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Đăng nhập thất bại khi sai cả username và password", () => {
    expect(login("user", "456")).toBe(false);
});
