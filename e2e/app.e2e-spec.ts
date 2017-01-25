import { DodskrokPage } from './app.po';

describe('dodskrok App', function() {
  let page: DodskrokPage;

  beforeEach(() => {
    page = new DodskrokPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
