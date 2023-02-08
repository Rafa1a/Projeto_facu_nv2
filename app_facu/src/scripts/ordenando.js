function isNumero(n){
    if (Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function selectionSort(arr,  n)
{
    var i, j, min_idx;
 
    for (i = 0; i < n-1; i++)
    {
       
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        
        swap(arr,min_idx, i);
    }
}
function partition(arr, low, high) {
 
    
    let pivot = arr[high];
 
    
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        
        if (arr[j] < pivot) {
 
            
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
 

function quickSort(arr, low, high) {
    if (low < high) {
 
        
        let pi = partition(arr, low, high);
 
      
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
function bubbleSort(arr){
   
    var i, j;
    var len = arr.length;
     
    var isSwapped = false;
     
    for(i =0; i < len; i++){
       
      isSwapped = false;
       
      for(j = 0; j < len; j++){
          if(arr[j] > arr[j + 1]){
           
            swap(arr, j, j+1)
            isSwapped = true;
          }
      }
      if(!isSwapped){
        break;
      }
    }
}
export  {isNumero,inLista,bubbleSort,selectionSort,quickSort}