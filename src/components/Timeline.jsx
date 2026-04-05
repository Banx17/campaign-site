function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="section-tag">A Record of Excellence</div>
      <h2 className="section-title">Proven Track Record</h2>
      <div className="timeline">
        <div className="t-item">
          <div className="t-dot"></div>
          <div className="t-year">2022 – 2023</div>
          <div className="t-title">General Secretary</div>
          <p className="t-desc">Streamlined association communications and digitized the record keeping system for 500+ members.</p>
        </div>
        <div className="t-item">
          <div className="t-dot"></div>
          <div className="t-year">2021</div>
          <div className="t-title">Academic Excellence Award</div>
          <p className="t-desc">Top 5% of the graduating clinical class, consistently maintaining a GPA above 4.5.</p>
        </div>
        <div className="t-item">
          <div className="t-dot"></div>
          <div className="t-year">2020 – 2022</div>
          <div className="t-title">Head of Clinical Mentorship</div>
          <p className="t-desc">Founded the peer-led clinical skills workshop series, impacting over 200 junior students.</p>
        </div>
      </div>
    </section>
  )
}

export default Timeline