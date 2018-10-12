let dashboard = () => {
  const dashBody = document.getElementById('body');
  const monthChange = (direction) => {
    return new CustomEvent('monthChange', {
      buubles: false,
      detail: {
        changeDirection: direction
      }
    });
  }

  const calendar = document.getElementById('calendar');
  dashBody.addEventListener('arrowClick', function(event) {
    calendar.dispatchEvent(monthChange(event.detail.arrowDirection));
  }, true);

  $.ajax({
    method: "GET",
    url: "http://localhost:3000/User",
    dataType: "json"
  }).then((response)=>{
    console.log('response', response);
  });

};

document.addEventListener('DOMContentLoaded', dashboard, false);
