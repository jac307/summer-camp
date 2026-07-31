---
layout: default
title: Motion Capture and Animation Foundations
---

[MOCAP Tutorials](README.md)

---

# 👤 Posture Calibration in Axis Studio

**Activity:** Complete posture calibration in Axis Studio by aligning the Perception Neuron 3 system with the performer’s body and preparing the suit for motion-capture recording.

This guide helps you complete the required calibration poses, check that the digital avatar follows the performer’s movements correctly, and confirm that the suit is ready before recording motion capture.

---

<details class="software-section">
<summary class="software-title">
  <strong>🛠️ Before You Begin</strong>
  <br>
  <span class="path-description">
    Check the sensors, suit, hub, and performer setup before starting posture calibration.
  </span>
</summary>

<div markdown="1">

## What Is Body Calibration?

**Body calibration** is the process of aligning the motion-capture system with the performer’s body.

It helps Axis Studio create a digital skeleton that matches the performer’s:

- Body proportions
- Neutral posture
- Arm and leg orientation
- Joint placement
- Movement range

Accurate calibration is essential for clean motion-capture data. If the calibration is incorrect, the avatar may show problems such as twisted arms, incorrect posture, drifting, jittering, or inaccurate walking movement.

## Before starting

- All **PN3 sensors are charged**.
- All sensors are paired and properly attached to the **PN3 straps or suit**.
- The **hub** and receiver are connected.
- **Axis Studio** is open.
- The PN3 suit appears as connected.
- The performer has enough space to stand and move safely.
- Sensors have not shifted after being placed on the body.

---

## Tips

- Recalibrate whenever sensors shift.
- Recalibrate if the avatar looks twisted, delayed, or inaccurate.
- Each performer must calibrate separately.
- The performer should remain still when instructed.
- Do not rush the pose countdowns.

</div>
</details>

---

<details class="software-section">
<summary class="software-title">
  <strong>1️⃣ Start Posture Calibration</strong>
  <br>
  <span class="path-description">
    Open the posture calibration panel, enable the required poses, and begin calibration.
  </span>
</summary>

<div markdown="1">

## Setup and Calibration Steps

<div class="step-grid" markdown="1">

<div class="step-card" markdown="1">
<img src="images/posture-calibration-step-01.png" alt="Axis Studio device connection screen">

### 1. Confirm the Suit Is Connected

Open **Axis Studio** and confirm that the PN3 suit is connected.

Check that the hub and sensors appear active before continuing.
</div>

<div class="step-card" markdown="1">
<img src="images/posture-calibration-step-02.png" alt="Posture calibration icon in Axis Studio">

### 2. Open Posture Calibration

Click the **T-Pose icon** on the right-side toolbar.

This opens the **Posture Calibration** panel.
</div>

<div class="step-card" markdown="1">
<img src="images/posture-calibration-step-03.png" alt="Posture calibration options in Axis Studio">

### 3. Enable the Required Poses

Enable the posture types required for calibration.

Use the poses requested by Axis Studio, such as **T-Pose**, **W**, and **P-Pose**.

</div>

<div class="step-card" markdown="1">
<img src="images/posture-calibration-step-04.png" alt="Performer standing still during posture calibration">

### 4. Choose Manual Mode or Automatic Mode

- **Manual Mode enabled:** You will need to click **Next** each time a new pose is ready to be recorded.
- **Manual Mode disabled:** Axis Studio will move through the calibration steps automatically, giving you a short amount of time between poses.

For beginners, **Manual Mode** is usually easier because it gives you more control over when each pose starts.
</div>

<div class="step-card" markdown="1">
<img src="images/posture-calibration-step-05.png" alt="Successful calibration message in Axis Studio">

### 5. Start Calibration

Click **Start Calibration** and follow the steps.

During each countdown, the performer must remain completely still.

After calibration, a success message should appear.

Check that the virtual avatar mirrors the performer’s movement smoothly.
</div>

</div>

## Perception Neuron 3 | First Launch

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/KdryfjN8pvs?si=ANNxJWdKtMohntUB"
    title="Perception Neuron 3 | First Launch"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

</div>
</details>

---

<details class="software-section">
<summary class="software-title">
  <strong>2️⃣ Calibration Poses Explained</strong>
  <br>
  <span class="path-description">
    Review each posture and what it helps Axis Studio calibrate.
  </span>
</summary>

<div markdown="1">

Each posture calibrates a specific part of the body-tracking system. Perform each pose exactly as shown.

<div class="step-grid" markdown="1">

<div class="step-card" markdown="1">
<img src="images/body_callibration_2.png" alt="T-Pose calibration example">

### 🅣 T-Pose

The **T-Pose** calibrates full-body joint orientation.

Stand upright with feet together. Extend both arms horizontally to form a **T** shape.

Keep:

- Head facing forward
- Arms straight
- Palms facing down
- Knees relaxed
- Body still
</div>

<div class="step-card" markdown="1">
<img src="images/body_callibration_3.png" alt="A-Pose calibration example">

### 🅐 A-Pose

The **A-Pose** supports shoulder and arm calibration.

Stand with arms lowered naturally beside the body.

Keep:

- Hands near the sides of the thighs
- Palms facing inward
- Shoulders relaxed
- Body still
</div>

<div class="step-card" markdown="1">
<img src="images/body_callibration_4.png" alt="W calibration walking example">

### 🅦 W Pose

The **W** calibration helps with walking, balance, and gait.

Begin still. After the countdown, walk forward slowly for approximately **6 steps** or **3 meters**.

Avoid:

- Running
- Jumping
- Turning
- Changing direction
</div>

<div class="step-card" markdown="1">
<img src="images/body_callibration_6.png" alt="B calibration forearm example">

### 🅑 B Pose

The **B** calibration refines forearm swing and elbow movement.

Clasp hands loosely in front of the body. When instructed, rotate the forearms upward using the elbows.

Then stand still again.
</div>

<div class="step-card" markdown="1">
<img src="images/body_callibration_7.png" alt="P-Pose hand calibration example">

### 🅟 P-Pose

The **P-Pose** calibrates finger gestures and hand shape.

Touch the thumb and index finger together to form an **OK** gesture.

Keep:

- Both hands matching each other
- Other fingers curved and relaxed
- Body still
</div>

</div>

</div>
</details>

---

<details class="software-section">
<summary class="software-title">
  <strong>3️⃣ Check the Calibration</strong>
  <br>
  <span class="path-description">
    Test the avatar and repeat calibration if the movement looks inaccurate.
  </span>
</summary>

<div markdown="1">

## Test the Motion Before Recording

Before recording motion capture, test the avatar carefully.

Make sure:

- [ ] The performer can move slowly and comfortably.
- [ ] The avatar stands naturally.
- [ ] The avatar mirrors the performer’s movements smoothly.
- [ ] The arms raise correctly.
- [ ] The torso turns correctly.
- [ ] The knees bend correctly.
- [ ] Slow walking looks stable.
- [ ] Arms and legs are not twisted.
- [ ] There is no snapping, jittering, or major drifting.
- [ ] The sensors are still secure.
- [ ] No sensors have shifted or become loose.
- [ ] The motion looks clean enough to record.

If the avatar looks incorrect:

- [ ] Check the sensor placement.
- [ ] Confirm that left and right sensors are not reversed.
- [ ] Tighten any loose straps.
- [ ] Repeat posture calibration if needed.

---

## Continue to Record & Export Motion Data

After the sensors are connected and worn correctly, continue with:

[🎥 Record and Export Motion Data in Axis Studio](03_Recording_And_Exporting.md)

</div>
</details>

---