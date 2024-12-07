"use client";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { SectionTitle } from "./SectionTitle";
import emailjs from '@emailjs/browser';
import { useState } from "react";

export function ContactSection() {

    const [formData, setFormData] = useState({
        email: "",
        message: "",
        subject: ""
    })
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(null);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault()
        setSending(true)
        console.log(formData)
        const data = {
            email: formData.email,
            message: formData.message,
            subject: formData.subject
        }

        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE,
            process.env.NEXT_PUBLIC_TEMPLATE,
            data,
            process.env.NEXT_PUBLIC_PUBLIC
        )
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setSuccess(true)
                }
                setSending(false)
                setFormData({
                    email: "",
                    message: "",
                    subject: ""
                })
            })
            .catch((err) => {
                setSuccess(false)
                setSending(false)
                console.log(err)
            })

    }
    return (
        <div id="contact" className="lg:max-w-6xl mx-auto px-6 py-4 mb-28">
            <SectionTitle sectionName={"Get in Touch"} customClassName='lg:text-3xl text-xl' />
            <p className="mt-3 lg:text-lg font-medium  text-gray-300">I’d love to hear from you! Reach out for collaborations or just a chat.</p>


            <form className="md:w-2/3 p-6 space-y-3 lg:space-y-4 bg-neutral-800 rounded-xl mt-6">
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-2xl bg-neutral-900 text-gray-300 border-none focus:outline-none focus:ring-1 focus:ring-[#de1d8d] focus:border-[#de1d8d] transition"
                />

                <input type="text" name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-2xl bg-neutral-900 text-gray-300 border-none focus:outline-none focus:ring-1  focus:ring-[#de1d8d] focus:border-[#de1d8d] transition"

                />

                <textarea
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-neutral-900 rounded-2xl text-gray-300 border-none focus:outline-none focus:ring-1  focus:ring-[#de1d8d] focus:border-[#de1d8d] transition"
                    placeholder="Your Message"
                    rows='5'

                />

                <button type="submit" onClick={handleSubmit} className="bg-[#de1d8d] px-6 py-2 m-0 text-white font-medium rounded-2xl hover:bg-pink-600 transition focus:outline-none focus:ring-4 focus:ring-[#de1d8d]/50">Send Message</button>
                {success !== null && (
                    <p className={`text-left ${success ? "text-green-500" : "text-red-500"}`}>
                        {success ? "Message sent successfully!" : "Something went wrong, please try again."}
                    </p>
                )}
            </form>
        </div>
    );
}
