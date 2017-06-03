import { TestFirebaseAppPage } from './app.po';

describe('test-firebase-app App', () => {
  let page: TestFirebaseAppPage;

  beforeEach(() => {
    page = new TestFirebaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
