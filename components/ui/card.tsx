export default function ServiceCard({ icon, title, text, button, onClick }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
      <button onClick={onClick} className="service-button">
        {button}
      </button>
    </div>
  );
}
