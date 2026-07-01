export default function SectionHeading({ title }) {
  return (
    <div className="section-heading">
      <span className="section-accent" aria-hidden="true" />
      <h2>{title}</h2>
    </div>
  )
}
