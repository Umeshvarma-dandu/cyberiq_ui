import React, { useState } from "react";

export default function App() {
  const [ioc, setIoc] = useState("");
  const [threat, setThreat] = useState(null);

  const scanIOC = () => {
    setThreat({
      score: 92,
      tags: ["Phishing", "Botnet", "APT"],
      summary:
        "This IP is linked to advanced persistent threat actors operating phishing infrastructure.",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <aside
        style={{
          width: "250px",
          backgroundColor: "#1e293b",
          padding: "1.5rem",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>CyberIQ.ai</h2>
        <ul style={{ marginTop: "2rem", listStyle: "none", padding: 0 }}>
          <li style={{ margin: "1rem 0" }}>Dashboard</li>
          <li style={{ margin: "1rem 0" }}>Threat Feeds</li>
          <li style={{ margin: "1rem 0" }}>Reports</li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
          Threat Intelligence Dashboard
        </h1>

        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Enter IOC (IP, Domain, Hash)"
            value={ioc}
            onChange={(e) => setIoc(e.target.value)}
            style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
          />
          <button
            onClick={scanIOC}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#3b82f6",
              color: "white",
            }}
          >
            Scan
          </button>
        </div>

        {threat && (
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h3>Threat Analysis</h3>
            <p>
              <strong>IOC:</strong> {ioc}
            </p>
            <p>
              <strong>Score:</strong> {threat.score}
            </p>
            <p>
              <strong>Tags:</strong> {threat.tags.join(", ")}
            </p>
            <p>
              <strong>Summary:</strong> {threat.summary}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
