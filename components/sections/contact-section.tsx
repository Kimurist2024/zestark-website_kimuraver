export default function ContactSection() {
  return (
    <section id="contact-section">
      <div className="contact-container">
        <h2>CONTACT</h2>
        <p>お気軽にお問い合わせください</p>
      </div>

      {/* mail-content */}
      <div className="contact-content">
        <div className="mail-container">


          {/* --- SNSアイコンエリア --- */}
          <div className="contact-icon-item">
            <div className="contact-icon">
              <img src="/icons/discord.svg" alt="Discord" />
            </div>
            <div className="contact-icon">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </div>
            <div className="contact-icon">
              <img src="/icons/github.svg" alt="GitHub" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
