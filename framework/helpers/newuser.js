const { faker } =  require('@faker-js/faker');

const BuildUser = function () {
    this.addid = function () {
        this.id = faker.random.numeric();
        return this;
    };
    this.addusername = function () {
        this.username = faker.internet.userName();
        return this;
    };
    this.addfirstName = function () {
        this.firstName = faker.name.firstName();
        return this;
    };
    this.addlastName = function () {
        this.lastName = faker.name.lastName();
        return this;
    };
    this.addemail = function () {
        this.email = faker.internet.email();
        return this;
    };
    this.addpassword = function () {
        this.password = faker.internet.password();
        return this;
    };
    this.addphone = function () {
        this.phone = faker.phone.number();
        return this;
    };
    this.adduserStatus = function () {
        this.userStatus = faker.random.numeric();
        return this;
    };
    this.generate = function () {
        const fields = Object.getOwnPropertyNames(this);
        console.log(fields);
        const data = {};
        fields.forEach((fieldName) => {
            if (this[fieldName] && typeof this[fieldName] !== 'function') {
                data[fieldName] = this[fieldName];
                console.warn(data[fieldName]);
            }
        });
    };

};

export default BuildUser;
