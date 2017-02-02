import { GitsterPage } from './app.po';

describe('gitster App', function() {
  let page: GitsterPage;

  beforeEach(() => {
    page = new GitsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
