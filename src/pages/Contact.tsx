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

          <div>
            <button
              type="submit"
              className="w-full bg-sky-400 text-white py-2 rounded-md hover:bg-sky-500 transition-colors disabled:opacity-60"
              disabled={!envOk || sending}
            >
              {sending ? "送信中..." : "送信する"}
            </button>
            {!envOk && (
              <p className="text-sm text-red-600 mt-2">
                EmailJS の設定が不足しています。開発サーバーを再起動し、`.env`
                を確認してください。
              </p>
            )}
            {errorMessage && (
              <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
