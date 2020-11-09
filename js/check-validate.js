var phoneNumber = $("#phoneNumber");
var fullName = $("#fullName");
var email = $("#email");
var subject = $("#subject");

function CheckNull(field){
	$(field).next('p').text('* This field is required!')
	$(field).next('p').css({
		"color" : "red",
		"font-style" : "oblique"
	})
	$(field).css({
		'background': '#FDAFBD',
		'color': 'white',
		'border': '1px solid red'
	});
}

function ClearWarning(field){
	$(field).next('p').text('')
	$(field).css({
		'background': 'white',
		'color': 'black',
		'border': 'none'
	});	
}

function ValidateEmail(email){
	var format =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return format.test(email);
}

function CheckFullName(){
	if(fullName.val() == ''){
		CheckNull(fullName);
	}else{
		if (fullName.val().length < 8 || $.isNumeric(fullName.val()) == true) {
		 	fullName.next('p').text('* Full name must be at least 8 characters and contain letters only!');
		 	$(fullName).next('p').css({
				"color" : "red",
				"font-style" : "oblique"
			})
		 	fullName.css({
				'background': 'pink',
				'color': 'black',
				'border': '1px solid red'
			});
		}else{
			ClearWarning(fullName);
			return true;
		}
	}
}

function CheckEmail(){
	if(email.val() == ''){
		CheckNull(email);
	}else{
		if (ValidateEmail(email.val()) == false) {
		 	email.next('p').text('* Invalid email format!');
		 	$(email).next('p').css({
				"color" : "red",
				"font-style" : "oblique"
			})
		 	email.css({
				'background': 'pink',
				'color': 'black',
				'border': '1px solid red'
			});
		}else{
			ClearWarning(email);
			return true;
		}
	}
}

function CheckPhoneNumber(){
	if(phoneNumber.val() == ''){
		CheckNull(phoneNumber);
	}else{
		if (phoneNumber.val().length < 10 || phoneNumber.val().length > 11) {
		 	phoneNumber.next('p').text('* Phone number must be 10 or 11 characters!');
		 	$(phoneNumber).next('p').css({
				"color" : "red",
				"font-style" : "oblique"
			})
		 	phoneNumber.css({
				'background': 'pink',
				'color': 'black',
				'border': '1px solid red'
			});
		}else if($.isNumeric(phoneNumber.val()) == false){
		 	phoneNumber.next('p').text('* Phone number must be contain numbers only!');
		 	$(phoneNumber).next('p').css({
				"color" : "red",
				"font-style" : "oblique"
			})
		 	phoneNumber.css({
				'background': 'pink',
				'color': 'black',
				'border': '1px solid red'
			});
		}else{
			ClearWarning(phoneNumber);
			return true;
		}
	}
}
function CheckSubject(){
	if(subject.val() == ''){
		CheckNull(subject);
	}else{
		if (subject.val().length < 5 || $.isNumeric(subject.val()) == true) {
		 	subject.next('p').text('* Subject must be at least 5 characters!');
		 	$(subject).next('p').css({
				"color" : "red",
				"font-style" : "oblique"
			})
		 	subject.css({
				'background': 'pink',
				'color': 'black',
				'border': '1px solid red'
			});
		}else{
			ClearWarning(subject);
			return true;
		}
	}
}

//Send message click check
$(".send-message").click(function(){
	CheckFullName();	
	CheckEmail();	
	CheckPhoneNumber();	
	CheckSubject();

	if(CheckFullName() == true && CheckPhoneNumber() == true && CheckEmail() == true){
		alert("Name: " + fullName.val() + "\nPhone Number: " + phoneNumber.val() + "\nEmail: " + email.val() + "\nSubject: " + subject.val() +"\nMessage: " +$("#message").val() )
	}
})

//Track characters check
fullName.keyup(function() {
	if(fullName.val() != ''){
		CheckFullName();
	}
});

phoneNumber.keyup(function() {
	if(phoneNumber.val() != ''){
		CheckPhoneNumber();
	}
});

email.keyup(function(){
	if(email.val() != ''){
		CheckEmail();
	}
})
subject.keyup(function(){
	if(subject.val()!=''){
		CheckSubject();
	}
})