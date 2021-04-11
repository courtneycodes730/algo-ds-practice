/*

buff = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 9, 8, 8, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 8, 8, 8, 7, 0, 0, 8, 0, 0],
    [0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 8, 0],
    [0, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 4, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0],
    [0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 8, 0, 0],
    [0, 0, 4, 4, 4, 0, 0, 0, 0, 8, 8, 8, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    
]


*/


// ..., 4, 9, 8

function colorFill(buff, x, y, newColor) {
  let currColor = buff[x][y]; // 8
  
  function checkAround(x, y) {
      let topPixel = buff[x-1][y];
      let leftPixel = buff[x][y-1];
      let rightPixel = buff[x][y+1];
      let bottomPixel = buff[x+1][y];
      
      // base case
      
      
      // check above
      if (pixel === currColor) {
          pixel = newColor;
          check
      }
  }
}



