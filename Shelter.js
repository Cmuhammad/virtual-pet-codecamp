class Shelter {
  constructor() {
    this.residents = new Map();
  }

  addResident(residentToAdd) {
    this.residents.set(residentToAdd.getName(),residentToAdd);
  }

  getResident(residentName) {
    return this.residents.get(residentName);
  }

  getResidentArray() {
    return [...this.residents.values()];
  }
}

module.exports = Shelter;