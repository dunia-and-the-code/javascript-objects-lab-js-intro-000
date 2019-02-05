var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return object + object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return;
}

function deleteFromObjectByKey(object, key) {
  return;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return;
}