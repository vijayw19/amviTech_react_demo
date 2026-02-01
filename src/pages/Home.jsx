import React from "react";

export default function Home() {
  return (
    <section className="card">
      <h1>Hi, I’m VJ</h1>
      <p className="lead">
        Senior DevOps and Platform Engineer focused on building secure,
        scalable, and reliable cloud platforms.
      </p>

      <div className="grid">
        <div className="panel">
          <h3>Core focus</h3>
          <ul>
            <li>AWS & Azure platform engineering</li>
            <li>Terraform modules and GitHub Actions</li>
            <li>Kubernetes foundations (EKS / AKS)</li>
            <li>Observability and reliability practices</li>
          </ul>
        </div>

        <div className="panel">
          <h3>Background</h3>
          <ul>
            <li>Hands-on platform ownership</li>
            <li>Automation-first mindset</li>
            <li>Practical, production-driven design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
