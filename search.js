function search(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (true) {
    const endIndex = min + max;
    const middleDecimal = endIndex / 2.0;
    const middleIndex = Math.floor(middleDecimal);

    const currentItem = array[middleIndex];

    if (currentItem === item) {
      return middleIndex;
    } else if (currentItem < item) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
}

export default search;
