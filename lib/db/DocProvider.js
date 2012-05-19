/**
 * Created with JetBrains WebStorm.
 * User: marshal
 * Date: 12-5-16
 * Time: 下午9:14
 * To change this template use File | Settings | File Templates.
 */
var Db = require('mongodb').Db,
    Server = require('mongodb').Server,
    Config = require('./Config').Config;

var DocProvider = function (collectionName) {
    this.collectionName = collectionName;
};

DocProvider.prototype.db = new Db(Config.dbName,
    new Server(Config.host, Config.port, {auto_reconnect:true}, {}));

DocProvider.prototype.getCollection = function (callback) {
    this.db.collection(this.collectionName, function (err, collection) {
        if (err) throw err;
        callback(collection);
    });
};

DocProvider.prototype.insert = function (docs, options, callback) {
    this.getCollection(function (collection) {
        collection.insert(docs, options, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    });
};

DocProvider.prototype.findOne = function (selector, options, callback) {
    this.getCollection(function (collection) {
        collection.findOne(selector, options, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    });

};

//更新文档
DocProvider.prototype.update = function (selector, document, options, callback) {
    this.getCollection(function (collection) {
        collection.update(selector, document, options, function(err, result) {
            if(err) throw (err);
            callback(result);
        });

    });
};

//获取所有文档
DocProvider.prototype.find = function (selector, options, callback) {
    this.getCollection(function (collection) {

        collection.find(selector , options).toArray(function(err, result) {
            if(err) throw (err);
            callback(result);
        });

    });
};


//删除文档
DocProvider.prototype.remove = function (selector, options, callback) {
    this.getCollection(function (collection) {

        collection.remove(selector , options, function(err, result) {
            if(err) throw (err);
            callback(result);
        });

    });
};

exports.DocProvider = DocProvider;