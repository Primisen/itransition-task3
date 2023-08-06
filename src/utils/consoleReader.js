import {question} from "readline-sync";

export class ConsoleReader {

    read(message) {
        return question(message);
    }
}