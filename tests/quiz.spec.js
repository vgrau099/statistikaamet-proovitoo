import { test, expect } from '@playwright/test';

async function valiVastus(page, strateegia = 'õige') {
  const valikud = page.locator('.option-btn');
  if (strateegia === 'õige') {
    await valikud.first().click();
  } else {
    await valikud.last().click();
  }
}

test('1. rakendus avaneb ja näitab tervitust', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText(/viktorii/i)).toBeVisible();
});

test('2. alustamine viib viktoriinile', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button').click(); // start button
  await expect(page.locator('.option-btn').first()).toBeVisible();
});

test('3. vastamine kuvab tagasisidet', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button').click();

  await page.locator('.option-btn').first().click();

  await expect(page.getByTestId('feedback-box')).toBeVisible();
});

test('4. õige vastus suurendab skoori', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button').click();

  const score = page.getByTestId('score-display');

  await expect(score).toContainText('0');

  // valime esimese variandi (õige vastus sinu andmetes on indeks 0)
  await page.locator('.option-btn').first().click();

  await expect(score).toContainText('1');
});

test('5. vale vastus ei suurenda skoori', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button').click();

  const score = page.getByTestId('score-display');

  await expect(score).toContainText('0');

  // viimane variant = vale
  await page.locator('.option-btn').last().click();

  await expect(score).toContainText('0');
  await expect(page.getByTestId('feedback-box')).toContainText(/vale/i);
});

test('6. kogu viktoriini läbimine', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button').click();

  const questionsCount = 5;

  for (let i = 0; i < questionsCount; i++) {
    await expect(page.getByTestId('question-text')).toBeVisible();

    await page.locator('.option-btn').first().click();
    await page.getByTestId('next-btn').click();
  }

  await expect(page.getByTestId('results-screen')).toBeVisible();
  await expect(page.getByTestId('final-score')).toBeVisible();
  await expect(page.getByTestId('results-table')).toBeVisible();
});

test('7. restart viib tagasi algusesse', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button').click();

  for (let i = 0; i < 5; i++) {
    await page.locator('.option-btn').first().click();
    await page.getByTestId('next-btn').click();
  }

  await page.getByTestId('restart-btn').click();

  await expect(page.getByText(/tervit/i)).toBeVisible();
});