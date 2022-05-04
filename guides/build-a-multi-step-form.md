---
title: Build a multi-step form
description: Follow this guide to learn how to build a multi-step form with FormKit.
---

# Build a multi-step form

Few interactions on the web cause as much displeasure as being confronted with a large, intimidating form. Multi-step forms can help by breaking the large forms down into approachable steps.

In this guide, we'll walk through building a multi-step form with FormKit and see just how easy it is to provide a good UX with minimal code. Let's get started!


## Requirements

We'll lay out some quick requirements and user experience enhancements that will make filling it out the form a breeze to end users:

- Show which step a user is on
- Show if the current step has passed all frontend validations (✅)
- Allow a user to navigate to any step of the form
- Display errors that are returned from a backend, and on the appropriate step.

Throughout the process, you will be able to see the form 

## Steps
- Add all form fields
- Break them down into steps (groups)
- Figure out group validity, and add an indicator
- Make step navigation dynamic
- 



## Ways to improve

Of course, there are always ways to improve anything, and this form is no exception. Here are a few ideas:

- Save form state to `window.localStorage` so if a user leaves and comes back, their form state is maintained.
- Pre-populate any known form values so the user doesn't have to fill them out.
- Add a "not yet submitted" status indicator to warn the user that even if all frontend validations are passing (and accompanying checkmarks showing), that they still need to submit.
- 

