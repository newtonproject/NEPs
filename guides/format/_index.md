---
title: NEP Format and Templates
description: NEP Format and Templates
weight: 31
---

This document will cover:

- NEP Document Directory
- NEP Templates
- NEP Header Preamble
- NEP Content Format

## I. NEP Document Directory

```js (just using the syntax highlight)
// NEPs Document Directory
./
└─ NEPS/
|  └─ nep-x/           // `x` is the NEP Number
|  |  ├─ index.md      // main NEP Document in English
|  |  ├─ index.zh.md   // main NEP Document in Chinese
|  |  ├─ image1.png    // image used in NEP
|  |  ├─ image2.jpg    // image used in NEP
|  |  └─ filename.ext  // file used in NEP
|  └─ nep-template/    // this is the NEP Template Folder
```

### NEP Document File

NEP Doument file is `index.md` file in it's directory.

Every NEP should starts with the English version first. Each translation is translated from that English and placed in a new file using `index.lang.md` format.

### Auxiliary Files

If your NEP requires images, the image files should be included in the same directory of that NEP. When linking to an image in the NEP, use relative links such as `image.png`. Other files should follow the same pattern.

- When linking files from another NEP, it is enforced to copy that file from reference NEP directory to the working NEP directory.

- Files of `jpg`, `jpeg`, `png`, `svg` format are generally accepted.

- Files of `html`, `js` and other server-side or browser-side executable format are not accepted.

- If you must include an executable file like `js`, change the extension to `txt` instead.

## II. NEP Templates

```js (just using the syntax highlight)
// NEP Template Directory
./
└─ NEPS/
|  └─ nep-template/    // this is the NEP Template Folder
|  |  └─ index.md      // this is the NEP Template Document
|  └─ nep-x/           // your NEP-X Folder
|  |  └─ index.md      // your NEP-X Document
```

To use the NEP Template, copy `nep-template` folder to `nep-x` folder and start your NEP with `nep-x/index.md`.

Current available templates:

- General NEP Template `./NEPS/nep-template/`

- NEP Template for Token (NRC) `./NEPS/nep-template-nrc/`

## III. NEP Header Preamble

Here is an example of NEP Header Preamble, **all fields listed in this example are required**.

```yaml
---
NEP: X
Title: "This is the NEP Title"
Authors: "[First Last](mailto:name@domain.ext)"
Discussions: https://url.to.discussions.ext
Status: Draft
Categories: Economic Model
Created: YYYY-MM-DD
---
# NEP Content Starts
```

### 1. NEP

```yaml
NEP: X
```

- **required**

- NEP number (this is determined by the NEP editor)

### 2. Title

```yaml
Title: "This is the NEP Title"
```

- **required**

- NEP title quoted with `" "`

### 3. Authors

```yaml
Authors: "[First Last](mailto:name@domain.ext)"
```

- **required**

- A list of the author’s or authors’ name(s) and/or username(s), or name(s) and email(s). Details are below.

{{< details "Authors Code Examples" >}}

```yaml
# Author with Email
Authors: "[First Last](mailto:name@domain.ext)"

# Author with URL
Authors: "[First Last](https://domain.ext)"

# Multiple Authors
Authors: "[Author 1](author1:name@domain.ext), [Author 2](https://author2.ext), [Author 3](mailto:aurhtor3@domain.ext)"
```

{{< /details >}}

### 4. Discussions

```yaml
Discussions: https://url.to.discussions.ext
```

- **required**

- While an NEP is a draft, a discussions-to header will indicate the mailing list or URL where the NEP is being discussed.

- No Discussions header is necessary if the NEP is being discussed privately with the author and haven't been submitted to NEPs repo yet.

- Discussions **cannot** point to GitHub pull requests.

### 5. Status

```yaml
Status: Draft
```

- **required**

- WIP, Draft, Public Call, Final etc.

- See [NEP Status](../nep-status.md) for all available status

### 6. Categories

```yaml
Categories: Economic Model
```

- **required**

- NEP currently has 5 categories: `Economic Model`, `Personnel`, `Technical`, `Community Governance` and `Business`

- This is defined by [NEP-0: NEP Genesis](../../NEPS/nep-0/index.md).

### 7. Created

```yaml
Created: YYYY-MM-DD
```

- **required**

- Date for first created in `YYYY-MM-DD` format

### 8. Updated

```yaml
Updated: YYYY-MM-DD
```

- Comma separated list of dates.

- e.g. `2020-12-23` or `2020-10-01, 2020-05-14, 2019-12-31`

### 9. Types

```yaml
Types: Standard
```

- NEP currently has 3 types: `Standard`, `NRC` and `Informational`

### 10. SupersededBy

```yaml
SupersededBy: 100
```

- The NEP Number of NEP that superseded this NEP.

- Only NEPs moved to `Active`, `Final` and later status can be added as an SupersededBy item.

### 11. Superseding

```yaml
Superseding: 50
```

- The NEP Number of NEP that _is_ or _is to be_ superseded by this NEP

- Only NEPs moved to `Active`, `Final` and later status can be added to this field.

- This field should be added since this NEP is meant to supersede another NEP, even when this NEP is still in `WIP` status.

### Last, Ordering

The order of NEP Header Preamble Item is not enforced, but it is recommended to use the order as the example below:

```yaml {linenos=true,linenostart=0}
---
NEP:
Title:
Authors:
Discussions:
Status:
SupersededBy:
Superseding:
Categories:
Types:
Created:
Updated:
---
# NEP Content Starts
```

## IV. NEP Content Format

NEP Content should be written in **Markdown** format. Markdown formatting is widely used in websites and documents, also there were dozens of implementations in many languages and software applications.

**CommonMark Spec** is a standard for Markdown and adopted by many applications. To see the latest **CommonMark Spec** please visit [https://spec.commonmark.org](https://spec.commonmark.org).

We'll provide more format examples in this document later.
