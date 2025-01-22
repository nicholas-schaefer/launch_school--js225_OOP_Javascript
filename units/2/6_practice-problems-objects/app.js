function _notes(){
  `
  Call the payInvoice method twice, once with "Due North Development" as the argument, and once with "Slough Digital" as the argument.
  Then call totalPaid and totalDue, and log the results of both methods; they should be 550 and 187.50, respectively.
  `
}

let invoices = {
  unpaid: [],
  paid: [],

  totalPaid(){
    return this.paid.reduce((sum, invoice)=> sum + invoice.amount, 0);
  },

  totalDue(){
    return this.unpaid.reduce((sum, invoice)=> sum + invoice.amount, 0);
  },

  payInvoice(clientName){
    const unpaid = [];

    const matchedIndex = this.unpaid.findIndex(invoice => invoice.clientName === clientName);
    if (matchedIndex >= 0){
      this.paid.push(this.unpaid.splice(matchedIndex, 1)[0]);
    }else{
      this.unpaid.push
    }
  },

  add(clientName, amount){
    if (typeof clientName !== 'string' || typeof amount !== 'number') throw new Error('invalid inputs');
    this.unpaid.push({clientName, amount});
  },
}


invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);


invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
