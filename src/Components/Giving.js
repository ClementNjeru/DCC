import React, { useState } from 'react';

const DonationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to handle form submission
    console.log(`Donation form submitted by ${name} with email ${email} for amount $${amount}`);
    // Add code here to submit data to your payment gateway
    setName("");
    setEmail("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          min="0"
          step="any"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          required
        />
      </div>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
