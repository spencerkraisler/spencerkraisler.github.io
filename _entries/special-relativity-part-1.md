---
title: "Special Relativity: Part 1"
date: 2026-10-25
tags:
  - special-relativity
---
I want to show a derivation of Lorentz boosts from special relativity (SR) from basic principles. 

## Setup

### Affine Space
I first want to mathematically introduce the notion of affine space and affine coordinate systems.

An $n$-dimensional real **affine space** $(\calA, \bbE)$ consists of a set $\calA$ of **points** and an $n$-dimensional real vector space $\bbE$ of **vectors**. Points have no origin and cannot be added to each other. Instead, two points $P, Q \in \calA$ determine a **displacement vector** $Q - P \in \bbE$. Also, a point $P$ can be displaced by a vector $\bfv \in \bbE$ to give a new point $P + \bfv \in \calA$. These satisfy:
- $P + (Q - P) = Q$ for all $P, Q \in \calA$.
- $(P + \bfv) + \bfw = P + (\bfv + \bfw)$ for all $P \in \calA$ and $\bfv, \bfw \in \bbE$.

Think of a plane: its points are locations, with no preferred "zero", while its vectors are arrows between them.

An **affine reference frame** $\calF$ is a choice of origin $O \in \calA$ and basis $(\bfe_1, \dots, \bfe_n)$ of $\bbE$; we write $$\calF := (O, \bfe_1,\ldots,\bfe_n).$$The coordinates of $P \in \calA$ is a coordinate vector $(x^1, \dots, x^n) \in \bbR^n$ which satisfy $$P - O = x^i \bfe_i = x^1\bfe_1+\ldots+x^n\bfe_n.$$
We will also write $(x^1,\ldots,x^n)_\calF := P$. 

As we will see in the next section, affine coordinate systems are precisely how we will define a notion of an inertial observer. 

### Spacetime as an Affine Space

We model **spacetime** $(\calS, \bbE^2)$ as a 2-dimensional real affine space. Here, $\calS$ is spacetime. 2 here because we have 1 dimension for time and another for space. For simplicity, I do not want to deal with 3 spatial dimensions. 

An **event** $E \in \calS$ is a point of spacetime. It is tempting to think of an event as a time paired with a position, but spacetime has no canonical split into a "time part" and a "space part". As Einstein emphasized, space and time are two aspects of a single structure.

An analogy: ordinary 3D space has no preferred set of three axes. Choosing $x$, $y$, $z$ directions is a convention, and a rotated choice describes the same space equally well. Spacetime is similar. Time and space are not separate ingredients but directions within one affine space, and none is singled out in advance.

An observer supplies the split. Such an observer picks a "forward in time" direction and a spatial direction, and these give the observer's coordinates. But the decomposition belongs to the observer: two different observers split the same spacetime differently. This is the source of everything that follows.

An **inertial observer** $\calF$, also known as an **inertial frame of reference**, can be modeled as a point $O_\calF \in \calS$ paired with basis vector $\bfe_t$ and $\bfe_x$. For any event $E \in \calS$, its coordinates $(t,x)$ with respect to $\calF$ is the components of the displacement vector $E - O_\calF \in \bbE^2$ expressed in the frame $(\bfe_t, \bfe_x)$. In other words, $(t,x)$ satisfy $$t \bfe_t + x \bfe_x = E - O_\calF$$

One more useful notation, for event $E$, we will also write $$E = (t,x)_\calF \in \calS$$ That is, $(t,x)_\calF$ is the event associated with time $t$ and position $x$ in the $\calF$ reference frame. 

The **spatial origin** of $\calF$ at time $t$ is the single event $(t,0)_\calF = O_\calF + t \bfe_t$, the place $x=0$ at time $t$. 

The **worldline** of $\calF$ is the set of all its spatial origins, $$W_\calF := \{O_\calF + s \bfe_t:s \in \bbR\} \subset \calS,$$ so it is the spatial origin $x=0$ at all times in the $\calF$ reference frame. The line of simultaneity of $\calF$ at time $t$ is defined as $$S_\calF(t) := \{O_\calF + t \bfe_t + s \bfe_x:s \in \bbR\} \subset \calS,$$ and it represents all events which occur at the same time as the observer $\calF$ at its time $t$. 

Suppose we have another inertial observer $\calF' = (O_{\calF'}, \bfe_t', \bfe_x')$ whose origin equals the origin of $\calF$. That is, $O_\calF = O_{\calF'}$. Suppose we have an event $E \in \calS$. We can write $$E=(t,x)_\calF=(t',x')_{\calF'}.$$ The question Einstein was interested in is, how do $(t,x)$ and $(t',x')$ relate to one another? The answer is the Lorentz transformation, which I will derive here. 

## Postulates

We assume the following postulates.

**(P1) Common origin and linearity.** The frames $\calF$ and $\calF'$ share an origin event, $(0, 0)_\calF = (0, 0)_{\calF'}$. Let $v$ be the velocity of $\calF'$ relative to $\calF$ (see P2). There is a real, invertible $2 \times 2$ matrix $\boldsymbol{\Lambda}(v)$ such that
$$(t, x)_\calF = (t', x')_{\calF'} \quad \Longleftrightarrow \quad (t', x') = \boldsymbol{\Lambda}(v)(t, x).$$
$\boldsymbol{\Lambda}$ depends only on $v$, and it depends on $v$ continuously.

**(P2) Meaning of relative velocity.** The frame $\calF'$ moves at velocity $v$ relative to $\calF$ when the worldline of $\calF'$ is the set of events $(t, vt)_\calF$. If $v = 0$, then $\calF$ and $\calF'$ are the same frame.

**(P3) Invariance of light speed.** Suppose a light pulse passes through the origin event and reaches $(t, x)_\calF = (t', x')_{\calF'}$. If $|x| = c |t|$, then $|x'| = c |t'|$.

**(P4) Isotropy.** Space has no preferred direction. Let $\bar\calF = (O_\calF, \bfe_t, -\bfe_x)$ and $\bar\calF' = (O_{\calF'}, \bfe_t', -\bfe_x')$ be the spatial reflections of $\calF$ and $\calF'$. These are also valid inertial frames, and $\bar\calF'$ moves at velocity $-v$ relative to $\bar\calF$. Hence their coordinate change is $\boldsymbol{\Lambda}(-v)$: if $(t,x)_\calF = (t',x')_{\calF'}$, then $(t', -x') = \boldsymbol{\Lambda}(-v)(t, -x)$.

**(P5) Relativity principle.** $\calF$ and $\calF'$ are equivalent. If $\calF$ moves at velocity $u$ relative to $\calF'$, then $(t', x')_{\calF'} = (t, x)_\calF$ implies $(t, x) = \boldsymbol{\Lambda}(u)(t', x')$.


## Implications
From the above postulates, we can derive mathematical equations that will help use derive $\bfLambda$. 

WIP