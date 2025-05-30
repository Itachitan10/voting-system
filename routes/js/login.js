const button = document.getElementById("Login");
button.onclick = function login() {
  const teacherName = document.getElementById("teacher-name").value.trim();
  const password1 = document.getElementById("password").value.trim();

  if (!teacherName || !password1) {
    document.getElementById("error-message").innerText =
      " All fields must be filled out!";
    return;
  }

  fetch("http://localhost:3000/loginteachers", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    credentials : "include",
    body: JSON.stringify({ teacherName: teacherName,password1: password1, }),
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Invalid login credentials!");
        }
        throw new Error("err");
      }
      return res.json();
    })
    .then((data) => {
      alert('successfull login', data)
      setTimeout(() => {
        window.location.href = '/admin'
      }, 1000);
      console.log("Login successful");
    })
    .catch((error) => {
      console.error("Error saving data", error);

    });
};
