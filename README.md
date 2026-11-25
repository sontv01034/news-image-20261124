# 24 November 2026 in one image

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/sontv01034/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/sontv01034/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of Tuesday, 24 November 2026, built for the make.fun bounty of the same name.

## The day, in six stories

- **Fourteen nations back ICJ ruling** — The UK, Spain, Canada, Australia and ten others affirm the International Court of Justice's ruling that Myanmar committed genocide against the Rohingya; the UK also imposes new sanctions on senior military figures.
- **Pakistan joins China's station** — Shenzhou-24 launches and docks at Tiangong, carrying Pakistani astronaut Zeeshan Ali, the first foreign guest ever aboard the Chinese space station.
- **Trump's new tariff wave** — The US readies tariffs on China, the EU and fourteen other trading partners over subsidised production, according to AP sources.
- **Cartagena hostages freed** — Armed men seized a supermarket in the tourist city of Cartagena; Colombian forces stormed in and every hostage was rescued.
- **Houthis hit Riyadh again** — A second Houthi strike on the Saudi capital in a week wounds at least eleven people.
- **Strike kills two in Ukraine** — A Russian strike kills two and wounds 48, as Kyiv explains its attack on Russian ships in Libya.

Also: Nasdaq +6.5% and the S&P 500 +4.7% in a broad rally; a 5.6-magnitude quake shakes Nepal near the China border; North Korea orders the Swiss envoy out; Pope Francis's diary tells of visions of the gates of hell.

## How the image is made

`entry.png` (1024×1024) is drawn programmatically with Python and Pillow — a light broadsheet front page with one card per story, so every word stays legible even at small sizes. No AI image generation was used for the text.

`main.ts` is the entrypoint: it copies `entry.png` to the output directory the grader provides.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

Reuters, AP and AFP reporting from 24 November 2026.
