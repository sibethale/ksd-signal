# KSD // Signal — Native (Health Connect) build

The app is still the same single-file PWA (`index.html`). This adds a **Capacitor Android
shell** so the tracker uplink can read **Google Health Connect** on-device data
(steps, exercise, sleep) — the successor to the retiring Fitbit Web API.

- In a browser / hosted PWA → the tracker layer falls back to the **Fitbit Web API** (unchanged).
- In the installed Android app → it uses **Health Connect** via `@kiwi-health/capacitor-health-connect`.

The web app writes the same day fields either way: `fbMove` (active minutes), `steps`, `sleepMin`.

## Prerequisites
- Node 18+ and npm (already present)
- Android Studio (Giraffe+), a JDK 17, and the Android SDK (compileSdk 34)
- A device/emulator with the **Health Connect** app installed (Play Store)

## One-time setup
```bash
cd ksd-signal
npm install
npm run sync:web           # copies index.html + PWA assets into www/
npx cap add android        # scaffolds android/ (only needed once)
npm run cap:android        # sync + open Android Studio
```

## Required Android edits (after `cap add android`)
Health Connect refuses to work without these. Most are applied by `npm run cap:android`
via the snippets in `native/`, but verify them in `android/`:

1. **`android/variables.gradle`** → `minSdkVersion = 26` (Health Connect needs 26+),
   `compileSdkVersion = 34`, `targetSdkVersion = 34`.

2. **`android/app/src/main/AndroidManifest.xml`** — add inside `<manifest>`:
   ```xml
   <uses-permission android:name="android.permission.health.READ_STEPS"/>
   <uses-permission android:name="android.permission.health.READ_EXERCISE"/>
   <uses-permission android:name="android.permission.health.READ_SLEEP"/>

   <queries>
     <package android:name="com.google.android.apps.healthdata"/>
   </queries>
   ```
   and inside `<application>` → the `.MainActivity` `<activity>` add the privacy-policy
   intent filters (Health Connect **requires** a reachable rationale screen):
   ```xml
   <!-- Android 14+ -->
   <intent-filter>
     <action android:name="android.intent.action.VIEW_PERMISSION_USAGE"/>
     <category android:name="android.intent.category.HEALTH_PERMISSIONS"/>
   </intent-filter>
   <!-- Android 13 and below -->
   <intent-filter>
     <action android:name="androidx.health.ACTION_SHOW_PERMISSIONS_RATIONALE"/>
   </intent-filter>
   ```
   Ready-to-paste copies live in `native/AndroidManifest.additions.xml`.

## Play Store
Reading Health Connect data requires a Health Connect **data-types declaration form**
and a published **privacy policy** URL. Declare only: Steps, Exercise, Sleep (read-only).

## How the code is wired
- `trackerMode()` in `index.html` returns `healthconnect` when running inside Capacitor
  with the plugin present, otherwise `fitbit`.
- `hcSync()` reads Steps / ExerciseSession / SleepSession for today + yesterday and writes
  `fbMove` / `steps` / `sleepMin` — the exact fields the rest of the app already consumes.
- Active minutes = summed ExerciseSession durations. Sleep = summed asleep-stage minutes
  (falls back to full session length when a source reports no stages).
