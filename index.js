document.addEventListener('DOMContentLoaded', function() {
    const dateForm = document.getElementById('dateForm');
    const startDate = document.getElementById('startDate');
    const numDays = document.getElementById('numDays');
    const result = document.getElementById('result');

    // Set default start date to today
    startDate.valueAsDate = new Date();

    // Function to set days directly from the quick access buttons
    window.setDays = function(days) {
        numDays.value = days;
        calculateDate();
    };

    // Event listener to handle form submission
    dateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateDate();
    });

    function calculateDate() {
        const start = new Date(startDate.value);
        const daysToAdd = parseInt(numDays.value, 10);
        if (!isNaN(daysToAdd)) {
            start.setDate(start.getDate() + daysToAdd);
            result.textContent = start.toLocaleDateString('en-US');
        } else {
            result.textContent = 'Please enter a valid number of days.';
        }
    }
});
