use admin

db.createUser({
    user: "mainadm",
    pwd: "mainadm123",
    roles: [
        { role: "root", db: "admin" }
    ]
});


use portal


db.createUser({
    user: "portaladm",
    pwd: "portaladm123",
    roles: [
        { role: "readWrite", db: "mydb1" },
        { role: "readWrite", db: "mydb2" },
        { role: "readWrite", db: "mydb3" }
    ]
});

