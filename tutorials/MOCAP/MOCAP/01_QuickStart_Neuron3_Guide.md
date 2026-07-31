---
layout: default
title: Motion Capture and Animation Foundations
---

[MOCAP Tutorials](README.md) | [Home](../../README.md)

---

# ⚙️ PN3 QuickStart Guide

**Activity:** Set up the Perception Neuron 3 body kit, check sensor connection, and prepare the suit for posture calibration in Axis Studio.

---

## 🎯 Goal

Initialize the PN3 sensors correctly before recording motion capture. This guide helps you check that the hub, sensors, receiver, and Axis Studio are connected before the performer puts on the suit and completes posture calibration.

---

## 🧰 What You Need

Before starting, make sure you have:

- Fully charged **PN3 sensors**
- Fully charged **PN3 hub**
- PN3 **suit or straps**
- **Axis Studio** installed on the computer
- USB **receiver plugged into the computer**
- A clear **3 × 3 meter workspace**
- A space away from metal objects, speakers, or magnetic surfaces

---

## 📦 Perception Neuron 3 Body Kit Overview

Watch this video for a general overview of the PN3 Body Kit.

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/MgAUYQAoXyk?si=TJ8aVa9u7bq6OLuC"
    title="Perception Neuron 3 Body Kit Unboxing"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## 1. Open Axis Studio and Create a Project

1. Open **Axis Studio**.
2. Select **Create New Project**.
3. Go to the **Capturing** tab.
4. Open the **Sensor Check** panel.
5. Confirm that the device appears as **Connected**.

![Sensor Check](images/setup_0.png){: .tutorial-image }

---

## 2. Run Sensor Check

Go to:

**Axis Studio → Capturing Tab → Sensor Check**

Follow the on-screen instructions.

![Sensor Check](images/setup_2.png){: .tutorial-image2 }

---

## 3. Turn On the Sensors

Choose one method:

### Option A: Manual Start

- Hold the power button on the hub for **2 seconds**.

### Option B: Auto Start

- Unplug and reconnect the USB-C power cable to auto-start the sensors.

Then click **Next**.

---

## 4. Prepare the Sensors for Checking

Place the sensors on the charging dock before running the check.

Make sure:

- The sensors are on a **non-magnetic table or stool**
- The sensors are not on a metal desk
- The sensors are away from speakers, magnets, phones, or other electronic interference
- The dock is stable and not being moved

Click **Next**.

---

## 5. Complete the Sensor Diagnostics

Axis Studio will automatically check:

| Diagnostic | What it checks |
|---|---|
| **Signal Quality Check** | Confirms that the sensors have a stable wireless connection |
| **Gyro Calibration** | Aligns the sensors’ internal orientation tracking |
| **Alignment Check** | Confirms that the sensors are responding correctly |

---

## 6. Check the Results

Before continuing, confirm that:

- All sensors appear as **Connected**
- No sensors are missing
- No sensors show warning messages
- The hub and receiver are working correctly

When everything is connected, click **Finish**.

---

## 🎥 Sensor Calibration Video

Watch this video for a visual explanation of the sensor calibration process.

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/8yB58PIHUVw?si=XxTpHW7UXU7YPR9a"
    title="Perception Neuron 3 Sensor Calibration"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## 7. Wear the Sensors

Use the sensor placement guide in Axis Studio as a reference.

![Sensor Wear](images/setup_1.png){: .tutorial-image2 }

Place the sensors carefully and symmetrically.

Important sensor locations:

| Body area | Placement |
|---|---|
| **Shoulders** | Attach to the upper back of each shoulder |
| **Hip** | Place firmly on the back of the pelvis, not the lower back |
| **Upper legs** | Attach on the outside of each thigh, not the front |
| **Feet, arms, and wrists** | Follow the strap guides and keep placement symmetrical |

---

## 🧠 How the Sensors Work

Each PN3 sensor uses an **inertial measurement unit**, or **IMU**, to track movement.

The sensors detect:

- Acceleration
- Rotation
- Orientation
- Body movement in space

The hub receives data wirelessly from the sensors and sends it to **Axis Studio** in real time. Axis Studio then translates the performer’s physical movement into digital motion.

---

## 8. Complete the Initial Calibration

After putting on the sensors:

1. Click **Next** in Axis Studio.
2. Follow the instructions on screen.
3. Complete the initial calibration.

This first calibration helps Axis Studio recognize the sensor setup, but it is not the final body alignment.

You will still need to complete a full **Posture Calibration** before recording.

![Sensor Wear](images/setup_4.png){: .tutorial-image }

---

## 9. Continue to Posture Calibration

After the sensors are connected and worn correctly, continue with:

[🧍 Posture Calibration in Axis Studio](2_Body_Callibration.md)

---

## ✅ Final Check

Before moving to posture calibration, confirm that:

- [ ] Axis Studio is open.
- [ ] The project has been created.
- [ ] The USB receiver is connected.
- [ ] The PN3 hub is turned on.
- [ ] All sensors are connected.
- [ ] The sensors passed the sensor check.
- [ ] The performer is wearing the sensors correctly.
- [ ] The workspace is clear of obstacles.
- [ ] The performer is away from metal or magnetic interference.

---