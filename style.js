const form =document.getElementById('form');
const firstName =document.getElementById('first-name');
const mobileNumber =document.getElementById('mobile-number');
const emailAddress =document.getElementById('email-address');
const selectOption =document.getElementById('selectOption');


// submit a form 
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the form reloading.
	checkInputs(); // check the input vaild or not.
    redirection()
    console.log(
        {
            'MobileNo':mobileNumber.value,
            'name':firstName.value,
            'emailAddress':emailAddress.value,
            'selectOption':selectOption.value
        }
    )
    
    
});

function redirection() {
    window.location.href= 'sucessPage/index.html';
}


function checkInputs() {
    // get value from input
    const firstnameValue = firstName.value.trim();
    const mobileNoValue = mobileNumber.value.trim();
    const emailValue = emailAddress.value.trim();
    const selectOptionValue = selectOption.value.trim();

    //It's check the input vaild or not.

    if (firstnameValue === '') {
        setErrorFor(firstName,'Firstname cannot be empty');
    }
    else{
        setSuccessFor(firstName);
    }
    if (mobileNoValue === '') {
        setErrorFor(mobileNumber,'Mobile number cannot be empty');
    }
    else{
        setSuccessFor(mobileNumber);
    }
    if(emailValue === '') {
		setErrorFor(emailAddress, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(emailAddress, 'Not a valid email');
	} else {
		setSuccessFor(emailAddress);
	}
    if (selectOptionValue === '') {
        setErrorFor(selectOption,'Select a Option');
    }
    else{
        setSuccessFor(selectOption);
    }
}

//add and remove the class.

function setErrorFor(input,message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
    
}

//mail validation

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
