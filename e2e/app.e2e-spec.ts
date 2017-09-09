import { ProjectA1Page } from './app.po';

describe('project-a1 App', () => {
  let page: ProjectA1Page;

  beforeEach(() => {
    page = new ProjectA1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
