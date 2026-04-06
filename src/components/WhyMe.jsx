function WhyMe() {
  return (
    <section className="why" id="why">
      <div className="why-header">
        <div className="section-tag">Why Azeez Tofunmi?</div>
        <h2 className="section-title">Why Azeez Tofunmi?</h2>
      </div>
      <div className="why-layout">
        <div className="why-list">
          <div className="why-card">
            <div className="why-num">01</div>
            <div>
              <h3>Proven Leadership</h3>
              <p>Years of experience navigating complex administrative structures to get results for students.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <div>
              <h3>Accessibility</h3>
              <p>Open door policy. I am a student first, and your concerns are my top priority.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <div>
              <h3>Commitment to Excellence</h3>
              <p>Not just promises, but a clear roadmap for elevating the clinical experience for all.</p>
            </div>
          </div>
        </div>
        <div className="why-imgs">
          <img src="/why1.jpg" alt="Azeez in action" />
          <img src="/why2.jpg" alt="Azeez with students" />
        </div>
      </div>
    </section>
  )
}

export default WhyMe