import { ROCK_PAPER_SCISSOR_ACTION_TYPES } from './../actions/rock-paper-scissor.action';
import { RockPaperScissorTurn } from './../entities/rock-paper-scissor-turn';
import { IRockPaperScissorAction } from '../entities/rock-paper-scissor-action.interface';
import { RockPaperScissorState } from '../entities/rock-paper-scissor-state';

export function rockPaperScissorReducer(state: RockPaperScissorState, action: IRockPaperScissorAction): RockPaperScissorState {

    switch (action.type) {
        case ROCK_PAPER_SCISSOR_ACTION_TYPES.ROCK_PAPER_SCISSOR_PLAYED:
            return Object.assign({}, state , {
                items: [...state.items, action.payload]
            });
        default:
            return state;
    }
}
