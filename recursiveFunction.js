function sum(arr, n) {
    // Only change code below this line
    if (n <=0){
      return 0;
    }
    console.log(sum(arr, n - 1) + arr[n-1]);
    return sum(arr, n - 1) + arr[n-1];
    // Only change code above this line
  }

