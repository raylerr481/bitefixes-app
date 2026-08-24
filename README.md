# BiteFixes App

`bitefixes-app` is the **mobile application and customer channel for BiteFixes.com**.

Its purpose is to provide a mobile experience for BiteFixes services, conversations, support and authorized business workflows while relying on `bitefixes-backend` as the authoritative server-side intelligence and data layer.

> **Boundary:** BiteFixes App is a client/channel, not a second AI brain. It is a different product from Bitey IA App.

## Product purpose

The app connects customers and authorized users with BiteFixes through mobile UX while keeping business intelligence, company knowledge, customer memory, permissions and provider credentials on the backend.

## Architecture

```text
Mobile user
    ↓
BiteFixes App
    ↓
BiteFixes Backend
    ↓
BiteFixes enterprise intelligence
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
- Notifications and mobile-specific capabilities.
- Channel-specific configuration.
- Reliable communication with the authorized BiteFixes backend.
- Customer-facing access to approved BiteFixes services and workflows.

The app must NOT contain:

- provider API keys;
- a parallel authoritative reasoning engine;
- authoritative company memory;
- cross-tenant knowledge;
- private company data embedded in the client bundle.

## Relationship to Bitey IA

BiteFixes App and Bitey IA App are **different products**.

| Repository | Product | Role |
|---|---|---|
| `bitey-web` | **Bitey IA Web** | General Bitey IA supracerebro and web application |
| `bitey-ia-app` | **Bitey IA App** | General Bitey IA Android client |
| `bitey-ai` | **Bitey IA Enterprise WordPress Plugin** | WordPress enterprise channel |
| `bitefixes-web` | **BiteFixes Web** | BiteFixes website/frontend |
| `bitefixes-backend` | **BiteFixes Backend** | Specialized enterprise intelligence/backend |
| `bitefixes-app` | **BiteFixes App** | This BiteFixes mobile channel |

BiteFixes App uses BiteFixes Backend contracts so company context, customer context, permissions and business workflows remain consistent across authorized BiteFixes channels.

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

## Product principle

**BiteFixes App is a mobile channel of BiteFixes.com. Bitey IA App is a separate Android client for the general Bitey IA product, whose supracerebro is Bitey Web.**
