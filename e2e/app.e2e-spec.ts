import { WhitewaterPage } from './app.po';

describe('whitewater App', function() {
  let page: WhitewaterPage;

  beforeEach(() => {
    page = new WhitewaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
