---
title: NEP Submission Guides for Beginners
description: Detailed guide for unfamiliar with the NEP Process
weight: 11
---

{{< hint info >}}
This doc was originally from https://github.com/newtonproject/NEPs/wiki and should be added to a NEP as reference.
{{< /hint >}}

This guide is for those unfamiliar with the NEP Process and provides simple instructions for NEP submission, update, and request for final. This guide won't cover complex NEP status change and other requests described in NEPs Guideline.

This guide covers:

- Start A NEP

- To Submit NEP for The First Time

- To Update a Draft NEP

- To Make A NEP to Final / Active

## I. Start A NEP

You can start writing your thoughts of a NEP first. And check if your thoughts are already in the existing NEPs.

You can choose from the NEP templates to get started. Since you already wrote down your thoughts, try to use a template from and finish the Summary and Abstract section. If your thoughts are not formed well enough, you can choose to skip the templates and use it later.

Discussion with other people, try to get one or more people become your co-authors, that helps your NEP become more carefully considered. Also it is recommended to have a public discussion board from the beginning. You can choose any public discussion services such as Google Groups, Facebook Pages, or your own Github repos.

You can choose any text editor apps to work with. If you are more familiar with Google Docs, Apple Pages, Microsoft Word, it is okay to use them to begin with. But the formal NEP for submission requires a Mark Down format. You will need to use a NEP template later.

## II. To Submit NEP for The First Time

All NEP submissions require to make a Pull Request(PR) from your own git repository on Github. If you haven't forked the NEPs repository, please follow the guide below to fork the NEPs repository and add your NEP to your repository.

### Fork the NEPs Repository

- You need a Github account and to be logged in

- Click the `Fork` button on the upper right of the [NEPs Github Page](http://github.com/newtonproject/neps)

- You have successfully forked the NEPs repository

### Add your NEP to your repository

- Choose a template to start with.

- Add your NEP to `NEPS/NEP-X/index.md` file

### Create Pull Request for NEP submission

Make sure your NEP documents and assets follow the NEPs guideline. All NEPs submission not following the guideline require may get rejected.

- Change the NEP status from `WIP` to `Draft` when it's ready for submission

- Perform a PR from your repository to Newton's NEPs repository.

- State clear you are submitting the NEP for the first time in the title.

- Make sure to check **Allow edits from maintainers**

### NEP Editor Review

- NEP Editors will review your submission.

- If your NEP requires modifications, NEP Editors will point out and ask you to make changes in your repository.

- If the NEP editor thinks your NEP is ready for the Review Board to review. A NEP Editor will assign a NEP number and update your documents. You can not add/change your NEP number by yourself. If you self added/changed the NEP number. The submission will be rejected.

### NEP Board Review

- The NEP Review Board host meetings for NEP review regularly.

- The Authors may be invited to join the meeting depending on the type or contents of your NEP.

- If your NEP passed the review. Your NEP submission will pass and NEP Editors will include(merge) your NEP to Newton's NEPs Repository.

- If your NEP is good but require small changes like description, content naming space, add references to support your NEP. You should update your NEP documents. Once you have completed the change, add a reply to your PR and mention a NEP Editor to review your change. Once reviewed and the NEP Editor thinks it meets all the questions/problems from the Review Board. The NEP Editor will pass your NEP without additional review from the NEP Review Board, the NEP Editor will include(merge) your NEP to Newton's NEPs Repository.

- If the NEP Review Board thinks the NEP will not pass. Your submission will be rejected. And the PR will be closed. If you wish to continue on the same NEP, you can make a new PR in the future.

- As long as your new NEP PR is talking about the same thing and you kept NEP number assigned history from the NEP Editor in your repository. You can use the same NEP number in your future submission.

## III. To Update a Draft NEP

**You have to be one of the Author to update a NEP**

To update a Draft NEP, you must be one of the Authors mentioned in the NEP. If you are not amount the authors, your submission will be rejected. Contact the NEP Authors you are willing to join and ask them to add you to the NEP first.

If you tried contact the Authors and get no response, you may ask the NEP Editors for assistance. If the NEP Editors can't reach the NEP Authors, the editor may consider they have abandoned the NEP and change the status to abandoned. You may work on that and submit new updates to that NEP.

**Only NEP in Active/Draft status can accept updates\***

Once a NEP become Final. It can no longer accept changes.

An Active status NEP can accept updates for adding features, but other parts can not be changes.

### Create Pull Request for NEP update submission

- Perform a PR from your repository to Newton's NEPs repository.

- State clear you are updating a Draft NEP in the title. E.g. "Update NEP-3"

- Tell what have been changed to the last Draft in the descriptions.

- Make sure to check **Allow edits from maintainers**

### Review Procedure

The review is pretty much alike to Submit your NEP for the first time. Except there may be no NEP Review Board reviews required depending on the updates of the NEP.

## IV. To Make A NEP to Final / Active

A NEP Draft must be already in Newton NEPs repository before requesting for it to be finalised.

### Create an Issue for NEP to be finalised

- Create an issue in Newton's NEPs repository on Github.

- State you want to finalised a NEP in the title. E.g. "NEP-3, request for Final"

- Tell why you think it can be finalised in description.

### NEP Editor Review

- NEP Editors should check the request and go through the current Draft.

- NEP Editors should also check if the request is agreed from all the authors.

- NEP Editors should ask the NEP Review Board to include this topic in the next meeting.

### NEP Review Board Review

- NEP Review Board should make the decision whether the NEP can/should be finalised.

- NEP Review Board should also giving a Public Review period. Normally 14 days, but depending of the NEP, the period may change.

### Public Review

- If the NEP Review Board decides a NEP can be finalised, a Public Review is going to happen.

- NEP Editors should change the NEP status to Public Call.

- The Public Call of a NEP should be prominently listed on Newton Project's official website.

- Any change request to the NEP document during the Public Review will result the NEP status revert to Draft.

- When a NEP has passed the Public Review. NEP Editors will update the status to Final/Active.
