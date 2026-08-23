# BiteFixes App

**BiteFixes App** is the mobile extension of **BiteFixes.com**. It gives customers and authorized users a native mobile channel for the same BiteFixes enterprise AI experience available through the website and other supported channels.

It is a client/channel, **not a second AI brain**.

## Architecture

```text
Mobile user
    ↓
BiteFixes App
    ↓
BiteFixes Backend
    ↓
BiteFixes enterprise brain
    ├─ Company AI Profile
    ├─ authorized context + memory
    ├─ company knowledge
    ├─ web research
    ├─ intent / services / workflows
    └─ external AI collaboration
    ↓
response
```

The app is responsible for mobile presentation, authentication/session transport, conversation UI, permitted attachments and channel-specific UX. It must not contain provider secrets, cross-tenant knowledge or a parallel reasoning engine.

## Relationship to Bitey

- `bitey-web` — **Bitey IA**, the independent general web-based supracerebro.
- `bitey-ai` — **Bitey Plugin Web**, the WordPress channel.
- `bitefixes-backend` — **BiteFixes Backend**, the specialized enterprise brain for BiteFixes.com and its authorized channels.
- `bitefixes-app` — **BiteFixes App**, this mobile extension of BiteFixes.com.

BiteFixes App continues to use the BiteFixes backend contracts so that company context, customer context, permissions and business workflows remain consistent across channels.

## Development

This project uses Expo.

```bash
npm install
npx expo start
```
