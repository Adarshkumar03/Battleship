import Ship from "./Ship";

const Gameboard = () => {
    let _noOfShips = 0;
    let _attackedShips = 0; 
    let _gameOver = false;
    let _missedAttacks = [];
     
    const placeShip = (row, col, length) => {
         _noOfShips++;
         const newShip = Ship(length); 
    }

    const recieveAttack = (row, col) => {
       
    }

    const getMissedAttacks = () => {
        return _missedAttacks;
    }

    const isAllSunk = () => {
        if(_noOfShips === _attackedShips)
        {    
            _gameOver = true;
            return true;
        }    
        return false; 
    }

    return {
      recieveAttack, placeShip
    }
}

module.exports = Gameboard;