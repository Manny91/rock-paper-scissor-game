import { RockPaperScissorState } from './../../entities/rock-paper-scissor-state';
import { RockPaperScissorTurn } from './../../entities/rock-paper-scissor-turn';
import { RockPaperScissorActions } from './../../actions/rock-paper-scissor.action';
import { RockPaperScissor } from './../../entities/rock-paper-scissor';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RockPaperScissorService } from '../../services/rock-paper-scissor.service';

@Component({
    selector: 'app-rock-paper-scissor',
    templateUrl: './rock-paper-scissor.component.html',
})
export class RockPaperScissorComponent {

    public rockPaperScissorTurn: RockPaperScissorTurn;
    public rockValue = RockPaperScissor.Rock;
    public paperValue = RockPaperScissor.Paper;
    public scissorValue = RockPaperScissor.Scissor;
    public turnResult: string;

    constructor(
        public rockPaperScissorActions: RockPaperScissorActions,
        public store: Store<any>,
        public rockPaperScissorService: RockPaperScissorService
    ) {
        this.rockPaperScissorTurn = new RockPaperScissorTurn({});
        this.store.select('rockPaperScissor').subscribe(this.loadRockPaperScissor);
    }

    private loadRockPaperScissor = (rockPaperScissorState: RockPaperScissorState) => {
        if (rockPaperScissorState.items.length > 0 ) {
            this.rockPaperScissorTurn = rockPaperScissorState.items[rockPaperScissorState.items.length - 1];
            this.turnResult = this.rockPaperScissorService.checkTurnResult(this.rockPaperScissorTurn);
        }
    }

    public play(rockPaperScissor: RockPaperScissor) {

        const computerRandomValue = this.rockPaperScissorService.generateRandom();
        const turnPlayed = new RockPaperScissorTurn({player1: rockPaperScissor, player2: computerRandomValue});
        this.store.dispatch(this.rockPaperScissorActions.rockPaperScissorPlayed(turnPlayed));
    }
}
