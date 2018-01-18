import { RockPaperScissorTurn } from './rock-paper-scissor-turn';

export interface IRockPaperScissorAction {
    type: string;
    payload?: RockPaperScissorTurn;
}
