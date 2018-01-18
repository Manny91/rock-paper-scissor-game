import { DRAW, PLAYER_1_WINS, PLAYER_2_WINS } from './../constants/rock-player-scissor-turn.constants';
import { RockPaperScissor } from './rock-paper-scissor';

export class RockPaperScissorTurn {
    player1: RockPaperScissor;
    player2: RockPaperScissor;
    result: string;

    constructor (data: any = {}) {
        this.player1 = this.populatePlayer(data.player1);
        this.player2 = this.populatePlayer(data.player2);
        this.result = this.checkTurnResult(this.player1, this.player2);

    }

    public player1ToString = (): string => {
        return RockPaperScissor[this.player1];
    }

    public player2ToString = (): string => {
        return RockPaperScissor[this.player2];
    }

    private populatePlayer(dataPlayer?: any) {
        return  dataPlayer !== undefined ? dataPlayer : this.generateRandom();
    }

    private generateRandom = (): RockPaperScissor => {
        return Math.floor(Math.random()  * Object.keys(RockPaperScissor).length / 2);
    }


    private checkTurnResult = (player1Value: RockPaperScissor, player2Value: RockPaperScissor): string => {
            let result = DRAW;
            if (player1Value !== player2Value) {
                if (player1Value === RockPaperScissor.Rock && player2Value !== RockPaperScissor.Paper) {
                    result = PLAYER_1_WINS;
                } else if (player1Value === RockPaperScissor.Scissor  && player2Value === RockPaperScissor.Rock) {
                    result = PLAYER_2_WINS;
                } else if (player1Value > player2Value) {
                    result = PLAYER_1_WINS;
                } else {
                    result = PLAYER_2_WINS;
                }
            }
            return result;
    }
}

