---
title: "Talk: IEEE CDC 2025 (Rio) — Intrinsic Successive Convexification"
date: 2025-12-01
categories:
  - talk-notes
tags:
  - cdc
  - trajectory-optimization
  - manifolds
---

I presented our work at **IEEE CDC 2025** in Rio de Janeiro, Brazil.

### What problem was this about?
Successive convexification is a powerful trajectory optimization tool, but its standard formulation can become representation-dependent and computationally redundant on manifold-valued state spaces.

### What was the main contribution?
We introduced **intrinsic successive convexification (iSCvx)**, where linearization, perturbations, and state updates are done intrinsically on the manifold (via tangent spaces and retractions), not in redundant ambient coordinates.

### Why it matters
iSCvx is representation-invariant, keeps iterates on the manifold, and reduces unnecessary dimensions in local subproblems—important for scalable optimization in aerospace and robotics guidance problems.

- 📊 [Presentation](/files/CDC_2025_Presentation.pdf)
- 📄 [Paper PDF](/files/Intrinsic_Successive_Convexification_Trajectory_Optimization_on_Smooth_Manifolds.pdf)
- 🔗 [IEEE Xplore](https://ieeexplore.ieee.org/document/11007149)
