# Playwright Testing - Quick Reference

## Quick Start Commands

```bash
# Run all tests
npm test

# Run with browser visible
npm run test:headed

# Interactive UI mode
npm run test:ui

# View test report
npm run test:report
```

## Test File Template

```javascript
// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Your Test Suite', () => {
  
  test('your test description', async ({ page }) => {
    // Navigate to page
    await page.goto('https://www.swifttranslator.com/');
    
    // Interact with elements
    await page.getByRole('button', { name: 'Click me' }).click();
    
    // Make assertions
    await expect(page).toHaveTitle(/Expected Title/);
  });
  
});
```

## Common Playwright Commands

### Navigation
```javascript
await page.goto('https://www.swifttranslator.com/');
await page.goBack();
await page.goForward();
await page.reload();
```

### Finding Elements
```javascript
// By role (recommended)
page.getByRole('button', { name: 'Submit' })
page.getByRole('link', { name: 'Home' })

// By placeholder
page.getByPlaceholder('Enter email')

// By text
page.getByText('Welcome')

// By test ID
page.getByTestId('submit-button')

// By CSS selector
page.locator('.my-class')
```

### Interactions
```javascript
await element.click();
await element.fill('text to type');
await element.press('Enter');
await element.check(); // checkbox
await element.uncheck();
await element.selectOption('value');
```

### Assertions
```javascript
await expect(page).toHaveTitle(/Title/);
await expect(page).toHaveURL('https://www.swifttranslator.com/');
await expect(element).toBeVisible();
await expect(element).toHaveText('Expected text');
await expect(element).toHaveValue('value');
await expect(element).toHaveCount(5);
await expect(element).toHaveClass(/class-name/);
```

## Generate Tests Automatically

```bash
# Record your actions and generate test code
npx playwright codegen https://www.swifttranslator.com/
```

## Debugging

```bash
# Run in debug mode
npx playwright test --debug

# Run specific test file
npx playwright test tests/example.spec.js

# Run tests matching pattern
npx playwright test -g "search"
```

## VS Code Extension Features

1. **Run tests from sidebar** - Click play button next to any test
2. **Debug with breakpoints** - Set breakpoints and use debug button
3. **Pick locator** - Record locator for any element
4. **View test results** - See pass/fail status inline

---

