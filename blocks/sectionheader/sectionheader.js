export default function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <div className="section-header-line"></div>
      <div className="section-header-title">{title}</div>
      <div className="section-header-line"></div>
    </div>
  );
}
