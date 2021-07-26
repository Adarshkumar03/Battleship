const Ship = (length) => {
    const _length = length;
    let _isSunk = false
    let _hitMark = Array.apply(null, Array(_length)).map(x=> x="");

    const hit = (pos) => {
        if (pos >= length || pos < 0) {
            return "Wrong input";
        }
        _hitMark[pos] = "X";
        return _hitMark;
    }

    const isSunk = () => {
        if(_hitMark.every(x => x === "X")){
            _isSunk = true;
        }
        return _isSunk;
    }

    return {
       hit, isSunk
    }
}

module.exports = Ship;