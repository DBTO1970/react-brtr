$(function() {
    // Time and Date
// make new Date Object and use function to update time while on page
    function updateTime() {    
        const today = new Date();
        var displayTime = today.toLocaleTimeString();
        setInterval(dateTimeClock, 1000);
        
        function dateTimeClock() {
            upDate = new Date();
            displayTime = upDate.toLocaleTimeString();
            document.getElementById("date-time").innerHTML = today.toDateString() + "<br />" + displayTime;
        }
    }

    if ( $('.member-header').length > 0 || $('.guest-header').length > 0) {
        $('.date-time').removeClass('d-none');
        updateTime();
    }

// Date Time Picker  Documentation https://demos.creative-tim.com/material-kit/docs/2.1/plugins/datetimepicker.html

$('.datetimepicker').datetimepicker({
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-screenshot',
      clear: 'fa fa-trash',
      close: 'fa fa-remove'
    }
  });


    
    
    
});

