# Sources: Locking the vault means ending a process

Article: `src/content/articles/locking-ends-a-process.mdx`.

All paths are in github.com/sHyanorn/local-ledger at commit ae08641, except in the rows that start with "at 82caeac:", which are at that commit. `SD` is docs/SECURITY_DESIGN.md.

| Number or claim | Source |
|---|---|
| Page replaced on unlock, lock and committed password change; old renderer exits; separate processes per view | docs/DECISIONS.md:94-95 (D016) |
| Summary: the page's renderer ends on every lock, unlock and committed password change, and the process that holds the vault on every lock; tests check that they have exited | at 82caeac: SD:85, 91, 92, 93; docs/DECISIONS.md:96 (D016) |
| Opening: the renderer that took the typed password exits; the vault is opened and read in a utility process, the vault host, which every lock ends | at 82caeac: SD:85, 91, 99; docs/DECISIONS.md:95-96 (D016) |
| Lock replaces the page even when already locked | docs/DECISIONS.md:94 (D016); docs/SECURITY_DESIGN.md:42 |
| SQLite3 Multiple Ciphers, SQLCipher 4 format | docs/SECURITY_DESIGN.md:33 (`cipher=sqlcipher`, `legacy=4`) |
| Data key sealed under a key Argon2id derives from the master password | docs/SECURITY_DESIGN.md:26-27 |
| Strings immutable; password in input value, React state; V8 copies | docs/SECURITY_DESIGN.md:62 |
| Password as an argument sent over a port to the vault host | at 82caeac: SD:99; docs/DECISIONS.md:269 (D047) |
| Buffers zeroed after use | docs/SECURITY_DESIGN.md:53 |
| While unlocked the data key is only inside SQLite, in the vault host; copies the key derivation or SQLite make outside the buffers are not wiped and go when the host ends | at 82caeac: SD:89 |
| Argon2id 64 MiB, t = 3, p = 4; worker ends after each derivation | docs/DECISIONS.md:87 (D015); docs/SECURITY_DESIGN.md:54 |
| 321 ms derive; 281 ms main thread vs 7 ms in worker; Electron 45, 2.1 GHz Xeon, 4 cores | docs/DECISIONS.md:88 (D015) |
| Auto-lock 1, 5, 15 or 30 minutes, default 5, cannot be turned off; screen lock, sleep, window close | docs/SECURITY_DESIGN.md:43 |
| Helpers: the page's process ID, the vault host's process IDs, a poll until a process no longer exists | at 82caeac: tests/e2e/fixtures.ts:43 (`rendererPid`), 54 (`vaultHosts`), 79 (`expectExited`) |
| Renderer PID recorded before and awaited after, across the vault, import, transaction and memory tests, and the scenarios they cover | at 82caeac: tests/e2e/vault.spec.ts:63-67, 105-108, 119-123, 133-139, 159-170, 190-192, 328-335; tests/e2e/import.spec.ts:229-235; tests/e2e/transactions.spec.ts:252-258; tests/e2e/memory.spec.ts:199-205 |
| After a lock the suite waits for the host to exit and checks that the next page gets a new one | at 82caeac: tests/e2e/host.spec.ts:23, 27-29 |
| Heap snapshot test of the main process for transactions: control string, marker, waits for the host that read it to exit; control found, marker not reachable in the main process; cannot see Buffers or freed memory | at 82caeac: SD:93; tests/e2e/transactions.spec.ts:232-270; tests/e2e/fixtures.ts:197 |
| Memory test since 0.3.0: every process on Linux, Windows and macOS, read unlocked, after a lock and 30 s later; what it counts; when it fails, apart from two kinds of copy in the main process; macOS a lower bound | at 82caeac: SD:95, 103, 104; tests/e2e/memory.spec.ts is not in the tree of v0.2.1 |
| Memory test against 0.2.1, on Linux after a lock: 38 copies of the imported text, 36 of the 40 seeded descriptions, the master password, the sealing key and the second half of the data key in the main process; D047 records the finding and moves the vault into the host | at 82caeac: SD:95; docs/DECISIONS.md:269 (D047) |
| Freed memory not overwritten: a worker, the vault host or a renderer | at 82caeac: SD:100 |
| Password a string in the renderer that took it until it ends, and in the vault host after crossing its port until the next lock; decrypted rows strings in the host until garbage collection or until the host ends; a call under way at a lock keeps its data until it settles; a host still running one 30 s after the lock is killed | at 82caeac: SD:76, 99, 101; docs/DECISIONS.md:269 (D047) |
| 16 MB SQLite page cache in the vault host; secure memory option off | at 82caeac: SD:102 |
| The main process still receives some text: the page of a PDF export, whose text stays after a lock; copies of a typed description, from Chromium or the test driver | at 82caeac: SD:103, 104 |
| Swap and hibernation; pages not locked | docs/SECURITY_DESIGN.md:66 |
| Same-user malware out of scope; someone at the computer after the lock is in scope | docs/SECURITY_DESIGN.md:10, 15 |
| Failed password change keeps its page | docs/SECURITY_DESIGN.md:56; docs/DECISIONS.md:94 (D016) |
| Closing paragraph: after a lock, once the calls under way have settled, no process that opened the vault or showed its rows is running; what the tests check; the macOS read a lower bound; released memory not erased | at 82caeac: SD:76, 91, 93, 95, 100 |
| Update note: 0.3.0 moved the vault out of the main process into a utility process that every lock ends; link to D047 | at 82caeac: docs/DECISIONS.md:267-269 (D047); the version number from tag v0.3.0, commit 322a011: docs/TASKS.md:64-65, package.json:3. 322a011 changes only docs/TASKS.md, package.json and package-lock.json against its parent, 82caeac |
| Update note: the text of 2026-11-09 described 0.1.0 | the article's `date`; package.json:3 at ae08641, which changes only docs/TASKS.md against tag v0.1.0, commit 037e688 |
| Update note: dated 2026-11-22 | the day of this revision, UTC |
