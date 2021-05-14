const employee = require("./employee");

class manager extends employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email)
    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }

  getRole() {
    return 'Manager'
  }

  print() {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${this.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Position: ${this.getRole()}</li>
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item">Email: ${this.email}</li>
          <li class="list-group-item">Office Number: ${this.officeNum}</li>
        </ul>
      </div>`
  }
}

module.exports = manager