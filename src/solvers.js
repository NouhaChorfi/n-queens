/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var matrix = this.makeEmptyMatrix(n);
  var board= new Board(matrix)

 console.log("board = ",board)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      matrix[i][j] = 1;
      if(board.hasAnyRooksConflicts()){
        matrix[i][j]= 0;
      }
    }       
  }   
  solution=matrix;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;

};

// return the number of nxn chessboards that exist, 
//with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1; //fixme
  if (!n){
    return 1;
  }
  for (var i=n; i > 0; i--){
    solutionCount *= i; 
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other

        

window.findNQueensSolution = function(n) {
  var solution = this.makeEmptyMatrix(n);
  var board= new Board(solution)  
// debugger
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) { 
      solution[i][j]= 1;
      if(board.hasAnyQueenConflictsOn(i,j)){
        solution[i][j]= 0;
      }      
    }       
  }  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
   return solution;
 };

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

/////////////////
var makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};