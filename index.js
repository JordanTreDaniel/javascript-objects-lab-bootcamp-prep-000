var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  var clone = Object.assign({}, obj, {[key]: val});
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign();
}