$( document ).ready(function() {
    
	// use enter key to add number
	$( '#number').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});

	$('#add').on('click', function(e) {
		e.preventDefault();
		var number = +$('#number').val();
 
		// make sure section is empty before clearing
		if (!$('p').is(':empty')) $('p').html('');

		// make sure span is empty before clearing message
		if (!$('span').is(':empty')) $('span').html('');

		// check if number is integer
		if (number % 1 === 0) {
			appendNumber(number);
		} else {
			$('span').append('Invalid Entry. Input must be a number.');
		}

	});
});


 //Display results
 var appendNumber = function (n) {
	for (var i = 1; i <= n; i++) {

		// Check if 'i' is divisible by both 3 and 5
		if (i % 15 === 0) {
			$('p').append('FizzBuzz');

		// Check if 'i' is divisible by 3
		} else if (i % 3 === 0) {
			$('p').append('Fizz');

		// Check if 'i' is divisible by 5
		} else if (i % 5 === 0) {
			$('p').append('Buzz');

		// If none of the above, display 'i'
		} else {
			$('p').append(i);
		}

		// Add a line break after each result
		 $('p').append('<br />');
	}
};