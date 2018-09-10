export default class QuickSort {
  sort(originalArray) {
    if (originalArray.length <= 1) {
      return originalArray;
    }

    const pivotIndex = originalArray.length - 1;
    const pivot = originalArray[pivotIndex];

    let i = 0;
    for (let j = 0; j < pivotIndex; j++) {
      if (originalArray[j] < pivot) {
        originalArray = this.swap(originalArray, i, j);
        i++;
      }
    }
    originalArray = this.swap(originalArray, i, pivotIndex);

    const leftArray = originalArray.slice(0, i);
    const rightArray = originalArray.slice(i + 1, originalArray.length);

    return this.sort(leftArray).concat([pivot]).concat(this.sort(rightArray));
  }

  swap(arr, i, j) {
    const prevI = arr[i];
    arr[i] = arr[j];
    arr[j] = prevI;
    return arr;
  }
}
