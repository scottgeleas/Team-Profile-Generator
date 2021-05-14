const employee = require("./employee");

class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer'
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
          <li class="list-group-item">Github: ${this.github}</li>
        </ul>
      </div>`
  }
}

module.exports = engineer