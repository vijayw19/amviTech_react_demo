import React from "react";

export default function WhatWeDo() {
  return (
    <section className="card">
      <h1>What We Do</h1>

      <div className="grid">
        <div className="panel">
          <h3>Services</h3>
          <ul>
            <li>Cloud landing zones and platform setup</li>
            <li>CI/CD pipelines and IaC automation</li>
            <li>Kubernetes enablement and operations</li>
            <li>Monitoring, logging, and alerting</li>
          </ul>
        </div>

        <div className="panel">
          <h3>Training</h3>
          <ul>
            <li>Terraform for real-world platforms</li>
            <li>GitHub Actions from basics to scale</li>
            <li>Kubernetes fundamentals</li>
            <li>Cloud reliability and cost awareness</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
