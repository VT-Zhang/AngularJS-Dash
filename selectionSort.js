function selectionSort(arr){
    var index;
    var temp;
    var min;
    for(var i = 0; i < arr.length; i++){
        min = arr[i];
        for (var j = i; j < arr.length; j++){
            if(min >= arr[j]){
                min = arr[j];
                index = j;
            }
        }
        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }
    return arr;
}
selectionSort([5,4,3,2,1]);
