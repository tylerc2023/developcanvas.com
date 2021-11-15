---
title: Checkpoints
template: usermanual-page.tmpl.html
position: 1
---

A checkpoint is a snapshot of your project at a point in time. It contains the complete set of data for your project so that you can restore this state at any point in the future. Checkpoints are similar to *commits* in other version control systems. Checkpoints are identified by a unique id number and a description that you enter at the time you create the checkpoint.

![Checkpoint][1]

A checkpoint is a permanent record of the state of your project and forms part of the graph that is used for branches and merging changes. As such, once created checkpoints cannot be deleted. This means that once you have committed your changes as part of a checkpoint they are safe forever in your project history.

## Creating a checkpoint

Checkpoints are created from the Version Control panel.

![VC Panel][2]

The New Checkpoint button opens the input form to create a checkpoint. You can also use the keyboard shortcut Ctrl+S (Cmd+S on OS X)

![Create Checkpoint][3]

## Restoring a checkpoint

![Restore Checkpoint][4]

If you'd like to restore the state of your project from a previous checkpoint you can do that from the version control panel. Open the panel, find the checkpoint that you'd like to restore to and choose "Restore checkpoint" from the checkpoint's drop down menu. The editor will reload the project at the checkpoint.

**Note, restoring a checkpoint brings the changes from the checkpoint into your current branch, but PlayCanvas does not allow branching unless you have explicitly created a branch. So if you restore a checkpoint and then create a new checkpoint it will be a child of the latest checkpoint in the branch.**

![Restore checkpoint applied][5]

## Hard reset to a checkpoint

Hard reset allows you to delete all checkpoints after a selected checkpoint. This is useful if you need to 'undo' a merge (perhaps a branch was accidentally merged or the merge needs to be done differently).

Hard reset can only delete the checkpoints if the following conditions are met:

- No branches have been created from the checkpoints being deleted
- The checkpoints being deleted have not been created by a merge of branches

**Note, deleted checkpoints cannot be recovered.**

To hard reset, open the panel, find the checkpoint that you'd like to reset to and choose "Hard reset" from the checkpoint's drop down menu.

![][hard-reset]

Type 'hard reset' in the text box to confirm that you wish to delete all checkpoints after the selected checkpoint.

![][hard-reset-confirm]

The editor will reload the project at the checkpoint.

[1]: /images/user-manual/version-control/checkpoint.jpg
[2]: /images/user-manual/version-control/vc-panel.jpg
[3]: /images/user-manual/version-control/create-checkpoint.jpg
[4]: /images/user-manual/version-control/restore-checkpoint.jpg
[5]: /images/user-manual/version-control/restore-checkpoint-applied.png
[hard-reset-confirm]: /images/user-manual/version-control/hard-reset-confirm.png
[hard-reset]: /images/user-manual/version-control/hard-reset.png

