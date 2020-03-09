function indexEqualsValueSearch(arr) {
  // use binary search and keep track of lowest index
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((end - start) / 2);
  let lowestIndex = Infinity;
  while (start <= end) {
    if (arr[mid] === mid) {
      if (mid < lowestIndex) lowestIndex = mid;
      end = mid - 1;
    } else if (arr[mid] > mid) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((end - start) / 2);
  }
  return lowestIndex === Infinity ? -1 : lowestIndex;
}
