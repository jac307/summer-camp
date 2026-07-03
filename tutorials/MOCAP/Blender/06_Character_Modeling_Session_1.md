---
layout: default
title: Motion Capture and Animation Foundations
---

[Blender Tutorials](README.md)

---

# 👾 Character Modelling — Session 1

---

## 🎯 Objective

Translate your character sketch into a 3D model in Blender using one of the modelling approaches introduced in class.

Focus on:

- Building your character in a clear **T-pose**
- Maintaining the proportions and silhouette of your sketch
- Using symmetry to create the left and right sides of the body
- Starting with simple forms before adding details

Follow the steps in order and save your work regularly.

---

## 🧍 Model Your Character in a T-Pose

Your character must be modelled in a **T-pose** so it can be prepared for rigging, motion capture, and animation later.

A T-pose is a neutral position in which the character:

- Faces forward
- Stands upright
- Extends both arms horizontally to the sides
- Keeps space between the arms and the torso
- Keeps both legs separated
- Keeps the head centred and facing forward
- Avoids overlapping body parts

![T-Pose](imgs/Tpose.jpg){: .tutorial-image }

Use the front, side, and perspective views to check that the character is balanced in three-dimensional space.

---

## First, Review Your Sketch

Look at your character drawing and its breakdown into geometric shapes.

Ask yourself:

- What is the main shape of the torso?
- Which shapes will become the head, arms, hands, legs, and feet?
- Is the character mostly symmetrical?
- Can its personality still be recognized while it is standing in a T-pose?
- Is the character more geometric or more organic?

Choose one of the following approaches:

- If your character is made from clear shapes such as cubes, spheres, cones, and cylinders, use **Path 🅰️**.
- If your character has a connected body with curved limbs, use **Path 🅱️**.

---

## 💡 Pro Tips

- Use **Path A** for robots, abstract beings, and characters made from separate geometric parts.
- Use **Path B** for humanoid, animal-like, or organic characters with connected limbs.
- Begin with the largest body parts before adding smaller features.
- Model only one side when using the **Mirror Modifier**.
- Keep your model low-poly and simple.
- Check the character from the front, side, and back.
- Do not add a complex pose yet. Keep the character in a T-pose.
- Ask for help when choosing a modelling method or applying a modifier.

---

<details class="software-section">
<summary class="software-title"><strong>🅰️ Path A: Geometric Modelling with Basic Shapes and Modifiers</strong></summary>  

<div markdown="1">

> Best for: **robots, abstract beings, and simple creatures made from separate shapes**

## Step 1: Identify the Main Shapes

Review your sketch and decide which primitive will represent each body part.

For example:

- Sphere for the head
- Cube or sphere for the torso
- Cylinders for the arms and legs
- Smaller spheres for joints
- Cubes or flattened spheres for hands and feet
- Cones for horns, ears, spikes, or other features

Begin with the torso because it will help you position the rest of the body.

---

## Step 2: Build the Main Body

1. Open Blender.
2. Delete the default cube if you do not need it.
3. Add your first primitive:

   `Shift + A → Mesh → Choose a shape`

4. Move and scale the shape to create the torso.
5. Add another primitive for the head.
6. Add shapes for the arms and position them horizontally.
7. Add shapes for the legs and leave space between them.
8. Add hands, feet, or other major features.
9. Check the character from the front and side views.

---

## Step 3: Maintain the T-Pose

As you build, check that:

- Both arms form a straight horizontal line
- The arms do not touch the torso
- The hands point away from the body
- The legs are separated
- The feet point forward
- The head is centred above the torso
- The left and right sides are balanced
- No body parts overlap

Do not bend the elbows, knees, or torso during this session.

---

## Step 4: Use These Tools

| Tool | Shortcut | Use |
|---|---|---|
| Add Object | `Shift + A` | Add cubes, spheres, cylinders, and other primitives |
| Select Object | Left Click | Select the object you want to edit |
| Move | `G` | Change an object’s position |
| Rotate | `R` | Change an object’s orientation |
| Scale | `S` | Change an object’s size or proportions |
| Duplicate | `Shift + D` | Create a copy of an object |
| Delete | `X` | Remove an object |
| Join Objects | `Ctrl + J` | Combine selected meshes into one object |
| Shade Smooth | Right-click → Shade Smooth | Soften the appearance of a surface |
| Toggle Snapping | `Shift + Tab` | Help align objects |

---

## Step 5: Use Modifiers

| Modifier | How to Access | Use |
|---|---|---|
| Mirror | Modifiers Tab | Create a symmetrical copy of one side |
| Subdivision Surface | Modifiers Tab | Smooth and round a shape |
| Array | Modifiers Tab | Repeat an object |
| Boolean | Modifiers Tab | Combine, intersect, or subtract shapes |
| Solidify | Modifiers Tab | Give thickness to a flat object |
| Wireframe | Modifiers Tab | Turn a surface into a wire-like structure |

The **Mirror Modifier** is especially helpful for maintaining a symmetrical T-pose.

---

## Tutorial

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/zRsLUXSTN_U?si=mbwgRH-vGkSSFE1G"
    title="Geometric character modelling tutorial"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

</div>
</details>

<details class="software-section">
<summary class="software-title"><strong># 🅱️ Path B: Organic Modelling with the Skin Modifier</strong></summary>  

<div markdown="1">

> Best for: **humanoid or animal-like characters with connected limbs**

In this method, you will build a simple line-like structure from connected vertices. The **Skin Modifier** will wrap a three-dimensional surface around this structure.

---

## Step 1: Plan the Character Structure

Use your sketch to identify the central structure of the character:

- Head
- Neck
- Torso
- Shoulders
- Arms
- Hands
- Hips
- Legs
- Feet

Begin with the centre of the body, then extend outward toward the arms and legs.

---

## Step 2: Build the Character in a T-Pose

1. Begin with a single vertex.
2. Extrude upward to create the torso, neck, and head.
3. Extrude sideways from the shoulders to create one arm.
4. Keep the arm horizontal.
5. Use the **Mirror Modifier** to create the arm on the opposite side.
6. Extrude downward from the hips to create the legs.
7. Keep visible space between the legs.
8. Check the model from the front and side views.
9. Adjust the thickness of each body section.
10. Add the Skin and Subdivision Surface modifiers.

The character must remain upright and facing forward.

---

## Tools You Will Use

| Tool | Purpose |
|---|---|
| **Single Vertex** | Creates the starting point for the character structure |
| **Extrude — `E`** | Extends connected vertices to create the torso and limbs |
| **Move — `G`** | Positions vertices and adjusts proportions |
| **Skin Modifier** | Builds a three-dimensional surface around the connected vertices |
| **Skin Resize — `Ctrl + A` in Edit Mode** | Adjusts the thickness of selected parts |
| **Mirror Modifier** | Creates a symmetrical opposite side |
| **Subdivision Surface** | Smooths the character’s form |
| **Shade Smooth** | Softens the appearance of the surface |

---

## T-Pose Checklist for Path B

Before continuing, make sure:

- The centre line of the body is straight
- The shoulders are level
- Both arms are horizontal
- Both arms are approximately the same length
- The legs extend downward with space between them
- The head is centred
- The body is symmetrical
- The character faces forward
- The elbows and knees are not bent

---

## Tutorial

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/DAAwy_l4jw4?si=5kIERwnWNljiJ1sa&amp;start=75"
    title="Organic character modelling with the Skin Modifier"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

</div>
</details>

---

## ✅ Final Model Check

Before saving, check your character from several angles.

### T-Pose

- Is the character standing upright?
- Are both arms extended horizontally?
- Is there space between the arms and torso?
- Are the legs separated?
- Is the head facing forward?
- Are the left and right sides balanced?

### Character Design

- Does the model resemble your original sketch?
- Is the silhouette easy to recognize?
- Are the proportions intentional?
- Can you identify the character’s personality or identity?
- Are the main body parts easy to distinguish?
- Have you avoided unnecessary details?

---

## 💾 File Saving

1. Go to **File → Save As**.
2. Name your file:

   `YourName_Tuesday.blend`

3. Save the file to your assigned class folder or USB.
4. Confirm that the file opens correctly before closing Blender.

---

## 📝 Reflection

Consider the following questions:

- How did your drawing change when you translated it into a 3D model?
- Which modelling approach did you use, and why?
- Which design feature communicates your character’s personality most clearly?
- What was challenging about maintaining the T-pose?
- What would you refine or add during the next modelling session?

---