# Twitch TTS Channel Reward
This project is powered by [Twitch EventSub API `beta`](https://dev.twitch.tv/docs/eventsub/handling-websocket-events/), and [Svelte/Kit](https://kit.svelte.dev/docs/introduction).

## About the Project
Enhance viewer engagement on Twitch streams by providing an interactive way to playback a text-to-speech message **LIVE** on stream by redeeming their channel points.

## Getting Started

**1. Clone the repository and install dependencies**

```bash
git clone https://github.com/asheikho99/twitch-tts-channel-reward.git
cd twitch-tts-channel-reward
npm install
```

**2. Register a Twitch application**<br>
Visit [Twitch Developer Console](https://dev.twitch.tv/console) then register a `Chat Bot` application. Make sure that OAuth Redirect URLs is set to `http://localhost:3000` as this application is design to run on host machine and not a remote server

**3. Configure your local environment**
- CLIENT_ID: found when you created your application
- CHANNEL_ID: broadcaster id
- USER_ACCESS_TOKEN: requires a user access token with the following permissions `channel:read:redemptions` and `channel:manage:redemptions`. A user acess token can be generated using the [TwitchCLI](https://dev.twitch.tv/docs/cli/)

```bash
VITE_CLIENT_ID=*****
VITE_CHANNEL_ID=******
VITE_USER_ACCESS_TOKEN=*******
```

**4. Once you've created a project and installed dependencies with npm install, start a development server**
```bash
npm run dev -- --open
```

**or Open [http://localhost:3000](http://localhost:5173) with your browser to see the result.**

## Supported Languages
- Arabic
- English

## Roadmap
- [x] Use Twtich EventSub `beta` API
- [x] Websocket events handlers
- [x] Generate Text-to-Speech messages
- [x] Show message on the frontend to be used on OBS
- [ ] Auto refresh user access token
- [ ] Paused Queue indicator on frontend
- [ ] Messages visbility transition (fade in/fade out)

## Building

To create a production version of your app:

```bash
npm run build
```
You can preview the production build with `npm run preview`.
> This application is design to run on host machine and not a remote server
