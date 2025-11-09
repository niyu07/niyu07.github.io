import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        params,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("送信しました！");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("送信エラー:", error);
        alert("送信に失敗しました。");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
        <h1 className="text-lg text-slate-700 mb-6 font-semibold">
          if you contact me...
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              お名前：
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-sky-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              メールアドレス：
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-sky-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              メッセージ：
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-md p-2 h-32 resize-none focus:ring-2 focus:ring-sky-400 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-400 text-white py-2 rounded-md hover:bg-sky-500 transition-colors"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}
