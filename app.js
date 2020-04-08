
const numberOfGrainsPerSquare = (grain) => {
    return Math.pow(2, (grain-1));
}

const numberOfGrainsOnChessboard = () => {
let grain = 1;
let total = 0;
    for( let i = 1; i < 65; i++){
     grain = grain + numberOfGrainsPerSquare(i);   
     total = total + grain;
    }
    return total; 
}

console.log(numberOfGrainsOnChessboard());

