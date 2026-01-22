import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Input, Textarea } from '@headlessui/react';

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("success");
                    formRef.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    setStatus("error");
                }
            );
    };

    return (
        <div className="max-w-lg mx-auto p-6 lg:p-9 border border-baltic rounded shadow text-slate-900 bg-ghost-white-hover">
            <h2 className="text-2xl font-semibold text-center mb-4 font-heading tracking-tight">
                Contact Me
            </h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 font-body tracking-wide">
                <Input type="hidden" name="title" value="Visitor's email"/>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-5 py-3 rounded focus:outline-none border border-ghost-white-hover bg-slate-300 text-slate-900
                data-focus:border data-focus:border-baltic 
                data-hover:shadow"
                    autoComplete="off"
                />
                <Input
                    type="email"
                    name="user_email"
                    placeholder="Email address"
                    required
                    className="w-full px-5 py-3 rounded focus:outline-none border border-ghost-white-hover bg-slate-300 text-slate-900
                data-focus:border data-focus:border-baltic 
                data-hover:shadow"
                    autoComplete="off"
                />
                <Textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full px-5 py-3 rounded focus:outline-none border border-ghost-white-hover bg-slate-300 text-slate-900
                data-focus:border data-focus:border-baltic 
                data-hover:shadow"
                    autoComplete="off"
                />
                <Button
                    type="submit"
                    className="bg-ocean text-slate-900 py-4 px-6 rounded disabled:opacity-50 font-body tracking-wide"
                    disabled={status === "sending"}
                >
                    {status === "sending" ? "Sending..." : "Send"}
                </Button>

                {status === "success" && (
                    <p className="text-green-600 mt-2">Message sent successfully!</p>
                )}
                {status === "error" && (
                    <p className="text-red-600 mt-2">Failed to send message. Try again.</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
