
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RockPaperScissorComponent } from './components/rock-paper-scissor/rock-paper-scissor.component';

const routes = [
    {
        path: '',
        component: RockPaperScissorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RockPaperScissorRoutingModule {}
