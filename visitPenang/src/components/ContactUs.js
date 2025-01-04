import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
    const emergencyContacts = [
        {
            id: "malaysia-emergency",
            title: "Malaysia Emergency Telephone Numbers(马来西亚紧急报警电话)",
            description: "999",
        },
        {
            id: "fire-emergency",
            title: "fire-emergency(火警)",
            description: "994",
        },
        {
            id: "china-consulate",
            title: "中华人民共和国驻槟城领事馆领事保护与协助电话",
            description: "+60-1110592308",
        },
        {
            id: "global-consulate",
            title: "中华人民共和国外交部全球领事保护与服务应急热线（24小时）",
            description: "+86-10-12308 or +86-10-65612308",
        },
        {
            id: "indonesia-consulate",
            title: "Konsulat Jenderal Republik Indonesia di Penang",
            description: "+604-2267412 或 +604-2274686",
        },
        {
            id: "thailand-consulate",
            title: "สถานกงสุลใหญ่ ณ เมืองปีนัง",
            description: "+60-4-2269484",
        },
        {
            id: "japan-consulate",
            title: "在ペナン日本国総領事館",
            description: "+60-4-2263030",
        },
    ];

    return (
        <section className="contact-us">
            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, please feel free to contact us!</p>

            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Please enter your name:" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Please enter your Email:" required />

                <label htmlFor="message">Feedback:</label>
                <textarea id="message" name="message" placeholder="Please enter your feedback" required></textarea>

                <button type="submit">提交</button>
            </form>

            <div className="emergency-contacts">
                <h2>紧急联系电话</h2>
                <div className="contact-list">
                    {emergencyContacts.map((contact) => (
                        <div className="contact-card" key={contact.id}>
                            <h3>{contact.title}</h3>
                            <p>{contact.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;