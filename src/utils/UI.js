export class UI {
    constructor(printer, reader) {
        this.printer = printer;
        this.reader = reader;
    }

    printIncorrectMovesNumberMessage() {
        this.printer.print("Enter odd number of arguments. For example: 1 2 3");
    }

    printHmacAndAvailableMoves(hmac, moves) {
        this.printHmac(hmac);
        this.printAvailableMoves(moves);
    }

    printHmac(hmac) {
        this.printer.print("HMAC: " + hmac);
    }

    printAvailableMoves(moves) {
        for (let i = 0; i < moves.length; i++) {
            this.printer.print((i + 1) + " - " + moves[i]);
        }
        this.printer.print("0 - exit");
        this.printer.print("? - help");
    }

    printResults(personMove, computerMove, winner, hmacKey) {
        this.printPersonMove(personMove);
        this.printComputerMove(computerMove);
        this.printWinner(winner);
        this.printHmacKey(hmacKey);
    }

    printPersonMove(personMove) {
        this.printer.print("Your move: " + personMove);
    }

    printComputerMove(computerMove) {
        this.printer.print("Computer move: " + computerMove);
    }

    printWinner(winner) {
        if (winner == "Draw") {
            this.printer.print(winner);
        } else {
            this.printer.print(winner + " win!");
        }

    }

    printHmacKey(hmacKey) {
        this.printer.print("HMAC key: " + hmacKey);
    }

    getReader() {
        return this.reader;
    }

    getPrinter() {
        return this.printer;
    }
}