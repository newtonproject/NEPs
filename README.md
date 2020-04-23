# Newton Evolution Proposals (NEPs)

Author: NTTF (Newton Tokenizing Task Force)

Status: Draft `> remove this before merge approval`

Newton Evolution Proposals (NEPs) describe Proposals for the Newton Project.

**Contents**

- [Contributing a NEP](#contributing-a-nep)
- [NEP Work Flow](#nep-work-flow)
  - [Shepherding a NEP](#shepherding-a-nep)
  - [NEP Process](#nep-process)
- [NEP Formats and Templates](#nep-formats-and-templates)
  - [NEP Header Preamble](#nep-header-preamble)
- [NEP Editors](#nep-editors)
  - [NEP Editors Responsibilities](#nep-editors-responsibilities)
  - [NEP Editors' Incentives](#nep-editors-incentives)
- [History](#history)

## Contributing a NEP

1. Review [NEP-0](NEPS/nep-0.md) and guidelines in this document.
1. Fork the repository by clicking "Fork" in the top right.
1. Add your NEP to your fork of the repository. Use a template to start your NEP.
1. Submit a Pull Request to Newton's NEPs repository.

Your first PR should be a first draft of the final NEP. It must meet the formatting criteria. An editor will manually review the first PR for a new NEP and assign it a number before merging it. Make sure you include a `Discussions to` header with the URL to a discussion forum or open GitHub issue where people can discuss the NEP as a whole.

Once your first PR is merged, it will be merged to draft NEPs. For this to work, it has to be able to tell that you own the draft being edited. Make sure that the 'author' line of your NEP contains either your GitHub username or your email address inside . If you use your email address, that address must be the one publicly shown on your [your GitHub profile](https://github.com/settings/profile).

To update a draft NEP, you need to created another PR after edit. Once the PR is merged, your updated draft NEP will be merged to draft NEPs.

When you believe your NEP is mature and ready to progress past the Draft phase to Final, you should do:

Open a PR changing the state of your NEP to 'Public Call'. An editor will review your draft and ask if anyone objects to its being finalised. If the editor decides there is no rough consensus - for instance, because contributors point out significant issues with the NEP - they may close the PR and request that you fix the issues in the draft before trying again.

Once the PR is merged, your NEP will be available in the Public Call NEPs for anyone to check it can be a Final NEP. Once the Public Call period has passed. An editor will update the status to Final.

## NEP Work Flow

### Shepherding a NEP

Parties involved in the process are you, the champion or *NEP author*, the [*NEP editors*](#nep-editors).

Before you begin writing a formal NEP, you should vet your idea. Ask the Newton community first if an idea is original to avoid wasting time on something that will be be rejected based on prior research.

In addition to making sure your idea is original, it will be your role as the author to make your idea clear to reviewers and interested parties, as well as inviting editors, developers and community to give feedback. You should try and gauge whether the interest in your NEP is commensurate with both the work involved in implementing it and how many parties will have to conform to it. Negative community feedback will be taken into consideration and may prevent your NEP from moving past the Draft stage.

### NEP Process

Following is the process that a successful NEP will move along:

```
[ WIP ] -> [ DRAFT ] -> [ PUBLIC CALL ] -> [ FINAL / ACTIVE ]
```

Each status change is requested by the NEP author and reviewed by the NEP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your NEP. The NEP editors will process these requests as per the conditions below.

* **WIP**: Work In Progress is the status before a NEP is submitted to Newton for review. The champion can use other status name such as *IDEA* to share the NEP for discussion outside Newton's Github repository.
  * :arrow_right: Draft: Once the champion has finished a NEP and consider it's ready to be merged to Newton's Github repository. they will write a draft NEP as a [pull request]. Consider including an implementation if this will aid people in studying the NEP.
* **Draft**: If the draft is agreeable amount the Newton community, NEP editor will assign the NEP a number (generally the issue or PR number related to the NEP) and merge your pull request. The NEP editor will not unreasonably deny an NEP.
  * Once the first draft has been merged, you may submit follow-up pull requests with further changes to your draft until such point as you believe the NEP to be mature and ready to proceed to the next status.
  * :arrow_right: Last Call -- If agreeable, the NEP editor will assign Last Call status and set a review end date (`review-period-end`), normally 14 days later.
  * :x: Last Call: A request for Last Call status will be denied if material changes are still expected to be made to the draft. We hope that NEPs only enter Last Call once, so as to avoid unnecessary noise on the RSS feed.
* **Last Call**: This NEP will listed prominently on the https://newtonproject.org/nep website.
  * :x: A Last Call which results in material changes or substantial unaddressed technical complaints will cause the NEP to revert to Draft.
  * :arrow_right: Final: A successful Last Call without material changes or unaddressed technical complaints will become Final.
* **Final**: This NEP represents the current state-of-the-art. A Final NEP should only be updated to correct errata.

Other exceptional statuses include:

* **Implemented**: Some NEP is required one-time only implementation to meets the NEP's to be completed. Once the implementation is complete, the status will be changed to "Implemented" by an editor. Only NEPs with status "Final" can be changed to "Implemented".
* **Active**: Some Informational and Process NEP may also have a status of “Active” if they are never meant to be completed.
* **Abandoned**: This NEP is no longer pursued by the original authors or it may not be a preferred option anymore.
  * :arrow_right: Draft -- Authors or new champions wishing to pursue this NEP can ask for changing it to Draft status.
* **Rejected**: An NEP that is fundamentally broken. An NEP cannot move on from this state.
* **Superseded**: An NEP which was previously Final but is no longer considered state-of-the-art. Another NEP will be in Final status and reference the Superseded NEP. An NEP cannot move on from this state.

## NEP Formats and Templates

NEPs should be written in [markdown] format.

### Auxiliary Files

If your NEP requires images, the image files should be included in a subdirectory of the assets folder for that NEP as follows: assets/nep-N (where N is to be replaced with the NEP number). When linking to an image in the NEP, use relative links such as ../assets/nep-1/image.png. Other files should follow the same pattern.

### NEP Header Preamble

- `NEP`: NEP number (this is determined by the NEP editor)

- `Title`: NEP title

- `Authur`: a list of the author’s or authors’ name(s) and/or username(s), or name(s) and email(s). Details are below.

- `NEP`: NEP number (this is determined by the NEP editor)

- `Type`: NEP currently has 3 types: Standard Track, NRC, Informational

- `Category`: NEP currently has 5 categories: Economic Model, Personnel, Technical, Community Governance, Business

- `Discussions to`: While an NEP is a draft, a discussions-to header will indicate the mailing list or URL where the NEP is being discussed.

  - No `Discussions to` header is necessary if the NEP is being discussed privately with the author.

  - `Discussions to` cannot point to GitHub pull requests.

- `Status`: WIP, Draft, Last Call, Final etc.

- `Created`: yyyy-mm-dd

- `Updated`: comma separated list of dates

`Ideas / Notes:` about Created/Updated time, [@benkoo](https://github.com/benkoo) suggest we using Newton Blockchain Data. These times should be automated updated/added when a PR merge happens. We could use a bot to create a transaction before the merge, using the NEP content hash as transaction notes. Then the bot will add the transaction hash to created/updated section.

### Available Templates

- [NEP Template for Contract](nep-template-for-contract.md)

## Transferring NEP Ownership

It occasionally becomes necessary to transfer ownership of NEPs to a new champion. In general, we’d like to retain the original author as a co-author of the transferred NEP, but that’s really up to the original author. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the NEP process, or has fallen off the face of the net (i.e. is unreachable or isn’t responding to email). A bad reason to transfer ownership is because you don’t agree with the direction of the NEP. We try to build consensus around an NEP, but if that’s not possible, you can always submit a competing NEP.

If you are interested in assuming ownership of an NEP, send a message asking to take over, addressed to both the original author and the NEP editor. If the original author doesn’t respond to email in a timely manner, the NEP editor will make a unilateral decision (it’s not like such decisions can’t be reversed).

## NEP Editors

The current NEP editors are: [@arisac](https://github.com/arisac), [@liuyong5653](https://github.com/liuyong5653), [@weixuefeng](https://github.com/weixuefeng), [@zhouxiqiao](https://github.com/zhouxiqiao)

### NEP Editors Responsibilities

For each new NEP that comes in, an editor does the following:

- Read the NEP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the NEP for language (spelling, grammar, sentence structure, etc.), markup (GitHub flavored Markdown), code style etc.

If the NEP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the NEP is ready for the repository, the NEP editor will:

- Assign an NEP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this NEP)

- Merge the corresponding pull request

- Send a message back to the NEP author with the next step.

Many NEPs are written and maintained by developers with write access to the Newton codebase. The NEP editors monitor NEP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on NEPs. We merely do the administrative & editorial part.

### NEP Editor's Incentives

It is necessary to create an incentive mechanism to promote participation of creation and updates of NEP. This is the meta-asset for all other assets.

## History

This document was derived heavily from [Ethereum's EIP-1](https://github.com/ethereum/EIPs) which was derived [Bitcoin's BIP-0001](https://github.com/bitcoin/bips) written by Amir Taaki which in turn was derived from [Python's PEP-0001](https://www.python.org/dev/peps/) In many places text was simply copied and modified. The authors in the documents mentioned above are not responsible for its use in the Newton Evolution Proposal, and should not be bothered with questions specific to Newton or the NEP. Please direct all comments to the NEP editors.

2020-04-`XX date to be replaced`: This NEP Guideline was created and `passed < change this part before merge approval` review from Newton Team to make it public.
