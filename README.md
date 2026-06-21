# ЦЕЛЬНОСТЬ — сайт клиники Юлии Огарковой

Премиальный лендинг для психологической клиники. Центр композиции — скульптурный 3D-объект из полупрозрачного оникса с латунным кольцом, вокруг — редакционная вёрстка.

## Запуск

```bash
npm install
npm run dev
```

Продакшен-сборка:

```bash
npm run build
npm run preview
```

## Структура

```
src/
  three/          — Canvas, HeroArtifact (оникс + латунь), освещение, постпроцессинг
  ui/             — Navbar, Hero, Manifesto, Botanical, Services, Specialists, Space, BookingForm, Footer, Preloader
  hooks/          — useScrollProgress, useReducedMotion, useIsMobile
  styles/         — Tailwind + CSS-переменные палитры
  content/texts.ts — все тексты и данные (одно место для редактирования)
```

## Настройка

### Цвета

CSS-переменные в `src/styles/index.css` (`:root`):

- `--ivory` — основной фон
- `--cream` — секции
- `--brass` — латунь, акцентные линии
- `--onyx-honey` — медовый оникс
- `--bronze` — тёмные акценты
- `--ink` — текст

### Тексты

Все тексты — в `src/content/texts.ts`. Названия, слоган, направления, специалисты.

### 3D-объект

Компонент `src/three/HeroArtifact.tsx`:
- Геометрия — параметрическая деформированная сфера (onyx stone)
- Материал — `MeshTransmissionMaterial` (цвет, прозрачность, преломление)
- Кольцо — `meshStandardMaterial` с металличностью 0.95
- Освещение — Lightformers (тёплые тона)

### HDRI

Для более реалистичного оникса можно заменить preset на кастомный `.hdr` файл в `public/` и передать `files` в `<Environment>`.

## Техстек

Vite + React + TypeScript, Tailwind CSS, Three.js + React Three Fiber + Drei, Postprocessing (Bloom, Vignette), Cormorant Garamond + Manrope.
