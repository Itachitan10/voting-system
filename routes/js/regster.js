document.getElementById("Login").addEventListener("click", function() {
    const teacherName = document.getElementById("teacher-name").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    if (!teacherName || !password ) {
      errorMessage.textContent = "Please fill out all fields.";
      return;
    }
  
    const teacherData = {
      name1: teacherName,
      password: password,
    };
  
    fetch("http://localhost:3000/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(teacherData)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to save data.");
      }
      return res.json();
    })
    .then(data => {
      console.log("Registered:", data);
      alert("successfull register, " + teacherName + "!");
  
      document.getElementById("teacher-name").value = "";
      document.getElementById("password").value = "";
      errorMessage.textContent = "";
    })
    .catch(err => {
      console.error("Error:", err);
      errorMessage.textContent = "Failed to register. Try again later.";
    });
  });
  