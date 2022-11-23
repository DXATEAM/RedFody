var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    console.log('hii')
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var subject = document.getElementById('subject')
    var message = document.getElementById('message')
    var body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> subject' + subject + '<br/> Message: ' +message;

    Email.send({
    Host : "smtp.gmail.com",
    Username : "ankushcoonjul@gmail.com",
    Password : "xhtsgfyxevqqkqbt",
    To : 'ankushcoonjul@gmail.com',
    From : email,
    Subject : subject,
    Body : body

}).then(
  message => alert(message)
);

})