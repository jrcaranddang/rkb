import { RkbPage } from './app.po';

describe('rkb App', () => {
  let page: RkbPage;

  beforeEach(() => {
    page = new RkbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
