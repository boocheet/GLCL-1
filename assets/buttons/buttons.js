let fn = ()=>{
  let minus = document.getElementsByClassName('minus');
  console.log(minus);

  for(var i =0; i < minus.length; i++){
    var e = document.createElement('p');
    e.innerHTML = '-';
    minus[i].appendChild(e);
  }
};

document.addEventListener('DOMContentLoaded', fn, false)

let fn1 = ()=>{
  let plus = document.getElementsByClassName('plus');
  console.log(plus);

  for(var i =0; i < plus.length; i++){
    var e1 = document.createElement('p');
    e1.innerHTML = '+';
    plus[i].appendChild(e1);
  }
};

document.addEventListener('DOMContentLoaded', fn1, false)
