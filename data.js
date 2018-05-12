let tables = [];

let waitList = [];


function newTable (name, phone, email, unique) {

    this.name = name,
    this.phone = phone,
    this.email = email,
    this.unique = unique

    tables.push(
        {
            'name': name,
            'phone': phone,
            'email': email,
            'unique': unique
        }
    );
};

function newWaitList (name, phone, email, unique) {

    this.name = name,
    this.phone = phone,
    this.email = email,
    this.unique = unique

    waitList.push(
        {
            'name': name,
            'phone': phone,
            'email': email,
            'unique': unique
        }
    );
};

