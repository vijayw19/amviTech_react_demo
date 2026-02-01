import React from "react";

export default function About() {
  return (
    <section className="card">
      <h1>About</h1>

      <p>
        AmviTech was founded in 2020 in Ontario, Canada, with a focus on
        practical cloud engineering and platform reliability.
      </p>

      <div className="panel">
        <h3>What defines my work</h3>
        <ul>
          <li>Infrastructure as Code over manual configuration</li>
          <li>Security and identity built in from day one</li>
          <li>Clear ownership and operational readiness</li>
          <li>Designs that developers can actually use</li>
        </ul>
      </div>
    </section>
  );
}
