import { Emotionv3Page } from './app.po';

describe('emotionv3 App', function() {
  let page: Emotionv3Page;

  beforeEach(() => {
    page = new Emotionv3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
