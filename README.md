# BiteFixes App

`bitefixes-app` is the Android/mobile application and customer/business channel for BiteFixes.com.

## Product role

BiteFixes is a separate enterprise product connected to the Bitey IA ecosystem. Its mobile app communicates with the BiteFixes Backend through authorized APIs.

```text
Mobile user
    ↓
BiteFixes App
    ↓
BiteFixes Backend
    ↓
Bitey IA Empresarial
    ↓
CRM + customers + tickets + services + knowledge + workflows
```

## Bitey IA Empresarial

Bitey IA Empresarial maintains Bitey IA's architecture, capabilities and general intelligence while operating with authorized BiteFixes business context. It is the contextual enterprise AI used within BiteFixes channels.

It is not a second general Bitey IA brain and does not restrict the Bitey IA Supracerebro.

## Core functionality

- Authentication and secure sessions.
- Customer profile and account access.
- Conversations and support.
- Service discovery.
- Ticket creation/status/history where enabled.
- Authorized attachments.
- Notifications and mobile integrations where implemented.
- Authorized business workflows.
- Access to Bitey IA Empresarial within BiteFixes context.

## Security boundary

The app must not contain provider API keys, private credentials, authoritative company memory, cross-tenant data or privileged backend rules. Authorization is enforced server-side.

## Relationship to Bitey IA

- `bitey-web` — Bitey IA general Supracerebro/web channel.
- `bitey-ia-app` — mobile channel of the same Bitey IA.
- `bitey-ai` — WordPress enterprise integration/plugin.
- BiteFixes — separate enterprise product using Bitey IA Empresarial.
- JobIA and Bitey SBT are other specialized modules in the wider ecosystem.

## Android target

The immediate target is a real installable APK validated on a physical Android device.

```text
Install → authenticate → business action/chat → backend → response → persistence
```

## Development

Expo/React Native is used for the mobile application. Backend intelligence, secrets, CRM data and authorization remain server-side.
