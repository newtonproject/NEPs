---
title: NEP Process
weight: 21
description: How NEP is proccessed and status is changed during the process
---

{{< hint info >}}
This doc was originally from https://github.com/newtonproject/NEPs/wiki and should be added to a NEP as reference.
{{< /hint >}}

## Shepherding a NEP

Parties & Roles involved in the process a NEP are: NEP you, the NEP Champion(Lead) or Authors, NEP Editors, NEP Review Board, and the Public Communnity.

Before you begin writing a formal NEP, you should vet your idea. Ask the Newton community first if an idea is original to avoid wasting time on something that will be be rejected based on prior research.

In addition to making sure your idea is original, it will be your role as the author to make your idea clear to reviewers and interested parties, as well as inviting editors, developers and community to give feedback. You should try and gauge whether the interest in your NEP is commensurate with both the work involved in implementing it and how many parties will have to conform to it. Negative community feedback will be taken into consideration and may prevent your NEP from moving past the Draft stage.

## General NEP Flow

```bash
General NEP Status Flow
---
"WIP" -> "Draft" -> "Public Call" -> "Final / Active"
```

See [NEP Status](nep-status.md) for more NEP Statuses and flowchart.

### I. Submit a NEP Draft for the first time

Follow the procedure in Contributing a NEP or NEP Submission Guides for Beginners to Start a NEP.

Once the NEP is ready to become a `Draft`, create a PR to the NEPs repository.

{{< details title="View NEP Process">}}

```bash --simplified
# Submit a NEP Draft for the first time
NEP_Status = "WIP"
$Authors:
  change NEP_Status = "Draft"
  create PR = "New NEP-X Draft"
{ CHECK CONTENTS }
  $NEP_Editor:
    case Good >> { ASSIGN NUMBER }
    case Ready >> { BOARD REVIEW }
    case Require Edit
      request $Authors to Edit >> { CHECK CONTENTS }
    case Not Pass && Will Not Continue
      PR = "Closed" && exit NEP Process
{ ASSIGN NUMBER }
  $NEP_Editor:
    assign NEP_Number = "Issue/PR Number"
    update PR = "New NEP-# Draft" && >> { CHECK CONTENTS }
{ BOARD REVIEW }
  $NEP_Review_Board:
    case Accept
      PR = "Merged" && exit NEP Process
    case Deny
      PR = "Closed" && exit NEP Process
```

{{< /details >}}

### II. Update a NEP Draft

- Only NEP in `Draft` status can accept updates

- You have to be one of the Authors to update a NEP

To update a Draft NEP, you must be one of the Authors mentioned in the NEP. If you are not amount the authors, your submission will be rejected. Contact the NEP Authors you are willing to join and ask them to add you to the NEP first.

If you tried contact the Authors and get no response, you may ask the NEP Editors for assistance. If the NEP Editors can't reach the NEP Authors, the editor may consider they have abandoned the NEP and change the status to abandoned. You may work on that and submit new updates to that NEP.

{{< details title="View NEP Process">}}

```bash --simplified
# Update a NEP Draft
NEP_Status = "Draft"
$Authors:
  create PR = "Update NEP-# Draft"
{ CHECK CONTENTS }
  $NEP_Editor:
    case Ready >> { CHECK IF REVIEW REQUIRED }
    case Require Edit
      request $Authors to Edit >> { CHECK CONTENTS }
    case Not Pass && Will Not Continue
      PR = "Closed" && exit NEP Process
{ CHECK IF REVIEW REQUIRED }
  $NEP_Editor:
    case Required >> { BOARD REVIEW }
    case Not Requred
      PR = "Merged" && exit NEP Process
{ BOARD REVIEW }
  $NEP_Review_Board:
    case Accept
      PR = "Merged" && exit NEP Process
    case Deny
      PR = "Closed" && exit NEP Process
```

{{< /details >}}

### III. Make a NEP Draft to NEP Final / Active

- A NEP `Draft` must be already in Newton NEPs repository before requesting for it to be finalised to `Final` / `Active`

- You have to be one of the Authors to make a NEP `Final` / `Active`

- Once a NEP become `Final`. It can no longer accept changes

- Create an PR in Newton's NEPs repository on Github

- Tell why you think it can be finalised in description

If you are not amount the authors, your submission will be rejected. Contact the NEP Authors you are willing to join and ask them to add you to the NEP first.

If you tried contact the Authors and get no response, you may ask the NEP Editors for assistance. If the NEP Editors can't reach the NEP Authors, the editor may consider they have abandoned the NEP and change the status to abandoned. You may work on that and submit new updates to that NEP.

{{< details title="View NEP Process">}}

```bash --simplified
# Make a NEP Draft to NEP Final
NEP_Status = "Draft"
$Authors:
  change NEP_Status = "Public Call"
  create PR = "Make NEP-# Final"
{ CHECK CONTENTS }
  $NEP_Editor:
    case Ready >> { BOARD REVIEW }
    case Not Pass && Will Not Continue
      PR = "Closed" && exit NEP Process
{ BOARD REVIEW }
  $NEP_Review_Board:
    case Accept
      PR = "Merged" && >> { PUBLIC REVIEW }
    case Deny
      PR = "Closed" && exit NEP Process
{ PUBLIC REVIEW }
  case Accept
    NEP_Status = "Final" && exit NEP Process
  case Deny
    NEP_Status = "Draft" && exit NEP Process
```

{{< /details >}}

### IV. Update an Active NEP

- You have to be one of the Authors to update an `Active` NEP

- An `Active` status NEP can accept updates for adding features, but other parts can not be changes

{{< details title="View NEP Process">}}

```bash --simplified
# Update an Active NEP
NEP_Status = "Active"
$Authors:
  create PR = "Update Active NEP-#"
{ CHECK CONTENTS }
  $NEP_Editor:
    case Ready >> { CHECK IF REVIEW REQUIRED }
    case Require Edit
      request $Authors to Edit >> { CHECK CONTENTS }
    case Not Pass && Will Not Continue
      PR = "Closed" && exit NEP Process
{ CHECK IF REVIEW REQUIRED }
  $NEP_Editor:
    case Required >> { BOARD REVIEW }
    case Not Requred
      PR = "Merged" && exit NEP Process
{ BOARD REVIEW }
  $NEP_Review_Board:
    case Accept
      PR = "Merged" && exit NEP Process
    case Deny
      PR = "Closed" && exit NEP Process
```

{{< /details >}}

## Special NEP Flow

```bash
Special NEP Status Flow
---
"Draft" -> "Abandoned" -> "Draft"
"Final" -> "Implemented"
"Final" -> "Deferred" -> "Implemented"
"Final" / "Implemented" -> "Superseded"
"Draft" -> "Rejected"
```

### Flow of Abandoned NEP

See [Transferring NEP Ownership](transfer-nep-ownership.md).

### NEP Final become Implemented or Deferred

`tbd`

### NEP Got Superseded

`tbd`

### Rejected NEP

`tbd`
