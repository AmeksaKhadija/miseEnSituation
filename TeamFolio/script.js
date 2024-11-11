let globalData = null;

async function CallApi(){
    let url = "data.json";
    let response = await fetch(url);
    globalData = await response.json()
    console.log(globalData);
}

CallApi();

function validateEmail(){

    var emailRegix = /^[a-zA-Z0-9]{3,20}@gmail.com$/;

    let emailFilter = document.querySelector("#email");
    // console.log("-------------------------")
    // console.log(data[0].email)
    
    emailFilter.innerHTML = "";

    let invalidEmails = "";

    globalData.forEach(elt => {
        
        if (!elt.email.match(emailRegix)) {
            invalidEmails += `${elt.email}<br>`;
        }
    });

    emailFilter.innerHTML = invalidEmails;

}
