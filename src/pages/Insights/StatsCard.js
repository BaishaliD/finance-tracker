import "./Insights.scss";

export default function StatsCard({ title, value, icon }) {
  return (
    <div className="card">
      <div className="info">
        <h2>{title}</h2>
        <h1>Rs. {value}</h1>
      </div>
      <div>
        <img src={icon} alt={title} height={70} width={70} />
      </div>
    </div>
  );
}
