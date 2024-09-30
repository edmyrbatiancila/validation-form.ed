$(document).ready(function() {
    const phtOffset     = 8 * 60;
    const localTime     = new Date();
    const localOffset   = localTime.getTimezoneOffset() * 60000;
    const phTime        = new Date(localTime.getTime() + localOffset + (phtOffset * 60000));

    const isEvening = phTime.getHours() >= 18;

    const minimumDate = isEvening ? 1 : 0;

    $('#date').datepicker({ 
        minDate:    minimumDate, 
        maxDate:    "+1M +10D"
    });

    $('#vaccine').submit(function(event) {
        event.stopPropagation();

        var firstName   = $('#fname').first().val();
        var lastName    = $('#lname').first().val();
        var dateData    = $('#date').first().val();
        
        if(!firstName) {
            alert("First Name Field cannot be blank");
        }

        if(!lastName) {
            alert("Last Name field cannot be blank");
        }

        if(dateData === "mm/dd/yyyy") {
            alert("Please choose Date");
        }

        else {
            alert("Success " + firstName + " " + lastName + "! Your Vaccination is reserved on " + dateData);
        }
        
        return false;
    });
});