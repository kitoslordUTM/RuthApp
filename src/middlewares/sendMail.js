import nodemailer from 'nodemailer'


export const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'healtyplus41@gmail.com',
    pass: 'hglwagbrbmshkygj',
  },
});

