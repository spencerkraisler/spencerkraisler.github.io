---
title: "Euler–Poincaré and Lagrange–Poincaré Reduction"
date: 2026-10-24
tags: [geometric-mechanics, lie-groups, euler-poincare]
---

This entry builds the Euler–Poincaré equation one step at a time, for an arbitrary Lie group. It then adds forces, closes the system, and introduces the momentum map. It ends with Lagrange–Poincaré reduction, which handles systems that are a group plus internal shape, and a few worked examples.

**Conventions.** Repeated indices are summed. Vectors and covectors are bold. Points of a manifold are not bold. For a covector $\bfalpha$ and a vector $\bfv$, the pairing is $\left(\bfalpha, \bfv\right)$. A hat marks a unit vector.

---

## Reaction Wheel Applet

<iframe src="/assets/applets/reaction-wheel.html" title="Reaction wheel on a free body" loading="lazy" style="width:100%; height:820px; border:1px solid #2A3642; border-radius:14px;"></iframe>

---

## The group and its Lie algebra

Let $G$ be a Lie group of dimension $n$, with identity $e$. A configuration is a point $g \in G$, and a motion is a curve $g(t)$.

The Lie algebra is the tangent space at the identity:

$$\frakg = T_e G.$$

It is an $n$-dimensional vector space. Its bracket is defined in the section on the basis, bracket, and structure constants.

## Left translation and body velocity

For each $g \in G$, left translation is the map $L\_g : G \to G$ given by $L\_g(h) = gh$. It is a diffeomorphism with inverse $L\_{g^{-1}}$. Its pushforward at $h$ is a linear isomorphism

$$(L_g)_\ast : T_h G \to T_{gh} G.$$

The body velocity is the velocity $\dot{g} \in T\_g G$ translated back to the identity:

$$\bfxi = (L_{g^{-1}})_\ast\, \dot{g} \in \frakg.$$

The reverse map gives the reconstruction equation:

$$\dot{g} = (L_g)_\ast\, \bfxi.$$

For a matrix group, $(L\_g)\_\ast$ is left multiplication by $g$, so $\bfxi = g^{-1}\dot{g}$.

## Basis, bracket, and structure constants

Let $\bfe\_1, \dots, \bfe\_n$ be any basis of $\frakg$. The body velocity has components $\xi^i$, with $\bfxi = \xi^i \bfe\_i$.

Each $\bfu \in \frakg$ defines a left-invariant vector field $\bfu^L$ on $G$ by $\bfu^L(g) = (L\_g)\_\ast\, \bfu$. The bracket on $\frakg$ is the vector-field bracket of these fields, evaluated at the identity:

$$[\bfu, \bfv] = [\bfu^L, \bfv^L](e).$$

The structure constants $c^k\_{ij}$ are the components of the bracket of basis vectors:

$$[\bfe_i, \bfe_j] = c^k_{ij}\, \bfe_k.$$

They are antisymmetric, $c^k\_{ij} = -c^k\_{ji}$. They satisfy the Jacobi identity, $c^l\_{ij} c^m\_{lk} + c^l\_{jk} c^m\_{li} + c^l\_{ki} c^m\_{lj} = 0$. They depend on the basis.

## The reduced Lagrangian

Let $L : TG \to \bbR$ be the Lagrangian. Assume it is left-invariant. That is, for every fixed $h \in G$,

$$L\big(hg, (L_h)_\ast\, \dot{g}\big) = L(g, \dot{g}).$$

Define the reduced Lagrangian $l : \frakg \to \bbR$ by $l(\bfxi) = L(e, \bfxi)$. Taking $h = g^{-1}$ in the invariance condition shows that

$$L(g, \dot{g}) = l(\bfxi).$$

So $L$ depends only on the body velocity. In components, $l$ is a function of the $n$ numbers $\xi^1, \dots, \xi^n$.

## The dual space and the momentum

The dual space $\frakg^\ast$ is the space of linear maps $\frakg \to \bbR$. Its dual basis $\bfe^1, \dots, \bfe^n$ is defined by $\left(\bfe^k, \bfe\_i\right) = \delta^k\_i$, where $\delta^k\_i$ is the Kronecker delta. A covector has lower-index components, $\bfalpha = \alpha\_k \bfe^k$, and $\left(\bfalpha, \bfv\right) = \alpha\_k v^k$.

The body momentum $\bfmu \in \frakg^\ast$ is the derivative of $l$ at the current body velocity. Its components are

$$\mu_k = \frac{\partial l}{\partial \xi^k},$$

evaluated at $\bfxi(t)$. Coordinate-free, $\left(\bfmu, \bfv\right)$ is the derivative of $l(\bfxi + s\bfv)$ in $s$ at $s = 0$. We write this as $\bfmu = \delta l / \delta \bfxi$.

## Constrained variations

Fix an interval $[a, b]$. A variation of $g(t)$ is a family $g(t, s)$ with $g(t, 0) = g(t)$ and fixed endpoints. Define

$$\bfeta = (L_{g^{-1}})_\ast\, \frac{\partial g}{\partial s} \in \frakg.$$

It vanishes at $t = a$ and $t = b$. The key fact is that $\bfxi$ cannot be varied freely. Its variation is

$$\delta \xi^k = \dot{\eta}^k + c^k_{ij}\, \xi^i \eta^j, \qquad \delta \bfxi = \dot{\bfeta} + [\bfxi, \bfeta].$$

**Why.** The fields $\bfe\_i^L$ form a frame on $G$, and $[\bfe\_i^L, \bfe\_j^L] = c^k\_{ij}\, \bfe\_k^L$ everywhere, since a bracket of left-invariant fields is left-invariant. Let $\bftheta^k$ be the dual one-forms. The identity $d\bftheta(\bfx, \bfy) = \bfx(\bftheta(\bfy)) - \bfy(\bftheta(\bfx)) - \bftheta([\bfx, \bfy])$ gives

$$d\bftheta^k(\bfe_i^L, \bfe_j^L) = -c^k_{ij}.$$

Pull back along $\sigma(t, s) = g(t, s)$. Then $\sigma^\ast \bftheta^k = \xi^k\, dt + \eta^k\, ds$. Equating $d(\sigma^\ast \bftheta^k)$ with $\sigma^\ast(d\bftheta^k)$ gives

$$\frac{\partial \eta^k}{\partial t} - \frac{\partial \xi^k}{\partial s} = -c^k_{ij}\, \xi^i \eta^j.$$

Setting $s = 0$ gives the result.

## The Euler–Poincaré equation

Hamilton's principle on $G$ is equivalent to $\delta \int\_a^b l(\bfxi)\, dt = 0$ under the constrained variations from the section above. Substituting and integrating by parts,

$$\delta \int_a^b l\, dt = \int_a^b \mu_k \left( \dot{\eta}^k + c^k_{ij}\, \xi^i \eta^j \right) dt = \int_a^b \left( -\dot{\mu}_j + c^k_{ij}\, \xi^i \mu_k \right) \eta^j\, dt.$$

The boundary terms vanish because $\bfeta$ does. Since $\bfeta$ is otherwise arbitrary, we get the **Euler–Poincaré equation**:

$$\dot{\mu}_k = c^j_{ik}\, \xi^i \mu_j.$$

**Coordinate-free form.** For $\bfxi \in \frakg$, define $\mathrm{ad}^\ast\_{\bfxi} : \frakg^\ast \to \frakg^\ast$ by $\left(\mathrm{ad}^\ast\_{\bfxi}\, \bfalpha, \bfv\right) = \left(\bfalpha, [\bfxi, \bfv]\right)$. Pairing with $\bfe\_k$ gives $(\mathrm{ad}^\ast\_{\bfxi}\, \bfalpha)\_k = c^j\_{ik}\, \xi^i \alpha\_j$. So the equation is

$$\dot{\bfmu} = \mathrm{ad}^\ast_{\bfxi}\, \bfmu.$$

The index form does not avoid $\mathrm{ad}^\ast$. It spells out what $\mathrm{ad}^\ast$ does to components.

## External forces

A force on the group is a covector $F \in T^\ast\_g G$. Its body-frame version $\bff \in \frakg^\ast$ is defined by

$$\left(\bff, \bfv\right) = \left(F, (L_g)_\ast\, \bfv\right)$$

for all $\bfv \in \frakg$. Hamilton's principle is replaced by the Lagrange–d'Alembert principle, $\delta \int l\, dt + \int \left(\bff, \bfeta\right)\, dt = 0$. This adds one term:

$$\dot{\mu}_k = c^j_{ik}\, \xi^i \mu_j + f_k, \qquad \dot{\bfmu} = \mathrm{ad}^\ast_{\bfxi}\, \bfmu + \bff.$$

**Potentials.** Left multiplication moves any point of $G$ to any other. So a left-invariant potential $V(g)$ must be constant, and $l$ cannot contain a nontrivial one. A potential that breaks the symmetry enters as a force instead, with $\left(\bff, \bfv\right) = -dV\_g\big((L\_g)\_\ast\, \bfv\big)$. Such a force depends on $g$, so the momentum equation no longer closes on $\frakg^\ast$ by itself.

## Closing the system

The full system is three relations:

$$\mu_k = \frac{\partial l}{\partial \xi^k}, \qquad \dot{\mu}_k = c^j_{ik}\, \xi^i \mu_j + f_k, \qquad \dot{g} = (L_g)_\ast\, \bfxi.$$

The first must be inverted to recover $\bfxi$ from $\bfmu$. This works locally when the Hessian $M\_{jk} = \partial^2 l / \partial \xi^j \partial \xi^k$ is invertible. In the common quadratic case $l = \frac{1}{2} M\_{ij}\, \xi^i \xi^j$, with $M\_{ij}$ constant, symmetric, and positive-definite, we have $\mu\_k = M\_{kj}\, \xi^j$. Then

$$\xi^i = M^{ik} \mu_k,$$

where $M^{ik}$ is the inverse matrix of $M\_{ik}$.

To integrate, advance $\bfmu$ with the Euler–Poincaré equation, recover $\bfxi$ at each instant, and advance $g$ with the reconstruction equation. If $\bff$ does not depend on $g$, the first two steps close on their own, and $g$ can be reconstructed afterward.

## The momentum map

Let $R\_g(h) = hg$ be right translation. The adjoint map $\mathrm{Ad}\_g : \frakg \to \frakg$ is

$$\mathrm{Ad}_g\, \bfzeta = (L_g)_\ast\, (R_{g^{-1}})_\ast\, \bfzeta.$$

Its dual $\mathrm{Ad}^\ast\_g$ is defined by $\left(\mathrm{Ad}^\ast\_g\, \bfalpha, \bfzeta\right) = \left(\bfalpha, \mathrm{Ad}\_g\, \bfzeta\right)$.

The symmetry of $L$ is left multiplication. Its momentum map is the function $\bfJ : TG \to \frakg^\ast$ given by

$$\bfJ(g, \dot{g}) = \mathrm{Ad}^\ast_{g^{-1}}\, \bfmu.$$

In components, write $\mathrm{Ad}\_{g^{-1}}\, \bfe\_k = A^i\_k(g)\, \bfe\_i$. Then $J\_k = A^i\_k(g)\, \mu\_i$.

**Meaning.** Each $\bfzeta \in \frakg$ generates the symmetry $g \mapsto \exp(s\bfzeta)\, g$, whose velocity field is $(R\_g)\_\ast\, \bfzeta$. The number $\left(\bfJ, \bfzeta\right)$ is the Noether momentum conjugate to that symmetry. So $\bfJ$ packages all the conserved quantities into one covector. Both $\bfmu$ and $\bfJ$ describe the same momentum. $\bfmu$ sees it from the body frame, and $\bfJ$ from the spatial frame.

**Evolution.** Along a motion, $\frac{d}{dt}\, \mathrm{Ad}\_{g^{-1}}\, \bfzeta = -[\bfxi, \mathrm{Ad}\_{g^{-1}}\, \bfzeta]$. Therefore

$$\frac{d}{dt} \left(\bfJ, \bfzeta\right) = \left(\dot{\bfmu} - \mathrm{ad}^\ast_{\bfxi}\, \bfmu,\, \mathrm{Ad}_{g^{-1}}\, \bfzeta\right).$$

By the forced Euler–Poincaré equation, this gives

$$\dot{\bfJ} = \mathrm{Ad}^\ast_{g^{-1}}\, \bff.$$

With no force, $\bfJ$ is constant, even though $\bfmu$ generally is not.

## Lagrange–Poincaré reduction

Many systems are not a pure group. They have a group part and an internal shape. Lagrange–Poincaré reduction handles this case.

**Setup.** Let $Q$ be the configuration space, and let $G$ act freely on $Q$ from the left. Assume $L : TQ \to \bbR$ is $G$-invariant. The shape space is the quotient $S = Q/G$. Its points are configurations with the symmetry removed.

**The product case.** Suppose $Q = G \times S$, with $G$ acting only on the first factor, $h \cdot (g, s) = (hg, s)$. Let $s^a$ be coordinates on $S$. The reduction then proceeds in four steps.

First, form the body velocity $\bfxi = (L\_{g^{-1}})\_\ast\, \dot{g}$ exactly as before. Second, use invariance to write $L$ as a reduced Lagrangian

$$l(\bfxi, s, \dot{s}) = L(g, \dot{g}, s, \dot{s}).$$

Third, vary. The variation $\delta \bfxi$ is constrained as in the section on constrained variations, while $\delta s$ is free with fixed endpoints. Fourth, collect the terms multiplying $\bfeta$ and those multiplying $\delta s$. This gives

$$\mu_k = \frac{\partial l}{\partial \xi^k}, \qquad \dot{\mu}_k = c^j_{ik}\, \xi^i \mu_j + f_k,$$

$$\frac{d}{dt}\, \frac{\partial l}{\partial \dot{s}^a} - \frac{\partial l}{\partial s^a} = u_a,$$

$$\dot{g} = (L_g)_\ast\, \bfxi.$$

Here $\bff \in \frakg^\ast$ is the external force in the body frame, and $u\_a$ are generalized forces on the shape, such as internal actuators. Note that $\mu\_k$ is evaluated at $(\bfxi, s, \dot{s})$, so it depends on the shape. That is how the two parts couple.

**Internal forces do not change $\bfJ$.** The $u\_a$ appear only in the shape equation. So with $\bff = 0$, the momentum map $\bfJ = \mathrm{Ad}^\ast\_{g^{-1}}\, \bfmu$ stays constant, whatever the actuators do. Internal motion can change the attitude, but only by trading momentum between the parts.

**The general case.** Usually $Q$ is a principal $G$-bundle over $S$, not a global product. Then a principal connection is needed to split each velocity into a group part and a shape part. The reduced equations keep the same two-part form. They gain extra terms involving the curvature of the connection, which couple shape motion to group motion. These terms are what allow a body to reorient itself at zero angular momentum.

**Special cases.** If $S$ is a single point, then $Q = G$ and the equations reduce to Euler–Poincaré. If $G$ is trivial, then $Q = S$ and they reduce to Euler–Lagrange.

### Example: a rigid body with a reaction wheel

Let $g \in SO(3)$ be the attitude of the body. Let $\phi$ be the angle of an axisymmetric wheel relative to the body, spinning about the body-fixed unit axis $\hat{\bfa}$. Then

$$Q = SO(3) \times S^1, \qquad G = SO(3), \qquad S = S^1.$$

Let $\bfomega$ be the body angular velocity, $I$ the locked inertia matrix of body plus wheel, and $I\_w$ the wheel's axial inertia. The reduced Lagrangian is

$$l(\bfomega, \dot{\phi}) = \frac{1}{2}\, \bfomega \cdot I\bfomega + I_w\, \dot{\phi}\, (\hat{\bfa} \cdot \bfomega) + \frac{1}{2} I_w\, \dot{\phi}^2.$$

It does not depend on $\phi$, because spinning an axisymmetric wheel does not change the mass distribution. The momenta are

$$\bfmu = \frac{\partial l}{\partial \bfomega} = I\bfomega + I_w\, \dot{\phi}\, \hat{\bfa}, \qquad p = \frac{\partial l}{\partial \dot{\phi}} = I_w \left( \hat{\bfa} \cdot \bfomega + \dot{\phi} \right).$$

Let $u$ be the motor torque and $\bftau$ an external body-frame torque. Using the $SO(3)$ structure constants from the rigid body example below, the equations are

$$\dot{\bfmu} = \bfmu \times \bfomega + \bftau, \qquad \dot{p} = u, \qquad \dot{g} = g\, \bfomega^{\wedge}.$$

The velocities are recovered by

$$\bfomega = \left( I - I_w\, \hat{\bfa} \hat{\bfa}^{\mathsf{T}} \right)^{-1} \left( \bfmu - p\, \hat{\bfa} \right), \qquad \dot{\phi} = \frac{p}{I_w} - \hat{\bfa} \cdot \bfomega.$$

With $\bftau = 0$, the spatial angular momentum $\bfJ = g\bfmu$ is constant for every motor torque $u$. Starting from rest, $\bfJ = 0$. Spinning the wheel up turns the body the other way. Stopping the wheel stops the body, in a new attitude.

---

## Examples

### The rigid body on $SO(3)$

The configuration is $g \in SO(3)$. The Lie algebra $\mathfrak{so}(3)$ is the space of skew-symmetric $3 \times 3$ matrices. Identify it with $\bbR^3$ by the wedge map: for $\bfv \in \bbR^3$, the matrix $\bfv^{\wedge}$ satisfies $\bfv^{\wedge}\, \bfw = \bfv \times \bfw$ for all $\bfw$. Under this map the bracket becomes the cross product.

With the standard basis of $\bbR^3$, the structure constants are $c^k\_{ij} = \varepsilon\_{ijk}$, the Levi-Civita symbol. The body angular velocity $\bfomega$ is defined by $\bfomega^{\wedge} = g^{-1}\dot{g}$.

Let $I\_{ij}$ be the body-frame inertia matrix. Then

$$l(\bfomega) = \frac{1}{2} I_{ij}\, \omega^i \omega^j, \qquad \mu_k = I_{kj}\, \omega^j.$$

The forced Euler–Poincaré equation, with body torque $\bftau$, is

$$\dot{\mu}_k = \varepsilon_{ikj}\, \omega^i \mu_j + \tau_k, \qquad \dot{\bfmu} = \bfmu \times \bfomega + \bftau.$$

Substituting $\bfmu = I\bfomega$ gives Euler's equations, $I\dot{\bfomega} = (I\bfomega) \times \bfomega + \bftau$. The system closes with $\bfomega = I^{-1}\bfmu$ and $\dot{g} = g\, \bfomega^{\wedge}$.

Here $\mathrm{Ad}\_{g^{-1}}\, \bfzeta = g^{\mathsf{T}} \bfzeta$, so the momentum map is $\bfJ = g\bfmu$. This is the spatial angular momentum. It obeys $\dot{\bfJ} = g\bftau$, so it is constant for a free body.

### A planar body on $SE(2)$

The configuration is $g \in SE(2)$, the position and heading of a body in the plane. Choose a basis of $\mathfrak{se}(2)$ in which $\bfe\_1$ is rotation and $\bfe\_2, \bfe\_3$ are translations along the two body axes. The nonzero brackets are

$$[\bfe_1, \bfe_2] = \bfe_3, \qquad [\bfe_1, \bfe_3] = -\bfe_2.$$

So $c^3\_{12} = 1$ and $c^2\_{13} = -1$, with their antisymmetric partners. The body velocity $\bfxi = \xi^i \bfe\_i$ has angular rate $\xi^1$ and body-frame velocities $\xi^2, \xi^3$.

Take $l = \frac{1}{2} \left( I\_0 (\xi^1)^2 + m\_2 (\xi^2)^2 + m\_3 (\xi^3)^2 \right)$. Here $I\_0$ is the rotational inertia, and $m\_2, m\_3$ are the effective masses along the body axes. They differ for a body in an ideal fluid, because of added mass. Then $\mu\_1 = I\_0\, \xi^1$, $\mu\_2 = m\_2\, \xi^2$, and $\mu\_3 = m\_3\, \xi^3$. The Euler–Poincaré equation gives

$$\dot{\mu}_1 = (m_2 - m_3)\, \xi^2 \xi^3, \qquad \dot{\mu}_2 = m_3\, \xi^1 \xi^3, \qquad \dot{\mu}_3 = -m_2\, \xi^1 \xi^2.$$

When $m\_2 = m\_3$, the first equation says the spin is constant. The other two say the body-frame velocity rotates opposite to the body, so the spatial velocity is constant. When $m\_2 \neq m\_3$, translation drives rotation. This is the Munk moment.

---

## Summary

| | Index form | Coordinate-free form |
|---|---|---|
| Body velocity | $\xi^i$, with $\bfxi = \xi^i \bfe\_i$ | $\bfxi = (L\_{g^{-1}})\_\ast\, \dot{g}$ |
| Momentum | $\mu\_k = \partial l / \partial \xi^k$ | $\bfmu = \delta l / \delta \bfxi$ |
| Constrained variation | $\delta \xi^k = \dot{\eta}^k + c^k\_{ij}\, \xi^i \eta^j$ | $\delta \bfxi = \dot{\bfeta} + [\bfxi, \bfeta]$ |
| Dynamics | $\dot{\mu}\_k = c^j\_{ik}\, \xi^i \mu\_j + f\_k$ | $\dot{\bfmu} = \mathrm{ad}^\ast\_{\bfxi}\, \bfmu + \bff$ |
| Reconstruction | $\dot{g} = (L\_g)\_\ast\, \xi^i \bfe\_i$ | $\dot{g} = (L\_g)\_\ast\, \bfxi$ |
| Momentum map | $J\_k = A^i\_k(g)\, \mu\_i$ | $\bfJ = \mathrm{Ad}^\ast\_{g^{-1}}\, \bfmu$ |

**Further reading.** Marsden and Ratiu, *Introduction to Mechanics and Symmetry*. Holm, Schmah, and Stoica, *Geometric Mechanics and Symmetry*. Cendra, Marsden, and Ratiu, *Lagrangian Reduction by Stages*, Memoirs of the AMS, 2001.