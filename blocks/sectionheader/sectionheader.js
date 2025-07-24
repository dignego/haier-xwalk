export default function SectionHeader({ text }) {
  return (
    <div className="section-header">
      <div className="section-header-line"></div>
      <div className="section-header-title">{text}</div>
      <div className="section-header-line"></div>
    </div>
  );
}
