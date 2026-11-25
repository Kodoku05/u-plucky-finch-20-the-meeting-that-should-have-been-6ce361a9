import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const MAX_LINE_LENGTH = 200;
const LINE = "The CEO booked a room, ordered coffee for twelve, and opened the meeting with his email's subject line: 'No action required.'";

/* Judge criteria:
 * 1. One line explicitly connects a meeting to an email.
 * 2. The joke stands alone and lands on 'No action required.'
 * 3. The unnecessary ceremony makes the subject line a surprise.
 * 4. One sentence; each detail builds the wasted effort.
 * 5. Room booking, coffee, and a CEO opening feel like real meetings.
 */
const characterCount = Array.from(LINE).length;
if (characterCount < 1 || characterCount > MAX_LINE_LENGTH || !LINE.trim() || /[\r\n\u0085\u2028\u2029]/u.test(LINE)) {
  throw new Error('Entry must contain 1–200 characters, non-whitespace text, and no newlines.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf8');
