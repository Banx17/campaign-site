function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="test-header">
        <div className="section-tag">Voice of the Community</div>
        <h2 className="section-title">What People Are Saying</h2>
      </div>
      <div className="test-grid">
        <div className="test-card">
          <div className="stars">★★★★★</div>
          <blockquote>"Adebayo has a unique ability to listen and act. He negotiated for a 24-hour library extension during exams."</blockquote>
          <div className="test-author">
            <div className="test-avatar">CE</div>
            <div className="test-info"><strong>Chiamaka E.</strong><span>Final Year Medical Student</span></div>
          </div>
        </div>
        <div className="test-card">
          <div className="stars">★★★★★</div>
          <blockquote>"He is the most organized leader I've ever worked with. His vision is exactly what we need to modernize our community."</blockquote>
          <div className="test-author">
            <div className="test-avatar">DK</div>
            <div className="test-info"><strong>Dr. Kunle</strong><span>Mentor & Clinical Lead</span></div>
          </div>
        </div>
        <div className="test-card">
          <div className="stars">★★★★★</div>
          <blockquote>"He makes every student feel that their contribution matters, regardless of their background."</blockquote>
          <div className="test-author">
            <div className="test-avatar">SJ</div>
            <div className="test-info"><strong>Samuel J.</strong><span>100 Level Representative</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
