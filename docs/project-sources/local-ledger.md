# Sources: local-ledger

Content: `src/content/projects/local-ledger.json`.

All paths are in github.com/sHyanorn/local-ledger at commit 4c28d63, except in the rows marked 49a0b6a, which are at commit 49a0b6a, and in the rows that start with "at 82caeac:", which are at that commit. `SD` is docs/SECURITY_DESIGN.md.

| Number or claim | Source |
|---|---|
| Desktop app for macOS and Windows; everything on the computer, encrypted; no network requests | README.md:3 |
| Import, rules, budgets, charts, Excel or PDF export; one master password; no recovery | README.md:3, 18-22 |
| No cloud sync, no bank connection | docs/SPEC.md:45-46 |
| Specification: encryption, Argon2id, hardening, typed IPC, auto-lock, four bank templates and a wizard, fuzzy duplicates, rules, budgets with alerts, charts, export, encrypted backup, dark mode | docs/SPEC.md:11-14, 20-35 |
| Specification tests: no Node.js in the renderer, invalid IPC rejected, plain SQLite cannot open, unreadable after locking | docs/SPEC.md:102-103 |
| Exports and imported CSV files unencrypted | README.md:22, 59; docs/SECURITY_DESIGN.md:18 |
| Malware as the same user: memory while unlocked, password at the next unlock | docs/SECURITY_DESIGN.md:15 |
| Unsigned releases warn at first launch; trust rests on the checksum and attestation check | README.md:29; docs/SECURITY_DESIGN.md:148 |
| Demo: three screenshots from the repository, each in the light and dark theme, made-up data | docs/screenshots/overview-light.png, transactions-light.png, reports-light.png and their -dark copies; README.md:5-14 |
| Overview alt text: November 2026, income $3,850.00, spending $3,898.72, Dining Out and Coffee over budget, five recent transactions, four accounts | docs/screenshots/overview-light.png |
| Transactions alt text and caption: search, category and period filters, 1,496 transactions, the most recent on 10 November 2026 and first | docs/screenshots/transactions-light.png; docs/SPEC.md:31; src/main/ledger/transactions.ts:91 |
| 0 network requests; net log read by the e2e suite and the package check | README.md:3; docs/DECISIONS.md:49 (D009) |
| 321 ms; Argon2id 64 MiB, t=3, p=4; worker thread | docs/DECISIONS.md:87-88 (D015) |
| 7 ms in the worker against 281 ms on the main thread | docs/DECISIONS.md:88 (D015) |
| Electron 45, 2.1 GHz Xeon, 4 cores | docs/DECISIONS.md:88 (D015) |
| At least 15 characters; NIST SP 800-63B-4; no attempt limit; Argon2id cost does the work | docs/DECISIONS.md:81-82 (D014) |
| Diagram: sandboxed page, no Node.js, `app://local-ledger`, CSP | docs/SECURITY_DESIGN.md:127; docs/SPEC.md:51-54 |
| Diagram: typed `window.ledger` API from preload; calls over a port of its own to the vault host, which validates every payload with zod; the main process takes two requests from the pages, a port and a lock | at 82caeac: docs/SPEC.md:53, 55, 67; SD:85, 147 |
| Diagram: in the vault host, Argon2id in a worker unseals the data key in `vault.json`; `ledger-<generation>.db` encrypted page by page | at 82caeac: SD:26-27, 32-33, 75, 85, 90 |
| Every page encrypted by SQLite3 Multiple Ciphers in the SQLCipher 4 format | docs/SECURITY_DESIGN.md:29, 33 (`cipher=sqlcipher`, `legacy=4`); package.json:33 |
| Diagram: import, export and backups run in the vault host; a CSV file comes in through the open dialog the main process shows, or dropped on the window; export only where the save dialog picks, not encrypted; backup is the encrypted database with a sealed header | at 82caeac: SD:85, 121, 128, 136; docs/DECISIONS.md:269 (D047) |
| Diagram: the main process keeps the windows, shows the dialogs, prints PDFs and handles the lock, which ends the host and the page's process | at 82caeac: SD:76, 85; docs/DECISIONS.md:269 (D047) |
| Diagram labels: vault host, port handlers, zod checks, port; the host holds the vault, database, import, export, rules and backups | at 82caeac: docs/SPEC.md:55-63, 67; SD:85, 147 |
| Diagram paths | src/renderer, src/preload, src/main, src/main/vault, src/main/import |
| D013: 32-byte data key sealed with AES-256-GCM; header binds generation and settings | docs/DECISIONS.md:71 |
| D013: wrong password fails before the database is touched | docs/DECISIONS.md:76 |
| D013: new key, copy re-encrypted, checked, next generation; `vault.json` rename the single commit point | docs/DECISIONS.md:73; docs/SECURITY_DESIGN.md:78 |
| D013: 20,000 rows in 7 ms | docs/DECISIONS.md:77 |
| D016: new view on unlock, lock and committed change; old renderer exits; strings and DOM; lock while locked; e2e asserts the exit | docs/DECISIONS.md:94-95 |
| D047: title; every lock ends the vault host, the utility process that holds the vault, its database, imports and exports; what it held goes with it; a process ending releases memory, it does not overwrite | at 82caeac: docs/DECISIONS.md:267, 269; SD:85, 100 |
| D047: in 0.2.1 the main process held the vault; after a lock the memory test found there at least the imported text and half of the data key on Linux, Windows and macOS, and on Linux also the master password and the sealing key; macOS counts are a lower bound | at 82caeac: docs/DECISIONS.md:269, 272; SD:95 |
| D047: after a lock the main process still holds the page of a PDF export and copies of typed text, none of the master password; the host keeps data for at most 30 s while calls under way settle | at 82caeac: docs/DECISIONS.md:270; SD:76, 101, 103, 104 |
| Decision log link: D009, D013, D014, D015, D016, D025, D027 word for word as at 49a0b6a; D047 added | at 82caeac: docs/DECISIONS.md (diff against 49a0b6a), D047 at 267-272 |
| D025: fingerprint of date, amount, description and occurrence, per account, YNAB's `import_id`; possible duplicates within 4 days, unselected; batch, undo | docs/DECISIONS.md:146 |
| D027: transfers in two accounts; same currency, opposite amounts, 4 days; automatic pairing rules; groups wait; a Transfer category breaks silently | docs/DECISIONS.md:155-156 |
| D046: an import pairs a candidate only when its descriptions show a transfer, one naming the other account or both using a transfer word; any other candidate waits | 49a0b6a: docs/DECISIONS.md:262 (D046) |
| D009: `app://local-ledger`, GET only, no path outside the build; CSP on every response | docs/DECISIONS.md:48 |
| D009: windows, navigation, redirects, webviews, permissions refused; spellcheck dictionary download; net log | docs/DECISIONS.md:49 |
| Bank formats: no published columns; open-source parsers where two agree; sample files; accepted variations; not checked against real exports | docs/DECISIONS.md:140; README.md:50 |
| Bank formats: column wizard; `npm run csv:shape` | README.md:50, 52; docs/DECISIONS.md:142 |
| Preview: 50,000-row limit | docs/SECURITY_DESIGN.md:105 |
| Preview: rows in view and twenty each side; 35 px rows; memoized; 4 s to 0.2 s, 1 s to 15 ms; react-window and `content-visibility` | docs/DECISIONS.md:198-199 (D035) |
| Formulas: own writer with fflate; inline strings, no formula element; Text format; quote prefix by OWASP | docs/DECISIONS.md:169 (D030) |
| Formulas: LibreOffice checked, Excel and Numbers not tried; exceljs 193 packages; npm `xlsx` no longer updated there | docs/DECISIONS.md:170-171 (D030) |
