export class PersonPlayer {

    constructor(printer, reader) {
        this.printer = printer;
        this.reader = reader;
        this.exit = '0';
        this.help = '?';
    }

    makeMove(moves) {
        this.move = this.reader.read("Enter your move: ");

        if (this.move == this.exit) {
            process.exit();
        } else if (this.move == this.help) {
            this.printer.printHelpTable(moves);
            this.move = this.makeMove(moves);
        } else if (this.move > moves.length || this.move < 0) {
            this.printer.print("Please input number less or equal " + moves.length + " and greater " + 0);
        }

        return this.move;
    }

    getMove() {
        return this.move;
    }
}
