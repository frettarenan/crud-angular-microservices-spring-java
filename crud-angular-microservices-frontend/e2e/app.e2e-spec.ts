import { CrudAngularMicroservicesFrontendPage } from './app.po';

describe('algamoney-ui App', () => {
  let page: CrudAngularMicroservicesFrontendPage;

  beforeEach(() => {
    page = new CrudAngularMicroservicesFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
