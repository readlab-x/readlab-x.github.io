# Design System: Editorial Minimalism & The Spectrum of Thought

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is anchored in the philosophy that "Less is More, Order is Beauty." Our Creative North Star is **The Digital Curator**. Unlike standard layouts that feel like templates, this system treats the screen as a high-end gallery wall. It rejects the heavy "container-based" UI of the past decade in favor of **Intentional Asymmetry** and **Structural Hairlines**.

We break the "template" look by using a strict 1px grid system that organizes content through skeletal lines rather than shadows. The experience should feel like an intellectual, high-end broadsheet digitized for the modern era—stable, airy, and profoundly intentional.

## 2. Colors & Surface Architecture
The palette is a high-contrast dialogue between the intellectual depth of `Deep Navy` and the electric energy of `Neon Lime`.

### The "Skeletal" Rule
Standard UI uses shadows to create depth; this system prohibits them. Instead, boundaries are defined by **1px hairline borders** (`outline-variant`) or **Subtle Tonal Shifts**.
- **Main Reading Areas:** Must use `surface_container_lowest` (#FFFFFF) to ensure zero visual noise.
- **Surface Nesting:** Use `surface_container_low` (#F1F3FF) for secondary sidebar modules and `inverse_surface` (#1F304F) for high-impact footers or callouts.
- **The "No-Shadow" Policy:** Depth is flat. To separate a card from the background, use a 1px `outline_variant` at 20% opacity or a shift to `surface_container`. Never use a drop shadow.

### Signature Textures & Gradients
To avoid a "stark" or "unfinished" feel, use the **Spectrum Gradient** (Transitioning from `primary` to `secondary` or `tertiary`) for high-level iconography and active progress indicators. This represents the "Spectrum of Thought" and adds a layer of professional polish that flat colors cannot achieve.

## 3. Typography: Intellectual Contrast
The typography strategy relies on the tension between a sophisticated Serif and a functional Sans-Serif.

* **Headlines (Newsreader):** Used for all `display` and `headline` tokens. This serif typeface conveys authority and an editorial soul. Use it for article titles, section headers, and quotes.
* **UI & Body (Manrope):** Used for all `title`, `body`, and `label` tokens. Manrope provides a neutral, modern clarity that ensures readability in high-density data or long-form text.

**Hierarchy Tip:** Always pair a `display-lg` Newsreader headline with a `label-md` Manrope sub-header in all-caps (0.05rem letter spacing) to create a premium, "Magazine-style" lockup.

## 4. Elevation & Structural Integrity
In this system, elevation is not "height" (Z-axis), but "Structural Clarity."

* **The Hairline Grid:** Use 1px lines (`outline-variant`) to separate columns or sections. These should feel like the "bones" of the page.
* **Ghost Borders:** For buttons or input fields, borders must be at 20% opacity of the `outline` token. They should be barely visible until interaction.
* **The Gallery Effect (Spacing):** Use the `16` (5.5rem) and `20` (7rem) spacing tokens liberally between major sections. If a layout feels "crowded," double the whitespace.
* **Tonal Layering:** To highlight a specific module, change its background to `surface_container_high` rather than giving it an outline. This creates "soft zones" within the rigid grid.

## 5. Components

### Buttons
* **Primary:** Background `primary_container` (#A8EB12), Text `on_primary_fixed` (#131F00). Sharp 0px corners. No shadow.
* **Secondary:** Ghost style. 1px border `primary`, no background. Text `primary`.
* **Tertiary:** Text only. Hover state triggers a 1px underline transition from 0% to 100% width.

### Cards & Lists
* **Cards:** Forbid the use of dividers or heavy borders. Content should be separated by whitespace (Spacing `8`) or a 1px vertical hairline on the left-hand side to "anchor" the eye.
* **Lists:** Use `body-md` for items. Hovering over a list item should change the background to `surface_container_low` and reveal a `primary` (Neon Lime) 2px vertical accent on the leading edge.

### Inputs & Form Fields
* **Text Fields:** No background. 1px bottom border only (`outline_variant`). On focus, the border transitions to `primary` (#A8EB12). Labels use `label-sm` in `Deep Navy`.

### Navigation (The Curator Bar)
* A fixed 1px hairline at the bottom of the header. Navigation links use `title-sm` (Manrope). The active state is indicated by a Newsreader italicized version of the label, adding an editorial flair to the "Active" state.

## 6. Do’s and Don’ts

### Do:
* **DO** use 0px border-radius for everything. The system is architectural and sharp.
* **DO** use `display-lg` typography for empty states or landing hero moments—let the type be the hero.
* **DO** leave at least 100px of "breathing room" around critical call-to-action areas.
* **DO** use subtle opacity transitions (0.7 to 1.0) for hover states on secondary elements.

### Don’t:
* **DON’T** use rounded corners. It breaks the "Skeletal" aesthetic.
* **DON’T** use grey shadows. If you must lift an element, use a tinted ambient glow (4% opacity of `Deep Navy`).
* **DON’T** use center-alignment for long-form text. Stick to a strict left-aligned editorial grid.
* **DON’T** use more than three `primary` (Neon Lime) elements on a single screen. It is a highlighter, not a primary paint.