
fetch('http://localhost:3000/voting_data')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(item => {
      press(item);
      vice(item)
      sec(item)
      tree(item) 
      audi(item) 
      pio(item) 
      grade_re(item) 
    });

    // president
    presidentv.forEach(element1 => {
         append1 =` <div class="name"> ${element1.president} </div>
      <div class="votes"> votes :${element1.votes}</div>`
      document.getElementById('press').innerHTML +=append1;
    });


     //vice president
   vicev.forEach(element2 => {
         append2 =` <div class="name"> ${element2.vice_president} </div>
      <div class="votes"> votes :${element2.votes}</div>`
      document.getElementById('Vice').innerHTML += append2;
    });

    // sec
    

    secv.forEach(element3 =>{ 
       append3 =` <div class="name"> ${element3.secretary} </div>
      <div class="votes"> votes :${element3.votes}</div>`
      document.getElementById('sec').innerHTML += append3;

    })
    

    // treasurer
    trev.forEach(element4 =>{ 
       append4 =` <div class="name"> ${element4.treasurer} </div>
      <div class="votes"> votes :${element4.votes}</div>`
      document.getElementById('tre').innerHTML += append4;

    })


    audiv.forEach(element5 =>{ 

        append5 =` <div class="name"> ${element5.auditor} </div>
      <div class="votes"> votes :${element5.votes}</div>`
      document.getElementById('audi').innerHTML += append5;

    })
    


    
    piov.forEach(element6 =>{ 

        append6 =` <div class="name"> ${element6.pio} </div>
      <div class="votes"> votes :${element6.votes}</div>`
      document.getElementById('pio').innerHTML += append6;

    })

    

    gradev.forEach(element7 =>{ 
      append7 =` <div class="name"> ${element7.grade_representative} </div>
      <div class="votes"> votes :${element7.votes}</div>`
      document.getElementById('grade').innerHTML += append7;

    })
  })

  
  .catch(err => console.error('err', err));

const presidentv = [];
function press(data) {
  const found1 = presidentv.find(e =>
     e.president === data.president 
    );
  if (!found1) {
   presidentv.push({president: data.president, votes: 1});
  } else {
    found1.votes++;
  }

}
// vice
const vicev = []
function vice(data){
  const found2 = vicev.find(e => e.vice_president === data.vice_president);
  if (!found2) {
    vicev.push({vice_president: data.vice_president, votes: 1});
  } else {
    found2.votes++;
  }
}
// sec
const secv = [];
function sec(data){ 
  const found3  = secv.find(e => e. secretary === data. secretary);
  if(!found3){ 
    secv.push({secretary :data.secretary, votes :1})
  }else{ 
    found3.votes++;
  }
}




const trev = []
function tree(data) {

  
  const found4 = trev.find(e => e.treasurer === data.treasurer);

  if (!found4) {
    trev.push({treasurer: data.treasurer, votes: 1});
  } else {
    found4.votes++;
  }

}




const audiv =[]

  function audi(data){
  const found5 = audiv.find(e => e.auditor === data.auditor);
  if (!found5) {
    audiv.push({auditor: data.auditor, votes: 1});
  } else {
    found5.votes++;
  }

}



const piov =[];
function pio(data){
  const found6 = piov.find(e => e.pio === data.pio);

  if (!found6) {
    piov.push({pio: data.pio, votes: 1});
  } else {
    found6.votes++;
  }

}

const gradev = [];
function grade_re(data){
  const found7 = gradev.find(e => e.grade_representative === data.grade_representative);
  if (!found7){
    gradev.push({ grade_representative : data.grade_representative, votes: 1});
  } else {
    found7.votes++;
  }

}




document.getElementById('home').addEventListener('click', ()=>{ 
  setTimeout(() => {
    window.location.href = "/Admin"
  }, 1000);
})