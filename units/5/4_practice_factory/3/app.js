"use strict";

(function notes() {
  `
  To be able to process multiple invoices, we'll need to have a factory function that we can use to create invoices.
  he requirements for this factory function are the following:

    It returns an invoice object, with phone and internet properties, and a total method.
    The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
    The function takes an object argument with attributes to override the default values.

  Your implemented function should be able to work with the code below:

  `
})

(function shouldWork(){
  let invoice = {
    phone: 3000,
    internet: 6500,
  };
  let payment = {
    phone: 1300,
    internet: 5500,
  };
  let invoiceTotal = invoice.phone + invoice.internet;
  let paymentTotal = payment.phone + payment.internet;
  let remainingDue = invoiceTotal - paymentTotal;

  console.log(paymentTotal);         // => 6800
  console.log(remainingDue);         // => 2700

})

function createInvoice(services = {}) {
  return {
    phone: services.phone ?? 3000,
    internet: services.internet ?? 5500,

    total(){
      return this.phone + this.internet;
    },
  }
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000


  (function tests() {
  })()