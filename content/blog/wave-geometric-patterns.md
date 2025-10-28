---
id: wave-geometric-patterns
title: Wave Animate - 2D Vector Embeddings
excerpt: Creating mesmerizing geometric patterns using 2D vector embeddings and mathematical transformations.
date: November 10, 2024
category: Creative Coding
readTime: 6
tags: [creative-coding, mathematics, animation, visualization]
image: /wave-geometric-animation.jpg
---

## The Beauty of Mathematics

There's something **magical** about watching mathematical formulas come to life through animation. *Wave Animate* is my exploration of this intersection.

### What Are Vector Embeddings?

In simple terms:

- Vectors represent points in space
- Embeddings map complex data to simpler forms
- 2D embeddings create visual patterns

## The Core Concept

The idea is to transform mathematical functions into visual art:

\`\`\`javascript
function generateWave(t, frequency, amplitude) {
  return {
    x: Math.cos(t * frequency) * amplitude,
    y: Math.sin(t * frequency) * amplitude
  }
}
\`\`\`

### Animation Pipeline

1. **Generate** vector points
2. **Transform** using mathematical functions
3. **Interpolate** between states
4. **Render** with smooth transitions

> "Mathematics is the music of reason." - James Joseph Sylvester

## Visual Patterns

The system can create various patterns:

| Pattern Type | Formula | Visual Effect |
|--------------|---------|---------------|
| Spiral | `r = a + b*θ` | Expanding curves |
| Lissajous | `x = A*sin(at), y = B*sin(bt)` | Figure-8 shapes |
| Rose | `r = a*cos(kθ)` | Flower-like forms |

### Interactive Parameters

Users can adjust:

- **Frequency** - Speed of oscillation
- *Amplitude* - Size of waves
- **Phase** - Starting position
- *Color mapping* - Visual appearance

## Technical Implementation

Built with:

\`\`\`typescript
const tech = {
  rendering: "Canvas API",
  animation: "RequestAnimationFrame",
  math: "Custom vector library",
  interaction: "Mouse/Touch events"
}
\`\`\`

### Performance Optimization

Key techniques used:

1. Object pooling for vectors
2. Efficient rendering loops
3. Throttled event handlers
4. GPU acceleration where possible

## The Creative Process

Creating these animations taught me:

- Mathematics can be **beautiful**
- *Constraints* breed creativity
- Simple rules create complex patterns
- **Iteration** is key to discovery

### Unexpected Discoveries

Some patterns emerged that I didn't anticipate:

\`\`\`
When frequency = φ (golden ratio)
And amplitude follows Fibonacci sequence
The result is surprisingly organic
\`\`\`

## Applications

Beyond aesthetics, this has uses in:

- [ ] Data visualization
- [ ] Music visualization
- [ ] Generative art
- [ ] Educational tools

---

Try it yourself on [GitHub](https://github.com/ftbhabuk/wave_animate) and create your own patterns!
