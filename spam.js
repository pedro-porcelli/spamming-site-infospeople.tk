personemail = getElementId('persons_email').value;
youremail = getElementId('your_email').value;
stop = getElementId('stop');
stop_click = stop.addEventListener('click');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e727d816c64380",
      pass: "73f2c56c5b4852"
    }
  });

  message = {
    from: youremail,
    to: personemail,
    subject: "Hey from" + youremail,
    text: "Hi this is a spam from your freind at" + youremail
}

function spam() {
    while (true){
        transporter.sendMail(message);
        if (stop_click == true) {
            break;
        }
    }
}