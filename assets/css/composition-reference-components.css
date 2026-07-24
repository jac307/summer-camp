/* =========================================================
   Photography composition reference
   Reusable click-to-reveal image cards
   ========================================================= */

.photography-examples {
  display: grid;
  gap: 2rem;
  margin: 1.5rem 0 2rem;
}

.photography-example-row {
  min-width: 0;
}

.photography-example-row > h3 {
  margin-bottom: 0.75rem;
}

.photography-example-row__images,
.composition-example-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.composition-example-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 1.5rem 0;
}

.photo-reveal-card {
  min-width: 0;
  position: relative;
}

.screen-reader-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.photo-reveal-card__image {
  position: relative;
  display: block;
  overflow: hidden;
  border: 2px solid #444444;
  border-radius: 8px;
  background: #111111;
  cursor: pointer;
}

.photo-reveal-card__image img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
}

.photography-examples--sixteen-nine .photo-reveal-card__image img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.photo-reveal-card__title,
.photo-reveal-card__prompt {
  position: absolute;
  left: 0.65rem;
  right: 0.65rem;
  padding: 0.4rem 0.55rem;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.78);
  color: #ffffff;
}

.photo-reveal-card__title {
  top: 0.65rem;
  font-weight: 700;
}

.photo-reveal-card__prompt {
  bottom: 0.65rem;
  text-align: center;
  font-weight: 600;
}

.photo-reveal-card__description {
  display: none;
  margin: 0;
  padding: 0.85rem 1rem;
  border: 2px solid #444444;
  border-top: 0;
  border-radius: 0 0 8px 8px;
  background: #f5f5f5;
}

.photo-reveal-card__toggle:checked
  + .photo-reveal-card__image
  + .photo-reveal-card__description {
  display: block;
}

.photo-reveal-card__toggle:checked
  + .photo-reveal-card__image
  .photo-reveal-card__prompt {
  display: none;
}

.photo-reveal-card__toggle:focus-visible
  + .photo-reveal-card__image {
  outline: 4px solid #1a73e8;
  outline-offset: 3px;
}

.photo-reveal-card__image:hover {
  border-color: #111111;
}

@media (max-width: 760px) {
  .photography-example-row__images,
  .composition-example-grid {
    grid-template-columns: 1fr;
  }
}

@media print {
  .photo-reveal-card__description {
    display: block;
  }

  .photo-reveal-card__prompt {
    display: none;
  }
}
