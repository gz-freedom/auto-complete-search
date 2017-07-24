import { AutoCompleteSearchPage } from './app.po';

describe('auto-complete-search App', () => {
  let page: AutoCompleteSearchPage;

  beforeEach(() => {
    page = new AutoCompleteSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
