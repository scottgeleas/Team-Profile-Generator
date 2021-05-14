const employee = require("./employee");

class intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern'
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
          <li class="list-group-item">School: ${this.school}</li>
        </ul>
      </div>`
  }
}

module.exports = intern