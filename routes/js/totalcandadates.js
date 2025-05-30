document.getElementById('searchInput').addEventListener('keyup', function() {
  var filter = this.value.toUpperCase();
  var table = document.getElementById('positionsTable');
  var tr = table.getElementsByTagName('tr');

  for (var i = 1; i < tr.length; i++) {  // start sa 1 para di kasama header
    var tdPosition = tr[i].getElementsByTagName('td')[1];
    var tdName = tr[i].getElementsByTagName('td')[2];
    if (tdPosition && tdName) {
      var positionValue = tdPosition.textContent || tdPosition.innerText;
      var nameValue = tdName.textContent || tdName.innerText;
      if (positionValue.toUpperCase().indexOf(filter) > -1 || nameValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
   
   
 fetch('http://localhost:3000/api1')
.then(res => {
if (!res.ok) {
   throw new Error('Hindi matagumpay ang paggawa ng request sa server');
   }
  return res.json();
})  .then(data => {    console.log(data);
renderTable(data)    
 })
.catch(err => {
  console.error('Error fetching data:', err);
   showStatusMessage('Error: ' + err.message, 'error');
  })
  function renderTable(studentData) {
  var tableBody = document.getElementById('positionsTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  if (!Array.isArray(studentData)) {
    showStatusMessage('Error: Hindi tamang format ang data', 'error');
    return;
  }

  studentData.forEach( (item, index) => {
    var row = document.createElement('tr');
    row.innerHTML =
      '<td>' + (index + 1) + '</td>' +
      '<td>' + item.position + '</td>' +
      '<td>' + item.name + '</td>' +
      '<td>' + item.grade + '</td>' +
      '<td>' + item.section + '</td>' +
      '<td><button class="delete-btn" data-id="' + item.id + '">Delete</button></td>';
    tableBody.appendChild(row);
  });

  // Attach delete button event listeners
  addDeleteEventListeners();
}




function addDeleteEventListeners() {
  var btns = document.querySelectorAll('.delete-btn');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var id = e.target.dataset.id;

      if (confirm("Sigurado ka bang gusto mong i-delete ang candidate na ito?")) {
        deleteCandidate(id);
      }
    });
  });
}

function deleteCandidate(id) {
  fetch(`http://localhost:3000/api1/${id}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Hindi matagumpay ang pag-delete sa server');
      }
      return res.json();
    })
    .then(data => {


      setTimeout(() => {
        window.location.reload()
      }, 1000);
    })
    .catch(err => {
      console.error('Error deleting data:', err);
      showStatusMessage('Error sa pag-delete: ' + err.message, 'error');
    });
}

document.getElementById('home').addEventListener('click', ()=>{ 
  setTimeout(() => {
    window.location.href = "/Admin"
  }, 1000);
})