import {Random} from "random-js";
import {HmacGenerator} from "./hmacGenerator.js";

export class ComputerPlayer {

    constructor() {
        this.random = new Random();
        this.hmacGenerator = new HmacGenerator();
    }

    makeMove(moves) {
        this.move = this.random.integer(0, moves.length - 1);
        this.hmac = this.hmacGenerator.generateHmac(this.move);
    }

    getMove() {
        return this.move;
    }

    getHmac() {
        return this.hmac;
    }

    getKey() {
        return this.hmacGenerator.getKey();
    }
}