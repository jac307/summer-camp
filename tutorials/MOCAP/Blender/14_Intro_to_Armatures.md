[Blender Tutorials](README.md)

---

# 🦴 Intro to Armatures (Rigging)

**Goal:** Learn the basics of armatures and rigging in Blender by working in a small armature. 

---

## 🦴 What is Rigging?

**Rigging** is the process of creating a digital skeleton (called an *armature*) for a 3D model so it can move. Each "bone" in the armature controls part of the model, allowing artists to pose and animate characters or objects. Rigging connects the static mesh to this bone structure using *weight painting*, which determines how much each bone influences nearby parts of the model. It's a key step for bringing 3D characters to life in animation and games.

---

## 🔧 Tools You’ll Use

| **Tool / Feature**         | **Shortcut / Location**                   | **Purpose / Use**                                               |
|---------------------------|--------------------------------------------|-----------------------------------------------------------------|
| **New Blender File**       | `File → New → General`                    | Start fresh to practice armatures                               |
| **Add Armature**           | `Shift + A → Armature → Single Bone`      | Add the first bone to start building a skeleton                 |
| **Edit Mode**              | `Tab`                                     | Switch to edit bone structure                                   |
| **Extrude Bone**           | `E`                                       | Extend the armature by adding connected bones                   |
| **Bone Tab**               | Properties Panel → Bone icon              | Rename and adjust individual bones                              |
| **Apply Armature Modifier**| Properties Panel → Modifiers tab          | Apply armature to the mesh (after parenting)                    |
| **Parent to Armature**     | Select mesh, then armature → `Ctrl + P` → With Automatic Weights | Bind the mesh to the skeleton                                   |
| **Weight Paint Mode**      | Select mesh → Mode dropdown → Weight Paint| Adjust how bones influence parts of the mesh                    |
| **Pose Mode**              | Select armature → Mode dropdown or `Ctrl + Tab` | Pose your character by rotating bones                    |
| **Rotate Bone**            | `R`                                       | Rotate bones for posing                                         |
| **Viewport Navigation**    | `Scroll`, `MMB`, `Shift + MMB`            | Zoom, rotate, and pan your scene                                |
| **Camera + Lighting**      | `Shift + A → Camera / Light`              | Add camera and lights for rendering poses                       |
| **Render Image**           | `F12`                                     | Render a still image from your scene                            |
| **Save Render**            | `Image → Save As` (in Render window)      | Save a .png or .jpg from the rendered image                     |
| **File Save**              | `File → Save As`                          | Save your .blend file with a clear name                         |


---

## Learn the Basics of Armatures

**Open a New Blender File**  
- Go to `File → New → General`  
- Save as: `YourName_ArmaturePractice.blend`

**Watch and follow this tutorial** 

Follow along in Blender and try:
- Adding an armature: `Shift + A → Armature → Single Bone`
- Going into Edit Mode to add more bones (`Tab`)
- Extruding (`E`) to add limbs
- Switching between **Edit**, **Pose**, and **Object** Modes

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/gdOaUv0_TC8?si=lY-v3eS2EEH05ESC"
    title="Blender Bones For Beginners"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

### More on Weight Painting in Blender

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/SCWZr-It1bE?si=XcuTrHcMCQjnLu1I"
    title="Weight Painting in Blender"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## What is next?

Once you finish, continue with 🦴 [Rig your character for a Pose](15_Character-Rig.md)

---

