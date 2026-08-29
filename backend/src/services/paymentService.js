const processPaymentEvent = (payment) => {
  console.log("📦 Payment event received");

  const paymentData = {
    id: payment.id,
    amount: payment.amount,
    currency: payment.currency,
    status: payment.status,
    method: payment.method,
    email: payment.email || null,
    contact: payment.contact || null,
    createdAt: new Date(),
  };

  console.log(" Payment:", paymentData);

  return paymentData;
};

module.exports = {
  processPaymentEvent,
};