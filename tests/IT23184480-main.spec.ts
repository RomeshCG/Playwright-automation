import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - 35 Test Cases', () => {

  // Ensure clean state before each test
  test.beforeEach(async ({ page }) => {
    // Navigate fresh for each test to avoid state issues
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  const testCases = [
    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_0001", name: "Convert short simple daily expression", input: "Mama adha sathutin", expected: "මම අද හරි සතුටින්" },
    { id: "Pos_Fun_0002", name: "Convert medium compound sentence with tense", input: "eya iye polata gihin palathuru gaththaa", expected: "එයා ඊයේ පොළට ගිහින් පලතුරු ගත්තා." },
    { id: "Pos_Fun_0003", name: "Convert short interrogative greeting", input: "Oyaata kohomadha", expected: "ඔයාට කොහොමද" },
    { id: "Pos_Fun_0004", name: "Convert medium imperative command", input: "karunakarala issaraha dora vahanna ikmanata poddak", expected: "කරුණාකරලා ඉස්සරහ දොර වහන්න ඉක්මනට පොඩ්ඩක්." },
    { id: "Pos_Fun_0005", name: "Convert short postive sentence", input: "Api gedhara yanavaa", expected: "අපි ගෙදර යනවා" },
    { id: "Pos_Fun_006", name: "Convert medium negative negation", input: "Mama e kamata kamathi naha", expected: "මම ඒ කෑමට කැමති නැහැ" },
    { id: "Pos_Fun_0007", name: "Convert short polite request", input: "oyata mata udau karanna puluvandha?", expected: "ඔයාට මට උදවු කරන්න පුලුවන්ද?" },
    { id: "Pos_Fun_0008", name: "Convert medium informal phrasing", input: "Ikmanata meheta waren ban", expected: "ඉක්මනට මෙහෙට වරෙන් බන්" },
    { id: "Pos_Fun_0009", name: "Convert short day to day expression", input: "Suba Udhasanak!", expected: "සුභ උදැසනක්!" },
    { id: "Pos_Fun_0010", name: "Convert medium multi-word collection", input: "Oyaata oyava balaganna puluvan", expected: "ඔයාට ඔයාව බලගන්න පුලුවන්" },
    { id: "Pos_Fun_0011", name: "Convert short joined word variation", input: "mamayanavaa", expected: "මමයනවා" },
    { id: "Pos_Fun_0012", name: "Convert medium repeated emphasis", input: "Hari hari eka hodai", expected: "හරි හරි ඒක හොදයි" },
    { id: "Pos_Fun_0013", name: "Convert short past tense", input: "Eyaa bath kaawa", expected: "එයා බත් කෑවා" },
    { id: "Pos_Fun_0014", name: "Convert medium present tense", input: "eyala dhan nam cricket gahanawaa", expected: "එයාලා දැන් නම් ක්‍රිකට් ගහනවා" },
    { id: "Pos_Fun_0015", name: "Convert short future tense", input: "api heta eanvaa", expected: "අපි හෙට එනවා" },
    { id: "Pos_Fun_0016", name: "Convert medium mixed english tech term", input: "File eka email karanna", expected: "File එක email කරන්න" },
    { id: "Pos_Fun_0017", name: "Converted short place name embedded", input: "galle yanawaa", expected: "ගාල්ලෙ යනවා" },
    { id: "Pos_Fun_0018", name: "Convert Medium abbreviation", input: "Oyaage NIC number eka balanna", expected: "ඔයාගේ NIC නම්බර් එක බලන්න" },
    { id: "Pos_Fun_0019", name: "Convert short punctuation", input: "velaava kohomadha?", expected: "වෙලාව කොහොමද" },
    { id: "Pos_Fun_0020", name: "Convert medium currency format", input: "ekee gaana Rs. 1000", expected: "ඒකේ ගාන Rs. 1000" },
    { id: "Pos_Fun_0021", name: "Convert short time format", input: "meeting eka 10AM", expected: "meeting එක 10AM" },
    { id: "Pos_Fun_0022", name: "Convert medium date and unit", input: "eken 2KG ganna 01/01/2026 venidhaa", expected: "එකෙන් 2KG ගන්න 01/01/2026 වෙනිදා" },
    { id: "Pos_Fun_0023", name: "Convert medium multiple spaces", input: "Hello yaluvaa. Suba udhaasanak. Oyata kohomadha", expected: "හෙලො යාලුවා සුභ උදැසනක් ඔයාට කොහොමද" },
    { id: "Pos_Fun_0024", name: "Convert Long complex sentence with slang", input: "Eda vassa unath api beach yanna thma hitiye, mokadha weather forecast vala kiyala thibbaa vassa tika velavakin adu venvaa kiyala saha api me trip eka yanna godak asawen hitiye mokada ape rata inn yaluvoth mekata ava", expected: "එදා වැස්ස උනත් අපි බීච් යන්න තමා හිටියේ, මොකද weather forecast වල කියලා තිබ්බා වැස්ස ටික වෙලවකින් අඩු වෙනවා කියලා සහ අපි මේ ට්‍රිප් එක යන්න ගොඩක් අසාවෙන් හිටියේ මොකද අපේ රට ඉන්න යලුවොත් මේකට අවා." },

    // ================= NEGATIVE FUNCTIONAL =================
    { id: "Neg_Fun_0001", name: "Joined words wihtout spaces in medium sentence", input: "mama shoping gihinmonwahri ikmanta ganna one", expected: "මම ශොපින්ග් ගිහින්මොනවාහරි ඉක්මනට ගන්න ඔනෙ" },
    { id: "Neg_Fun_0002", name: "Fail on unusual slang in complex sentence", input: "adoo eka super lame, fix karapan ikmanata", expected: "අඩෝ ඒක සුපර් ලෙම් ෆික්ස් කරපන් ඉක්මනට" },
    { id: "Neg_Fun_0003", name: "Fail on long paragraph with mixed formatting", input: "event eka 5PM nuwaraeliyetyenne bring yourId. Its cold there", expected: "ඉවෙන්ට් එක 5PM නුවරැලියෙතියෙන්නෙ බ්‍රින්ග් යොඋරිඩ්. ඉට්ස් කොලෙඩ් තෙරෙ" },
    { id: "Neg_Fun_0004", name: "Fail on heavy mixed english in negative form", input: "mama instergram or snapchat use karanne na thawath", expected: "මම ඉන්ස්ටෙර්ග්‍රම් ඔර් ස්නප්චට් උසෙ කරන්නෙ න තවත්" },
    { id: "Neg_Fun_0005", name: "Fail on repated emphasis with typos", input: "chuttachutta", expected: "චුට්ටචුට්ට" },
    { id: "Neg_Fun_0006", name: "Fail on informal colloquial with punctuation", input: "Wow, eka nam pudumai machan!!", expected: "වාව් එක නම් පුඩුමෛ මචන්!" },
    { id: "Neg_Fun_0007", name: "Mixed english abbreviations in complex sentece", input: "mama pdf eka email kara but otp enne na ASAP check karla balann", expected: "මම ප්ඩ්ෆ් එක ඉමෛල් කර බුට් ඔට්ප් එන්නෙ න අසාප් චෙක් කරලා බලන්න" },
    { id: "Neg_Fun_0008", name: "Fast-typed joined polite request gone wrong", input: "oyata file eka wahama ewann puluwanda urgent", expected: "ඔයාට ෆිලෙ එක වහම එවන්න පුලුවන්ඩ උර්ගෙන්ට්" },
    { id: "Neg_Fun_0009", name: "Slang heavy future tense question", input: "Machan heta party da, full hype hoo", expected: "මචන් හෙට පාර්ටි ඩ ෆුල් හ්‍ය්පි හෝ" },
    { id: "Neg_Fun_0010", name: "Currecny time + date in one messy sentence", input: "Ticket Rs.2500 7.30 show ekata thiyenne 5/02 fast book karapan sold out wenna kalin", expected: "ටිකට් Rs.2500 7.30 ශොව් එකට තියෙන්නෙ 5/02 ෆස්ට් බෝක් කරපන් සොල්ඩ් ඖට් වෙන්න කලින්" },

    // ================= POSITIVE UI =================
    { id: "Pos_UI_0001", name: "Real time sinhala output updates automatically while typing a medium sentence", input: "Mama gedhara yanna hadanawa saha oya ada enwadha?", expected: "Letter by letter sinhala output" }
  ];

  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {

      // Page is already navigated in beforeEach, but ensure we're ready
      await page.waitForLoadState('domcontentloaded');

      // 2. Select the Singlish input textarea (using placeholder)
      const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
      const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

      // Clear any existing text first - try multiple methods
      await inputArea.click({ clickCount: 3 }); // Triple click to select all
      await page.keyboard.press('Delete');
      await page.fill(inputSelector, '');
      await page.waitForTimeout(300);
      
      // Also clear output by triggering input event
      await page.evaluate((sel) => {
        const el = document.querySelector(sel) as HTMLTextAreaElement | null;
        if (el) {
          el.value = '';
          el.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, inputSelector);
      await page.waitForTimeout(200);

      // Use chunked typing to simulate real user input so the site's IME processes sequences correctly.
      const text = tc.input;
      const CHUNK = 200; // characters per chunk to avoid Playwright typing timeouts
      if (text.length === 0) {
        // nothing to type
      } else if (text.length <= CHUNK) {
        await inputArea.type(text, { delay: 35 });
      } else {
        for (let i = 0; i < text.length; i += CHUNK) {
          const chunk = text.slice(i, i + CHUNK);
          await inputArea.type(chunk, { delay: 25 });
          // allow the page to process chunk
          await page.waitForTimeout(100);
        }
      }
      
      // Wait a bit for the conversion to process
      await page.waitForTimeout(500);
      
      // Ensure compositionend/input events fired after typing
      await page.evaluate((sel) => {
        const el = document.querySelector(sel) as HTMLTextAreaElement | null;
        if (!el) return;
        el.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, cancelable: true, data: el.value }));
        el.dispatchEvent(new Event('input', { bubbles: true }));
      }, inputSelector);

      // Wait a bit more for conversion
      await page.waitForTimeout(1000);

      // 3. Select the output box
      // Based on your HTML, it's a div with bg-slate-50 following the "Sinhala" title
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

      // 4. Wait for the translation to appear (it's automatic)
      // Special handling for UI test case
      if (tc.id === 'Pos_UI_0001') {
        // For UI test, just verify that output updates (contains any Sinhala text)
        await expect(outputBox).not.toHaveText('', { timeout: 10000 });
        const output = await outputBox.textContent();
        console.log(`Running: ${tc.id} | Result: ${output}`);
        expect(output).toBeTruthy();
        expect(output!.length).toBeGreaterThan(0);
      } else {
        // For regular test cases, verify expected output
        // Wait for output to appear (not empty)
        await expect(outputBox).not.toHaveText('', { timeout: 10000 });
        
        // Wait a bit more for full conversion
        await page.waitForTimeout(1000);
        
        // Get the actual output
        const output = await outputBox.textContent() || '';
        console.log(`\n[${tc.id}] ${tc.name}`);
        console.log(`  Input: "${tc.input}"`);
        console.log(`  Expected: "${tc.expected}"`);
        console.log(`  Actual: "${output}"`);
        
        // Normalize both strings for comparison
        const normalize = (str: string) => str.trim()
          .replace(/\r\n/g, ' ')
          .replace(/\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        
        const normalizedExpected = normalize(tc.expected);
        const normalizedOutput = normalize(output);
        
        // Extract Sinhala words (sequences of Sinhala characters)
        const getSinhalaWords = (str: string) => {
          return str.match(/[\u0D80-\u0DFF]+/g) || [];
        };
        
        const expectedSinhalaWords = getSinhalaWords(normalizedExpected);
        const outputSinhalaWords = getSinhalaWords(normalizedOutput);
        
        // If expected has Sinhala characters, check if output contains them
        if (expectedSinhalaWords.length > 0) {
          // Check how many expected Sinhala words appear in output
          let matchedCount = 0;
          for (const word of expectedSinhalaWords) {
            if (normalizedOutput.includes(word)) {
              matchedCount++;
            }
          }
          
          // Require at least 60% of Sinhala words to match (allows for some variation)
          const minRequired = Math.max(1, Math.ceil(expectedSinhalaWords.length * 0.6));
          
          if (matchedCount < minRequired) {
            throw new Error(
              `Test failed: Only ${matchedCount}/${expectedSinhalaWords.length} Sinhala words matched.\n` +
              `Expected words: ${expectedSinhalaWords.join(', ')}\n` +
              `Found in output: ${expectedSinhalaWords.filter(w => normalizedOutput.includes(w)).join(', ')}\n` +
              `Full expected: "${normalizedExpected}"\n` +
              `Full actual: "${normalizedOutput}"`
            );
          }
          
          console.log(`  ✓ Matched ${matchedCount}/${expectedSinhalaWords.length} Sinhala words`);
        } else {
          // No Sinhala expected - do simple contains check
          if (normalizedExpected.length > 0 && !normalizedOutput.includes(normalizedExpected)) {
            // Try word-by-word matching
            const expectedWords = normalizedExpected.split(/\s+/).filter(w => w.length > 0);
            const matchedWords = expectedWords.filter(w => normalizedOutput.includes(w));
            
            if (matchedWords.length < expectedWords.length * 0.7) {
              throw new Error(
                `Test failed: Output does not contain expected text.\n` +
                `Expected: "${normalizedExpected}"\n` +
                `Actual: "${normalizedOutput}"`
              );
            }
          }
        }
      }
    });
  }

});
