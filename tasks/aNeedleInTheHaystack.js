let array = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

function findNeedle(haystack) {
  // your code here
  
  for (i = 0; i < haystack.length; i++){
    if (haystack[i] == 'needle'){
      return 'found the needle at position ' + i;
    }
  }
  
}