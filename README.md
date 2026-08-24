# BiteFixes App

`bitefixes-app` is the **mobile application/channel for BiteFixes.com**.

It gives customers and authorized users a native mobile experience for the same BiteFixes enterprise AI and business services available through the website and other supported channels.

> **Boundary:** BiteFixes App is a client/channel, not a second AI brain.

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
response / authorized action
```

## Responsibilities

The app is responsible for:

- Mobile presentation and UX.
- Authentication/session transport.
- Conversation interface.
- Permitted attachments.
- Notifications and mobile-specific capabilities when implemented.
- Channel-specific configuration.
- Reliable communication with the authorized BiteFixes backend.

The app must NOT contain:

- provider API keys;
- a parallel reasoning engine;
- authoritative company memory;
- cross-tenant knowledge;
- private company data embedded in the client bundle.

## Relationship to Bitey

| Repository | Product | Role |
|---|---|---|
| `bitey-web` | **Bitey IA** | Independent general web AI experience + intelligence foundation |
| `bitey-ai` | **Bitey AI Enterprise WordPress Plugin** | WordPress enterprise channel |
| `bitefixes-backend` | **BiteFixes Backend** | Specialized enterprise brain for BiteFixes.com |
| `bitefixes-app` | **BiteFixes App** | This mobile channel |

The app uses BiteFixes backend contracts so that company context, customer context, permissions and business workflows remain consistent across authorized channels.

## Security rules

1. Keep provider credentials server-side.
2. Treat all client input as untrusted.
3. Authenticate sessions and enforce authorization server-side.
4. Do not store cross-company data in the client.
5. Keep sensitive business logic in the backend.
6. Use secure transport and platform-appropriate secret storage.
7. Test authentication, API contracts and permission boundaries.

## Development

This project uses Expo.

```bash
npm install
npx expo start
```

Before release, validate:

```text
App → authentication → BiteFixes Backend → authorized context → response
```

and verify that existing website/backend contracts remain unaffected.

## Product principle

BiteFixes App is a **channel of BiteFixes.com**, not another intelligence core. All authoritative business intelligence remains in `bitefixes-backend`.
