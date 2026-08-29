const {
  processPaymentEvent,
} = require("../services/paymentService");

const handleRazorpayWebhook = (req, res) => {
  try {
    const event = req.body;

    console.log(" Razorpay webhook received:", event.event);

    if (event.event === "payment.failed") {
      const payment = event.payload?.payment?.entity;

      if (!payment) {
        return res.status(400).json({
          success: false,
          message: "Payment data missing",
        });
      }

      const paymentData = processPaymentEvent(payment);

      console.log(" Payment sent for recovery analysis");

      return res.status(200).json({
        success: true,
        message: "Payment failure received",
        data: paymentData,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Event received",
    });
  } catch (error) {
    console.error(" Webhook error:", error);

    return res.status(500).json({
      success: false,
      message: "Webhook processing failed",
    });
  }
};

module.exports = {
  handleRazorpayWebhook,
};