export default function ContactSection() {
  return (
    <section id="contact-section">

      {/* mail-content */}
      <div className="mail-content">

        {/* --- 名前と住所 --- */}
        <div>
          <div>
            {/* name */}
            <label htmlFor="name">name</label>
            {/* text-name */}
            <input id="name" type="text" className="text-name" />
          </div>

          <div>
            {/* address */}
            <label htmlFor="address">address</label>
            {/* text-address */}
            <input id="address" type="email" className="text-address" />
          </div>
        </div>

        {/* --- 件名 (subject) --- */}
        <div>
          <label htmlFor="subject">subject</label>
          <input id="subject" type="text" className="text-subject" />
        </div>

        {/* --- メッセージ (message) --- */}
        <div>
          <label htmlFor="message">messeage</label>
          <textarea id="message" className="text-messeage"></textarea>
        </div>

        {/* --- 送信ボタン --- */}
        <button type="submit" className="submit">
          submit
        </button>

        {/* --- SNSアイコンエリア --- */}
        <div className="sns-icon-item">
          <div>
            <img src="/discord-icon.svg" alt="Discord" />
          </div>
          <div>
            <img src="/X-icon.svg" alt="X" />
          </div>
          <div>
            <img src="/github-icon.svg" alt="GitHub" />
          </div>
        </div>

      </div>
    </section>
  );
}
