const scontoMinorenni = 0.2;
const scontoOver = 0.4;
const tariffaKm = 0.21;

document.querySelector('.box button').addEventListener('click',function(){
  const userName = document.getElementById('userName').value;
  const userKm = document.getElementById('userKm').value;
  const userAge = document.getElementById('userAge').value;
  const userClass = document.getElementById('userClass').value;
  const ticketCode = Math.floor(Math.random()*(999999-100000+1)+100000);
  const d = new Date();
  console.log(d);
  let prezzoBiglietto;

  if(isNaN(userKm)){
    alert("Inserisci i km in numero!");
    return;
  };

  if((userName.trim().indexOf(' ') == -1)){
    alert("Inserisci nome e cognome!");
    return;
  };

  if(userClass == "null"){
    alert("Seleziona una classe!");
    return;
  } else if(userClass == "standard" || userClass == "standard silenzio"){
    prezzoBiglietto = userKm * tariffaKm;
  } else if(userClass == "premium"){
    prezzoBiglietto = userKm * tariffaKm * 1.5;
  } else if(userClass == "business"){
    prezzoBiglietto = userKm * tariffaKm * 2;
  } else if(userClass == "executive"){
    prezzoBiglietto = userKm * tariffaKm * 4;
  }

  if(userAge == "null"){
    alert("Seleziona una fascia d'età!");
    return;
  } else if(userAge == "neonato"){
    prezzoBiglietto = 0;
  } else if(userAge == "minorenne"){
    prezzoBiglietto -= prezzoBiglietto * scontoMinorenni;
  } else if(userAge == "senior"){
    prezzoBiglietto -= prezzoBiglietto * scontoOver;
  }
  
  document.getElementById("dateStart").innerHTML = `
    Emesso il ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} alle ${d.getHours()}:${d.getMinutes()}
  `;
  document.getElementById("dateEnd").innerHTML = `
  ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear() + 1}
  `;
  document.getElementById("price").innerHTML = prezzoBiglietto.toFixed(2);
  document.getElementById("userTicketId").innerHTML = userName;
  document.getElementById("userTicketKm").innerHTML = userKm;
  document.getElementById("userTicketClass").innerHTML = userClass;
  document.getElementById("userTicketAge").innerHTML = userAge;
  document.getElementById("ticketCode").innerHTML = ticketCode;
});