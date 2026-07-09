[Blender Tutorials](README.md)

---

# 🦴 Rig your character for a Pose

**Goal:** Rig your character by adding an armature (bones) to your character, pose them, and create expressive still shots using camera and lighting.  

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

## Step 1: Add Bones to Your Character

Check 🦴 [Introduction to Armatures and Rigging](14_Intro_to_Armatures.md){:target="_blank"}

**Open Your Character File**  
- File → Open → `YourName_Character.blend`

🦴 **Add an Armature**
- `Shift + A → Armature → Single Bone`
- Enter **Edit Mode** (`Tab`) to build your skeleton --use wireframeview
- Select one end of the Bone, then use `E` to extrude more bones
- Follow the tutorial to learn how to link your object to your armature and go into **Pose Mode**. 

Think about the shape of your character:
- Robot or blocky? You may only need a few bones.
- Humanoid or organic? Add a basic spine, arms, and legs.
- Unusual shape? Be creative with the rig!

### Rig and Animate Character

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/SqnhLzPw8Kc?si=8-yDlE5celFgs9rg&amp;start=143"
    title="Rig and Animate Character"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

### Character Rigging in Blender

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/2nlMZx0vp6E?si=pvxFyvKawCh5Ntq5&amp;start=143"
    title="Character Rigging in Blender"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

### Possible solution to the problem of character not moving after applying armature as parent

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/s2BkEVxUXKE?si=k-yHv7tw2cp6jHXA"
    title="Blender bone rig wont attach to mesh"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

### How to connect the separated bones in blender

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/DKCPY1wsW90?si=EUDds3k7770k75ss"
    title="How to connect the separated bones in blender"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## Step 3: Weight Paint your bones

- Select your armature, then your model and switch to **Weight Paint Mode**.
- Select each point and paint over the areas you want that bone to affect.
- Check: [🖍️ Tips for Weight Painting in Blender](15_Weight_Painting.md){:target="_blank"}

---

## Step 4: Pose and Capture Your Character

👾 **Pose Your Character**
- Select your model, then your armature and switch to **Pose Mode**.
- Use `R` (rotate) to change bone angles
- Experiment with expressive poses
- ⚠️ For now, just pose your character. **Don’t animate with armatures yet**.

📷 **Set Up a Camera and Lights**
- Add or adjust camera angle and lighting (use earlier guides)

💾 **Render Still Images**
- Use `F12` to render a single shot
- Save as `.png`: `Image → Save As`

🎯 Try rendering 2–3 different poses!

### Blender - Save Render as Image

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/YtRpBj_T07Q?si=hLa5lY-l56yf09Wk&amp;start=143"
    title="Blender - Save Render as Image"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## 💡 Tips
- Keep bones simple—this is just a pose, ⚠️ **not full animation**
- Zoom in/out with `Scroll`, rotate with `Middle Mouse`, pan with `Shift + Middle Mouse`
- Use the **Bone tab** to rename or tweak bones
- If your mesh doesn’t move with the bones, don’t worry—we’re focusing on visual posing for now

---

