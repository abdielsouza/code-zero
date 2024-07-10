import { EmailTemplate } from "@/components/EmailTemplate";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: Request) {
    try {

        const params = await request.json();

        console.log(params);

        const transporter = nodemailer.createTransport({
            service: "hotmail",
            auth: {
                user: process.env.EMAIL_ADDRESS!,
                pass: process.env.EMAIL_PASSWORD!
            },
        });

        const mailOptions: Mail.Options = {
            from: process.env.EMAIL_ADDRESS!,
            to: process.env.INTERFACE_EMAIL_ADDRESS!,
            cc: params.email,
            subject: "Nova demanda para CodeZero!",
            text: `Cliente: ${params.fullname}\nEmail: ${params.email}\nDescrição do pedido:\n\n ${params.request}`
        };

        await transporter.sendMail(mailOptions);

        return Response.json({message: "Message sent successfully!"}, {status: 200});
    }
    catch (error) {
        return Response.json({error}, {status: 500});
    }
}