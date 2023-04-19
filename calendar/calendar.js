$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        themeSystem: 'bootstrap4',
        defaultDate: new Date().toLocaleDateString(),
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Event1',
                start: '2023-04-20'
            }
        ]
    });

});