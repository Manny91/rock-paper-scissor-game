import { AppPage } from '../pages/app.po';

describe('rps-game App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display game message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Rock Paper Scissor game');
  });
});
