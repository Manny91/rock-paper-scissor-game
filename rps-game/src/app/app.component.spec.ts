import { AppRoutingModule } from './app-routing.module';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            AppComponent
          ],
          imports: [
            BrowserModule,
            CommonModule,
            AppRoutingModule
          ],
          providers: [
            {provide: APP_BASE_HREF, useValue: ''}
          ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
