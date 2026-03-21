# AOS Animation Reference Guide

## 🎬 Animation Overview

AOS (Animate On Scroll) is a JavaScript library that triggers CSS animations when elements come into view during scrolling. All animations in this portfolio use AOS for a professional, smooth reveal effect.

## 📚 Core Attributes

### data-aos
Specifies the animation type to apply.

**Available Animations:**
```html
<!-- Fade Effects -->
<div data-aos="fade">Content fades in</div>
<div data-aos="fade-up">Content fades in while moving up</div>
<div data-aos="fade-down">Content fades in while moving down</div>
<div data-aos="fade-left">Content fades in from right (moving left)</div>
<div data-aos="fade-right">Content fades in from left (moving right)</div>

<!-- Zoom Effects -->
<div data-aos="zoom-in">Content scales up while fading in</div>
<div data-aos="zoom-in-up">Content scales up and moves up</div>
<div data-aos="zoom-in-down">Content scales up and moves down</div>
<div data-aos="zoom-in-left">Content scales up and moves left</div>
<div data-aos="zoom-in-right">Content scales up and moves right</div>

<!-- Flip Effects -->
<div data-aos="flip-left">Flips from right side</div>
<div data-aos="flip-right">Flips from left side</div>

<!-- Slide Effects -->
<div data-aos="slide-up">Slides up into view</div>
<div data-aos="slide-down">Slides down into view</div>
<div data-aos="slide-left">Slides from right</div>
<div data-aos="slide-right">Slides from left</div>
```

### data-aos-duration
Controls animation speed in milliseconds (default: 400ms)

```html
<!-- Our portfolio uses 800-1200ms for smooth reveals -->
<div data-aos="fade-up" data-aos-duration="800">Fast animation</div>
<div data-aos="fade-up" data-aos-duration="1200">Slower animation</div>
<div data-aos="fade-up" data-aos-duration="2000">Very slow animation</div>
```

### data-aos-delay
Delays animation start in milliseconds (default: 0ms)

```html
<!-- Create staggered effects with delays -->
<div data-aos="fade-up" data-aos-delay="0">First item (no delay)</div>
<div data-aos="fade-up" data-aos-delay="100">Second item (100ms delay)</div>
<div data-aos="fade-up" data-aos-delay="200">Third item (200ms delay)</div>
<div data-aos="fade-up" data-aos-delay="300">Fourth item (300ms delay)</div>
```

### data-aos-offset
Distance from viewport bottom to trigger animation (default: 120px)

```html
<!-- Trigger animation before element reaches viewport -->
<div data-aos="fade-up" data-aos-offset="50">Trigger earlier (50px)</div>
<div data-aos="fade-up" data-aos-offset="100">Standard offset (100px)</div>
<div data-aos="fade-up" data-aos-offset="200">Trigger later (200px)</div>
```

### data-aos-easing
Animation easing curve (default: ease-in-out)

```html
<!-- Our portfolio uses 'ease-in-out-cubic' for smooth motion -->
<div data-aos="fade-up" data-aos-easing="ease-in-out">Smooth easing</div>
<div data-aos="fade-up" data-aos-easing="ease-in-cubic">Cubic ease-in</div>
<div data-aos="fade-up" data-aos-easing="ease-out-quad">Quad ease-out</div>
<div data-aos="fade-up" data-aos-easing="ease-in-out-cubic">Cubic ease-in-out</div>
```

### data-aos-once
Whether animation should happen only once (default: false)

```html
<!-- Animation happens only once on first scroll -->
<div data-aos="fade-up" data-aos-once="true">Animate once</div>

<!-- Animation happens every time element enters viewport -->
<div data-aos="fade-up" data-aos-once="false">Animate every time</div>
```

### data-aos-mirror
Whether animation should reverse when scrolling back (default: true)

```html
<!-- Animation reverses when scrolling up -->
<div data-aos="fade-up" data-aos-mirror="true">Reverse on scroll up</div>

<!-- Animation does not reverse -->
<div data-aos="fade-up" data-aos-mirror="false">No reverse</div>
```

## 🎨 Portfolio Animation Patterns

### 1. Section Headers (Staggered Reveal)
```tsx
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
  {/* Badge */}
</div>
<h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
  Heading
</h2>
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
  {/* Divider */}
</div>
```

### 2. Text Content (Paragraph Reveals)
```tsx
<p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
  First paragraph
</p>
<p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
  Second paragraph
</p>
```

### 3. Cards/Elements (Zoom Effects)
```tsx
<div data-aos="zoom-in" data-aos-duration="800" data-aos-delay={200 + idx * 100}>
  Card content
</div>
```

### 4. Lists (Individual Item Reveals)
```tsx
{items.map((item, idx) => (
  <div
    key={idx}
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay={300 + idx * 100}
  >
    {item}
  </div>
))}
```

### 5. Images (Zoom with Content)
```tsx
<img
  data-aos="zoom-in"
  data-aos-duration="1000"
  data-aos-delay="150"
  src={...}
/>
<div
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="200"
>
  Content beside image
</div>
```

## 🎯 Portfolio Timing Strategy

Our portfolio uses a carefully planned timing strategy:

### Hero Section
```
Welcome tag:    delay="100"   (appears first)
Main heading:   delay="300"   (after welcome)
Subtitle:       delay="400"   (after heading)
Stats:          delay="500"   (after subtitle)
CTA buttons:    delay="600"   (after stats)
Tech cards:     delay="800+"  (appears last)
```

### Standard Section Pattern
```
Section tag:    delay="100"   (appears first)
Heading:        delay="200"   (200ms after)
Divider:        delay="300"   (300ms after)
Content:        delay="300"   (with content)
Elements:       delay="300+"  (staggered by 100ms each)
```

## 💡 Best Practices

### DO ✅
```tsx
// ✅ Use consistent timing across sections
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">

// ✅ Stagger child elements
{items.map((item, idx) => (
  <div data-aos="zoom-in" data-aos-delay={200 + idx * 100}>

// ✅ Use appropriate animations for content type
// Text: fade-up, Image: zoom-in, Cards: zoom-in-up
```

### DON'T ❌
```tsx
// ❌ Don't use extremely fast animations
<div data-aos="fade-up" data-aos-duration="100">

// ❌ Don't over-delay elements (more than 1000ms)
<div data-aos="fade-up" data-aos-delay="2000">

// ❌ Don't use same delay for all items (no stagger)
{items.map((item) => (
  <div data-aos="fade-up" data-aos-delay="200">
```

## 🔧 Customization Examples

### Change All Animation Durations
Edit `components/aos-initializer.tsx`:
```typescript
AOS.init({
  duration: 1000,  // Change from 800 to 1000ms
  // ... rest of config
})
```

### Create Slower Section
```tsx
<section data-aos="fade-up" data-aos-duration="1500">
  Entire section animates slowly
</section>
```

### Create Fast List
```tsx
{items.map((item, idx) => (
  <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay={idx * 50}>
    {item}
  </div>
))}
```

### Disable Animation for Specific Element
```tsx
// Remove all data-aos attributes to skip animation
<div>This won't animate</div>
```

## 📊 Our Current Portfolio Animations

| Section | Animation | Duration | Delay Range | Count |
|---------|-----------|----------|------------|-------|
| Hero | fade-up, zoom-in | 800-1200ms | 100-800ms | 7+ |
| About | fade-up, zoom-in | 1000ms | 200-600ms | 8+ |
| Skills | zoom-in | 1000ms | 200-500ms | 3+ |
| Projects | zoom-in, fade-up | 1000ms | 150-400ms | 6+ |
| Contact | zoom-in, fade-up | 800-1000ms | 200-600ms | 5+ |

## 🎬 Common Patterns in Our Portfolio

### Feature Card Reveal
```tsx
<div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="150">
  <img data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="150" />
</div>
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Timeline with Stagger
```tsx
{experiences.map((exp, index) => (
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay={400 + index * 150}
  >
    {/* Timeline item */}
  </div>
))}
```

### Grid with Stagger
```tsx
{items.map((item, idx) => (
  <div
    data-aos="zoom-in"
    data-aos-duration="800"
    data-aos-delay={200 + idx * 100}
  >
    {/* Grid item */}
  </div>
))}
```

## 🚀 Performance Considerations

1. **Mobile Disabled**: AOS is disabled on mobile for better performance
2. **Offset 100px**: Triggers animation 100px before element enters viewport
3. **Mirror Enabled**: Allows smooth reverse animation when scrolling up
4. **Duration 800-1200ms**: Balanced between smooth and not too slow
5. **Easing**: Uses 'ease-in-out-cubic' for natural motion

## 📖 Official Resources

- **AOS Documentation**: https://michalsnik.github.io/aos/
- **Easing Functions**: https://easings.net/
- **Performance Tips**: https://michalsnik.github.io/aos/#performanceOptimization


