/*
* Real time private chatting app using Angular 2,Nodejs, mongodb and Socket.io
* @author Nazim Mahmud khan
*/
 
"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');
 
class Db{
 
	constructor(){
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
	//	this.mongoURL = `mongodb://127.0.0.1:27017/local`;
		this.mongoURL = 'mongodb://brad:brad@ds121190.mlab.com:21190/meanauthapp';
	}
 
	onConnect(callback){
		this.mongoClient.connect(this.mongoURL, (err, db) => {
			assert.equal(null, err);
			callback(db,this.ObjectID);
		});
	}
}
module.exports = new Db();
