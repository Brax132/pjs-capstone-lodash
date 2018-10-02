const _ = {
  clamp(number, lower, upper) {
  const lowerClampedValue = Math.max(number, lower);
  const clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
},
  inRange(number, start, end) {
    if(end === undefined) {
      end = start
      start = 0
    }
    if(start > end) {
      const temp = end
      end = start
      start = temp
    }
    let isInRange
    if(start < number && number < end) {
      return true
    }else {
      return false
  }
 return isInRange },
  words(string) {
    const words = string.split(' ')
    return words
  },
  pad(string, length) {
    if(length <= string.length) {
      return string;
    }
    const startPaddingLength = Math.floor((length - string.length)/2);
    const endPaddingLength = length - string.length - startPaddingLength;
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    let hasValue = (object.key != undefined && object[key] != undefined)
    return hasValue
  },

  invert(object) {
    const invertedObject = {};
    for(let key in object) {
      const originalValue = object.key
      invertedObject.originalValue = key

    }
    return invertedObject
  },

  findKey(object, predicate) {
    for(let key in object) {
      const value = object.key
      const predicateReturnValue = predicate(value)
    	if(predicateReturnValue) {
        return key
      }
    }
    if(false){
      return undefined
    }
  },
  drop(array, num) {
    if(num) {
      num = num
    }else{
      num = 1
    }
   const droppedArray = array.slice(num)
   return droppedArray
  },
  dropWhile(array, predicate) {
    const find = (element, index) => {
      return !predicate(element, index, array)
    }
    const dropNumber = array.findIndex(find)
    const newDroppedArray = this.drop(array, dropNumber)
    return newDroppedArray
  },

  chunk(array, size) {
    if (size) {
      size = size
    }else{
      size = 1
    }
    const arrayChunks = [];
    for(i = 0; i < array.length; i+=size) {
      const arrayChunk = array.slice(i,i+size)
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks;
  }


};






// Do not write or modify code below this line.
module.exports = _;
