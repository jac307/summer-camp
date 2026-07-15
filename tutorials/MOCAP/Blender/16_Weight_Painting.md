[Blender Tutorials](README.md)

---

# 🖍️ Tips for Weight Painting in Blender

---

## What is Weight Painting?

**Weight Painting** is the process of defining how much influence each bone in an armature has over the vertices of a 3D mesh. By painting different levels of "influence" (weights) onto the surface of your model, you control how it deforms when posed or animated. This is especially important for characters or creatures, where smooth, natural movement depends on well-balanced weights across joints like shoulders, elbows, and knees.

---

## 🔧 Modes You’ll Use

| **Mode**               | **Shortcut**                                                           |
|------------------------|------------------------------------------------------------------------|
| Pose Mode              | `Ctrl + Tab` while the armature is selected                            | 
| Weight Paint Mode      | Select the mesh, then select the armature, and then press `Ctrl + Tab` |

---

## Tips for Weight Painting in Blender

---

### On Object Mode:

#### Erase Default Weight Painting (Start from Scratch)

If Blender’s automatic weight painting doesn’t work well, reset and start manually:

1. Select your **Mesh**, go to the **Object Data Properties** tab (green icon with 3 connected dots).  
2. In **Vertex Groups**, delete all the groups.  
3. Go to the **Modifiers** tab and remove the **Armature Modifier**.  
4. Re-parent: Select the **Mesh**, then `Shift + Click` the **Armature.
5. Press `Ctrl + P`, choose **With Empty Groups**.  
6. Confirm that the **Armature Modifier** and all bones now appear again in the **Vertex Groups** list.  
7. Select the **Armature**, then `Shift + Click` the **Mesh**, and switch to **Weight Paint Mode**.  
→ Each bone will have no influence — paint only where needed.

---

### On Weight Paint Mode:

#### Enable Projected Falloff

Select the **Brush**, then go to **Tool Settings → Settings → Falloff**, and choose **Projected**.  
→ This makes painting more accurate over complex or hidden surfaces.


#### Use Mirror Painting

In the same **Tool Settings**, go to the **Mirror** section and enable **X-Axis Mirror**.  
→ Useful only for symmetrical characters (e.g. left and right arms/legs).


<!-- #### Use Auto Normalize

In **Tool Settings → Options**, turn on **Auto Normalize**.  
→ Prevents overlapping or uneven influence by ensuring all vertex weights total 1.0. -->

---

### Pose and Refine

Switch to **Pose Mode**, adjust your rig to try different positions, then return to **Weight Paint Mode**.  
→ This allows you to reach and fix hard-to-paint areas based on realistic deformations.

**Using a MOCAP (animated) armature?**  
Scrub through the **timeline** to find a specific pose, then switch back to **Weight Paint Mode**.  
→ This lets you see how your weights behave during motion and refine them at problem frames.

---

## More information on Weight Painting

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/tUIIauuXveE?si=sFluA-G-db_YvBA-"
    title="Weight Painting in Blender"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---
