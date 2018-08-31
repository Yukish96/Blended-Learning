// Set up a payment
payment: function (data, actions) {
  return actions.payment.create({
    transactions: [{
      amount: {
        total: '0.01',
        currency: 'USD'
      }
    }]
  });
}
