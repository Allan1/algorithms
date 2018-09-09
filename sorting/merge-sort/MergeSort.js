export default class MergeSort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }

    const middleIndex = Math.floor(originalArray.length / 2);
    const leftArray = originalArray.slice(0, middleIndex);
    const rightArray = originalArray.slice(middleIndex, originalArray.length);

    return this.merge(this.sort(leftArray), this.sort(rightArray));
  }

  merge(leftArray, rightArray) {
    let sortedArray = [];
    let i = 0;
    let j = 0;

    while ((i < leftArray.length) && (j < rightArray.length)) {
      if (rightArray[j] < leftArray[i]) {
        sortedArray.push(rightArray[j]);
        j++;
      } else {
        sortedArray.push(leftArray[i]);
        i++;
      }
    }

    if (i < leftArray.length) {
      sortedArray = sortedArray.concat(leftArray.slice(i, leftArray.length));
    } else {
      sortedArray = sortedArray.concat(rightArray.slice(j, rightArray.length));
    }

    return sortedArray;
  }
}
