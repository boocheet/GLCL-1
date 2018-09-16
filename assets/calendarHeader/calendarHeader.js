let calendarHead = () => {
  let month = document.getElementById('month');
  let monthSetter = (newMonth) => {
    month.innerHTML = newMonth;
  };
  monthSetter('September');
  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
  console.log(monthArr[0]);
  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let monthIndex = 8;
  leftArrow.addEventListener('click', ()=>{
    if(monthIndex > 0){
      monthIndex--;
      monthSetter(monthArr[monthIndex]);
    }
  });
  rightArrow.addEventListener('click', ()=>{
    if(monthIndex < monthArr.length-1){
      monthIndex++;
      monthSetter(monthArr[monthIndex]);
    }
  });
};


  // for (var i = 0; i < months.length; i++) {
  //   let nextMonth = document.getElementById('month');
  //   nextMonthClick.addEventListener('click', () => {
  //       if (i != monthsArr.length && (monthsArr[i] == monthName)) {
  //         nextMonth.innerHTML = monthsArr[i + 1];
  //       }
  //     }

document.addEventListener('DOMContentLoaded', calendarHead, false);
