document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#loginForm');
    const roleSelect = document.querySelector('#role');
    const tripForm = document.querySelector('#tripForm');
    const paymentForm = document.querySelector('#paymentForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const role = roleSelect.value;
            if (role === 'customer') {
                window.location.href = 'choose_trip.html';
            } else if (role === 'driver') {
                window.location.href = 'driver_trips.html';
            } else {
                alert('Invalid role selected.');
            }
        });
    }

    if (tripForm) {
        tripForm.addEventListener('submit', function(event) {
            event.preventDefault();
            window.location.href = 'available_trips.html';
        });
    }

    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const paymentMethod = document.querySelector('#payment_method').value;
            if (paymentMethod === 'visa') {
                window.location.href = 'payment_success.html';
            } else if (paymentMethod === 'on_site') {
                window.location.href = 'payment_qr.html';
            } else {
                alert('Invalid payment method selected.');
            }
        });
    }
});

function cancelBooking() {
    if (confirm('Are you sure you want to cancel this booking?')) {
        window.location.href = 'cancel_success.html';
    }
}