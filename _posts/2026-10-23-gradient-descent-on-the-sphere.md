---
title: "Gradient Descent on the Sphere"
date: 2026-10-23
categories:
  - math
tags:
  - riemannian-optimization
  - linear-algebra
---

The smallest eigenvector of a symmetric matrix is the solution to a constrained optimization problem. Solving it with gradient descent on the sphere is the simplest example of Riemannian optimization.

## The problem

Let $A \in \mathbb{R}^{n \times n}$ be symmetric with eigenvalues $\lambda_1 < \lambda_2 \le \dots \le \lambda_n$. Consider

$$
\min_{x \in S^{n-1}} f(x) = x^\top A x, \qquad S^{n-1} = \{x \in \mathbb{R}^n : \|x\| = 1\}.
$$

Writing $x = \sum_i c_i v_i$ in the eigenbasis, $f(x) = \sum_i \lambda_i c_i^2 \ge \lambda_1$, with equality exactly when $x = \pm v_1$. So the minimizers are the two unit eigenvectors for the smallest eigenvalue.

## The Riemannian gradient

The Euclidean gradient is $\nabla f(x) = 2Ax$. This is generally not tangent to the sphere, so stepping along it leaves the constraint set. The tangent space at $x$ is

$$
T_x S^{n-1} = \{ v \in \mathbb{R}^n : x^\top v = 0 \}.
$$

The Riemannian gradient is the orthogonal projection of $\nabla f(x)$ onto this space:

$$
\operatorname{grad} f(x) = (I - xx^\top)\,\nabla f(x) = 2\left(Ax - (x^\top A x)\,x\right).
$$

It vanishes exactly when $Ax = (x^\top A x)\,x$, that is, when $x$ is an eigenvector. Every eigenvector is a critical point, but only $\pm v_1$ is a minimum.

## The algorithm

A step in the tangent direction leaves the sphere, so we pull it back with a *retraction*. For the sphere, normalizing works:

$$
x_{k+1} = R_{x_k}(-\alpha \operatorname{grad} f(x_k)) = \frac{x_k - \alpha \operatorname{grad} f(x_k)}{\left\| x_k - \alpha \operatorname{grad} f(x_k) \right\|}.
$$

```python
import numpy as np

def sphere_gd(A, steps=500, alpha=0.1, seed=0):
    x = np.random.default_rng(seed).standard_normal(A.shape[0])
    x /= np.linalg.norm(x)
    for _ in range(steps):
        g = 2 * (A @ x - (x @ A @ x) * x)   # Riemannian gradient
        x = x - alpha * g
        x /= np.linalg.norm(x)              # retraction
    return x
```

## Why it works

Near $v_1$, the error behaves like a linear system. If $x = v_1 + \epsilon$ with $\epsilon \perp v_1$, then to first order

$$
\operatorname{grad} f(x) \approx 2(A - \lambda_1 I)\,\epsilon,
$$

so each step contracts the error component along $v_i$ by a factor of roughly $1 - 2\alpha(\lambda_i - \lambda_1)$. The slowest direction is $v_2$, with rate $1 - 2\alpha(\lambda_2 - \lambda_1)$. The spectral gap $\lambda_2 - \lambda_1$ controls how fast the method converges, exactly as in the power method.

The same recipe works on any manifold: project the gradient onto the tangent space, take a step, and retract. That is the idea behind much of my dissertation work.
