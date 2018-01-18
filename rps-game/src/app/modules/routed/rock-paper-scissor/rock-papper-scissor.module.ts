import { RockPaperScissorService } from './services/rock-paper-scissor.service';
import { RockPaperScissorState } from './entities/rock-paper-scissor-state';
import { RockPaperScissorActions } from './actions/rock-paper-scissor.action';
import { NgModule } from '@angular/core';
import { RockPaperScissorRoutingModule } from './rock-paper-scissor.routing.module';
import { CommonModule } from '@angular/common';
import { RockPaperScissorComponent } from './components/rock-paper-scissor/rock-paper-scissor.component';
import { rockPaperScissorReducer } from './reducers/rock-paper-scissor.reducer';
import { StoreModule } from '@ngrx/store';



@NgModule({
    imports: [
        RockPaperScissorRoutingModule,
        CommonModule,
        StoreModule.forRoot({
            rockPaperScissor: rockPaperScissorReducer
        }, {initialState: {
            rockPaperScissor: {
                items: []
            }

        }})
    ],
    declarations: [
        RockPaperScissorComponent
    ],
    providers: [
        RockPaperScissorActions,
        RockPaperScissorService
    ]
})
export class RockPaperScissorModule {

}
