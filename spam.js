personemail = getElementId('persons_email').value;
youremail = getElementId('your_email').value;
stop = getElementId('stop');

function spam() {
    while (true) {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "galaxycraft.p@gmail.com",
            Password : "6DC1B7B0ECDB1994C6F9B9714AFC9ADAC802",
            To : personemail,
            From : youremail,
            Subject : "",
            Body : "Hi i am spamming you"
        })

        if (stop.addEventListener('click')) {
            break;
        }
    }
}