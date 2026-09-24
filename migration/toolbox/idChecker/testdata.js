var db1 = db.getSiblingDB("idechekertestdb");

db1.dropDatabase();
var coll1 = db1.getCollection("coll1");
var coll2 = db1.getCollection("coll2");
var coll3 = db1.getCollection("coll3");

coll1.insertMany([
    {empid:"EMP001", name:"", amount:3434},
    {empid:"EMP002", name:"", amount:5357},
    {empid:"EMP003", name:"", amount:1759}
]);
coll2.insertMany([
    {_id:"id1", msg:"hello1"},
    {_id:"id2", msg:"hello2"},
    {_id:"id3", msg:"hello3"}
]);
coll3.insertMany([
    {_id:5, msg:"hello1"},
    {_id:9, msg:"hello2"},
    {_id:13, msg:"hello3"}
]);

db.createView(
    "view1",
    "coll1",
    [
        { $project: { amount: 0 } }
    ]
);



