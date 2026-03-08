---
title: "Dissertation"
permalink: /dissertation/
author_profile: true
---

# Controller Synthesis through Riemannian Optimization

**Spencer Kraisler, PhD Dissertation (University of Washington, 2025)**

- 📄 [Download Dissertation PDF](/files/dissertation.pdf)
- 🎓 [Final Exam / Defense Slides](/files/phd_final_exam_defense.pdf)

## Abstract

This dissertation studies controller synthesis for both open-loop and closed-loop systems through the use of Riemannian optimization. In the closed-loop setting, the space of dynamic output-feedback controllers is formulated as a Riemannian orbit manifold, enabling fast and intrinsic optimization without reliance on extrinsic parameterizations. The work establishes topological characterizations of this space and provides convergence-rate guarantees for resulting algorithms. For open-loop control, the dissertation develops an intrinsic successive convexification framework that optimizes trajectories directly on manifolds of states and inputs, leading to improved numerical behavior in applications such as attitude guidance. Overall, the dissertation shows that exploiting intrinsic manifold structure yields fast, theoretically principled algorithms across both open- and closed-loop control paradigms.

## Table of Contents (Plain-English Guide)

The dissertation is organized to move from foundations to algorithms and applications:

### Chapter 1 — A Coordinate-Free Introduction
Introduces the main thesis: many control design problems are naturally geometric, and solving them intrinsically (instead of through arbitrary coordinates) improves both theory and computation.

### Chapter 2 — Background
Builds the required differential geometry and optimization background (smooth/Riemannian manifolds, gradients, Hessians, geodesics, and Riemannian optimization methods).

### Chapter 3 — Controller Orbit Geometry & Closed-Loop Optimization
Shows that spaces of dynamic output-feedback controllers form orbit manifolds under coordinate transformations. Develops intrinsic first- and second-order optimization methods for LQG policy optimization with strong convergence guarantees.

### Chapter 4 — Intrinsic Successive Convexification (i-SCvx)
Develops an intrinsic trajectory optimization framework on manifolds. This chapter generalizes SCvx so performance is parameterization-invariant and applies it to constrained attitude guidance.

### Chapter 5 — Average Consensus over Lie Groups
Studies distributed consensus/optimization on Lie groups, framing average consensus through Riemannian centers of mass and deriving distributed gradient-tracking style algorithms.

### Appendices
Provide supporting material in Lie theory, topology, orbit geometry, extrinsic differential geometry, and additional technical motivations.

## Citation

If you'd like to cite this dissertation, please use the dissertation PDF linked above for the official bibliographic details.
