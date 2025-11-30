export default function ServiceCard({ icon, title, text, button, onClick }) {
  return (
    <div className="service-card">

      <div className="service-icon">
        <img src={icon} alt={title} />
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <div>
        <button onClick={onClick}>{button}</button>
      </div>

    </div>
  );
}
