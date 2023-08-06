import {Game} from "./game.js";

const game = new Game(process.argv.slice(2));
game.play();
