import React from "react";

export default function Contact() {
  return (
    <section className="card">
      <h1>Contact</h1>

      <p>
        Interested in collaboration, consulting, or a technical discussion?
      </p>

      <div className="panel">
        <ul>
          <li><strong>Email:</strong> your-email@example.com</li>
          <li><strong>GitHub:</strong> github.com/your-handle</li>
          <li><strong>LinkedIn:</strong> linkedin.com/in/your-handle</li>
        </ul>
        <p className="muted">
          Replace these with your real contact details.
        </p>
      </div>
    </section>
  );
}
