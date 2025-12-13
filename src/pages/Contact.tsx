import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [envOk, setEnvOk] = useState(true);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS 環境変数が不足しています:", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY: PUBLIC_KEY ? "(present)" : "(missing)",
      });
      setEnvOk(false);
    }
    // EmailJS のブラウザSDKは init を呼ぶことを推奨します
    if (PUBLIC_KEY) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        emailjs.init(PUBLIC_KEY);
        console.debug("EmailJS initialized (public key present)");
      } catch (err) {
        console.warn("emailjs.init failed:", err);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!envOk) {
      alert(
        "送信できません: EmailJS の環境変数が設定されていません。開発サーバーを再起動し、.env に VITE_EMAILJS_* を設定してください。"
      );
      return;
    }

    const params = {
      name,
      email,
      message,
      // ここで template 側の変数名に合わせて複数キーを渡しておくと安心です
      from_name: name,
      from_email: email,
      reply_to: email,
    };
    setSending(true);
    setErrorMessage(null);

    // Debug: 送信前に送るパラメータと ID の存在を必ずログに残す
    console.debug("About to send EmailJS request", {
      SERVICE_ID: !!SERVICE_ID,
      TEMPLATE_ID: !!TEMPLATE_ID,
      PUBLIC_KEY: !!PUBLIC_KEY,
      params,
    });

    // SDK は通常 init(publicKey) を呼んだあと send(service, template, params) の形です
    // 4番目の引数は不要なので外します（REST 呼び出しで不正になるケースがあるため）
    emailjs
      .send(SERVICE_ID!, TEMPLATE_ID!, params)
      .then((res) => {
        console.debug("EmailJS send response:", res);
        alert("送信しました！");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        // Error may be a custom object; try to extract useful info and stringify
        console.error("送信エラー (raw):", error);
        // include non-enumerable properties too
        let dumped;
        try {
          dumped = JSON.stringify(error, Object.getOwnPropertyNames(error));
        } catch (e) {
          dumped = String(error);
        }
        // try to read common fields
        const status = (error && (error as any).status) || "(no status)";
        const text =
          (error && (error as any).text) ||
          (error && (error as any).message) ||
          dumped;
        console.error("送信エラー詳細:", { status, text });
        setErrorMessage(`送信に失敗しました: ${status}`);
      })
      .finally(() => setSending(false));
  };

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Contact
        </h1>
        <p className="text-center text-white/70 mb-16 text-lg">
          お気軽にご連絡ください
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            メッセージを送る
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="contact-name"
              >
                お名前
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/10 border border-white/30 rounded-xl p-4 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"
                placeholder="山田 太郎"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/30 rounded-xl p-4 text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"
                placeholder="example@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                メッセージ
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/10 border border-white/30 rounded-xl p-4 h-40 resize-none text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:outline-none transition-all"
                placeholder="お問い合わせ内容をご記入ください"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-white/90 text-gray-900 font-bold py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed border-2 border-white/80"
                disabled={!envOk || sending}
              >
                {sending ? "送信中..." : "送信する"}
              </button>
              {!envOk && (
                <p className="text-sm text-red-400 mt-3">
                  EmailJS の設定が不足しています。開発サーバーを再起動し、`.env`
                  を確認してください。
                </p>
              )}
              {errorMessage && (
                <p className="text-sm text-red-400 mt-3">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
