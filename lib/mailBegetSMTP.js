import nodemailer from "nodemailer";

const LOGIN = process.env.MAIL_BEGET_LOGIN;
const PASSWORD = process.env.MAIL_BEGET_PASS;
const DOMAIN = process.env.NEXT_PUBLIC_APP_URL;

export async function sendVerificationToken(email, token) {
    const confirmLink = `${DOMAIN}/auth/verified?token=${token}`;
    const html = `<p>Нажми <a href="${confirmLink}">здесь</a> для подтверждения email.</p>`;
    const text = `Нажми <a href="${confirmLink}">здесь</a> для подтверждения email.`;

    return new Promise((resolve, reject) => {
        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.beget.com",
                port: 465,
                secure: true,
                auth: {
                    user: LOGIN,
                    pass: PASSWORD,
                },
            });
            const mailOptions = {
                from: LOGIN,
                to: email,
                subject: "Chat | Next JS - активация аккаунта",
                text,
                html,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(
                        "Ошибка отправки ссылки верификации: ",
                        error
                    );
                    reject({ error: "Ошибка при отпраки формы" });
                } else {
                    console.log(
                        "Ссылка на верификацию отправлена: " + info.response
                    );
                    resolve({
                        success: "Письмо с активацией отправлено на email",
                    });
                }
            });
        } catch (error) {
            console.error(
                "Что-то пошло не так при отправки письма при регистрации: ",
                error
            );
        }
    });
}
