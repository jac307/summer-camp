---
layout: default
title: Motion Capture and Animation Foundations
---

[MOCAP Tutorials](README.md)

---

# 🎥 Record and Export Motion Data in Axis Studio

**Activity:** Record motion-capture data in Axis Studio using the Perception Neuron 3 system and export the recording as a `.bvh` file.

This guide walks you through how to record a movement take, review it in Axis Studio, and export the motion data for use in Blender or other `.bvh`-compatible software.

---

<details class="software-section">
<summary class="software-title">
  <strong>Preparation</strong>
  <br>
  <span class="path-description">
    Check calibration, avatar tracking, and workspace safety before recording.
  </span>
</summary>

<div markdown="1">

Before recording, make sure:

- [ ] The sensors are fully calibrated.
- [ ] The avatar in Axis Studio accurately mirrors the performer’s movement.
- [ ] The workspace is clear.
- [ ] Tracking looks smooth.
- [ ] There is no major drifting, snapping, or jittering.
- [ ] The performer has enough room to move safely.
- [ ] You know what movement you want to record.

</div>
</details>

---

<details class="software-section">
<summary class="software-title">
  <strong>1️⃣ Record Motion Data</strong>
  <br>
  <span class="path-description">
    Name the take, start recording, perform the movement, and stop the recording.
  </span>
</summary>

<div markdown="1">

## Recording Steps

<div class="step-grid" markdown="1">

<div class="step-card" markdown="1">
<img src="images/record-export-step-01.png" alt="Take information panel in Axis Studio">

### 1. Open Take Information

In the **Capturing** window, go to the right-side panel.

Find the **Take Information** section.
</div>

<div class="step-card" markdown="1">
<img src="images/record-export-step-02.png" alt="Renaming a take in Axis Studio">

### 2. Rename the Take

Rename the take clearly before recording.

Use a name that identifies the person, date, and take, for example: `Cumbion_Jul31_take1.bvh`

</div>

<div class="step-card" markdown="1">
<img src="images/record-export-step-03.png" alt="Record button in Axis Studio">

### 3. Start Recording

Click the **Record** icon.

Wait a moment before moving so the beginning of the recording is clean.
</div>

<div class="step-card" markdown="1">
<img src="images/record-export-step-04.gif" alt="Performer moving during motion capture recording">

### 4. Perform the Movement

Perform your movement.

Move clearly and avoid rushing. Stay within the safe recording space.
</div>

<div class="step-card" markdown="1">
<img src="images/record-export-step-05.png" alt="Stop recording in Axis Studio">

### 5. Stop Recording

Click the **Stop** icon to stop recording.

Axis Studio automatically saves the recording in the selected output folder.
</div>

</div>

## Tips

- Use consistent file names, such as: `performer_date_take.bvh`
- Rename each take before recording.
- Recalibrate if the performer changes.
- Recalibrate if tracking looks inaccurate.
- Record short tests before recording the final movement.

</div>
</details>

---

<details class="software-section">
<summary class="software-title">
  <strong>2️⃣ Review and Edit</strong>
  <br>
  <span class="path-description">
    Open the recorded take, review the motion, and edit it if needed.
  </span>
</summary>

<div markdown="1">

## Reviewing and Editing Steps

<div class="step-grid" markdown="1">

<div class="step-card" markdown="1">
<img src="images/edit-step-01.png" alt="Editing window in Axis Studio">

### 1. Open the Editing Window

Go to the **Editing** window in Axis Studio.
</div>

<div class="step-card" markdown="1">
<img src="images/edit-step-02.png" alt="Selecting a recorded take in Axis Studio">

### 2. Select the Recording

On the right-side panel, under **Take Information**, double click on the take to open it. 
</div>

<div class="step-card" markdown="1">
<img src="images/edit-step-03.gif" alt="Timeline playback in Axis Studio">

### 3. Review the Motion

Use the timeline panel to play the recording.

Check that the motion looks clean before exporting.
</div>

<div class="step-card" markdown="1">
<img src="images/edit-step-04.png" alt="Export icon in Axis Studio">

### 4. Adjust the Playback Speed

Click the **1x** dropdown menu on the timeline.

You can speed up the animation by choosing **2x**, **5x**, or **10x**.

You can slow down the animation by choosing **1/10**, **1/5**, or **1/2**.
</div>

<div class="step-card" markdown="1">
<img src="images/edit-step-05.png" alt="BVH export settings in Axis Studio">

### 5. Trim the Beginning or End

Use the timeline to trim unwanted frames from the beginning or end of the recording.

Drag the left edge to change the starting frame.

Drag the right edge to change the ending frame.

As you drag, Axis Studio will show the updated frame position.
</div>

</div>

## Tips

- Play the full recording before trimming.
- Watch the avatar carefully for twisting, snapping, jittering, or drifting.
- Use the playback speed menu to review movement slowly when checking details.
- Trim empty time from the beginning and end of the take.
- Leave a small amount of space before and after the main movement so the animation does not start or end too abruptly.
- Do not trim important preparation or recovery movement if it is part of the action.
- Review the edited take in **Axis Studio playback** before exporting.

</div>
</details>

---

<details class="software-section">
<summary class="software-title">
  <strong>3️⃣ Export</strong>
  <br>
  <span class="path-description">
    Export the edited take as a .bvh file and save it in the correct project folder.
  </span>
</summary>

<div markdown="1">

## Exporting Steps

<div class="step-grid" markdown="1">

<div class="step-card" markdown="1">
<img src="images/export-bvh-step-01.png" alt="Export icon in Axis Studio editing panel">

### 1. Open Export Settings

In the **Editing** window, select the take you want to export from the right-side panel.

Click the **Export** icon to open the export settings.
</div>

<div class="step-card" markdown="1">
<img src="images/export-bvh-step-02.png" alt="BVH export settings in Axis Studio">

### 2. Check the Export Settings

Before exporting, confirm that:

- The file name is clear and easy to identify.
- The file type is set to `.bvh`.
- The export range is correct.
- The selected directory is the folder where you want to save the file.

Then click **Export**.
</div>

</div>

---

## After Exporting

After exporting:

- Open your selected **output folder** in File Explorer.
- Look for the `.bvh` file you just exported.
- Confirm that the file name is clear and easy to identify.
- Move or copy the `.bvh` file into your project folder if needed.

You can open and preview `.bvh` files in:

- **Blender**
- **MotionBuilder**
- **DeepMotion**
- Any `.bvh`-compatible animation software

---

## Tips

- Review the motion in **Axis Studio playback** before exporting.
- Make sure the beginning and end of the take have already been trimmed.
- Avoid exporting extra empty time at the beginning or end of the file.
- Use clear file names, such as `performer_movement_take01.bvh`.
- Save the exported `.bvh` file in a folder you can easily find later.
- If the exported file does not look correct in Blender, return to Axis Studio, check the take, and export again.

---

## To Import the Animation in Blender

To continue working with your exported motion-capture file, use these tutorials:

* 🦴 [Rigging Movements in Blender](04_Rigging_Blender.md)
* 🌀 [Retarget Motion onto a Character in Blender](05_Retargeting_Blender.md)

</div>
</details>

---