var axios = require('axios');
var firebase = require('firebase');
const config = require('../GlobalHandlers/Constants').FirebaseConfig;


function intialize_firebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  console.log("initialized firebase");
}

function update_open_start_node() {
  var promise = firebase.database().ref('openstart/' + 1).set("open event triggered");
  console.log("updated");
  return promise;
}
function delete_open_start_node() {
  var promise = firebase.database().ref('openstart/' + 1).remove();
  console.log("deleted");
  return promise;
}
function update_next_node() {
  var promise = firebase.database().ref('next/' + 1).set("next event triggered");
  console.log("updated");
  return promise;
}
function delete_next_node() {
  var promise = firebase.database().ref('next/' + 1).remove();
  console.log("deleted");
  return promise;
}

function update_first_node() {
  var promise = firebase.database().ref('first/' + 1).set("first event triggered");
  console.log("updated");
  return promise;
}
function delete_first_node() {
  var promise = firebase.database().ref('first/' + 1).remove();
  console.log("deleted");
  return promise;
}
function update_previous_node() {
  var promise = firebase.database().ref('previous/' + 1).set("previous event triggered");
  console.log("updated");
  return promise;
}
function delete_previous_node() {
  var promise = firebase.database().ref('previous/' + 1).remove();
  console.log("deleted");
  return promise;
}
function update_last_node() {
  var promise = firebase.database().ref('last/' + 1).set("last event triggered");
  console.log("updated");
  return promise;
}
function delete_last_node() {
  var promise = firebase.database().ref('last/' + 1).remove();
  console.log("deleted");
  return promise;
}

var API = {
  InitializeFirebase: intialize_firebase,
  UpdateOpenNode: update_open_start_node,
  DeleteOpenNode: delete_open_start_node,
  UpdateNextNode: update_next_node,
  DeleteNextNode: delete_next_node,
  UpdateFirstNode: update_first_node,
  DeleteFirstNode: delete_first_node,
  UpdateLastNode: update_last_node,
  DeleteLastNode: delete_last_node,
  UpdatePreviousNode: update_previous_node,
  DeletePreviousNode: delete_previous_node

}

module.exports = API;