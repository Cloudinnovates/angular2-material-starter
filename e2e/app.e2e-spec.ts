import { Angular2MaterialStarterPage } from './app.po';

describe('angular2-material-starter App', function() {
  let page: Angular2MaterialStarterPage;

  beforeEach(() => {
    page = new Angular2MaterialStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
