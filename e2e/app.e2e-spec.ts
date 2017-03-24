import { KontakRumahSakitJKT100Page } from './app.po';

describe('kontak-rumah-sakit-jkt100 App', () => {
  let page: KontakRumahSakitJKT100Page;

  beforeEach(() => {
    page = new KontakRumahSakitJKT100Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
