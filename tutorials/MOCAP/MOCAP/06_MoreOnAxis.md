---
layout: default
title: Motion Capture and Animation Foundations
---

[MOCAP Tutorials](README.md)

---

# ⚙️ Advanced Axis Studio Setup Panels

This guide explains the main setup panels in **Axis Studio**. These panels are useful when troubleshooting sensor problems, checking body measurements, reviewing signal quality, or confirming that the software is interpreting the performer’s movement correctly.

Most of these settings should be **checked**, not changed. Only adjust advanced settings if the instructor asks you to, or if you are troubleshooting a specific problem.

---

## Axis Studio Setup Panels

<div class="step-grid" markdown="1">

<div class="step-card" markdown="1">
<img src="images/panel-sensor-map.png" alt="Sensor Map panel in Axis Studio">

### 1. Sensor Map

The **Sensor Map** shows where each sensor is placed on the digital body.

Use this panel to check that:

- All expected sensors appear.
- Each sensor is assigned to the correct body part.
- The left and right sides are not reversed.
- The green sensor indicators are active.
- The suit is being recognized by Axis Studio.

The letters **L** and **R** help you confirm the left and right sides of the body.

If a sensor is missing, inactive, or mapped to the wrong body part, check the physical sensor placement and repeat the connection or sensor check process.
</div>

<div class="step-card" markdown="1">
<img src="images/panel-skeleton.png" alt="Skeleton panel in Axis Studio">

### 2. Skeleton

The **Skeleton** panel contains the performer’s body-size settings.

These measurements help Axis Studio create a digital skeleton that matches the performer’s proportions.

You may see settings such as:

- Head
- Neck
- Body
- Shoulder width
- Upper arm
- Forearm
- Palm
- Hip width
- Upper leg
- Lower leg

For most activities, use the default template unless the avatar looks very different from the performer’s body.

Only adjust these measurements if the instructor asks you to or if accurate body proportions are required for the recording.
</div>

<div class="step-card" markdown="1">
<img src="images/panel-device-detail.png" alt="Device Detail panel in Axis Studio">

### 3. Device Detail

The **Device Detail** panel shows the status of each individual sensor.

Use this panel to check:

- Body segment
- Sensor number
- Signal strength
- Magnetic status
- Battery level

Before recording, sensors should show strong signal, good magnetic status, and enough battery.

If a sensor shows a warning, weak signal, low battery, or magnetic interference, stop and fix the issue before recording.
</div>

<div class="step-card" markdown="1">
<img src="images/panel-solver-parameter.png" alt="Solver Parameter panel in Axis Studio">

### 4. Solver Parameter

The **Solver Parameter** panel controls how Axis Studio interprets the performer’s movement.

These settings affect:

- Floor contact
- Foot contact
- Balance
- Contact points
- Motion stability
- How the avatar solves body movement

For beginner and class projects, keep the default settings unless the instructor asks you to change them.

Check that **Feet** contact is enabled when the performer is standing or walking on the floor.
</div>

</div>

---

## When to Recalibrate

Recalibrate when:

- A new performer uses the suit.
- Sensors shift on the body.
- A sensor is removed and reattached.
- The avatar looks twisted.
- Arms or legs move incorrectly.
- The avatar drifts or jitters.
- Walking looks unstable.
- The motion does not match the performer.

Recalibration is a normal part of motion-capture work. It is better to recalibrate before recording than to export motion data that is difficult to use later.

---

## Multi-Actor Calibration

This video explains how calibration works when more than one performer is being captured.

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/_2yBt1xjFaE?si=G4yZPmR0c5BU2Ew1"
    title="Perception Neuron | Multi-Actor Calibration"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## 🚦 Sensor Light Troubleshooting

Use the sensor lights and the **Device Detail** panel in Axis Studio to check whether the PN3 system is ready.

Sensor lights can show battery status, connection status, working mode, channel information, or possible interference.

---

## PN3 Sensor Lights

| Light or behaviour | What it may mean | What to do |
|---|---|---|
| **Slow blinking light** | The sensor may be in standby mode to save power. | Connect the suit in Axis Studio or turn the sensor on again if needed. |
| **Fast blinking light** | The sensor is active and transferring data. | This is normal when the sensors are working. |
| **Solid light** | The sensor may be detecting magnetic interference. | Move away from metal tables, speakers, magnets, phones, or electronic equipment. |
| **Red light** | The sensor may have low battery or may be charging. | Charge the sensor fully before continuing. |
| **Green light** | The sensor may be using Channel 1. | This is normal if the system is set to Channel 1. |
| **Blue light** | The sensor may be using Channel 2. | This is normal if the system is set to Channel 2. |
| **Purple light** | The sensor may be using Channel 3. | This is normal if the system is set to Channel 3. |

---

## Receiver / Transceiver Lights

| Light | What it may mean | What to do |
|---|---|---|
| **Solid red light** | The transceiver may be waiting for connection or assignment. | Wait briefly. If it does not connect, unplug and reconnect the receiver. |
| **Green light** | The transceiver may be using Channel 1. | This is normal if the sensors are also using Channel 1. |
| **Blue light** | The transceiver may be using Channel 2. | This is normal if the sensors are also using Channel 2. |
| **Purple light** | The transceiver may be using Channel 3. | This is normal if the sensors are also using Channel 3. |
| **Yellow light** | The transceiver may have stopped broadcasting or may not be communicating correctly. | Check the connection, restart Axis Studio, or reconnect the receiver. |

---

## Common Sensor Problems

| Problem | Possible cause | Fix |
|---|---|---|
| A sensor does not appear in Axis Studio | Sensor is off, battery is low, or receiver is not connected | Turn on the sensor, charge it, and reconnect the receiver |
| A sensor shows low battery | Sensor was not fully charged | Charge all sensors before running Sensor Check again |
| Magnetic status is not good | Sensor is near metal or electronic interference | Move to a non-magnetic table, stool, or open space |
| Avatar body part moves incorrectly | Sensor may be on the wrong body part | Check the Sensor Map and physical placement |
| Left and right sides are reversed | Sensors are placed on the wrong side | Swap the sensors or correct the placement |
| Motion jitters or snaps | Weak signal, loose strap, or interference | Tighten straps, check signal, and move away from interference |
| Avatar drifts after calibration | Sensor shifted or calibration was not accurate | Recheck placement and repeat posture calibration |

---

## Quick Fix Order

If something is not working, try this order:

1. Check that the receiver is plugged in.
2. Check that all sensors are turned on.
3. Check the battery level.
4. Move away from metal or magnetic objects.
5. Check the **Device Detail** panel.
6. Check the **Sensor Map** panel.
7. Tighten or reposition loose sensors.
8. Run **Sensor Check** again.
9. Repeat **Posture Calibration**.
10. Restart Axis Studio if the problem continues.

---

## Realtime Data

Axis Studio can send motion-capture data to other 3D and animation software in real time.

This is useful when you want to:

- Preview the performer’s movement on a character in another program.
- Test live animation workflows.
- Send motion data to a 3D scene.
- Connect motion capture to game engines or visual effects software.

Realtime streaming is more advanced than recording and exporting `.bvh` files. For most class projects, record and export your motion first. Use realtime data only if the instructor asks you to test a live workflow.

---

## Realtime Data Tutorials

### Perception Neuron | Blender Tutorial

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/cUA7KHcJOCo?si=wt-yREjPm69WYoEg"
    title="Perception Neuron | Blender Tutorial"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

### Perception Neuron | Cinema 4D Real-time Streaming Tutorial

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/UryW_N0fxUc?si=4iU-xZP35b1RS8Ys"
    title="Perception Neuron | Cinema 4D Real-time Streaming Tutorial"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

### Perception Neuron | Realtime Mocap with Houdini

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/w4kNOXLRC0A?si=RsqEj33af1cic1xi"
    title="Perception Neuron | Realtime mocap with Houdini"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

### Perception Neuron Studio & Perception Neuron 3 | Real-time Maya Tutorial

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/Fl_RuA_vjxQ?si=Zn-t-rsS0xWSViIn"
    title="Perception Neuron Studio & Perception Neuron 3 | Real-time Maya Tutorial"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

### Perception Neuron Mocap Today - Real-time with Unreal Engine

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/70-bEyGtqDs?si=k7EMSR9VbfPaDvho"
    title="Perception Neuron Mocap Today - Real-time with Unreal Engine"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---