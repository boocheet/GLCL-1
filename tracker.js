let tracker = () => {
 	let min5Inc = document.getElementById('5+min')
	let counter = document.getElementById('counter');
	let totalTime = 0;
  const timeInADay = 1440;
	min5Inc.addEventListener('click', ()=>{
    if (totalTime <= timeInADay){
      totalTime +=5;
      counter.innerHTML = totalTime;
    }
	});
  let min5Dec = document.getElementById('5-min')
	min5Dec.addEventListener('click', ()=>{
    if (totalTime > 0 && totalTime > 5){
        totalTime -= 5;
        counter.innerHTML = totalTime;
      }
  });
  let min15Dec = document.getElementById('15-min')
	min15Dec.addEventListener('click', ()=>{
    if (totalTime > 0 && totalTime > 15){
		    totalTime -= 15;
		    counter.innerHTML = totalTime;
      }
  });
 	let min15Inc = document.getElementById('15+min')
	min15Inc.addEventListener('click', ()=>{
    if (totalTime <= timeInADay){
      totalTime += 15;
      counter.innerHTML = totalTime;
    }
	});
};

 document.addEventListener('DOMContentLoaded', tracker, false);
