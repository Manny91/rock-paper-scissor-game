import { RockPaperScissorState } from './../../entities/rock-paper-scissor-state';
import { RockPaperScissorTurn } from './../../entities/rock-paper-scissor-turn';
import { RockPaperScissorActions } from './../../actions/rock-paper-scissor.action';
import { RockPaperScissor } from './../../entities/rock-paper-scissor';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-rock-paper-scissor',
    templateUrl: './rock-paper-scissor.component.html',
    styleUrls: ['./rock-paper-scissor.component.scss']
})
export class RockPaperScissorComponent {

    public rockPaperScissorTurn: RockPaperScissorTurn;
    public rockValue = RockPaperScissor.Rock;
    public paperValue = RockPaperScissor.Paper;
    public scissorValue = RockPaperScissor.Scissor;
    public turnResult: string;
    public rockPaperScissor$: Subscription;

    constructor(
        public rockPaperScissorActions: RockPaperScissorActions,
        public store: Store<any>
    ) {
        this.rockPaperScissor$ = this.store.select('rockPaperScissor').subscribe(this.loadRockPaperScissor);
    }

    private loadRockPaperScissor = (rockPaperScissorState: RockPaperScissorState) => {
        if (rockPaperScissorState.items.length > 0) {
            this.rockPaperScissorTurn = rockPaperScissorState.items[rockPaperScissorState.items.length - 1];
        }
    }

    public play(rockPaperScissor: RockPaperScissor) {
        const turnPlayed = new RockPaperScissorTurn({ player1: rockPaperScissor });
        this.store.dispatch(this.rockPaperScissorActions.rockPaperScissorPlayed(turnPlayed));
    }

    private ngOnDestroy = () => {
        this.rockPaperScissor$.unsubscribe();
    }
}
