# BiteFixes App

`bitefixes-app` is the **Android/mobile application and customer channel for BiteFixes.com**.

## Objective

Provide customers and authorized BiteFixes users with a reliable mobile channel for services, support, conversations, tickets and approved business workflows while keeping company intelligence and sensitive data on the BiteFixes backend.

**BiteFixes App is not Bitey IA App and is not a second AI brain.**

## Architecture

```text
Mobile user
    ↓
BiteFixes App
    ↓
Authentication / authorization
    ↓
BiteFixes Backend
    ↓
BiteFixes enterprise intelligence
    ├─ Company AI Profile
    ├─ customer context + memory
    ├─ company knowledge
    ├─ services and intent resolution
    ├─ tickets and workflows
    ├─ web research
    └─ authorized external AI collaboration
    ↓
response / authorized action
```

## Core functionalities

- Mobile presentation and customer UX.
- Authentication and secure session transport.
- Customer conversations and support interactions.
- Service discovery and approved service workflows.
- Ticket creation/status/history where enabled.
- Authorized attachments and mobile capabilities.
- Notifications and mobile-specific integrations.
- Reliable communication with the BiteFixes Backend API.
- Access to approved BiteFixes business functions without embedding business intelligence in the client.
- Production Android builds through the repository's Expo/Android CI pipeline.

## Security boundary

The app must not contain:

- provider API keys or private credentials;
- authoritative company memory;
- cross-tenant customer data;
- a duplicate business reasoning engine;
- sensitive backend rules that belong on the server.

All authorization decisions must be enforced server-side.

## Relationship to Bitey IA

Bitey IA and BiteFixes are separate products.

| Repository | Product | Role |
|---|---|---|
| `bitey-web` | **Bitey IA Web** | General Bitey IA web application and Cloudflare supracerebro |
| `bitey-ia-app` | **Bitey IA App** | General Bitey IA Android client |
| `bitey-ai` | **Bitey IA Enterprise WordPress Plugin** | Authorized enterprise WordPress channel |
| `bitefixes-web` | **BiteFixes Web** | BiteFixes.com website/frontend |
| `bitefixes-backend` | **BiteFixes Backend** | Specialized enterprise intelligence/API |
| `bitefixes-app` | **BiteFixes App** | This mobile channel |

Bitey IA capabilities may be consumed by BiteFixes through explicit authorized contracts. That does not merge the products or make Bitey Web/Bitey IA the authoritative BiteFixes business backend.

## Internal training boundary

Bitey training/evaluation infrastructure is not a public navigation feature of this app. If BiteFixes consumes internal Bitey capabilities, the integration must use explicit authorized APIs and provider-compliant contracts.

## Development

This project uses Expo/React Native.

```bash
npm install
npx expo start
```

Before release validate:

```text
App → authentication → backend authorization → service/chat workflow → response → persistence → logout/login
```

## Product principle

**BiteFixes App is a mobile channel of BiteFixes.com. Bitey IA App is a separate Android client for the general Bitey IA product, whose supracerebro is Bitey Web.**
