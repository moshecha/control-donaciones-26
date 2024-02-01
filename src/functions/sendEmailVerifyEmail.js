var nodemailer = require('nodemailer');
require('dotenv').config()


//send email
async function sendEmail (email, token) {
 
    var email = email.toLowerCase();
    var token = token;
 
    var mail = nodemailer.createTransport({
        // service: 'hotmail',
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_GMAIL,
            pass: process.env.PASSWORD_EMAIL_GMAIL // Your password
        }
        // auth: {
        //     user: process.env.EMAIL_HOTMAIL,
        //     pass: process.env.PASSWORD_EMAIL_HOTMAIL // Your password
        // }
    });
 
    var mailOptions = {

        // from:'"TelasOnce" <telasonce.no-reply@hotmail.com>',
        from:`"Control Donaciones 26" <${process.env.EMAIL_GMAIL}>`,
        to: email,
        subject: 'Establecer contraseña en ``Control Donaciones 26``',
        html: `
        <div>
            <h3 style="color: black !important;display: block; " > Si Usted Solicitó establecer una nueva contraseña, utilice amablemente este enlace: </h3>
            <a style="background-color: white; text-decoration: none; border: blue solid 3px; border-radius: 10px; 
            color:black; opacity: 0.8; padding: 10px; margin: 10px auto ;  cursor: pointer; text-align: center;" 
             href="http://localhost:3000?token=${token}&&email=${email}">Establecer contraseña
            </a>

            <p style="color: black !important;">O el siguiente link:</p>  
            <a href="http://localhost:3000?token=${token}&&email=${email}" target="_blank" rel="noopener noreferrer">https://telasonce.com/resetPassword?token=${token}&&email=${email.toLowerCase()}</a>

            <p style="color: black !important;">Equípo de MdcDigital26!</p>  
        </div>  
         `
       
    };
 
    let enviar = await mail.sendMail( mailOptions, function( error, info) {
        if (error) {
             console.log('error: ',error)
            return '0'
        } else {
            console.log('info',info)
            return 'Llego el mail fijate!!' 
        }
    });
}

module.exports = sendEmail;