// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (obj === Infinity || obj === null || obj === NaN) {
    return '' + null;
  }

  if ( typeof obj === 'string' ) {
    return `"${obj}"`;
  }

  if (Array.isArray(obj)) {
    var result = [];

    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'function' || obj[i] === undefined) {
        obj[i] = null;
      }
      result.push( stringifyJSON(obj[i]) );
    }

    return `[${result.join(',')}]`;
  }

  if (typeof obj === 'object' && obj.constructor === Object) {
    var result = [];

    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      result.push(`"${key}":` + stringifyJSON(obj[key]));
    }

    return `{${result.join(',')}}`;
  }

  return '' + obj;
};
