describe('Dashboard E2E', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:9000');
  });

  it('should display dashboard stats', async () => {
    const stats = await page.$$('.dashboard__stat');
    expect(stats.length).toBe(3);
  });

  it('should navigate via sidebar', async () => {
    await page.click('a[href="/tasks"]');
    await page.waitForSelector('.task-list');
    const url = page.url();
    expect(url).toContain('/tasks');
  });

  it('should navigate back to dashboard', async () => {
    await page.click('a[href="/"]');
    await page.waitForSelector('.dashboard');
    const title = await page.$eval('.dashboard__title', (el) => el.textContent);
    expect(title).toBe('Dashboard');
  });
});
