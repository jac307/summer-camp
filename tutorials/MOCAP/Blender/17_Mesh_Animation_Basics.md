[Blender Tutorials](README.md)

---

# 🕹️ Mesh Animation Basics

**Objective:** Use the timeline to animate mesh movements and export short video clips.

---

## 🔧 Tools You’ll Use

| **Action**               | **Shortcut / Location**                  | **Purpose / Use**                                              |
|--------------------------|-------------------------------------------|----------------------------------------------------------------|
| **Set Keyframe**         | `I` (in 3D Viewport)                     | Insert keyframes for location, rotation, scale, or all         |
| **Play / Pause**         | `Spacebar`                               | Play or pause the animation in the timeline                    |
| **Move to Next Frame**   | `Right Arrow`                            | Advance one frame forward                                      |
| **Move to Previous Frame**| `Left Arrow`                            | Go back one frame                                              |
| **Timeline Panel**       | Bottom of interface                      | View and manage keyframes and playback                         |
| **Dope Sheet**           | Editor Type Dropdown → Dope Sheet        | See and adjust keyframe timing and spacing                     |
| **Graph Editor**         | Editor Type Dropdown → Graph Editor      | Fine-tune animation curves (e.g. ease in/out)                  |
| **Delete Keyframe**      | `Alt + I`                                | Remove keyframe from selected property                         |
| **Render Animation**     | `Ctrl + F12` or `Render → Render Animation` | Export animation to video                                    |
| **Save File**            | `File → Save As`                         | Save your Blender project file                                 |

---

## Step 1: Follow the Tutorial (10 minutes)

- Watch the first **10 minutes only** of this YouTube video.
- **Your goal**: Animate a cube using keyframes (location, rotation, and/or scale).
- **Tip**: Use the timeline at the bottom of your screen to add and view keyframes.
- Save your Blender file as: `YourName_AnimatedObject.blend`

<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/CBJp82tlR3M?si=FtOz4SfgG9wkrnhU"
    title="Animation for Beginners"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## Step 2: Animate Your Own Object

Now it’s your turn!

1. Choose one object from your scene (or create a new one).
2. Animate your object using:
   - **Location** (movement)
   - **Rotation**
   - **Scale**
3. Use at least **three keyframes** to create your animation.
4. Preview your animation using the Play button (`Spacebar`) or timeline.

---

## Step 3: Export Your Animation as a Video

1. Go to the **Output Properties** tab (printer icon in the Properties Panel).
2. Set the **frame range** (e.g. 1–60 for a 2-second animation).
3. Under **Output**, choose a location to save and set the file format to `FFmpeg video`.
4. In the **Encoding** section (appears when FFmpeg is selected):
   - Set **Container** to `MPEG-4`
   - Set **Video Codec** to `H.264`
5. Go to **Render → Render Animation** (`Ctrl + F12`).
6. Once done, your video file will be saved in the selected folder.


<div style="width: 70vw; max-width: 100%; aspect-ratio: 16 / 9; margin: 1rem auto;">
  <iframe
    src="https://www.youtube.com/embed/3eJmISziyIY?si=ZCpno06akClY-OWQ"
    title="Export as an MP4 video"
    style="width: 100%; height: 100%; border: 0;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

---

## 💾 Save Your Work
- Save your video as: `YourName_Animation.mp4`

---

## 📝 Reflection Questions (Optional)

- What did you find easy or hard about animating in Blender?
- What movement or effect would you like to try next?

---

## What is next?

Once you finish animating various objects in your scene, continue with 🕹️ [Camera Animation Basics](18_Camera_Animation_Basics.md)

---


