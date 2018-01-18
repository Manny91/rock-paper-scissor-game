import { RockPaperScissorTurn } from './../entities/rock-paper-scissor-turn';
import { Injectable } from '@angular/core';
import { IRockPaperScissorAction } from '../entities/rock-paper-scissor-action.interface';


export const ROCK_PAPER_SCISSOR_ACTION_TYPES = {
    ROCK_PAPER_SCISSOR_PLAYED: '[ROCK_PAPER_SCISSOR] Rock paper scissor played',
};

@Injectable()
export class RockPaperScissorActions {

    public rockPaperScissorPlayed(rockPaperScissor: RockPaperScissorTurn): IRockPaperScissorAction {
        return {
            type: ROCK_PAPER_SCISSOR_ACTION_TYPES.ROCK_PAPER_SCISSOR_PLAYED,
            payload: rockPaperScissor
        };
    }
}
