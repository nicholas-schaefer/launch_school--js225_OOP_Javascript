class SmartPhone {
  constructor({brand, model, releaseYear}){
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }

  displayBatteryLevel(){
    return 'battery power at 66%';
  };

  displayInfo(){
    const info = [
      `Brand: ${this.brand}`,
      `Model: ${this.model}`,
      `Release Year: ${this.releaseYear}`,
    ];

    return info.join('\n');
  }
}

const phone1 = new SmartPhone({brand: 'Apple', model: 'iPhone 12', releaseYear: 2020});
console.log(phone1);
console.log(phone1.displayBatteryLevel());
console.log(phone1.displayInfo());