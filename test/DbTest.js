/**
 * Created with JetBrains WebStorm.
 * User: marshal
 * Date: 12-5-17
 * Time: 下午8:23
 * To change this template use File | Settings | File Templates.
 */

require('should');
var DocProvider = require('../lib/db/DocProvider').DocProvider;

var bookProvider = new DocProvider('books');

describe('DocProvider', function () {
    var book = {
        name:'钱的历史'
    };

//    describe('#insert', function () {
//       for(i=0;i<3;i++){
//        bookProvider.insert({name:'钱的历史',id:i}, {}, function (result) {
//            it('图书应该有_id属性', function () {
//                result[0].should.have.property('_id');
//            });
//
//            describe('#findOne', function () {
//                it('读取的图书应该和插入的对象一致', function (done) {
//                    bookProvider.findOne({_id:book._id}, {}, function (result) {
//                      //  result.should.eql(book);
//                        done();
//                    });
//                });
//            });
//
//        });
//      }
//    });
     /*
    describe("#update",function(){
            bookProvider.update({name:book.name},{$set:{price:12.2}},{},function(result){
                describe('#findOne', function () {
                    it('修改的图书应该有price属性', function (done) {
                        bookProvider.findOne({name:book.name}, {}, function (result) {
                            result.should.have.property('price');
                            result.price.should.eql(12.3);
                            done();
                        });
                    });
                });
            });
        });
      */
//    describe("#remove",function(){
//        bookProvider.remove({name:book.name}, {}, function (result) {
//          describe("#findOne",function(){
//              it('图书是否删除成功',function(done){
//              bookProvider.findOne({name:book.name},{},function(result){
//                  result.should.eql(book);
//                  done();
//                 });
//              });
//          });
//        });
//    });

    describe("#find",function(){
        it('查询到的图书id是否正确', function (done) {
        bookProvider.find({}, {id:1,_id:0}, function (result) {
            for(var num = 0;num<result.length;num++){
            result[num].id.should.eql(num);
            result[num].should.have.property('id');
            }
            done();
        });
        });
    });


});
