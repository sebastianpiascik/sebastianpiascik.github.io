$(function() {
    
    
    
    
    
})






//$(function() {
//	// Get the form.
//	var form = $('#ajax-contact');
//
//	// Get the messages div.
//	var formMessages = $('#form-messages');
//
//	// Set up an event listener for the contact form.
//	$(form).submit(function(event) {
//		// Stop the browser from submitting the form.
//		event.preventDefault();
//
//		var formData = $(form).serialize();
//
//		// Submit the form using AJAX.
//		$.ajax({
//			type: 'POST',
//			url: $(form).attr('action'),
//			data: formData
//		}).done(function(response) {
//			// Make sure that the formMessages div has the 'success' class.
//			$(formMessages).removeClass('error');
//			$(formMessages).addClass('success');
//
//			// Set the message text.
//			$(formMessages).text(response);
//
//			// Clear the form.
//			$('#name').val('');
//			$('#phone').val('');
//			$('#email').val('');
//			$('#message').val('');
//		}).fail(function(data) {
//			// Make sure that the formMessages div has the 'error' class.
//			$(formMessages).removeClass('success');
//			$(formMessages).addClass('error');
//
//			// Set the message text.
//			if (data.responseText !== '') {
//				$(formMessages).text(data.responseText);
//			} else {
//				$(formMessages).text('Nie udało się wysłac wiadomości.');
//			}
//		});
//
//		var alert=$(".alert");
//		alert.html("Wysłanow");
//
//		alert.css("display", "block");
//
//		// TODO
//	});
//});
