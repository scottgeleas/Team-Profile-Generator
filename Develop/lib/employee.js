class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee'
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
        </ul>
      </div>`
    }
}

module.exports = employee
