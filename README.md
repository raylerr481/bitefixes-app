# BiteFixes App

Mobile application for accessing **BiteFixes and Bitey from phones**. This repository is a client/channel, not a second AI brain.

## Architecture

```text
Mobile user
    ↓
bitefixes-app (Expo / mobile UI)
    ↓
Bitey Backend / Bitey IA
    ↓
Company AI Profile + authorized context
    ↓
knowledge / memory / intelligent web research / workflows
    ↓
external AI collaboration when needed
    ↓
response
```

The backend is the authoritative source for Bitey's intelligence, company context, conversation state, memory, research, services, workflows and tenant authorization.

The app is responsible for mobile presentation, authentication/session transport, conversation UI, permitted attachments and channel-specific UX. It must not contain provider secrets, cross-tenant knowledge, or a parallel reasoning engine.

## Relationship to the platform

- `bitefixes-backend` — Bitey IA and intelligence core.
- `bitey-ai` — WordPress channel.
- `bitey-web` — public web facade for a ChatGPT-like Bitey experience.
- `bitefixes-app` — this mobile channel.

## Development

This project uses Expo.

```bash
npm install
npx expo start
```

The app should be tested against the same backend contracts used by the other authorized channels so that Bitey behaves consistently across web, WordPress and mobile.
