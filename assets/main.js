const fname = document.querySelector('.inp1');
const lname = document.querySelector('.inp2');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "your-token", //add your token here
        To : 'them@website.com', 
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : ebody
    }).then(
      message => alert(message)
    );
});