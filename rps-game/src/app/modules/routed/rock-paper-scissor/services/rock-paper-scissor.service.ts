import { RockPaperScissorTurn } from './../entities/rock-paper-scissor-turn';
import { Injectable } from '@angular/core';
import { RockPaperScissor } from './../entities/rock-paper-scissor';
import { PLAYER_1_WINS, PLAYER_2_WINS, DRAW } from '../constants/rock-player-scissor-turn.constants';
@Injectable()
export class RockPaperScissorService {


    private PLAYER_1_WINS = PLAYER_1_WINS;
    private PLAYER_2_WINS = PLAYER_2_WINS;
    private DRAW = DRAW;
    public generateRandom = (): RockPaperScissor => {
        return Math.floor(Math.random()  * Object.keys(RockPaperScissor).length / 2);
    }

    public checkTurnResult = (rockPaperScissorTurn: RockPaperScissorTurn): string => {
        if (rockPaperScissorTurn) {
            const player1Value =  rockPaperScissorTurn.player1;
            const player2Value = rockPaperScissorTurn.player2;
            let result = this.DRAW;
            if (player1Value !== player2Value) {
                if (player1Value > player2Value || player1Value === RockPaperScissor.Rock && player2Value !== RockPaperScissor.Paper) {
                    result = this.PLAYER_1_WINS;
                } else {
                    result = this.PLAYER_2_WINS;
                }
            }
            return result;
        }
    }
}
