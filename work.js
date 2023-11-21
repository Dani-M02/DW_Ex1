////////////// PESCA IMG
eu.onclick = function() {
    let start = Date.now();
  
    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
  
      eu.style.left = timePassed / 5 + 'px';
  
      if (timePassed > 7000) clearInterval(timer);
  
    }, 20);
  }