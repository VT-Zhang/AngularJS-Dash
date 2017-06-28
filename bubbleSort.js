function bubbleSort(arr){
    for(var i = arr.length - 1; i > -1; i--){
        for (var j = 0; j < i; j++){
            var temp;
            var k = j;
            while (k < i){
                if(arr[k] > arr[k+1]){
                    temp = arr[k];
                    arr[k] = arr[k+1];
                    arr[k+1] = temp;
                    k++;
                }
            }
        }
    }
    return arr;
}

bubbleSort([4,3,2,1]);
