---
title: "The Covariant Derivative: How Far is a Curve from Being a Geodesic?"
date: 2026-10-24
tags: [riemannian-geometry, geodesics, covariant-derivative]
---

I recently discovered a really fun intuition about the covariant derivative. A geodesic is a curve that locally minimizes length, or more conveintnly, energy. The covariant derivative of a curve's time derivative can be thought of as its failure to be a geodesic. I found this to be really neat and wanted to share it with you! :) 



First, we derive the geodesic equation from the energy functional. We next show that plugging an arbitray curve into the left hand side the geodesic equation gives us a vector $\bfa = (a^k)$ that measures the curve's failure to be a geodesic. Finally, it extracts the covariant derivative $\frac{D}{dt}$ from $a^k$ and verifies its defining properties.

## 0. Setup

Let $(\calM,g)$ be an $n$-dimensional Riemannian manifold. For $q \in \calM$, we write the coordinates of $q$ with respect to some coordinate chart as $ q \cong (q^1, \dots, q^n)$.

- $g_{ij}(q)$ are the components of the metric. They are symmetric and positive definite.
- $g^{ij}(q)$ are the components of the inverse matrix, so $g^{ij} g_{jk} = \delta^i_k$, where $\delta^i_k$ is the Kronecker delta.
- Repeated indices are summed from $1$ to $n$.

## 1. Geodesics as critical points of energy

Let $L$ be the squared Riemannian norm of the velocity, and let $E$ be its integral:

$$
L(q, \dot q) = \| \dot q \|^2 = g_{ij}(q)\, \dot q^i \dot q^j, \;\;\; E[q] = \int_{t_0}^{t_1} L \, dt .
$$

**Variations.** Fix a curve $q$. A **variation** of $q$ is a smooth vector field $\delta q^i(t)$ along $q$ with $\delta q^i(t_0) = \delta q^i(t_1) = 0$. For a small real parameter $s$, define the perturbed curve

$$
q_s^i(t) = q^i(t) + s\, \delta q^i(t) .
$$

The **first variation** of $E$ at $q$ in the direction $\delta q$ is the directional derivative

$$
\delta E_q [ \delta q ] = \frac{d}{ds} E [ q_s ] |_{s = 0} .
$$

It is linear in $\delta q$, so $\delta E_q$ is a linear functional on variations: the differential of $E$ at $q$. The formula $q + s\, \delta q$ depends on the chart, but its derivative at $s = 0$ does not. Any smooth family $q_s$ with $q_0 = q$ and $\frac{d q_s^i}{ds} |_{s=0} = \delta q^i$ gives the same value.

A curve $q$ is a **geodesic** if $\delta E_q [ \delta q ] = 0$ for every variation $\delta q$.

**Euler–Lagrange form.** We take the standard first variation formula as given (see Appendix A):

$$
\delta E_q [ \delta q ] = - \int_{t_0}^{t_1} \mathcal{E}_i \, \delta q^i \, dt, \;\;\; \mathcal{E}_i = \frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} .
$$

The expression $\mathcal{E}_i$ is the Euler–Lagrange expression of $L$.

**Christoffel symbols.** Define

$$
\Gamma^l_{jk} = \frac{1}{2} g^{li} ( \frac{\partial g_{ij}}{\partial q^k} + \frac{\partial g_{ik}}{\partial q^j} - \frac{\partial g_{jk}}{\partial q^i} ) .
$$

They are symmetric in $j$ and $k$. Substituting $L$ into $\mathcal{E}_i$ gives (Appendix A)

$$
\mathcal{E}_i = 2 g_{il} ( \ddot q^l + \Gamma^l_{jk} \dot q^j \dot q^k ) .
$$

**Geodesic equation.** Setting $\mathcal{E}_i = 0$ and multiplying by $\frac{1}{2} g^{ki}$:

$$
\ddot q^k + \Gamma^k_{ij}(q)\, \dot q^i \dot q^j = 0 .
$$

## 2. Covariant acceleration of an arbitrary curve

Now let $q$ be any curve. Define the **covariant acceleration**

$$
a^k = \frac{1}{2} g^{ki} \mathcal{E}_i = \ddot q^k + \Gamma^k_{ij}(q)\, \dot q^i \dot q^j .
$$

Equivalently, $\ddot q^k = a^k - \Gamma^k_{ij} \dot q^i \dot q^j$. The first variation becomes

$$
\delta E_q [ \delta q ] = - 2 \int_{t_0}^{t_1} g_{ik}\, a^k\, \delta q^i \, dt .
$$

**Proposition.** $q$ is a geodesic if and only if $a^k(t) = 0$ for all $t$.

*Proof.* If $a^k = 0$, the integrand vanishes, so $\delta E_q [ \delta q ] = 0$ for every variation. Conversely, suppose $\delta E_q [ \delta q ] = 0$ for every variation. Let $\varphi(t)$ be smooth, positive on $(t_0, t_1)$, and zero at the endpoints. Take $\delta q^i = \varphi\, a^i$. Then

$$
0 = \delta E_q [ \varphi\, a ] = - 2 \int_{t_0}^{t_1} \varphi\, g_{ik}\, a^i a^k \, dt .
$$

The integrand is continuous and nonnegative, since $\varphi \ge 0$ and $g$ is positive definite. So it vanishes identically, which forces $a^k = 0$. $\blacksquare$

**Interpretation.** Equip variations with the inner product $\langle u, w \rangle = \int_{t_0}^{t_1} g_{ik}\, u^i w^k \, dt$. Then $\delta E_q [ \delta q ] = \langle -2a, \delta q \rangle$ for every variation $\delta q$. So $-2a$ is the gradient of $E$ at $q$, and $a$ points in the direction of steepest energy descent. Its size $\sqrt{g_{ik} a^i a^k}$ measures how far $q$ is from being a critical point of $E$. In this sense, $a^k$ is the failure of $q$ to be a geodesic.

Note that $a = 0$ means $q$ is a critical point of $E$, not necessarily a minimizer. Short geodesic segments minimize; long ones may not.

## 3. The covariant derivative along a curve

In $a^k$, one copy of $\dot q$ is differentiated and the other enters through $\Gamma$. Replace the differentiated copy by an arbitrary vector field $v^k(t)$ along the curve. This defines

$$
\frac{D v^k}{dt} = \dot v^k + \Gamma^k_{ij}(q)\, \dot q^i v^j .
$$

By construction, $\frac{D \dot q^k}{dt} = a^k$.

**Properties.** Let $v^k, w^k$ be vector fields along the curve and $f(t)$ a scalar function.

1. **Linearity.** $\frac{D (v + w)^k}{dt} = \frac{D v^k}{dt} + \frac{D w^k}{dt}$.
2. **Leibniz rule.** $\frac{D (f v^k)}{dt} = \dot f\, v^k + f \frac{D v^k}{dt}$.
3. **Metric compatibility.**
$$
\frac{d}{dt} ( g_{ij} v^i w^j ) = g_{ij} \frac{D v^i}{dt} w^j + g_{ij} v^i \frac{D w^j}{dt} .
$$
4. **Symmetry.** For a two-parameter family of curves $q(t, s)$,
$$
\frac{D}{ds} \frac{\partial q^k}{\partial t} = \frac{D}{dt} \frac{\partial q^k}{\partial s} .
$$

*Proofs.* Properties 1 and 2 are immediate from the formula.

For property 4, both sides equal $\frac{\partial^2 q^k}{\partial t\, \partial s} + \Gamma^k_{ij} \frac{\partial q^i}{\partial t} \frac{\partial q^j}{\partial s}$, because $\Gamma^k_{ij}$ is symmetric in $i, j$.

For property 3, lower an index: $\Gamma_{ikj} = g_{il} \Gamma^l_{kj}$. From the definition,

$$
\Gamma_{ikj} = \frac{1}{2} ( \frac{\partial g_{ik}}{\partial q^j} + \frac{\partial g_{ij}}{\partial q^k} - \frac{\partial g_{kj}}{\partial q^i} ), \;\;\;
\Gamma_{jki} = \frac{1}{2} ( \frac{\partial g_{jk}}{\partial q^i} + \frac{\partial g_{ji}}{\partial q^k} - \frac{\partial g_{ki}}{\partial q^j} ) .
$$

Adding, the first and last terms cancel in pairs. This leaves the identity $(\ast)$:

$$
\Gamma_{ikj} + \Gamma_{jki} = \frac{\partial g_{ij}}{\partial q^k} .
$$

Now expand the left side of property 3 with the product rule. Its metric term is $\frac{\partial g_{ij}}{\partial q^k} \dot q^k v^i w^j$. By $(\ast)$, this equals $\Gamma_{jki} \dot q^k v^i w^j + \Gamma_{ikj} \dot q^k v^i w^j$. These are exactly the $\Gamma$ terms of $g_{ij} \frac{D v^i}{dt} w^j$ and $g_{ij} v^i \frac{D w^j}{dt}$. $\blacksquare$

**Uniqueness.** Properties 3 and 4 determine $\Gamma$. Suppose some $\Gamma^l_{kj}$, symmetric in $k, j$, satisfies $(\ast)$. Write $(\ast)$ for the index triples $(i, k, j)$, $(i, j, k)$, and $(j, i, k)$. Add the first two and subtract the third. Using the symmetry of $\Gamma_{ikj}$ in its last two indices, four terms cancel and two combine, leaving

$$
2\, \Gamma_{ikj} = \frac{\partial g_{ij}}{\partial q^k} + \frac{\partial g_{ik}}{\partial q^j} - \frac{\partial g_{kj}}{\partial q^i} ,
$$

which is the formula from Section 1. So $D/dt$ is not a choice. It is the unique operator along curves that is compatible with the metric and symmetric, and the variational problem for $E$ produces it automatically.

## 4. Remarks

**Tensoriality.** Neither $\dot v^k$ nor $\Gamma^k_{ij}$ transforms as a tensor under a change of chart, but their non-tensorial parts cancel. So $\frac{D v^k}{dt}$ is a vector. For $v = \dot q$ there is a direct argument: $\delta E_q [ \delta q ]$ is chart-independent and $\delta q^i$ is an arbitrary vector, so $g_{ik} a^k$ must be a covector.

**Covector form.** Let $p_i = g_{ij} \dot q^j$ be the velocity covector, that is, the velocity with its index lowered. Its covariant derivative is $\frac{D p_i}{dt} = \dot p_i - \Gamma^k_{ij} \dot q^j p_k$. Expanding shows

$$
\frac{D p_i}{dt} = \frac{1}{2} \mathcal{E}_i = g_{ik}\, a^k .
$$

So the Euler–Lagrange expression is, up to the factor $2$, the covariant derivative of the velocity covector. Neither $\frac{d}{dt} \frac{\partial L}{\partial \dot q^i}$ nor $\frac{\partial L}{\partial q^i}$ is a covector on its own; only their difference is.

**Forces.** Adding a potential $V(q)$ to the action, $S[q] = \int (L - V)\, dt$, gives $2 g_{ik}\, a^k = - \frac{\partial V}{\partial q^i}$. The curve then fails to be a geodesic by exactly the applied force.

## Appendix A. The first variation and $\mathcal{E}_i$

**First variation.** With $q_s = q + s\, \delta q$, we have $\dot q_s = \dot q + s\, \frac{d\, \delta q}{dt}$. Differentiating under the integral and using the chain rule,

$$
\delta E_q [ \delta q ] = \int_{t_0}^{t_1} ( \frac{\partial L}{\partial q^i} \delta q^i + \frac{\partial L}{\partial \dot q^i} \frac{d\, \delta q^i}{dt} ) dt .
$$

Integrate the second term by parts. The boundary term vanishes because $\delta q$ does. Moving the time derivative off $\delta q$ produces the minus sign. This gives

$$
\delta E_q [ \delta q ] = - \int_{t_0}^{t_1} \mathcal{E}_i \, \delta q^i \, dt, \;\;\; \mathcal{E}_i = \frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} .
$$

**Computing $\mathcal{E}_i$.** The velocity derivative is $\frac{\partial L}{\partial \dot q^i} = 2 g_{ij} \dot q^j$. The metric depends on $t$ only through $q(t)$, so

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot q^i} = 2 g_{ij} \ddot q^j + 2 \frac{\partial g_{ij}}{\partial q^k} \dot q^k \dot q^j .
$$

The last term is contracted with the symmetric product $\dot q^j \dot q^k$, so only its symmetric part in $j, k$ survives:

$$
2 \frac{\partial g_{ij}}{\partial q^k} \dot q^k \dot q^j = ( \frac{\partial g_{ij}}{\partial q^k} + \frac{\partial g_{ik}}{\partial q^j} ) \dot q^j \dot q^k .
$$

The position derivative is

$$
\frac{\partial L}{\partial q^i} = \frac{\partial g_{jk}}{\partial q^i} \dot q^j \dot q^k .
$$

Subtracting,

$$
\mathcal{E}_i = 2 g_{ij} \ddot q^j + ( \frac{\partial g_{ij}}{\partial q^k} + \frac{\partial g_{ik}}{\partial q^j} - \frac{\partial g_{jk}}{\partial q^i} ) \dot q^j \dot q^k .
$$

By the definition of $\Gamma^l_{jk}$ and $g_{il} g^{lm} = \delta_i^m$, the coefficient of $\dot q^j \dot q^k$ in the second term equals $2 g_{il} \Gamma^l_{jk}$. Hence

$$
\mathcal{E}_i = 2 g_{il} ( \ddot q^l + \Gamma^l_{jk} \dot q^j \dot q^k ) .
$$
