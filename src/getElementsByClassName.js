// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var body = document.body;

  var result = [];

  var getElement = function(element) {
    if (element.classList) {
      if (element.classList.contains(className)) {
        result.push(element);
      }
    }

    if (element.childNodes.length !== 0) {
      for (var i = 0; i < element.childNodes.length; i++) {
        getElement(element.childNodes[i]);
      }
    } else {
      return;
    }
  };

  getElement(body);

  return result;
};
