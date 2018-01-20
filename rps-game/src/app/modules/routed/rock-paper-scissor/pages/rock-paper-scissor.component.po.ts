import { RockPaperScissorComponent } from './../components/rock-paper-scissor/rock-paper-scissor.component';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

export class RockPaperScissorPage {

    private debugElement: DebugElement;
    constructor(public fixture: ComponentFixture<RockPaperScissorComponent>) {
        this.debugElement = fixture.debugElement;
    }

    public clickRockButton = () => {
        this.debugElement.query(By.css('.play-btn.rock')).nativeElement.click();
    }
    public clickPaperButton = () => {
        this.debugElement.query(By.css('.play-btn.paper')).nativeElement.click();
    }
    public clickScissorButton = () => {
        this.debugElement.query(By.css('.play-btn.scissor')).nativeElement.click();
    }



}
