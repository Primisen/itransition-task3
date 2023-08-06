import {UI} from "./utils/UI.js";
import {ConsolePrinter} from "./utils/consolePrinter.js";
import {ConsoleReader} from "./utils/consoleReader.js";
import {ComputerPlayer} from "./computerPlayer.js";
import {PersonPlayer} from "./personPlayer.js";

export class Game {

    constructor(moves) {
        this.moves = moves;
        this.ui = new UI(new ConsolePrinter(), new ConsoleReader());
        this.computerPlayer = new ComputerPlayer();
        this.personPlayer = new PersonPlayer(this.ui.getPrinter(), this.ui.getReader());
    }

    play() {
        this.checkMovesNumber(this.moves);
        this.computerPlayer.makeMove(this.moves);
        this.ui.printHmacAndAvailableMoves(this.computerPlayer.getHmac(), this.moves);
        this.personPlayer.makeMove(this.moves);
        this.winner = this.getWinner(this.computerPlayer.getMove(), this.personPlayer.getMove());
        this.ui.printResults(this.personPlayer.getMove(), this.computerPlayer.getMove(), this.winner, this.computerPlayer.getKey());
    }

    movesNumberIsIncorrect(moves) {
        return moves.length % 2 == 0;
    }

    checkMovesNumber(moves) {
        if (this.movesNumberIsIncorrect(moves)) {
            this.ui.printIncorrectMovesNumberMessage();
            process.exit();
        }
    }

    getWinner(computerMove, personMove) {
        if (computerMove == personMove) {
            return "Draw";
        } else if (Math.abs(computerMove - personMove) > this.moves.length) {
            return computerMove > personMove ? "Person" : "Computer";
        } else {
            return computerMove < personMove ? "Person" : "Computer";
        }
    }
}