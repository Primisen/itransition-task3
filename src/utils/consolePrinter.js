export class ConsolePrinter {

    print(message) {
        console.log(message);
    }

    printHelpTable(moves) {
        let numberOfMoves = moves.length;
        let mapOfMovesAsTable = {};

        for (let i = 0; i < numberOfMoves; i++) {
            let currentPosition = i;
            let nextMove = {};

            nextMove[moves[currentPosition]] = "draw";
            currentPosition++;

            if (currentPosition == numberOfMoves) {
                currentPosition = 0;
            }

            for (let j = 0; j < (numberOfMoves - 1) / 2; j++) {
                nextMove[moves[currentPosition]] = "win";
                currentPosition++;
                if (currentPosition == numberOfMoves) {
                    currentPosition = 0;
                }
            }

            for (let j = 0; j < (numberOfMoves - 1) / 2; j++) {
                nextMove[moves[currentPosition]] = "lose";
                currentPosition++;
                if (currentPosition == numberOfMoves) {
                    currentPosition = 0;
                }
            }

            mapOfMovesAsTable[moves[i]] = nextMove;
        }

        console.table(mapOfMovesAsTable)
    }
}
