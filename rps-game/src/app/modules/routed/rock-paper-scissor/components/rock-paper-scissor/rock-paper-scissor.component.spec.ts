import { Store } from '@ngrx/store';
import { APP_BASE_HREF } from '@angular/common';
import { RockPaperScissorPage } from './../../pages/rock-paper-scissor.component.po';
import { RockPaperScissorModule } from './../../rock-papper-scissor.module';
import { RockPaperScissorComponent } from './rock-paper-scissor.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

let fixture: ComponentFixture<RockPaperScissorComponent>;
let page: RockPaperScissorPage;
let component: RockPaperScissorComponent;
describe('Rock Paper Scissor Component Test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [
                {provide: APP_BASE_HREF, useValue: ''}
            ],
            imports: [RockPaperScissorModule]
        });
        fixture = TestBed.createComponent(RockPaperScissorComponent);
        component = fixture.componentInstance;
        spyOn(component, 'play').and.callThrough();
        spyOn(component.store, 'dispatch').and.callThrough();
        page = new RockPaperScissorPage(fixture);
        fixture.detectChanges();
    });

    it('should dispatch the play action when pressing the button play', () => {
        page.clickRockButton();
        fixture.detectChanges();
        expect(component.play).toHaveBeenCalled();
        expect(component.store.dispatch).toHaveBeenCalled();
    }) ;
});


