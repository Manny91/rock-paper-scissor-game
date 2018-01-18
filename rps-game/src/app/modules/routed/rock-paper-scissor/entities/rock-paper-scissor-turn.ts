import { RockPaperScissor } from './rock-paper-scissor';

export class RockPaperScissorTurn {
    player1: RockPaperScissor;
    player2: RockPaperScissor;

    constructor (data: any = {}) {
        this.player1 = data.player1;
        this.player2 = data.player2;
    }

    public player1ToString = (): string => {
        return RockPaperScissor[this.player1];
    }

    public player2ToString = (): string => {
        return RockPaperScissor[this.player2];
    }
}
