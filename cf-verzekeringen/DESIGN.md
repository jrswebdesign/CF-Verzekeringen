# DESIGN.md — Hero Section Only

> Scope: homepage hero section only. No sections below the hero.

---

## Layout

Split-screen, full viewport height (100vh minimum).

```
┌─────────────────────────┬─────────────────────────┐
│                         │                         │
│     LEFT: Content       │     RIGHT: Photo        │
│        ~50%             │        ~50%             │
│                         │                         │
└─────────────────────────┴─────────────────────────┘
```

- Left column: white (#FFFFFF) or light background (#EDEDED), vertically centered content
- Right column: full-bleed authentic photography, no overlay, no filter
- Desktop split: 50/50
- Mobile: stacked — photo first (top, reduced height), content below

---

## Typography

Font: **Poppins** (Google Fonts)

| Element        | Weight  | Size (desktop) | Size (mobile) |
|----------------|---------|----------------|---------------|
| Label          | 600     | 12px           | 11px          |
| Headline       | 700     | 48–56px        | 32px          |
| Supporting text| 400     | 18px           | 16px          |
| CTA primary    | 600     | 16px           | 15px          |
| CTA secondary  | 500     | 16px           | 15px          |
| Trust items    | 400     | 14px           | 13px          |

---

## Colors

| Role              | Hex       |
|-------------------|-----------|
| Primary Coral     | #ED694B   |
| Accent Green      | #04A76F   |
| Light Background  | #EDEDED   |
| Dark Text         | #333333   |
| White             | #FFFFFF   |
| Subtle border     | #E0E0E0   |

---

## Left Column — Content

Padding: 80px horizontal on desktop, 24px on mobile.
Max content width: 560px.
Vertical alignment: centered.

### 1. Label

```
VERZEKERINGEN & HYPOTHEKEN OP BONAIRE
```

- ALL CAPS
- Letter-spacing: 0.12em
- Color: #ED694B (coral)
- Font size: 12px, weight 600
- Margin-bottom: 20px

### 2. Headline

```
Onafhankelijk advies voor verzekeringen
en hypotheken op Bonaire
```

- Poppins Bold
- Color: #333333
- Line-height: 1.15
- Margin-bottom: 20px

### 3. Supporting Text

```
Persoonlijk advies, lokale kennis en
begeleiding van begin tot eind.
```

- Poppins Regular
- Color: #555555 (slightly softer than dark text)
- Line-height: 1.6
- Margin-bottom: 36px

### 4. CTA Buttons

Stacked horizontally on desktop, stacked vertically on mobile.
Gap between buttons: 12px.

**Primary — Plan een adviesgesprek**
- Background: #ED694B
- Text: #FFFFFF
- Padding: 16px 32px
- Border-radius: 12px
- Font: Poppins 600, 16px
- Hover: darken 8%, slight lift (translateY -2px), shadow

**Secondary — Informatie aanvragen**
- Background: transparent
- Border: 2px solid #333333
- Text: #333333
- Padding: 16px 32px
- Border-radius: 12px
- Font: Poppins 500, 16px
- Hover: border-color #ED694B, text #ED694B

### 5. Trust Indicators

Margin-top: 32px.
Display: row (desktop), column (mobile).
Gap: 20px.

```
✓ 100% onafhankelijk advies
✓ Lokaal kantoor op Bonaire
✓ Eén vast aanspreekpunt
```

- Checkmark color: #04A76F (accent green)
- Text color: #555555
- Font: Poppins Regular, 14px
- No borders, no boxes — inline subtle list

---

## Right Column — Image

### Image Slot

**Slot ID:** `hero-photo`

**Status:** WAITING FOR ASSET

**Required asset:** Authentic Crooij & Flipse photography

**Priority order:**
1. Team member(s) in professional but warm setting
2. Advisor in conversation with a client
3. Office interior
4. Bonaire context (only if above unavailable)

**Do not use:** stock photography, AI-generated imagery, scenery without people.

**Technical requirements:**
- Minimum resolution: 1400 × 1800px
- Orientation: portrait preferred (fills vertical split)
- Format: JPG or WebP
- Quality: sharp, fully focused, professional lighting
- No artificial blur, no bokeh, no soft focus

**Implementation:** `object-fit: cover`, anchored to face/upper body if portrait shot.

---

## UI Details

| Property        | Value              |
|-----------------|--------------------|
| Border-radius   | 16–24px on card elements |
| Shadow (cards)  | `0 4px 24px rgba(0,0,0,0.07)` |
| Whitespace      | Generous — do not crowd content |
| Transitions     | 200ms ease on hover states |

The right-side photo panel has no border-radius on desktop (full bleed edge-to-edge).
On mobile the photo may have a bottom border-radius of 24px for card feel.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| ≥ 1024px   | Split-screen 50/50, full height |
| 768–1023px | Split-screen 45/55, reduced height |
| < 768px    | Stacked — photo top (260px), content below |

---

## What Is Not In Scope

The following are explicitly excluded from this design:

- Navigation bar / header
- USP section
- Services section
- About section
- Team section
- Statistics / numbers section
- CTA banner section
- Footer
- Any element below the hero closing tag

---

## Open Dependency

**Hero image asset is required before implementation can begin.**

Provide authentic Crooij & Flipse photography matching the slot specification above. Once received, implementation may proceed.
