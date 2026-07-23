# etc. Folder Architecture

```
app/
```

Routing only.

Contains pages, layouts and API routes.

Never contains business logic.

---

```
components/
```

Reusable visual components.

No processing logic.

Organized by responsibility.

Example

components/

    layout/

    landing/

    ui/

    upload/

    tool/

    feedback/

---

```
platform/
```

The heart of etc.

Everything shared between tools lives here.

Example

platform/

    sdk/

    registry/

    upload/

    file-engine/

    queue/

    commands/

    recommendations/

    analytics/

---

```
tools/
```

Every tool lives here.

Each tool only contains its own settings and processing logic.

Example

tools/

    image-compressor/

    pdf-merger/

    image-converter/

---

```
hooks/
```

Reusable React hooks.

---

```
lib/
```

Small helper utilities.

No platform logic.

Examples

formatters

validators

math

helpers

---

```
types/
```

Global TypeScript types.

---

```
config/
```

Global configuration.

Colors

Limits

Supported formats

Feature flags

Constants

---

```
styles/
```

Global design system.

Never contains component CSS.

Only tokens.

Examples

tokens.css

animations.css

utilities.css

---

```
docs/
```

Platform documentation.

Manifest

Architecture

SDK

Roadmap

Development notes

---

```
public/
```

Images

Icons

Logos

Fonts

Illustrations

---

# Rules

No duplicated UI.

No duplicated upload logic.

No duplicated download logic.

No duplicated processing flow.

Every reusable feature belongs to platform/.

Every reusable UI belongs to components/.

Every processing algorithm belongs inside tools/.

Everything else belongs nowhere.