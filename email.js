const nodemailer = require("nodemailer");

async function main(){
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'priscilla.hoppe@ethereal.email',
            pass: '8Pp4Tma42WYqQa1SEW'
        }
    });
    const info = await transporter
        .sendMail({
            from: "karthika <karthimudduluru3@gmail.com>",
            to: "Karthi <karthikamudduluru3@gmail.com>",
            subject: "Hello",
            text: "Hi karthika!",
            html: "<h1>Hi karthika</h1>"
        })
        .then(()=>{
            console.log("email sent successfully!");
        })
        .catch((err) => {
            console.log("error occured : ", err);
        });
}

main();