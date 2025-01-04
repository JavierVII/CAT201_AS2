import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
    const emergencyContacts = [
        {
            id: "malaysia-emergency",
            title: "马来西亚紧急求助报警电话",
            description: "999（手机可拨打112）",
        },
        {
            id: "fire-emergency",
            title: "火警",
            description: "994",
        },
        {
            id: "china-consulate",
            title: "中国驻槟城总领事馆领事保护与协助电话",
            description: "+60-1110592308",
        },
        {
            id: "global-consulate",
            title: "外交部全球领事保护与服务应急热线（24小时）",
            description: "+86-10-12308 或 +86-10-65612308",
        },
    ];

    return (
        <section className="contact-us">
            <h2>联系我们</h2>
            <p>如果您有任何问题或反馈，请随时与我们联系！</p>

            <form className="contact-form">
                <label htmlFor="name">姓名:</label>
                <input type="text" id="name" name="name" placeholder="请输入您的姓名" required />

                <label htmlFor="email">邮箱:</label>
                <input type="email" id="email" name="email" placeholder="请输入您的邮箱" required />

                <label htmlFor="message">信息:</label>
                <textarea id="message" name="message" placeholder="请输入您的信息" required></textarea>

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