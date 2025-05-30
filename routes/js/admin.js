

fetch('http://localhost:3000/api1')
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
    });
    
    const total = `<p>${data.length} candidates registered</p>`;
    document.getElementById('totalcan').innerHTML += total;
  })
  .catch(err => console.error('Error:', err));




// Fetching voting data
fetch('http://localhost:3000/voting_data')
  .then(res => res.json())
  .then(data => {
    const totalVotes =  `<p>${data.length} votes casted</p>`;  
    document.getElementById('TotalVotes').innerHTML += totalVotes;
  })
  .catch(err => console.error('Error:', err));


  document.getElementById('btn').addEventListener('click' ,()=>{ 
    setTimeout(() => {
      window.location.href ='http://localhost:3000/votingUser'
    }, 2000);
  })


  
  fetch('http://localhost:3000/username')
  .then(res => res.json())
  .then(data =>{ 
    console.log(data);
    
    
    if(!data.username){
        window.location.href = '../html/login.html'
    
    }else{ 
     
      document.getElementById('username').innerHTML = `Wellcome ${data.username}`
    }
    
  })
  .catch(err => console.error('err user'. err))

document.getElementById('date').innerHTML = new Date()




// logout
window.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');

  logoutBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/logout', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.text())
    .then(data => {
      alert(data);
      setTimeout(() => {
        window.location.href = '/login'
      }, 1000);
      document.getElementById('status').innerText = 'Not logged in';
    });
  });
});
