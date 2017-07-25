/**
 * Created by Cody Edgington on 7/25/2017.
 * The Goal of this project is to demonstrate a method I developed which compresses the storage of a chess game to a fraction of it's original size
 * This is not the most efficient implementation of this method.
 */

var SQUARES = [
    "a1","b1","c1","d1","e1","f1","g1","h1",
    "a2","b2","c2","d2","e2","f2","g2","h2",
    "a3","b3","c3","d3","e3","f3","g3","h3",
    "a4","b4","c4","d4","e4","f4","g4","h4",
    "a5","b5","c5","d5","e5","f5","g5","h5",
    "a6","b6","c6","d6","e6","f6","g6","h6",
    "a7","b7","c7","d7","e7","f7","g7","h7",
    "a8","b8","c8","d8","e8","f8","g8","h8"
];

var PGN = "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 " +
"4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 10. d4 Nbd7 " +
"11. c4 c6 12. cxb5 axb5 13. Nc3 Bb7 14. Bg5 b4 15. Nb1 h6 16. Bh4 c5 17. dxe5" +
"Nxe4 18. Bxe7 Qxe7 19. exd6 Qf6 20. Nbd2 Nxd6 21. Nc4 Nxc4 22. Bxc4 Nb6" +
"23. Ne5 Rae8 24. Bxf7+ Rxf7 25. Nxf7 Rxe1+ 26. Qxe1 Kxf7 27. Qe3 Qg5 28. Qxg5" +
"hxg5 29. b3 Ke6 30. a3 Kd6 31. axb4 cxb4 32. Ra5 Nd5 33. f3 Bc8 34. Kf2 Bf5" +
"35. Ra7 g6 36. Ra6+ Kc5 37. Ke1 Nf4 38. g3 Nxh3 39. Kd2 Kb5 40. Rd6 Kc5 41. Ra6" +
"Nf2 42. g4 Bd3 43. Re6 ";

var chess = new Chess();
console.log(chess.ascii());
console.log(getMove(PGN, 1));
console.log(getMove(PGN, 2));
console.log(getMove(PGN, 12));

console.log(getPieceMovement(getMove(PGN, 2), 0));
console.log(getPieceMovement(getMove(PGN, 5), 0));

console.log(getNumberMoveablePieces(chess, 0));


function zip(PGN){
    var CompressedBinary = "";


}

function getNumberOfPieceForMove(movement, board){
    if(mo
    var takeMove = false;
    var pawnMove = false;

    if(movement.indexOf('x') > -1){
       movement.replace('x', '');
       takeMove = true;
    }

    SQUARES.forEach(function(entry){
        var moves = board.moves({
            square: entry,
            verbose: true
        });
        if (moves.length > 0){
            pieces++;
        }
    });
}
/**
 * Get number of pieces that could move for a player
 * @param {Object} The board in it's current state
 * @return {Number} The number of pieces that could move this turn
*/
function getNumberMoveablePieces(board){
    var pieces = 0;
    SQUARES.forEach(function(entry){
        var moves = board.moves({
            square: entry,
            verbose: true
        });
        console.log(moves);
        if (moves.length > 0){
            pieces++;
        }
    });
    return pieces;
}

/**
 * Get a single Piece movement from a move
 * @param {String} A move. See "getMove"
 * @param (Number} 0 for white move, 1 for black. Could be boolean.
 * @return {String} The movement with no extra chars
 */

function getPieceMovement(move, player){
    switch(player){
        case 0:
            return move.substring(0, move.indexOf(" "));
            break;
        case 1:
            return move.substring(move.indexOf(" ") + 1);
            break;
        default:
            throw "Player must be 0 (White) or 1 (Black)";
    }
}

/**
 * Gets a move from a PGN
 * @param {String} A Portable Game Notation String
 * @param {Number} An integer for the move desired. "3" is the third move
 * @return {String} The move with a space seperating
 */
function getMove(PGN, move){ //A "Move" in chess consists of a white and black piece movement
    var index = PGN.indexOf(move + ".");
    var nextIndex = PGN.indexOf((move + 1) + ".");

    index += move.toString().length + 2; //Butts it up to the start of the first piece move
    nextIndex -= 1; //Butts it up to the end of the second piece movement
    return PGN.substring( index, nextIndex);
}