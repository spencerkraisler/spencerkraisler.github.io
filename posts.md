
## Introduction
I have noticed many derivations of the famous rotational equations of motion, also known as Euler's equations, are lackluster. I am speaking about $$I\dot{\omega}=I\omega \times \omega + \tau$$
- Why is there cross product?
- What is $\omega$ exactly? Is it body-frame? Inertial frame?

I intend to prove what I feel to be a more concise and mathematician-friendly proof for those who want to really get how it is derived, and why there's a cross product. 

Let $\mathbb{E}^3$ be the 3-dimensional Euclidean space. Let $\mathcal{I}=(e_1,e_2,e_3)$ be a fixed inertial frame represented as an orthonormal basis of $\mathbb{E}^3$. Let $\mathcal{B}=(b_1,b_2,b_3)$ be a rotating rigid body, again represented as an orthonormal basis. Note that $e_1,e_2,e_3 \in E^3$ are **constant vectors**, while $b_1,b_2,b_3$ are **time-varying**, yet always orthonormal with one another. 

## Vectors vs. Coordinates
Let $R \in SO(3) \subset \mathbb{R}^{3 \times 3}$ be the rotation matrix that maps body-frame coordinates to inertial-frame coordiantes. Let's focus on a quick example. Let $v \in \mathbb{E}^3$. We can express $v$ in the body frame as follows: $$\begin{align}v&=\sum_{i=1}^3v_ib_i\\ v_i&=v\cdot b_i\mathbb{E}\end{align}$$
We call $$\vec{v}_\mathcal{B}:=(v_1,v_2,v_3) \in \mathbb{R}^3$$ the coordinates of $v$ with respect to $\mathcal{B}$. Note that while $v$ is a constant vector, $\vec{v}_\mathcal{B}$ is time-varying preceisely because $b_1,b_2,b_3$ are possibly time-varying. Similarly, $$\begin{align}\vec{v}_I&=(w_1,w_2,w_3) \in \mathbb{R}^3 \\ w_i &= v \cdot e_i\mathbb{E} \end{align}$$ is the coordinates of $v$ with respect to $\mathcal{I}$. Note that $\vec{v}_\mathcal{I}$ is constant because $v$ and $e_1,e_2,e_3$ are all constant. 

$R$ is unique (time-varying) matrix such that $R\vec{v}_\mathcal{B} = \vec{v}_\mathcal{I}$ for all $v \in \mathbb{E}^3$. It turns out to be a rotation matrix since $\mathcal{I},\mathcal{B}$ are orthnormal frames. Also $R=R(t)$ is time-varying, yet it is always a rotation matrix. 

## Laws of Physics and Identities of Math to Consider
We have a few postulates and identities that we will assume true without proof. 

1. Moment of inertia in the body frame is constant. 

Suppose the rigid body has moment of inertia $J_\mathcal{I} \in \mathbb{R}^{3 \times 3}$ in the inertia frame. I emphasize $J_\mathcal{I}$ is a time-varying matrix. Pick up a pencil and choose a fixed inertia frame with your right index-middle-thumb fingers. As you rotate the pencil, the moment of inertia in your handmade inertia frame varies significantly. If the pencil points with the thumb, $(J_\mathcal{I})_{33}$ will be very tiny. If the pencil points with the index finger, then $(J_\mathcal{I})_{33}$ will be significantly larger. $J_\mathcal{B}=R^TJ_\mathcal{I} R$ is the pencil's moment of inertia with respect to $\mathcal{B}$ the body frame. This is a constant matrix since it always rotates with the pencil. It's as if you rotated your right hand with the pencil. $(J_\mathcal{B})_{11},(J_\mathcal{B})_{22},(J_\mathcal{B})_{33}$ are constant. 

2. Angular momentum in the inertia frame is constant.

You must have heard the phrase "the conservation of angular momentum". This strictly means that angular momentum in the inertial frame is constant. This also means the angular momentum along non-inertial frames are not technically constant. There is a mathematical way of saying this. Let $\vec{\omega}_\mathcal{I}$ be the angular velocity of the rotating rigid body in the inertia frame. Then $$J_\mathcal{I} \vec{\omega}_\mathcal{I} = \vec{L}_\mathcal{I}=constant$$

Again, I emphasize that while $J_\mathcal{I}$ and $\vec{\omega}_\mathcal{I}$ are time-varying, it is always true that $\vec{L}_\mathcal{I}$ is constant. 

The following are just neat math identities:

3. $\dot{R}:=\frac{d}{dt}(R)=R[\vec{\omega}_\mathcal{B}]^\times$
4. $\frac{d}{dt}(R^T)=-R^T\dot{R}R^T=-[\vec{\omega}_\mathcal{B}]^\times R^T$
5. $-(x \times y)=y \times x$ for $x,y \in \mathbb{R}^3$

Here, $[\vec{x}]^\times \in \mathbb{R}^{3 \times 3}$ is the unique matrix such that $[\vec{x}]^\times y=x \times y$ for all $y \in \mathbb{R}^3$. 

## Proof
Let's begin the simple proof. We start with the fact that $$J_\mathcal{I} \vec{\omega}_\mathcal{I} = \vec{L}_\mathcal{I}=constant$$

Recall $J_\mathcal{I}=RJ_\mathcal{B} R^T$ and $\vec{\omega}_\mathcal{I}=R\vec{\omega}_\mathcal{B}$. Therefore $$RJ_\mathcal{B} R^TR\vec{\omega}_\mathcal{B}=\vec{L}_\mathcal{I}\implies J_\mathcal{B}\vec{\omega}_\mathcal{B}=R^T\vec{L}_\mathcal{I}$$

Taking the time-derivative of both sides, and remembering the 4 equations above, we have that $$J_\mathcal{B} \dot{\vec{\omega}}_\mathcal{B}=\frac{d}{dt}(R^T)\vec{L}_\mathcal{I}=-[\vec{\omega}_\mathcal{B}]^\times R^T \vec{L}_\mathcal{I}$$

Recall that $R^T\vec{L}_\mathcal{I}=J\vec{\omega}_\mathcal{B}$. Therefore $$J_\mathcal{B} \dot{\vec{\omega}}_\mathcal{B}=-[\vec{\omega}_\mathcal{B}]^\times  J_\mathcal{B} \vec{\omega}_\mathcal{B}=-(\vec{\omega}_\mathcal{B} \times J_\mathcal{B} \vec{\omega}_\mathcal{B})$$

Thererfore $$J_\mathcal{B}\dot{\vec{\omega}}_\mathcal{B}=J_\mathcal{B}\vec{\omega}_\mathcal{B} \times \vec{\omega}_\mathcal{B}$$
