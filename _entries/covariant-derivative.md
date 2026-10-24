---
title: "The Covariant Derivative: How Far is a Curve from Being a Geodesic?"
date: 2026-10-24
tags: [riemannian-geometry, geodesics, covariant-derivative]
---

I recently discovered a really fun intuition about the [covariant derivative](https://en.wikipedia.org/wiki/Covariant_derivative). A [geodesic](https://en.wikipedia.org/wiki/Geodesic) is a curve that locally minimizes length, or more conveniently, energy. The covariant derivative of a curve's time derivative can be thought of as its failure to be a geodesic. I found this to be really neat and wanted to share it with you! :) 

## Setup

First, notation: the manifold, the metric and its inverse, and the summation convention.

Let $\left(\calM,g\right)$ be an $n$-dimensional [Riemannian manifold](https://en.wikipedia.org/wiki/Riemannian_manifold). For $q \in \calM$, we write the coordinates of $q$ with respect to some coordinate chart as $q \equiv \left(q^1, \dots, q^n\right)$.

- $g_{ij}$ are the components of the [metric](https://en.wikipedia.org/wiki/Metric_tensor). They are symmetric and positive definite.
- $g^{ij}$ are the components of the inverse matrix, so $g^{ij} g_{jk} = \delta^i_k$, where $\delta^i_k$ is the Kronecker delta.
- Repeated indices are summed from $1$ to $n$.

## The geodesic equation

Recall that geodesics are curves that extremize the length functional on a Riemannian manifold:

$$
\Lambda[q] := \int_{t_0}^{t_1} \sqrt{g_{ij}\, \dot q^i \dot q^j} \, dt .
$$

They also extremize the energy functional

$$
E[q] := \int_{t_0}^{t_1} L\left(q, \dot q\right) \, dt, \quad L\left(q, \dot q\right) := g_{ij}\, \dot q^i \dot q^j .
$$

Here we only look at a small piece of the curve $q$ between $t_0$ and $t_1$, since extremizing length is a local property.

Recall extremal curves of $E$ necessarily satisfies the **[Euler–Lagrange equations](https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation)**

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} = 0 . \tag{1}
$$

Since $L$ is quadratic, the two partial derivatives in (1) are nicely computed as

$$
\frac{\partial L}{\partial \dot q^i} = 2 g_{ij} \dot q^j, \quad \frac{\partial L}{\partial q^i} = \frac{\partial g_{jk}}{\partial q^i} \dot q^j \dot q^k . \tag{2}
$$

Using the simply product rule, the time derivative of $\frac{\partial L}{\partial \dot q^i}$ is 

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot q^i} = 2 g_{ij} \ddot q^j + 2 \frac{\partial g_{ij}}{\partial q^k} \dot q^k \dot q^j .
$$

The last term is contracted with the symmetric product $\dot q^j \dot q^k$, so only its symmetric part in $j, k$ survives:

$$
2 \frac{\partial g_{ij}}{\partial q^k} \dot q^k \dot q^j = \left( \frac{\partial g_{ij}}{\partial q^k} + \frac{\partial g_{ik}}{\partial q^j} \right) \dot q^j \dot q^k .
$$

Substituting this and $\left(2\right)$ into the left-hand side of $\left(1\right)$ gives

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} = 2 g_{ij} \ddot q^j + \left( \frac{\partial g_{ij}}{\partial q^k} + \frac{\partial g_{ik}}{\partial q^j} - \frac{\partial g_{jk}}{\partial q^i} \right) \dot q^j \dot q^k . \tag{3}
$$

To clean this up, define the **[Christoffel symbols](https://en.wikipedia.org/wiki/Christoffel_symbols)**

$$
\Gamma^l_{jk} := \frac{1}{2} g^{li} \left( \frac{\partial g_{ij}}{\partial q^k} + \frac{\partial g_{ik}}{\partial q^j} - \frac{\partial g_{jk}}{\partial q^i} \right) . \tag{4}
$$

They are symmetric in $j$ and $k$. Since $g_{il} g^{lm} = \delta_i^m$, the coefficient of $\dot q^j \dot q^k$ in $\left(3\right)$ is exactly $2 g_{il} \Gamma^l_{jk}$ by $\left(4\right)$. Hence

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} = 2 g_{il} \left( \ddot q^l + \Gamma^l_{jk} \dot q^j \dot q^k \right) .
$$

Setting the left-hand side of $\left(1\right)$ to zero and multiplying by $\frac{1}{2} g^{ki}$ yields the **geodesic equation**

$$
\ddot q^k + \Gamma^k_{ij}\left(q\right)\, \dot q^i \dot q^j = 0 .
$$

So in conclusion, if we want to compute a geodesic whose position at time $t$ is $q\left(t\right) \equiv \left(q^1\left(t\right), \dots, q^n\left(t\right)\right)$ and whose velocity is $\dot q\left(t\right) \equiv \left(\frac{d q^1}{dt}\left(t\right), \dots, \frac{d q^n}{dt}\left(t\right)\right)$, we solve the second-order ODE

$$
\frac{d^2 q^k}{dt^2} + \Gamma^k_{ij}\left(q\right) \frac{d q^i}{dt} \frac{d q^j}{dt} = 0
$$

with these initial conditions. 

## Covariant acceleration of an arbitrary curve

Plugging an arbitrary curve into the left-hand side of the geodesic equation gives a vector $\bfa \in T_{q\left(t\right)} \calM$ with components

$$
a^k := \ddot q^k + \Gamma^k_{ij}\left(q\right)\, \dot q^i \dot q^j .
$$

We call it the **covariant acceleration**. By the computation in the previous section, it is the Euler–Lagrange expression with its index raised:

$$
a^k = \frac{1}{2} g^{ki} \left( \frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} \right) .
$$

### What does $\bfa$ measure?

For one, $\bfa = 0$ if and only if the curve $q$ is a geodesic. So, in a sense, $\bfa$ measures the failure of $q$ to be a geodesic. Being a geodesic is a local property: at every instant, the curve is extremizing length (or energy). So $\bfa$ can also be interpreted as the failure of $q$ to extremize length. The curve is traveling a bit more distance than it needs to.

More importantly, as the title of this entry suggests, $\bfa$ is precisely the **covariant derivative** of $\dot q$:

$$
\frac{D}{dt} \dot q = \nabla_{\dot q} \dot q = \bfa .
$$

Isn't that neat? The covariant derivative is usually introduced axiomatically, via the [Fundamental Theorem of Riemannian Geometry](https://en.wikipedia.org/wiki/Fundamental_theorem_of_Riemannian_geometry): it is the unique operator satisfying a short list of properties. I like to call this the **algebraic way** of doing things, as opposed to the constructive, **analytic** definition of the derivative as a limit that we learn in calculus. I understand why it is done this way, and I enjoy it: in my opinion, a derivative operator is more of an algebraic object than an analytic one. Still, it is nice that there is an analytic route to the covariant derivative as well, and we arrived at it without using that theorem.

### Variations

To make "failure to extremize" precise, we perturb the curve and see how the energy responds. Fix a curve $q$. A **[variation](https://en.wikipedia.org/wiki/Calculus_of_variations)** of $q$ is a smooth vector field $\delta q^i\left(t\right)$ along $q$ with $\delta q^i\left(t_0\right) = \delta q^i\left(t_1\right) = 0$.

For a small real parameter $s$, define the perturbed curve $q_s$ whose coordinates are

$$
q_s^i\left(t\right) := q^i\left(t\right) + s\, \delta q^i\left(t\right) .
$$

The **first variation** of $E$ at $q$ in the direction $\delta q$ is a scalar defined as

$$
\delta E_q [ \delta q ] := \frac{d}{ds} E [ q_s ] \Big|_{s = 0} = \lim_{s \to 0} \int_{t_0}^{t_1} \frac{L\left(q_s, \dot q_s\right) - L\left(q, \dot q\right)}{s} \, dt = \int_{t_0}^{t_1} \lim_{s \to 0} \frac{L\left(q_s, \dot q_s\right) - L\left(q, \dot q\right)}{s} \, dt .
$$

It is linear in $\delta q$. The curve $q_s$ depends on the coordinate chart, but the derivative at $s = 0$ does not. A curve $q$ is extremal for $E$ exactly when $\delta E_q [ \delta q ] = 0$ for every variation $\delta q$. Next, we compute $\delta E_q$ explicitly, which is where the Euler–Lagrange equations come from.

### The Euler–Lagrange equations

We now compute $\delta E_q$ explicitly and see the Euler–Lagrange equations fall out. Since $\dot q_s = \dot q + s\, \delta \dot q$, differentiating under the integral and using the chain rule gives

$$
\delta E_q [ \delta q ] = \int_{t_0}^{t_1} \left( \frac{\partial L}{\partial q^i} \delta q^i + \frac{\partial L}{\partial \dot q^i} \delta \dot q^i \right) dt . \tag{5}
$$

Integrate the second term of $\left(5\right)$ by parts. The boundary term vanishes because $\delta q$ does, and moving the time derivative off $\delta q$ produces a minus sign:

$$
\int_{t_0}^{t_1} \frac{\partial L}{\partial \dot q^i} \delta \dot q^i \, dt = \left[ \frac{\partial L}{\partial \dot q^i} \delta q^i \right]_{t_0}^{t_1} - \int_{t_0}^{t_1} \left( \frac{d}{dt} \frac{\partial L}{\partial \dot q^i} \right) \delta q^i \, dt = - \int_{t_0}^{t_1} \left( \frac{d}{dt} \frac{\partial L}{\partial \dot q^i} \right) \delta q^i \, dt .
$$

Substituting this into $\left(5\right)$ gives

$$
\delta E_q [ \delta q ] = - \int_{t_0}^{t_1} \left( \frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} \right) \delta q^i \, dt . \tag{6}
$$

Now suppose $\delta E_q [ \delta q ] = 0$ for every variation $\delta q$. By the [fundamental lemma of the calculus of variations](https://en.wikipedia.org/wiki/Fundamental_lemma_of_the_calculus_of_variations), the bracket in $\left(6\right)$ must vanish identically. These are exactly the Euler–Lagrange equations $\left(1\right)$.

Earlier, we showed that the bracket in $\left(6\right)$ equals $2 g_{ik} \left( \ddot q^k + \Gamma^k_{ij} \dot q^i \dot q^j \right)$, which is $2 g_{ik} a^k$:

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot q^i} - \frac{\partial L}{\partial q^i} = 2 g_{ik}\, a^k .
$$

Substituting into $\left(6\right)$,

$$
\delta E_q [ \delta q ] = - 2 \int_{t_0}^{t_1} g_{ik}\, a^k \delta q^i \, dt .
$$

The integrand is the Riemannian metric applied to $-2 \bfa$ and $\delta q$. In particular, $\delta E_q [ \delta q ] = 0$ for every $\delta q$ exactly when $\bfa = 0$. More than that, since $\delta E_q$ is the integral of $g\left(-2 \bfa, \delta q\right)$, $-2 \bfa$ is the gradient of $E$ at $q$, so $\bfa$ points in the direction of steepest energy descent, and its size measures how far $q$ is from being a critical point of $E$. This gives $\bfa$ a variational meaning. Next, we compute $\delta E_q$ a second way, which is where derivatives of arbitrary vector fields enter.

## The covariant derivative along a curve

We saw that $\bfa = \frac{D}{dt} \dot q$ measures how much the velocity fails to stay constant along $q$. Can we ask the same of any vector field $V$ along $q$? That needs a derivative of $V$ that makes sense on a curved manifold, and the energy suggests a natural one. A variation $\delta q$ is itself a vector field along $q$, and $\delta E_q [ \delta q ]$ must depend on how $\delta q$ changes along the curve. So we ask which derivative of $\delta q$ it depends on.

### Which derivative of $\delta q$ does $E$ see?

We compute $\delta E_q$ directly from $L\left(q, \dot q\right) = g_{ij} \dot q^i \dot q^j$, this time without integrating by parts. Since $\frac{d q_s^l}{ds} = \delta q^l$ and $\frac{d \dot q_s^i}{ds} = \delta \dot q^i$, the product and chain rules give

$$
\frac{d}{ds} \left( g_{ik}\left(q_s\right) \dot q_s^i \dot q_s^k \right) \Big|_{s = 0} = \frac{\partial g_{ik}}{\partial q^l} \dot q^i \dot q^k \delta q^l + g_{ik}\, \delta \dot q^i \dot q^k + g_{ik}\, \dot q^i \delta \dot q^k .
$$

The metric is symmetric, so the last two terms are equal and combine into $2 g_{ij}\, \dot q^i \delta \dot q^j$. Integrating over $t$,

$$
\delta E_q [ \delta q ] = \int_{t_0}^{t_1} \left( \frac{\partial g_{ik}}{\partial q^l} \dot q^i \dot q^k \delta q^l + 2 g_{ij} \dot q^i \delta \dot q^j \right) dt .
$$

The ordinary derivative $\delta \dot q$ only appears in the second term. To see what is going on, we want both terms in the form $2 g_{ij} \dot q^i \left( \cdots \right)$. The Christoffel symbols let us do this. Lowering an index in their definition gives

$$
g_{ij} \Gamma^j_{kl} = \frac{1}{2} \left( \frac{\partial g_{ik}}{\partial q^l} + \frac{\partial g_{il}}{\partial q^k} - \frac{\partial g_{kl}}{\partial q^i} \right) .
$$

Contract this with $\dot q^i \dot q^k \delta q^l$. The last two terms on the right cancel after relabeling $i \leftrightarrow k$, which leaves

$$
2 g_{ij} \Gamma^j_{kl} \dot q^i \dot q^k \delta q^l = \frac{\partial g_{ik}}{\partial q^l} \dot q^i \dot q^k \delta q^l .
$$

The right-hand side is exactly the first term of $\delta E_q$. Replacing it and factoring out $2 g_{ij} \dot q^i$, we get

$$
\delta E_q [ \delta q ] = 2 \int_{t_0}^{t_1} g_{ij}\, \dot q^i \left( \delta \dot q^j + \Gamma^j_{kl}\, \dot q^k \delta q^l \right) dt . \tag{7}
$$

So the energy does not see the ordinary derivative $\delta \dot q$ on its own. It only sees the combination in the bracket. That combination is the derivative we were looking for. Next, we give it a name and apply it to any vector field.

### The covariant derivative of any vector field

We now turn the bracket in $\left(7\right)$ into a derivative of any vector field. The bracket is a formula in the components of $\delta q$ and $\delta \dot q$, and nothing in it requires $\delta q$ to be a variation. So for any vector field $V^k\left(t\right)$ along $q$, we define the **covariant derivative** of $V$ along $q$:

$$
\frac{D V^k}{dt} := \dot V^k + \Gamma^k_{ij}\, \dot q^i V^j .
$$

In this notation, $\left(7\right)$ reads

$$
\delta E_q [ \delta q ] = 2 \int_{t_0}^{t_1} g \left( \dot q, \frac{D \delta q}{dt} \right) dt .
$$

Plugging in $V = \dot q$ gives $\frac{D \dot q^k}{dt} = \ddot q^k + \Gamma^k_{ij} \dot q^i \dot q^j = a^k$, the covariant acceleration from before. So the geodesic equation says $\frac{D \dot q}{dt} = 0$: the velocity does not change as we move along $q$. For a general vector field, $\frac{D V}{dt} = 0$ means that $V$ stays constant along $q$, in the sense of being [parallel](https://en.wikipedia.org/wiki/Parallel_transport).

In short, $\frac{D V}{dt}$ measures the failure of $V$ to stay constant along $q$, exactly as $\bfa$ measures the failure of $\dot q$ to do so. A geodesic is a curve whose own velocity never fails.
