/*
 This file is auto-generated, do not edit
*/

'use strict'
var chai = require('chai').assert;
var recombee = require('./../index.js');
var rqs = recombee.requests;

var env = require('./set-environment.js');

describe('AddDetailView', function(){
  this.timeout(150000);

  before(function(done){

    env.setEnvironment()
    .then(()=> {
      done();
     });
  });
  it ('works in batch', (done) => {
    let requests = [
      new rqs.AddDetailView('u_id','i_id',{'cascadeCreate': true}),
      new rqs.AddDetailView('entity_id','entity_id'),
      new rqs.AddDetailView('entity_id','entity_id',{'timestamp': '2013-10-29T09:38:41.341Z'}),
      new rqs.AddDetailView('entity_id','nonex_id'),
      new rqs.AddDetailView('nonex_id','entity_id'),
      new rqs.AddDetailView('entity_id','entity_id',{'timestamp': -15}),
      new rqs.AddDetailView('u_id2','i_id2',{'cascadeCreate': true,'timestamp': 5}),
      new rqs.AddDetailView('u_id2','i_id2',{'cascadeCreate': true,'timestamp': 5})
    ];

    env.client.send(new rqs.Batch(requests))
    .then((responses) => {
      chai.equal(responses[0].code, 200);
      chai.equal(responses[1].code, 200);
      chai.equal(responses[2].code, 200);
      chai.equal(responses[3].code, 404);
      chai.equal(responses[4].code, 404);
      chai.equal(responses[5].code, 400);
      chai.equal(responses[6].code, 200);
      chai.equal(responses[7].code, 409);
      done();
    });
  });
});