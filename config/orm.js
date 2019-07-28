var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, func){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            func(result);
        });
    },
    insertOne: function(table, tableTrait, newValue, func){
        var queryString = "INSERT INTO " + table + "(" + tableTrait + ")" +
        " VALUES (?)";

        connection.query(queryString, [newValue], function(err, result) {
            if(err) throw err;

            func(result);
        });
    },
    updateOne: function(table, conditionTrait, conditionDesiredTrait, trait, changedTrait, func){
        var effect = trait + "=" + changedTrait;
        var queryString = "UPDATE " + table + " SET " + effect + " WHERE ";
        var condition = conditionTrait + "=" + conditionDesiredTrait;
        queryString += condition;
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            func(result);
        });
    }
}

module.exports = orm;