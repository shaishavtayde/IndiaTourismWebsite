const form = document.getElementById('form');
const regno = document.getElementById('reg');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const address = document.getElementById('addr');
const city = document.getElementById('city');
const state = document.getElementById('state');
const mobile = document.getElementById('monum');
const pincode = document.getElementById('pin');
const skillset = document.getElementById('skill');
const specialize = document.getElementById('spec');


form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const regnoValue = regno.value.trim();
	const fnameValue = fname.value.trim();
	const lnameValue =  lname.value.trim();
	const addressValue = address.value.trim();
	const cityValue = city.value.trim();
	const stateValue = state.value.trim();
	const mobileValue = mobile.value.trim();
	const pincodeValue = pincode.value.trim();
	const skillsetValue = skillset.value.trim();
  const specializeValue = specialize.value.trim();

	if(regnoValue === '') {
		setErrorFor(regno, 'Enter Registration Number');
	} else if(regnoValue.length != 15) {
		setErrorFor(regno, 'Enter a fifteen-digit valid Number');
	} else{
		setSuccessFor(regno);
	}

	if(fnameValue === '') {
		setErrorFor(fname, 'Firstname cannot be blank');
	} else {
		setSuccessFor(fname);
	}

	if(lnameValue === '') {
		setErrorFor(lname, 'Lastname cannot be blank');
	} else {
		setSuccessFor(lname);
	}
	if(addressValue === '') {
		setErrorFor(address, 'Address cannot be blank');
	} else {
		setSuccessFor(address);
	}

	if(cityValue === '') {
		setErrorFor(city, 'Specify your City');
	}
	 else {
		setSuccessFor(city);
	}

	if(stateValue === '') {
		setErrorFor(state, 'Specify State');
	} else {
		setSuccessFor(state);
	}

	if(mobileValue === '') {
		setErrorFor(mobile, 'Enter mobile number');
	} else if(mobileValue.length != 10) {
		setErrorFor(mobile, 'Enter a ten-digit valid Number');
	} else{
		setSuccessFor(mobile);
	}
	if(pincodeValue === '') {
		setErrorFor(pincode, 'Enter Area pincode');
	} else if(pincodeValue.length != 6) {
		setErrorFor(pincode, 'Enter a six-digit valid Number');
	} else{
		setSuccessFor(pincode);
	}
	if(skillsetValue === '') {
		setErrorFor(skillset, 'Specify Your Skills');
	} else {
		setSuccessFor(skillset);
	}
	if(specializeValue === '') {
		setErrorFor(specialize, 'Specify Correct Specialization');
	} else {
		setSuccessFor(specialize);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
	formControl.className = 'form-control error';

}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
