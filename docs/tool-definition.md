# Tool Definition

Every tool in etc. must follow the same structure.

A tool is defined by metadata, capabilities and a processing function.

---

# Tool Metadata

Every tool has

- id
- slug
- title
- description
- category
- icon
- keywords

Example

Image Compressor

PDF Merger

Video Converter

---

# Accepted Files

Every tool declares

accepted file types

maximum file size

multiple files allowed

minimum files

maximum files

---

# Settings

Every tool exposes settings.

Examples

Quality

Output Format

Resolution

Compression Level

Bitrate

DPI

Every setting should be generated automatically by the platform UI.

---

# Processor

Every tool exposes exactly one processing function.

Example

process(files, settings)

↓

returns

result

The platform does not know what the tool does.

It only knows how to execute it.

---

# Output

Every tool returns

status

output files

statistics

messages

errors

warnings

download names

The UI automatically renders these.

---

# UI

Every tool automatically receives

Navbar

Theme

Upload Box

Settings Panel

Progress

Results Card

Download Section

Recommendations

Spacing

Animations

Buttons

Cards

The tool never builds these itself.

---

# Lifecycle

User opens tool

↓

Platform loads metadata

↓

Platform builds page

↓

User uploads files

↓

Platform validates files

↓

Platform generates settings UI

↓

User clicks Process

↓

Tool processor executes

↓

Platform renders results

↓

User downloads output

---

# Golden Rule

A tool should only contain

metadata

settings

processing logic

Everything else belongs to the platform.