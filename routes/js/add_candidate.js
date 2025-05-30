var positions = [
  "President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Auditor",
  "P.I.O",
  "Grade Representative",
];

var positionsDiv = document.getElementById("positions");

positions.forEach(function (pos) {

  const div = document.createElement("div");
  div.classList.add("position-box");

  div.innerHTML = `
    <h2>${pos}</h2>
    <input type="text" placeholder="Candidate Name" id="${pos}-name" />
    <select id="${pos}-grade">
      <option value="">Select Grade</option>
      <option value="SNED">SNED</option>
        <option value="KENDER">KINDER</option>
      <option value="Grade 1">Grade 1</option>
      <option value="Grade 2">Grade 2</option>
      <option value="Grade 3">Grade 3</option>
      <option value="Grade 4">Grade 4</option>
      <option value="Grade 5">Grade 5</option>
      <option value="Grade 6">Grade 6</option>
    </select>
    <input type="text" placeholder="Enter Section" id="${pos}-section" />
    <button id="submitData">Submit ${pos}</button>
  `;


  const btn = div.querySelector("button");
  btn.addEventListener("click", function () {
    submitCandidate(pos);
  });

  positionsDiv.appendChild(div);
});

// Function para mag-submit ng candidate
function submitCandidate(pos) {
  const name = document.getElementById(`${pos}-name`).value;
  const grade = document.getElementById(`${pos}-grade`).value;
  const section = document.getElementById(`${pos}-section`).value;

  if (name && grade && section) {
    const candidate = {
      position: pos,
      name: name,
      grade: grade,
      section: section,
    };

    console.log("Submitting candidate for " + pos + ":", candidate);
    sendData(candidate);
    alert(`${pos} registered successfully!`);

    document.getElementById(`${pos}-name`).value = "";
    document.getElementById(`${pos}-grade`).value = "";
    document.getElementById(`${pos}-section`).value = "";
  } else {
    alert("Please complete all fields for " + pos + ".");
  }
}

function sendData(candidate) {
  fetch("http://localhost:3000/candidates", {
    method: "POST", // POST request
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(candidate), 
  })
  .then((response) => {
    if (response.ok) {
      return response.json(); 
    } else {
      throw new Error("Error sending data: " + response.statusText);
    }
  })
  .then((data) => {
    console.log("Server response:", data); 
  })
  .catch((error) => {
    console.error("Network error:", error); // Display any error
  });
}


document.getElementById('home').addEventListener('click', ()=>{ 
  setTimeout(() => {
    window.location.href = "/Admin"
  }, 1000);
})