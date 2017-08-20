+++
date = "2017-05-12T06:46:57-04:00"
title = "Version Control"

+++

# Github

We leverage Github, the leading version control provider, to manage code and facilitate code reviews. 

# Simplified Git Flow

We use a simplified version of Git-Flow when working with Git.

{{<img src="/img/tools/github/git-flow-diagram.png">}}

1. [Create a new _feature_ branch](#create-feature-branch) from the _develop_ branch.
2. [Implement changes](#implement-changes) to the feature branch and commit periodically.
3. [Open a pull request](#open-pull-request) from your branch with your proposed changes to kick off a PR review.
4. [Discuss and review changes](#discuss-and-review) with reviewer making changes as needed on your branch. Your pull request will update automatically.
5. [Squash and Merge](#squash-and-merge) pull request with _develop_ branch. Delete the _feature_ branch.
6. Merge _develop_ to master then [_tag_ and _release_](#tag-and-release) from the _master_ branch.

## Branch Overview

Branches are important when working with a team to isolate and manage all the different activities that may be in progress at any given time.

<dl>
  <dt>master</dt>
  <dd>Anything in the master branch is always deployable. </dd>

  <dt>develop</dt>
  <dd>The develop branch is a long-lived branch and serves as a staging area for work in progress. Code is merged from develop to master when releasing new versions to production.</dd>

  <dt>feature</dt>
  <dd>A feature branch is created off of the develop branch. It represents a collection of changes for a new feature, bug fix or experiment. These are short-lived branches that will be removed after completing the unit of work.</dd>
</dl>

## Create Feature Branch

When beginning work on a new feature, bug fix or refactoring, start by creating a new branch off the _develop_ branch. 

Changes made on a _feature_ branch don't affect the _master_ or _develop_ branch, allowing work to be done in isolation, safe in the knowledge that the branch won't be merged until it's ready to be reviewed.

It's important that your new branch is created off of _develop_ when working on a feature or a fix. Your branch name should be prefixed with the issue/user story number and include a short, descriptive name (e.g., 1234-reorderlist-items). For experiental branches like a larger refactoring use a short, descriptive name without a prefix (e.g., swift4).

## Implement Changes

Once your branch has been created, it's time to start making changes. 

Work in small increments and commit at logical points throughout the day. Each commit has an associated commit message, which is a description explaining why a particular change was made.

For larger changes, it can be helpful to merge from the _develop_ branch periodically to stay up to date with changes and avoid big merge conflicts.

## Open Pull Request

Once work is complete on a new feature, push changes from the local branch to the remote and create a new _Pull Request_ in Github to initiate review with collaborators. Use a descriptive name for the PR and include notes the reviewer if necessary.

See [Pull Request Prerequisites](../pull-request-prereq) for guidance on steps to take prior to submitting a _Pull Request_.

## Discuss and Review

Once a _Pull Request_ has been opened, a team member start a code review. The reviewer can make comments and start discussions in line. 

Continue to make commits and push to the branch with any changes in response to the reviewer feedback. 

See [Pull Request Review Guidelines](../pull-request-review) for guidance on performing a code review.

## Squash and Merge

Once a _Pull Request_ has been approved, it can be squashed and merged into the _develop_ branch. 
Now that your changes have been verified in production, it is time to merge your code into the master branch.

Clean up the old feature branch both on the remote and the local workspace.

## Tag and Release

Once the _develop_ branch is considered complete and passes all tests, it can merged with _master_. Create a new tag on _master_ for the version number and release create a new release.

