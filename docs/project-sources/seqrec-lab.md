# Sources: seqrec-lab

Content: `src/content/projects/seqrec-lab.json`. Figures: `scripts/figures.ts`.

All paths are in github.com/sHyanorn/seqrec-lab at commit 45bf026, except in the rows that start with "at <commit>:", which are at that commit.

| Number or claim | Source |
|---|---|
| Summary: A pre-registered study of Transformer sequential recommenders, SASRec, BERT4Rec and gSASRec, with equal tuning … | README.md:3, 11; docs/SPEC.md:7, 26-33, 92; docs/METHODS.md:140, 218; docs/RESULTS.md:10, 18, 200 (ten and six leave-one-out seeds, five on the temporal split), 79-80, 257-258 (ahead of gSASRec and BERT4Rec, rejected), 83, 260, 108, 278 (minimum-effect test against SASRec-BCE); docs/DECISIONS.md:653-657 (D047, RTX 4090) |
| Summary: MovieLens-1M's test targets had been read for anchor checks before its final runs. | docs/METHODS.md:392; docs/RESULTS.md:23 |
| Tags: Python / PyTorch / Sequential recommendation / Pre-registration / Equivalence testing | pyproject.toml; docs/SPEC.md:45; docs/METHODS.md:1-3, 173-175 |
| Demo, first figure: mean test NDCG@10 per arm on leave-one-out, both datasets; ten and six seeds; baselines once; BERT4Rec's runs 0.1138 to 0.1695 | docs/RESULTS.md:18, 33, 41-47, 200, 220-226 |
| Demo, second figure: sampled softmax and gBCE against full cross-entropy, relative differences with 95% intervals; H2b's ±2%; equivalence not shown; underpowered on MovieLens-1M | docs/RESULTS.md:24, 103-106, 273-276; docs/SPEC.md:33 |
| Demo, third figure: seconds to the target, seeds 1 to 5; target 0.95 of SASRec-CE's mean best validation NDCG@10; one RTX 4090 with a Ryzen 9 7950X host per dataset; H2a supported on MovieLens-1M on this kind of host, not on Video_Games | docs/RESULTS.md:17, 110-120, 199, 280-291; docs/METHODS.md:238, 240, 293 |
| Words inside the figures: "Test NDCG@10, leave-one-out, mean over seeds" / "Against full cross-entropy, relative difference in test NDCG@10" / "±2%" / "Seconds of training to the target quality, seeds 1 to 5" / "5 of 5", "4 of 5", "1 of 5", "0 of 5 reach it" | as the three figures above |
| Metrics, note: log NDCG@10, relative differences, Welch intervals; Holm over the registered family size, pending and its reporting; one BERT4Rec seed and the underpowered label; anchor reads for four arms; Steam and MovieLens-20M | docs/METHODS.md:162, 170, 378-383; docs/RESULTS.md:7-8, 10, 18, 23-24, 32, 72, 200; docs/DECISIONS.md:338 (D033), 755-760 (D051) |
| Metrics, report link: Results | docs/RESULTS.md (the file's title) |
| Problem: BERT4Rec was reported to beat SASRec. Later work traced most of that gap to … | docs/SPEC.md:15-16 |
| Problem: seqrec-lab reimplements SASRec, BERT4Rec and gSASRec in plain PyTorch and compares five arms … | docs/SPEC.md:5-9, 26, 31, 45-48; docs/METHODS.md:3, 140, 166, 218; docs/DECISIONS.md:200-205 (D024) |
| Architecture, labels: datasets / models / tuning / rented GPU / final runs / test reads / export / registration / analysis | README.md:44-68; docs/SPEC.md:92; docs/METHODS.md:3, 135-141, 170-175, 218, 293, 394-404; docs/RESULTS.md:17, 199 |
| Architecture, description: `seqrec data prepare` downloads the four datasets, checks each file by SHA-256 … | README.md:44-68; src/seqrec/data/splits.py; src/seqrec/runner/tune.py; docs/METHODS.md:3, 135-141, 293, 394-404; docs/RESULTS.md:3, 17, 199 |
| Rule §7: A 2% effect, tested across runs | docs/METHODS.md:160-175, 210-220; docs/DECISIONS.md:100 (D010), 793 (D053), 907 (D062); docs/SPEC.md:16; docs/RESULTS.md:24, 205 |
| Rule §5: One tuning budget for every arm | docs/METHODS.md:107-115, 135-145; docs/DECISIONS.md:81, 86 (D009) |
| Rule §11: Test data read once | docs/METHODS.md:394-404; docs/RESULTS.md:19, 201 |
| Rule §3: Shuffled order as a control | docs/METHODS.md:50-53; docs/RESULTS.md:128-131, 298-300 |
| Limit: One seed set the power on MovieLens-1M | docs/RESULTS.md:24, 31-33; docs/DECISIONS.md:793 (D053), 811-812 (D055) |
| Limit: MovieLens-1M's test targets were read before | docs/METHODS.md:378-383, 392; docs/RESULTS.md:23; docs/DECISIONS.md:314, 319, 328-329 (D032), 338 (D033) |
| Limit: Times hold for one kind of host | docs/METHODS.md:293; docs/RESULTS.md:26, 120; docs/DECISIONS.md:731 (D048); docs/TASKS.md:70 |
| Summary: SASRec with full cross-entropy ahead of BERT4Rec and gSASRec and SASRec with BCE more than 2% below it on MovieLens-1M, Video_Games and Steam; MovieLens-20M has no results yet | at 9b4694d: README.md:3, 11-14, 62; docs/RESULTS.md:7, 10, 422-426 (rejected directional and minimum-effect tests on Steam); results/analysis/conclusions.csv (H1b, H2b BCE supported on steam) |
| Demo, objectives figure: Steam, sampled softmax −1.8% (−2.5% to −1.2%), gBCE −1.3% (−2.0% to −0.7%); intervals on Steam not wholly below −2%; equivalence not shown on any dataset | at 9b4694d: docs/RESULTS.md:448-449 (F2, Steam); results/analysis/tests.csv (primary, F2, steam: relative = exp(estimate) - 1, interval = exp(low) - 1 and exp(high) - 1) ; at 9b4694d: docs/RESULTS.md:448-452 (TOST not rejected for both, intervals -2.5% to -1.2% and -2.0% to -0.7%); README.md:18 |
| Demo, arms figure: Steam arms 0.0739, 0.0726, 0.0730, 0.0718, 0.0585, 0.0422, 0.0265; five seeds on Steam | at 9b4694d: docs/RESULTS.md:388-394 (leave-one-out, Steam); results/analysis/arms.csv (steam, loo, none: test_ndcg@10_mean) ; at 9b4694d: docs/RESULTS.md:368, 388-394 (five seeds per neural arm, floor baselines once); README.md:11 |
| Demo, time figure: Steam times to the target 0.0736 and H2a supported on Steam, with its own scale | at 9b4694d: docs/RESULTS.md:457-462; results/analysis/times.csv (steam rows, rounded to 0.1 s) ; at 9b4694d: docs/RESULTS.md:455-464 (target 0.0736, the group of seeds 1 to 5 on one Pod, H2a supported on this kind of host); README.md:17 |
| Metric: +34.3%, +39.7%, +26.5% / SASRec-CE over SASRec-BCE; minimum-effect tests on all three datasets | at 9b4694d: README.md:3, 12, 19; docs/RESULTS.md:422, 428; results/analysis/tests.csv (F1 and F1-ME, steam, sasrec-ce vs sasrec-bce: +26.46%) |
| Metric: +19.5%, +22.8%, +2.9% / SASRec-CE over BERT4Rec; reversed on Steam | at 9b4694d: README.md:13, 23; docs/RESULTS.md:426, 436, 441 (G3 reversed on Steam, p = 4.4e-05); results/analysis/conclusions.csv (G3, steam: reversed) |
| Metric: −1.3% to −8.0% / sampled softmax and gBCE against full cross-entropy; equivalence not shown on any dataset | at 9b4694d: README.md:14, 18; docs/RESULTS.md:448-452; results/analysis/tests.csv (F2, steam) |
| Metric: 223 / final runs, each reading the test data once; 81.9 GPU hours; 300 tuning runs read it zero times | at 9b4694d: README.md:11; docs/RESULTS.md:17, 19, 200, 202, 367, 369 (99 + 65 + 59 = 223 final runs; 2.88 + 28.50 + 50.56 = 81.94 GPU hours; 100 + 100 + 100 = 300 tuning runs, computed) |
| Metrics note: five seeds on Steam; MovieLens-20M has no results yet | at 9b4694d: docs/RESULTS.md:7-8, 10, 368 (five seeds on Steam); README.md:62 |
| Metrics, report link: Results, at its current commit | at 9b4694d: docs/RESULTS.md (the file the link points to now holds the Steam section) |
| Problem: on the three datasets with results, H1a, H1b, H2a and H2b as RESULTS gives them | at 9b4694d: README.md:15-19, 22; docs/RESULTS.md:11 (H1b supported on 2, pending on 2), 436-437, 451-453, 464; results/analysis/conclusions.csv |
| Problem: MovieLens-1M, Video_Games and Steam have final runs and confirmatory analysis; MovieLens-20M has none | at 9b4694d: README.md:3, 62; docs/RESULTS.md:7, 10 |
| Rule §7: five seeds on Steam | at 9b4694d: docs/DECISIONS.md:967-975 (D067: pooled sigma 0.00265, METHODS 7.5 gives n = 5); docs/RESULTS.md:368, 380 |
| Rule §11: each of the 223 final runs read its test data once | at 9b4694d: docs/RESULTS.md:19, 202, 369 (every run read test data once: 99, 65 and 59 runs); docs/DECISIONS.md:990 (D069, test reads) |
| Rule §3: the unshuffled SASRec-CE is ahead by 75.4% on Steam | at 9b4694d: docs/RESULTS.md:473-475 (F4, +75.4%, rejected; BERT4Rec control registered on the two MovieLens datasets only); results/analysis/tests.csv (F4, steam) |
| Limit: on Steam the test of H2a against SASRec-BCE rests on five runs that never reached the target | at 9b4694d: README.md:17; docs/RESULTS.md:460, 465; results/analysis/times.csv (steam, sasrec-bce, seeds 1 to 5: inf) |
