---
title: "Special Relativity: Part 1"
date: 2026-10-25
tags:
  - special-relativity
---
I want to show a derivation of Lorentz boosts from special relativity (SR) from basic principles. 

<iframe src="/assets/applets/relativistic-driving.html" title="Relativistic driving" loading="lazy" style="width:100%; height:820px; border:1px solid #2A3642; border-radius:14px;"></iframe>

## Setup

### Affine Space

Spacetime is best described as an affine space, so I will introduce that structure first.

An $n$-dimensional real **affine space** $(\calA, \bbE)$ consists of a set $\calA$ of **points** and an $n$-dimensional real vector space $\bbE$ of **vectors**. Points have no preferred origin and cannot be added to each other. Instead, the two structures interact in two ways:
1. Two points $P, Q \in \calA$ determine a **displacement vector** $Q - P \in \bbE$.
2. A point $P \in \calA$ can be displaced by a vector $\bfv \in \bbE$ to give a new point $P + \bfv \in \calA$.

These are compatible: $P + (Q - P) = Q$ for all $P, Q \in \calA$, and $(P + \bfv) + \bfw = P + (\bfv + \bfw)$ for all $P \in \calA$ and $\bfv, \bfw \in \bbE$. For intuition, think of a plane. Its points are locations with no preferred "zero", and its vectors are the arrows between them.

To do computations we need coordinates. An **affine frame** is a choice of origin $O \in \calA$ and basis $(\bfe_1, \dots, \bfe_n)$ of $\bbE$, which we write as $$\calF := (O, \bfe_1, \ldots, \bfe_n).$$ The **coordinates** of a point $P \in \calA$ in $\calF$ are the numbers $(x^1, \dots, x^n) \in \bbR^n$ satisfying $$P - O = x^i \bfe_i = x^1\bfe_1 + \cdots + x^n\bfe_n.$$ We write $P = (x^1, \ldots, x^n)_\calF$ for the point with these coordinates. A different frame assigns the same point different coordinates.

### Spacetime

We model **spacetime** as a 2-dimensional real affine space $(\calS, \bbE^2)$. One dimension is for time and the other is for space. I only use one spatial dimension to keep the algebra simple. An **event** $E \in \calS$ is a point of spacetime.

It is tempting to think of an event as a time paired with a position, but spacetime has no canonical split into a "time part" and a "space part". As Einstein emphasized, space and time are two aspects of a single structure. An analogy is ordinary 3D space, which has no preferred set of three axes. Choosing $x$, $y$, $z$ directions is a convention, and a rotated choice describes the same space equally well. Likewise, time and space are not separate ingredients but directions within one affine space, and none is singled out in advance.

An observer supplies the split. Such an observer picks a "forward in time" direction and a spatial direction, and these give the observer's coordinates. But the decomposition belongs to the observer: two different observers split the same spacetime differently. This is the source of everything that follows.

### Observers

An **inertial observer** $\calF$, also called an **inertial frame of reference**, is an affine frame $(O_\calF, \bfe_t, \bfe_x)$ of $(\calS, \bbE^2)$. Here $O_\calF$ is the observer's origin event, $\bfe_t$ points forward in the observer's time, and $\bfe_x$ points along the observer's space. An event $E \in \calS$ has coordinates $(t,x)$ in $\calF$ when $$E - O_\calF = t \bfe_t + x \bfe_x,$$ and we write $E = (t,x)_\calF$. That is, $(t,x)_\calF$ is the event at time $t$ and position $x$ according to $\calF$.

Two subsets of $\calS$ will be useful. The **spatial origin** of $\calF$ at time $t$ is the single event $(t,0)_\calF = O_\calF + t \bfe_t$, the place $x=0$ at time $t$. The **worldline** of $\calF$ is the set of all its spatial origins, $$W_\calF := \{O_\calF + s \bfe_t : s \in \bbR\} \subset \calS,$$ which is the spatial origin at all times. The **line of simultaneity** of $\calF$ at time $t$ is $$S_\calF(t) := \{O_\calF + t \bfe_t + s \bfe_x : s \in \bbR\} \subset \calS,$$ the set of all events that $\calF$ says happen at time $t$.

### Two Observers

Suppose a second inertial observer $\calF' = (O_{\calF'}, \bfe_t', \bfe_x')$ has the same origin as $\calF$, so $O_\calF = O_{\calF'}$. Any event $E \in \calS$ then has coordinates in both frames: $$E = (t,x)_\calF = (t',x')_{\calF'}.$$ The question Einstein was interested in is how $(t,x)$ and $(t',x')$ relate to one another. The answer is the Lorentz transformation, which I derive here.

## Postulates

We assume the following postulates.

**(P1) Common origin and linearity.** The frames $\calF$ and $\calF'$ share an origin event, $(0, 0)_\calF = (0, 0)_{\calF'}$. Let $v$ be the velocity of $\calF'$ relative to $\calF$ (see **(P2)**). There is a real, invertible $2 \times 2$ matrix $\bfL(v)$ such that
$$(t, x)_\calF = (t', x')_{\calF'} \quad \Longleftrightarrow \quad (t', x') = \bfL(v)(t, x).$$
$\bfL$ depends only on $v$, and it depends on $v$ continuously.

**(P2) Meaning of relative velocity.** The frame $\calF'$ moves at velocity $v$ relative to $\calF$ when the worldline of $\calF'$ is the set of events $(t, vt)_\calF$. That is, we have the equation $$(t,vt)_\calF = (t,0)_{\calF'}.$$
Note if $v = 0$, then $\calF$ and $\calF'$ are the same frame.

**(P3) Invariance of light speed.** The speed of light is the same in all inertial reference frames. In our mathematical setup, this means for an event $E$ which is the result of a light pulse starting at the $\calF$-origin (and $\calF'$-origin, since they are the same), after a time $t$ in the $\calF$ frame (and, consequently, after a time $t'$ in the $\calF'$ frame), we will have
$$E=(t,ct)_\calF = (t', ct')_{\calF'}.$$

**(P4) Isotropy.** Space has no preferred direction. Let $\bar\calF = (O_\calF, \bfe_t, -\bfe_x)$ and $\bar\calF' = (O_{\calF'}, \bfe_t', -\bfe_x')$ be the spatial reflections of $\calF$ and $\calF'$. These are also valid inertial frames, and $\bar\calF'$ moves at velocity $-v$ relative to $\bar\calF$. Hence their coordinate change is $\bfL(-v)$: if $(t,x)_\calF = (t',x')_{\calF'}$, then $(t', -x') = \bfL(-v)(t, -x)$.

**(P5) Relativity principle.** $\calF$ and $\calF'$ are equivalent. If $\calF$ moves at velocity $u$ relative to $\calF'$, then $(t', x')_{\calF'} = (t, x)_\calF$ implies $(t, x) = \bfL(u)(t', x')$.


## Derivation

By **(P1)**, the map $(t,x) \mapsto (t',x')$ is linear. Write $\bfL(v)$ in components as
$$\bfL(v) = \begin{pmatrix} D(v) & C(v) \\ B(v) & A(v) \end{pmatrix}, \qquad \begin{aligned} t' &= Dt + Cx, \\ x' &= Bt + Ax. \end{aligned}$$
Each of $A, B, C, D$ is a function of $v$ only, and we suppress the argument $v$ when it is fixed. The goal is to solve for all four.

### Step 1: The spatial origin of $\calF'$

By **(P2)**, the worldline of $\calF'$ is the set of events $(t, vt)_\calF$. In $\calF'$ coordinates, this same worldline is the set of events $(t', 0)_{\calF'}$. So substituting $x = vt$ into the $x'$ equation must give $x' = 0$ for every $t$:
$$0 = Bt + Avt = (B + vA)t.$$
Therefore
$$B = -vA.$$
This is a constant of the map, so it holds for every event, not just those on the worldline. We now have
$$x' = A(x - vt), \qquad t' = Dt + Cx.$$
Note that $t'$ still depends on $x$ in general. Substituting $x = vt$ into the $t'$ equation only describes events on the worldline of $\calF'$.

### Step 2: The right-moving light ray

A right-moving light ray through the origin is the set of events $(t, ct)_\calF$. By **(P3)**, in $\calF'$ it is the set of events $(t', \pm ct')_{\calF'}$. At $v = 0$ the frames agree **(P2)**, so $x' = x$ and the sign is $+$. By continuity of $\bfL$ in $v$, the sign stays $+$ for all $v$, so the ray is $(t', ct')_{\calF'}$.

Substitute $x = ct$ into the $t'$ equation:
$$t' = Dt + Cct = (D + cC)t.$$
Substitute $x = ct$ into the $x'$ equation, and impose $x' = ct'$:
$$ct' = A(ct - vt) = A(c - v)t.$$
So
$$t' = \frac{A(c - v)}{c}t.$$
Both expressions for $t'$ must agree. Multiplying through by $c$ gives
$$A(c - v) = cD + c^2C.$$

### Step 3: The left-moving light ray

A left-moving light ray through the origin is the set of events $(t, -ct)_\calF$. By **(P3)** and the same continuity argument, in $\calF'$ it is the set of events $(t', -ct')_{\calF'}$.

Substitute $x = -ct$ into the $t'$ equation:
$$t' = Dt - Cct = (D - cC)t.$$
Substitute $x = -ct$ into the $x'$ equation, and impose $x' = -ct'$:
$$-ct' = A(-ct - vt) = -A(c + v)t.$$
Dividing by $-c$ gives
$$t' = \frac{A(c + v)}{c}t.$$
Both expressions for $t'$ must agree. Multiplying through by $c$ gives
$$A(c + v) = cD - c^2C.$$

### Step 4: Solving for $D$ and $C$

We now have two equations:
$$A(c - v) = cD + c^2C,$$
$$A(c + v) = cD - c^2C.$$
Add them. The $C$ terms cancel:
$$2cA = 2cD,$$
so $D = A$. Subtract the second from the first. The $D$ terms cancel:
$$-2vA = 2c^2C,$$
so
$$C = -\frac{v}{c^2}A.$$
The transformation is now
$$x' = A(x - vt), \qquad t' = A\left(t - \frac{v}{c^2}x\right).$$
Light speed invariance has done all it can. Only $A(v)$ remains unknown.

### Step 5: Isotropy and the relativity principle

Isotropy **(P4)** says that if $(t,x)_\calF = (t',x')_{\calF'}$, then $(t', -x') = \bfL(-v)(t, -x)$. The map $\bfL(-v)$ has the form above with $v \to -v$. Its $x'$ equation gives
$$-x' = A(-v)(-x + vt) \quad \Longrightarrow \quad x' = A(-v)(x - vt).$$
Comparing with Step 1, $A(-v) = A(v)$. So $A$ is an even function of $v$.

Now consider the viewpoint of $\calF'$. The frame $\calF$ moves at velocity $u = -v$ relative to $\calF'$. By the relativity principle **(P5)**, $(t,x) = \bfL(-v)(t',x')$. Using evenness of $A$, the inverse map is
$$x = A(x' + vt'), \qquad t = A\left(t' + \frac{v}{c^2}x'\right).$$

### Step 6: Solving for $A$

The forward map followed by the inverse map must return the original event. Substitute the forward expressions for $x'$ and $t'$ into the inverse $x$ equation:
$$x = A\left[A(x - vt) + vA\left(t - \frac{v}{c^2}x\right)\right].$$
Expand the right side:
$$x = A^2 x - A^2 vt + A^2 vt - \frac{A^2 v^2}{c^2}x.$$
The $t$ terms cancel. Collect everything on one side:
$$x\left(1 - A^2 + \frac{A^2 v^2}{c^2}\right) = 0.$$
This must hold for every $x$, so
$$A^2\left(1 - \frac{v^2}{c^2}\right) = 1,$$
which gives
$$A^2 = \frac{1}{1 - v^2/c^2}.$$
We take the positive root, because $A = 1$ when $v = 0$ and $A$ is continuous in $v$. This root is the **Lorentz factor**:
$$A(v) = \gamma(v) = \frac{1}{\sqrt{1 - v^2/c^2}}.$$

## Result

$$D = A = \gamma, \qquad C = -\frac{\gamma v}{c^2}, \qquad B = -\gamma v,$$
so
$$t' = \gamma\left(t - \frac{v}{c^2}x\right), \qquad x' = \gamma(x - vt),$$
or in matrix form, acting on $(t, x)$,
$$\bfL(v) = \gamma\begin{pmatrix} 1 & -v/c^2 \\ -v & 1 \end{pmatrix}.$$

## Summary of what each postulate did

Linearity **(P1)** reduced the problem to four functions of $v$. The motion of the spatial origin of $\calF'$ **(P2)** gave $B$. The two light rays **(P3)** gave $D$ and $C$ in terms of $A$. Isotropy and the relativity principle **(P4, P5)** gave $A$.

The nonzero value of $C$ is the relativity of simultaneity: two events with the same $t$ but different $x$ get different $t'$.
