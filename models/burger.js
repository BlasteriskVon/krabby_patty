var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("ordered_burgers", function(res) {
            cb(res);
        });
    },
    create: function(trait, desiredTrait, cb){
        orm.insertOne("ordered_burgers", trait, desiredTrait, function(res) {
            cb(res);
        });
    },
    update: function(id, trait, desiredTrait, cb){
        orm.updateOne("ordered_burgers", "id", id, trait, desiredTrait, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;