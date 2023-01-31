const sendEmail = () => {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "xyz",
        Password : "password",
        To : 'xyz',
        From : document.getElementById("emailfield").value,
        Subject : "ADC hiring new submission form",
        Body : "Name: " + document.getElementById('namefield').value
                + " Email: " + document.getElementById('emailfield')
                + " Contact: " + document.getElementById('phonefield')
                + " Branch: " + document.getElementById('branchfield')
                + " Year: " + radioyear() 
                + " Position: " + radioposition() 
                + " Past Experiences: " + document.getElementById('experiences')
                + " Why should we hire you?: " + document.getElementById('hire')
    }).then(
      message => alert("Form submitted succesfully!")
    )
}

const radioposition = () => {
    let element = document.getElementById('pos');
    for(let i = 0; i<element.length; i++) {
        if(element[i].checked) {
            return element[i].value;
        }
    }
}

const radioyear = () => {
    let element = document.getElementById('year');
    for(let i = 0; i<element.length; i++) {
        if(element[i].checked) {
            return element[i].value;
        }
    }
}
