import { RockPaperScissorModule } from './modules/routed/rock-paper-scissor/rock-papper-scissor.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RockPaperScissorModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
