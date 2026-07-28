---
layout: default
title: Exposure Triangle Reference Guide
---

[Photography Tutorials](README.md)

---

# 🌗 Exposure Triangle Reference Guide

**Purpose:** Use this guide to understand how aperture, shutter speed, and ISO work together in Manual mode (`M`) and how each control changes both exposure and the visual appearance of a photograph.

![Quick reference showing the relationship between aperture, shutter speed, ISO, exposure, depth of field, motion blur, and digital noise.](imgs/QuickExposureReference.jpg){: .tutorial-image }

> Exposure is not only about making an image lighter or darker. Each setting also changes how the photograph represents depth, movement, detail, and image quality.

## Related guides and activities

- 📸 [Camera Setup and Aperture Priority Mode](02_Camera_Setup_and_Av_Mode.md)
- 📸 [Additional DSLR Camera Settings](05_Additional_DSLR_Settings.md)
- 📸 [Manual Mode and Shutter Speed](08_Shutter_Priority_and_Movement.md)

---

<!--
/////////////////
SECTION 1
/////////////////
-->

## The three exposure controls

<div class="media-grid media-grid--two">

  <figure class="media-card">
    <img
      src="imgs/FullExposureDiagram.jpg"
      class="tutorial-image"
      alt="Diagram showing how aperture, shutter speed, and ISO affect exposure, depth of field, movement, and image noise."
      loading="lazy"
    >
    <figcaption>
      <strong>Exposure triangle:</strong> Aperture, shutter speed, and ISO work together, but each setting also produces a different visual effect.
    </figcaption>
  </figure>

  <figure class="media-card">
    <img
      src="imgs/QuickExposureReference.jpg"
      class="tutorial-image"
      alt="Quick exposure reference comparing aperture, shutter speed, and ISO values."
      loading="lazy"
    >
    <figcaption>
      <strong>Quick reference:</strong> Use the scales to predict how each setting changes the photograph.
    </figcaption>
  </figure>

</div>

The exposure triangle includes:

- **Aperture:** Controls the size of the lens opening, the amount of light entering through the lens, and depth of field.
- **Shutter speed:** Controls how long the sensor records light and how movement appears.
- **ISO:** Controls how strongly the camera amplifies the captured image signal. Higher ISO values can brighten the recorded image but may increase digital noise.

## What each control changes

| Setting | Exposure effect | Main visual effect |
|---|---|---|
| **Aperture** | Wider openings allow more light; narrower openings allow less light | Depth of field |
| **Shutter speed** | Slower speeds record light for longer; faster speeds record light for less time | Frozen movement or motion blur |
| **ISO** | Higher values amplify the image signal more strongly | Digital noise and image quality |

## Manual mode

In **Manual mode (`M`)**, the camera does not automatically correct the exposure by changing aperture or shutter speed.

You decide:

- How movement should appear
- How much of the scene should remain sharp
- How much signal amplification is acceptable
- Whether the highlights and shadows contain the information required by the composition

Use the exposure meter as a starting estimate and the histogram to evaluate the recorded photograph.

---

## How aperture works

Aperture is written as an **f-number**:

```text
f/2.8
f/4
f/5.6
f/8
f/11
f/16
f/22
```

- A **lower f-number** represents a wider lens opening.
- A **higher f-number** represents a narrower lens opening.

<div class="media-grid media-grid--two">

  <figure class="media-card">
    <img
      src="imgs/aperture-graph.png"
      class="tutorial-image"
      alt="Aperture scale comparing wide and narrow lens openings at different f-numbers."
      loading="lazy"
    >
    <figcaption>
      <strong>Aperture scale:</strong> Lower f-numbers use wider openings; higher f-numbers use narrower openings.
    </figcaption>
  </figure>

  <figure class="media-card">
    <img
      src="imgs/aperture-example.gif"
      class="tutorial-image"
      alt="Animated aperture comparison showing changes in foreground and background sharpness."
      loading="lazy"
    >
    <figcaption>
      <strong>Depth-of-field comparison:</strong> The focus point remains stable while foreground and background sharpness change.
    </figcaption>
  </figure>

</div>

## Aperture and exposure

- A wider aperture allows more light to enter the camera.
- A narrower aperture allows less light to enter the camera.

## Aperture and depth of field

**Depth of field** is the area in front of and behind the focus point that appears acceptably sharp.

- A wider aperture, such as `f/2.8` or `f/4`, generally produces a shallower depth of field.
- A narrower aperture, such as `f/11` or `f/16`, generally produces a deeper depth of field.

Depth of field also depends on:

- Focal length
- Camera distance from the focus point
- Distance between the subject and background
- Sensor size

> Aperture does not work alone. A wide-angle photograph can still have shallow depth of field when the camera is close to the focus point and the background is far away.

## Quick aperture decisions

| Visual goal | Aperture direction |
|---|---|
| Separate a subject from the background | Use a lower available f-number |
| Keep foreground and background more defined | Use a higher f-number |
| Record in lower light without changing shutter speed or ISO | Open the aperture |
| Reduce the amount of light entering through the lens | Close the aperture |

## Variable-aperture lens reminder

The Canon 18–135 mm lens does not provide the same widest aperture at every focal length.

- At wider focal lengths, a lower f-number may be available.
- As the lens zooms toward `135 mm`, the lowest available f-number becomes higher.
- At approximately `50 mm`, the widest aperture is usually close to `f/5`.

Use the lowest value permitted by the camera rather than forcing a value that the lens cannot provide.

</div>
</details>

---

## How shutter speed works

Shutter speed describes how long the camera sensor records light.

<div class="media-grid media-grid--two">

  <figure class="media-card">
    <img
      src="imgs/shutter-speed-graph.webp"
      class="tutorial-image"
      alt="Shutter-speed scale comparing fast and slow shutter speeds and their effects on movement and exposure."
      loading="lazy"
    >
    <figcaption>
      <strong>Shutter-speed scale:</strong> Faster settings freeze movement; slower settings record movement over a longer time.
    </figcaption>
  </figure>

  <figure class="media-card">
    <img
      src="imgs/shutter-speed-example-2.gif"
      class="tutorial-image"
      alt="Animated comparison showing the same moving subject recorded at different shutter speeds."
      loading="lazy"
    >
    <figcaption>
      <strong>Movement comparison:</strong> The amount of visible blur increases as the shutter speed becomes slower.
    </figcaption>
  </figure>

</div>

Common shutter speeds include:

```text
1/1000
1/500
1/250
1/125
1/60
1/30
1/15
1/8
```

- A **fast shutter speed** records a short moment, allows less light to reach the sensor, and can freeze movement.
- A **slow shutter speed** records a longer interval, allows more light to reach the sensor, and can produce motion blur.

## Camera display notation

Fractional shutter speeds usually appear on the camera without `1/`.

| Written value | Camera display | Exposure time |
|---|---:|---:|
| `1/1000` | `1000` | One-thousandth of a second |
| `1/500` | `500` | One-five-hundredth of a second |
| `1/250` | `250` | One-two-hundred-and-fiftieth of a second |
| `1/125` | `125` | One-one-hundred-and-twenty-fifth of a second |
| `1/60` | `60` | One-sixtieth of a second |
| `1/30` | `30` | One-thirtieth of a second |
| `1/15` | `15` | One-fifteenth of a second |
| `1/8` | `8` | One-eighth of a second |

A quotation mark identifies whole seconds:

- `5` means `1/5` second.
- `5"` means `5` seconds.
- `0"5` means `0.5` seconds, equivalent to `1/2` second.

## Subject movement and camera movement

Motion blur may come from:

- **Subject movement:** The subject moves while the camera remains stationary.
- **Camera movement:** The camera moves while the shutter is open.
- **Both:** The subject and camera move during the exposure.

When testing subject movement:

> Keep the camera stationary on a tripod. Do not move the tripod, reframe, change focal length, or refocus during the sequence. Only the subject should move.

## Quick shutter-speed decisions

| Visual goal | Shutter-speed direction |
|---|---|
| Freeze rapid movement | Use a faster shutter speed |
| Show motion blur | Use a slower shutter speed |
| Reduce camera shake when working handheld | Use a faster shutter speed |
| Record more light without changing aperture or ISO | Use a slower shutter speed |
| Record movement naturally at `30 fps` video | Begin at `1/60` |

> For video recorded at `30 fps`, `1/60` is a standard starting point. Change it only when a different rendering of movement is intentional.

---

## How ISO works

ISO controls how strongly the camera amplifies the captured image signal.

Common values include:

```text
ISO 100
ISO 200
ISO 400
ISO 800
ISO 1600
ISO 3200
```

<div class="media-grid media-grid--two">

  <figure class="media-card">
    <img
      src="imgs/ISO-and-effective-exposure.gif"
      class="tutorial-image"
      alt="Animated comparison showing how increasing ISO changes the recorded brightness of a photograph."
      loading="lazy"
    >
    <figcaption>
      <strong>ISO and recorded brightness:</strong> Higher values amplify the captured image signal more strongly.
    </figcaption>
  </figure>

  <figure class="media-card">
    <img
      src="imgs/ISO-digital-noise.gif"
      class="tutorial-image"
      alt="Magnified ISO comparison showing increased digital noise at higher ISO values."
      loading="lazy"
    >
    <figcaption>
      <strong>ISO and digital noise:</strong> Higher values can make grain-like colour and brightness variations more visible.
    </figcaption>
  </figure>

</div>

## ISO and image quality

- Lower ISO values generally produce cleaner files with less visible digital noise.
- Higher ISO values can make noise more visible, especially in shadows and flat areas.
- Higher ISO does not increase the amount of light entering the camera.
- ISO should support the required aperture and shutter speed rather than replace intentional lighting and exposure decisions.

## Quick ISO decisions

| Situation | ISO approach |
|---|---|
| Bright outdoor light | Begin at `ISO 100` or `ISO 200` |
| Open shade or moderate indoor light | Begin around `ISO 400` |
| Low light when aperture and shutter speed cannot change | Increase to `ISO 800` or `ISO 1600` when necessary |
| Technical comparison | Keep ISO unchanged unless ISO is the setting being tested |
| Important shadow detail | Avoid severe underexposure that must be heavily brightened during editing |

> Use the lowest ISO that supports the required aperture, shutter speed, and exposure. Do not preserve a low ISO when it produces an unusably dark image.

</div>
</details>

---

## Metering

Metering is the camera system that measures the brightness of the scene and estimates an exposure.

Use **Evaluative Metering** as a starting point.

The meter may be influenced by:

- Bright skies
- Pale concrete
- Reflective surfaces
- Large shadowed areas
- Dark backgrounds
- Strong backlighting

The meter is an estimate rather than an automatic answer. Compare it with the visible image and histogram.

---

## Histogram

![Camera display showing an exposure histogram](imgs/ExposureHistogram.png){: .tutorial-image }

The histogram shows how brightness values are distributed:

- **Left:** Shadows and darker values
- **Centre:** Midtones
- **Right:** Highlights and brighter values

The histogram does not need to be centred. Its shape depends on the subject, lighting, background, and intended brightness of the photograph.

Use it to identify:

- A strong pile-up against the left edge that may indicate blocked shadows
- A strong pile-up against the right edge that may indicate clipped highlights
- Whether important tonal information is retained
- How exposure changes when aperture, shutter speed, or ISO changes

## Histogram workflow in Manual mode

After taking a test photograph:

1. Review the visible image.
2. Display the histogram.
3. Identify important highlights and shadows.
4. Check whether the graph is pressed against either edge.
5. Decide which visual control can change:
   - Aperture, when depth of field can change
   - Shutter speed, when movement rendering can change
   - ISO, when aperture and shutter speed must remain fixed
6. Take another test photograph.
7. Recheck the histogram before beginning the final sequence or project.

</div>
</details>

---

## Quick solutions for common situations

| Situation | First control to consider | Additional adjustment |
|---|---|---|
| Moving subject appears blurred unintentionally | Use a faster shutter speed | Open the aperture or increase ISO when the image becomes too dark |
| Photograph is too dark but motion must remain frozen | Keep the fast shutter speed | Open the aperture, then increase ISO when necessary |
| Photograph is too bright in strong daylight | Use a faster shutter speed or narrower aperture | Reduce ISO to `100` |
| Background is too sharp | Open the aperture | Move closer to the subject or increase subject-to-background distance |
| Too little of the scene is sharp | Close the aperture | Use a wider focal length or move farther from the focus point |
| Handheld image shows camera shake | Use a faster shutter speed | Turn Image Stabilization on and increase ISO when necessary |
| Tripod photograph is soft | Turn Image Stabilization off | Use the self-timer and confirm focus |
| Digital noise is distracting | Reduce ISO | Add light, open the aperture, or use a slower shutter speed when possible |
| Highlights are clipped | Reduce exposure | Use a faster shutter speed, narrower aperture, or lower ISO |
| Shadows are blocked | Increase exposure when shadow detail is required | Use a slower shutter speed, wider aperture, or higher ISO |

> Always protect the information required by the composition. A dark scene may correctly contain deep shadows, and a bright scene may correctly contain strong highlights.

---

Credits: Jessica A. Rodríguez
