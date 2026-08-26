# BiteFixes App

`bitefixes-app` is the Android/mobile application and customer channel for BiteFixes.com.

## Current status

- Android app: active development and release-build validation.
- BiteFixes Web: already exists separately.
- This repository is the mobile client, not the backend and not Bitey IA.
- Production Android builds use Expo/EAS and GitHub Actions.

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
Company intelligence, services, tickets and workflows
    ↓
Response / authorized action
```

## Core functionalities

- Mobile customer UX.
- Authentication and secure sessions.
- Customer conversations and support.
- Service discovery and approved workflows.
- Ticket creation/status/history where enabled.
- Authorized attachments and mobile capabilities.
- Notifications and mobile integrations where implemented.
- Communication with the BiteFixes Backend API.
- Production Android builds through Expo/EAS and CI.

## Security boundary

The app must not contain provider API keys, private credentials, authoritative company memory, cross-tenant customer data, duplicate business reasoning, or sensitive backend rules. Authorization is enforced server-side.

## Relationship to Bitey IA

Bitey IA and BiteFixes are separate products.

| Repository | Product | Role |
|---|---|---|
| `bitey-web` | Bitey IA Web | General Bitey IA web application and Cloudflare supracerebro |
| `bitey-ia-app` | Bitey IA App | General Bitey IA Android client |
| `bitey-ai` | Bitey IA Enterprise WordPress Plugin | Authorized enterprise WordPress channel |
| `bitefixes-web` | BiteFixes Web | Existing BiteFixes.com website/frontend |
| `bitefixes-backend` | BiteFixes Backend | Specialized enterprise intelligence/API |
| `bitefixes-app` | BiteFixes App | This mobile channel |
| `JobIA` | JobIA | Separate employment/opportunity mobile product |

Bitey IA capabilities may be consumed by BiteFixes through explicit authorized contracts, without merging the products or replacing the BiteFixes backend.

## Bitey Trainer boundary

Bitey Trainer is not a public navigation feature of this app. Any BiteFixes integration with internal Bitey capabilities must use authorized APIs and provider-compliant contracts.

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

## Android release target

The immediate release target is a **real Android APK that can be installed and tested on a physical Android device**, using the BiteFixes application icon and production configuration. BiteFixes Web is separate and is not required for the APK build.

## Product principle

**BiteFixes App is a mobile channel of BiteFixes.com. Bitey IA App is a separate Android client for the general Bitey IA product, whose supracerebro is Bitey Web.**
