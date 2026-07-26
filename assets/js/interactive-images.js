document.addEventListener("DOMContentLoaded", () => {
  const interactiveImages = document.querySelectorAll(
    "[data-interactive-image]"
  );

  interactiveImages.forEach((interactiveImage) => {
    const hotspots = interactiveImage.querySelectorAll(
      ".image-hotspot[data-target]"
    );

    const panels = interactiveImage.querySelectorAll(
      ".image-information-panel"
    );

    function showPanel(selectedHotspot) {
      const targetId = selectedHotspot.dataset.target;
      const targetPanel = interactiveImage.querySelector(
        `#${CSS.escape(targetId)}`
      );

      if (!targetPanel) {
        return;
      }

      hotspots.forEach((hotspot) => {
        const isSelected = hotspot === selectedHotspot;

        hotspot.classList.toggle("is-active", isSelected);
        hotspot.setAttribute(
          "aria-pressed",
          isSelected ? "true" : "false"
        );
      });

      panels.forEach((panel) => {
        panel.hidden = panel !== targetPanel;
      });
    }

    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("click", () => {
        showPanel(hotspot);
      });
    });
  });
});


document.querySelectorAll("[data-interactive-reference]").forEach((component) => {
  const buttons = component.querySelectorAll("[data-reference-button]");
  const contents = component.querySelectorAll("[data-reference-content]");

  const showContent = (itemName) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.referenceButton === itemName;

      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    contents.forEach((content) => {
      const isActive = content.dataset.referenceContent === itemName;

      content.classList.toggle("is-active", isActive);
      content.hidden = !isActive;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showContent(button.dataset.referenceButton);
    });
  });

  const defaultItem =
    component.dataset.defaultItem ||
    buttons[0]?.dataset.referenceButton;

  if (defaultItem) {
    showContent(defaultItem);
  }
});
