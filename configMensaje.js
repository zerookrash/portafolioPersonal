const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mario.villelalarraza@gmail.com',
            pass: 'michaeljordan'
        }
    });
    
    const mailOptions = {
        from: `"${formulario.nombre}" <${formulario.email}>`,
        to: 'mario.villelalarraza@gmail.com',
        subject: formulario.asunto,
        html: `
            <strong>Nombre:</strong> ${formulario.nombre} <br/>
            <strong>E-mail:</strong> ${formulario.email} <br/>
            <hr>
            <strong>Mensaje:</strong> ${formulario.mensaje}
            `
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err)
        } else {
            console.log(info)
        }
    });
}