const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        service: 'byui.edu',
        auth: {
            user: 'byuixana@byui.edu'
        }
    }
) 

const mailOptions = {
    from: '',
    to: '',
    
}