import React, { useState } from "react";
import "../styles/payment.css";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState("credit-card");
  const [frequency, setFrequency] = useState("one-time");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${name || "Friend"}! We have received your ${frequency} donation of $${amount} via ${method}.`
    );
    setAmount("");
    setName("");
    setEmail("");
    setMethod("credit-card");
    setFrequency("one-time");
  };

  return (
    <div className="payment-container">
      {/* Hero Banner */}
      <section className="payment-hero">
        <div className="hero-text">
          <h1>Give Hope, Create Change</h1>
          <p>
            Your generosity fuels our mission. Every dollar you give helps us
            bring education, food, and resources to those in need.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="payment-form-section">
        <div className="form-card">
          <h2>Make a Donation</h2>
          <form onSubmit={handleSubmit} className="payment-form">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Donation Amount (USD)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            {/* Payment Method */}
            <label>Payment Method:</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="credit-card">💳 Credit Card</option>
              <option value="paypal">🅿 PayPal</option>
              <option value="bank-transfer">🏦 Bank Transfer</option>
            </select>

            {/* Donation Frequency */}
            <label>Donation Frequency:</label>
            <div className="frequency-options">
              <label>
                <input
                  type="radio"
                  value="one-time"
                  checked={frequency === "one-time"}
                  onChange={(e) => setFrequency(e.target.value)}
                />
                One-Time
              </label>
              <label>
                <input
                  type="radio"
                  value="monthly"
                  checked={frequency === "monthly"}
                  onChange={(e) => setFrequency(e.target.value)}
                />
                Monthly
              </label>
            </div>

            <button type="submit" className="btn-primary">
              Donate Securely
            </button>
          </form>
        </div>

        {/* Donation Summary Card */}
        <div className="summary-card">
          <h3>Donation Summary</h3>
          <p><strong>Name:</strong> {name || "Not entered"}</p>
          <p><strong>Amount:</strong> {amount ? `$${amount}` : "Not entered"}</p>
          <p><strong>Method:</strong> {method}</p>
          <p><strong>Frequency:</strong> {frequency}</p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2>Your Impact</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>🌍 50+ Countries</h3>
            <p>Helping communities across the globe.</p>
          </div>
          <div className="impact-card">
            <h3>📚 5,000+ Students</h3>
            <p>Access to quality education for children.</p>
          </div>
          <div className="impact-card">
            <h3>🍲 100K+ Meals</h3>
            <p>Nutritious meals served to families in need.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
