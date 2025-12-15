# Content Migration Guide

Migrating content from `origin/master` to `feature/ui-rewrite`.

## Structural Changes

The feature branch restructured directories:

| master | feature/ui-rewrite |
|--------|-------------------|
| `getting-started/` | `1.getting-started/` |
| `essentials/` | `2.essentials/` |
| `inputs/` | `3.inputs/` |
| `plugins/` | `4.plugins/` |
| `guides/` | `5.guides/` |
| `api-reference/` | `6.api-reference/` |
| `changelog-pro/` | `_changelog-pro/` |
| `changelog/` | `_changelog/` |
| `.examples/` | `_examples/` |

**Numbered prefixes** control navigation order. **Underscore prefixes** hide directories from main navigation.

---

## Content to Migrate (111 commits)

### 1. Changelogs (68 files) - COPY DIRECTLY

No transformation needed. Copy files with same names.

**Pro changelogs** (v0.123.0 → v0.127.23):
```bash
# From docs-content root:
for f in $(git show origin/master --name-only | grep "^changelog-pro/"); do
  git show origin/master:"$f" > "_${f}"
done
```

Files: `68.v.0.123.0.md` through `128.v0.127.23.md`

**Core changelogs** (v1.6.2 → v1.6.8):
```
33.v1.6.2.md
34.v1.6.3.md
35.v1.6.4.md
36.v1.6.5.md
37.v1.6.6.md
38.v1.6.7.md
39.v1.6.8.md
```

### 2. New Input Docs (2 files) - REQUIRES DIAGRAM MIGRATION

These inputs have old-style `::FormKitInputDiagram` blocks that must be converted:

| File | Target |
|------|--------|
| `inputs/currency.md` | `3.inputs/currency.md` |
| `inputs/unit.md` | `3.inputs/unit.md` |

Note: `meta.md` already exists on the feature branch (adapted to new system).

**See "Diagram Migration" section below.**

### 3. New Examples (~30 files) - COPY WITH PATH CHANGE

Copy from `.examples/` to `_examples/`:

Key new examples:
- `_data/citiesByState.js`
- `currency/` (3 files)
- `barcode/basic.vue`, `barcode/formats.vue`, `barcode/formkit.config.js`
- `autocomplete-pro/autocomplete-option-groups.vue`
- `autocomplete-pro/autocomplete-filter.vue`
- `dropdown/dropdown-option-groups.vue`

### 4. New Guide (1 file) - COPY WITH PATH CHANGE

```
guides/using-formkit-with-laravel-inertia.md → 5.guides/using-formkit-with-laravel-inertia.md
```

### 5. New API Reference (1 file) - COPY WITH PATH CHANGE

```
api-reference/context.md → 6.api-reference/context.md
```

### 6. Typo/Content Fixes - MANUAL REVIEW

Various PRs fixed typos across existing files. Review these commits and apply relevant fixes manually:
- `custom-inputs.md` punctuation fixes
- `installation.md` fixes
- Validation rule example updates

---

## Diagram Migration

### The Problem

**Old format** (master) embeds diagram content in markdown:
```markdown
::FormKitInputDiagram
---
prefix-icon-content: ""
suffix-icon-content: ""
label-content: "Currency Input"
input-content: "$1,234.56"
help-content: "How much do you want to donate?"
message-content: "That's a lot of money"
---
::
```

**New format** (feature/ui-rewrite) uses TypeScript definitions:
```markdown
:FormKitInputDiagrams
```

The component derives the input name from the route and dynamically imports:
- `docs-ui/assets/content/input-definitions/sections/{inputName}.ts`
- `docs-ui/assets/content/input-definitions/slot-data/{inputName}.ts`

### Migration Steps for New Inputs

For each new input (`currency`, `unit`, `meta`):

#### Step 1: Extract content from old markdown

From the old `::FormKitInputDiagram` block, note:
- `label-content` → becomes `data.label` in sections file
- `input-content` → becomes `data.input`
- `help-content` → becomes `data.help`
- `message-content` → becomes `data.message`

#### Step 2: Analyze the FormKit schema

Find the input's schema definition:
- **Pro inputs**: `~/Sites/formkit-pro/src/inputs/{input}.ts`
- **Pro sections**: `~/Sites/formkit-pro/src/sections/{input}Sections.ts`

Determine the section hierarchy (outer → wrapper → inner → etc.)

#### Step 3: Create sections file

Create `docs-ui/assets/content/input-definitions/sections/{inputName}.ts`:

```typescript
const data = {
  label: 'Currency Input',        // from old label-content
  input: '$1,234.56',             // from old input-content
  help: 'How much to donate?',    // from old help-content
  message: 'Validation error',    // from old message-content
}

export default {
  family: 'text',  // or 'dropdown', 'box', etc.
  specimens: [
    {
      label: 'Default',
      sections: [
        {
          name: 'outer',
          class: 'flex-col',
          children: [
            {
              name: 'wrapper',
              class: 'flex-col',
              children: [
                { name: 'label', content: data.label },
                {
                  name: 'inner',
                  children: [
                    { name: 'prefixIcon', class: 'basis-20' },
                    { name: 'prefix', class: 'basis-20' },
                    { name: 'input', content: data.input },
                    { name: 'suffix', class: 'basis-20' },
                    { name: 'suffixIcon', class: 'basis-20' },
                  ],
                },
              ],
            },
            { name: 'help', content: data.help },
            {
              name: 'messages',
              children: [
                { name: 'message', content: data.message },
              ],
            },
          ],
        },
      ],
    },
  ],
}
```

#### Step 4: Create slot-data file

Create `docs-ui/assets/content/input-definitions/slot-data/{inputName}.ts`:

```typescript
import { mergeSectionData, generateSpecimens } from './_utils'
import { base as baseSlotData } from './_base'
import { base as baseSectionData } from '../sections/_data'
import sections from '../sections/{inputName}'

const sectionData = mergeSectionData(baseSectionData, {})

const slotData: Record<string, any>[] = [
  { label: '_value', type: 'string' },
  { label: 'value', type: 'string' },
  // Add input-specific slot properties
]

const specimens = generateSpecimens(sections, baseSlotData, slotData, sectionData)

export default specimens
```

#### Step 5: Update the markdown

Replace the old diagram block:
```markdown
::FormKitInputDiagram
---
...
---
::
```

With:
```markdown
:FormKitInputDiagrams
```

### Reference Documentation

Full diagram system documentation is in the docs-ui repo:

```
docs-ui/assets/content/input-definitions/CLAUDE.md
```

This file contains:
- Complete guide to creating input definitions
- Section hierarchy patterns for each input family (text, dropdown, box)
- Section properties reference (`name`, `content`, `class`, `children`, etc.)
- Layout rules (vertical vs horizontal)
- Multiple specimens for complex inputs
- Common mistakes to avoid
- Verification steps

**Also see:**
- `docs-ui/assets/content/input-definitions/sections/_data.ts` - Base section metadata
- `docs-ui/assets/content/input-definitions/slot-data/_base.ts` - Common slot data
- `docs-ui/assets/content/input-definitions/slot-data/_utils.ts` - Helper utilities
- `docs-ui/assets/content/input-definitions/todo.md` - Migration task tracking

---

## Example Syntax Changes

### Old example reference (master)
```markdown
::Example
---
file: "_content/_examples/currency/currency-default.vue"
---
::
```

### New example reference (feature)
```markdown
::Example
---
file: "_examples/currency/currency-default.vue"
---
::
```

Note: `_content/` prefix is removed.

---

## Migration Checklist

### Phase 1: Changelogs
- [ ] Copy Pro changelogs (68.v.0.123.0.md → 128.v0.127.23.md)
- [ ] Copy Core changelogs (33.v1.6.2.md → 39.v1.6.8.md)

### Phase 2: New Inputs
- [ ] Create `currency` sections + slot-data files in docs-ui
- [ ] Create `unit` sections + slot-data files in docs-ui
- [ ] Copy `currency.md` to `3.inputs/`, update diagram syntax
- [ ] Copy `unit.md` to `3.inputs/`, update diagram syntax

### Phase 3: Examples
- [ ] Copy `_data/citiesByState.js`
- [ ] Copy `currency/` examples (3 files)
- [ ] Copy `barcode/` examples (3 files)
- [ ] Copy new autocomplete examples
- [ ] Copy new dropdown examples
- [ ] Update any example file paths in markdown

### Phase 4: Guides & API
- [ ] Copy Laravel/Inertia guide
- [ ] Copy context.md API reference

### Phase 5: Content Fixes
- [ ] Review typo fix commits
- [ ] Apply relevant fixes to feature branch files
