"use strict";

(function notes (){
  `
  Update your createInvoice function to make it possible to add payment(s) to invoices.
  Use the code below as a guideline:
  `
})


function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

function createPayment(services = {}) {
  // implement the factory function here
  return {
    phone: services.phone ?? 0,
    internet: services.internet ?? 0,
    amount: services.amount ?? 0,

    total(){
      return this.phone + this.internet + this.amount;
    },
  }
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

function createInvoice(services = {}) {
  return {
    phone: services.phone ?? 3000,
    internet: services.internet ?? 5500,
    paid: 0,

    total(){
      return this.phone + this.internet;
    },

    addPayment(payment = {}){
      this.paid += payment.total();
    },

    addPayments(payments = []){
      payments.forEach((payment) => this.addPayment(payment));
    },

    amountDue(){
      return this.total() - this.paid;
    }
  }
}

function addPayment(payment = {}){

}

(function tests(){
  let invoice = createInvoice({
    phone: 1200,
    internet: 4000,
  });

  let payment1 = createPayment({
    amount: 2000,
  });

  let payment2 = createPayment({
    phone: 1000,
    internet: 1200,
  });

  let payment3 = createPayment({
    phone: 1000,
  });

  invoice.addPayment(payment1);
  invoice.addPayments([payment2, payment3]);
  console.log(invoice.amountDue());       // this should return 0
})()