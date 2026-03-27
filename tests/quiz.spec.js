import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('1. avab rakenduse ja näitab tervitusekraani', async ({ page }) => {
  await expect(page.getByTestId('welcome-screen')).toBeVisible();
  await expect(page.getByTestId('start-btn')).toBeVisible();
});

test('2. alustab viktoriin pärast nupu vajutamist', async ({ page }) => {
  await page.getByTestId('start-btn').click();

  await expect(page.getByTestId('quiz-screen')).toBeVisible();
  await expect(page.getByTestId('question-text')).toBeVisible();
  await expect(page.getByTestId('question-counter')).toBeVisible();
});

test('3. vastamine kuvab tagasisidet', async ({ page }) => {
  await page.getByTestId('start-btn').click();

  await expect(page.getByTestId('feedback-box')).not.toBeVisible();

  await page.getByTestId('option-0').click();

  await expect(page.getByTestId('feedback-box')).toBeVisible();
  await expect(page.getByTestId('next-btn')).toBeVisible();
});

test('4. skoor suureneb õige vastuse korral', async ({ page }) => {
  await page.getByTestId('start-btn').click();

  const score = page.getByTestId('score-display');
  await expect(score).toContainText('0');

  await page.getByTestId('option-0').click();

  await expect(score).toContainText('1');
});

test('5. vale vastus ei suurenda skoori', async ({ page }) => {
  await page.getByTestId('start-btn').click();

  const score = page.getByTestId('score-display');
  await expect(score).toContainText('0');

  await page.getByTestId('option-2').click();

  await expect(score).toContainText('0');

  await expect(page.getByTestId('feedback-box')).toBeVisible();
});

test('6. vastust ei saa pärast valikut muuta', async ({ page }) => {
  await page.getByTestId('start-btn').click();

  await page.getByTestId('option-0').click();

  const options = page.locator('.option-btn');
  const count = await options.count();

  for (let i = 0; i < count; i++) {
    await expect(options.nth(i)).toBeDisabled();
  }
});

test('7. lõpptulemus pärast viktoriini', async ({ page }) => {
  await page.getByTestId('start-btn').click();

  const totalQuestions = 5;

  for (let i = 0; i < totalQuestions; i++) {
    await page.getByTestId('option-0').click();
    await page.getByTestId('next-btn').click();
  }

  await expect(page.getByTestId('results-screen')).toBeVisible();
  await expect(page.getByTestId('final-score')).toBeVisible();

  const rows = page.locator('[data-testid="results-table"] tbody tr');
  await expect(rows).toHaveCount(totalQuestions);
});

test('8. restart viib tagasi tervitusekraanile', async ({ page }) => {
  await page.getByTestId('start-btn').click();

  for (let i = 0; i < 5; i++) {
    await page.getByTestId('option-0').click();
    await page.getByTestId('next-btn').click();
  }

  await page.getByTestId('restart-btn').click();

  await expect(page.getByTestId('welcome-screen')).toBeVisible();
});