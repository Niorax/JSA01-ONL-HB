// Get form element by Id
const loginform = document.getElementById("form-login");

// Get element input use to write username
const username = document.getElementById("username");

// Get element input use to write password
const password = document.getElementById("password");

// Get element input use to write username
const errorUsername = document.getElementById("error-username");

// Get element input use to write password
const errorPassword = document.getElementById("error-password");

// Declare account for admin
const account_admin = { username: "admin", password: "123456789" };

// Add event for Form with action submit
loginform.addEventListener("submit", function(event) {
  //  Dùng để không load lại trang
  event.preventDefault();

  // Kiểm tra xem username hay password có để trống hay không
  if (username.value === "" || password.value === "") {
    // Kiểm tra xem username có để trống hay không
    if (username.value === "") {
      // Nếu có thì đổi màu ô input username
      username.style.border = "1px solid red";
      // Cập nhật nội dung bên trong thẻ p để báo lỗi
      errorUsername.innerText = "Không được bỏ trống username";
      errorUsername.style.display = "block"
    }
    // Kiểm tra xem password có để trống hay không
    if (password.value === "") {
      // Nếu có thì đổi màu ô input password
      password.style.border = "1px solid red";
      // Cập nhật nội dung bên trong thẻ p để báo lỗi
      errorPassword.innerText = "Không được bỏ trống password";
      errorPassword.style.display = "block"
    }
  } else {
    // Check user is admin?
    if (username.value === account_admin.username) {
      // If admin then we check password
      if (password.value === account_admin.password) {
        // If true then alert "Sign In success"
        alert("Đăng nhập thành công");
      } else {
        // If password wrong then we alert "Wrong password"
        alert("Mật khẩu không chính xác");
      }
    } else {
      // Nếu username sai thì alert ra
      alert("Tài khoản không chính xác");
    }
  }
});

// Thêm sự kiện khi thay đổi nội dung trong ô input username thì sẽ cập nhật lại màu của border
username.addEventListener("change", function () {
  // Kiểm tra xem nội dung của ô input có để trống hay không
  if (username.value != "") {
    // Nếu có nội dung thì mất viền màu đỏ, trả về css ban đầu
    username.style.border = "none";
    username.style.borderBottom = "1px solid #ccc";
    errorUsername.style.display = "none"
  }
});

// Thêm sự kiện khi thay đổi nội dung trong ô input password thì sẽ cập nhật lại màu của border
password.addEventListener("change", function () {
  // Kiểm tra xem nội dung của ô input có để trống hay không
  if (password.value != "") {
    // Nếu có nội dung thì mất viền màu đỏ, trả về css ban đầu
    password.style.border = "none";
    password.style.borderBottom = "1px solid #ccc";
    errorPassword.style.display = "none"
  }
});

if (password.value === account_admin.password) {
    
}

