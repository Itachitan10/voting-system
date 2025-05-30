fetch('http://localhost:3000/voting_data')
  .then(res => res.json())
  .then(data => {
    const tableBody = document.getElementById('votesTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach((record, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${record.user_name}</td>
        <td>${record.grade_section}</td>
        <td>${record.president}</td>
        <td>${record.vice_president}</td>
        <td>${record.secretary}</td>
        <td>${record.treasurer}</td>
        <td>${record.auditor}</td>
        <td>${record.pio}</td>
        <td>${record.grade_representative}</td>
        <td>${record.created_at}</td>
        <td><button class="delete-btn" data-id="${record.id}">Delete</button></td>
      `;
      tableBody.appendChild(row);
    });

    deletedata(); 
  })
  .catch(err => console.error('Error:', err));


function deletedata() {
  const btns = document.querySelectorAll('.delete-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (confirm(`Delete vote #${id}?`)) {
        fetch(`http://localhost:3000/voting_data_dalete/${id}`, {
          method: 'DELETE'
        })
        .then(res => {
          if (!res.ok) throw new Error("Delete failed.");
          return res.json();
        })
        .then(data => {
          alert(`Vote  deleted.`);
          window.location.reload();
        })
        .catch(err => {
          console.error("Delete error:", err);
          alert("Failed to delete.");
        });
      }
    });
  });
}


document.getElementById('home').addEventListener('click', ()=>{ 
  setTimeout(() => {
    window.location.href = "/Admin"
  }, 1000);
})