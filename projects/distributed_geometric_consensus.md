# Distributed Consensus on Riemannian Manifolds

[return](https://spencerkraisler.github.io)

This project relates to distributed computation. Distributed computation is the study of protocls for a distributed network of processors, making them solve problems in a simple and intuitive way. Social networks, satellite constellations, and quadrotor swarms are all examples of distributed network of processors. 

At the heart of distributed computer theory is consensus algorithms. These are a ubiquitous class of protocls that seek to do one thing: steer a set of processors to a single point. Very often, problems in distributed comptuation boil down to making sure all processors agree on a particular quantity.

For example, suppose we have billions of social media accounts, and we want to compute the average age. There's no practical way of iterating through each account and summing up the average. Consensus algorithms provide a simple, intuitive, and faster way, a distributed way, of computing that average. 

Average consensus necessitates this point to be the average of the agents' initial states. 

A lot of problems in distributed computation additionally boil down to: how can we compute this quantity in a distributed way, as opposed to a parallel way where there is a shared memory. 

My work focused on computing a particular generalization of the average but for smooth manifolds: a construct called the Riemannian center of mass, also known as the [Karcher mean](https://en.wikipedia.org/wiki/Fréchet_mean). Why is this important? Personally, when I set out to pursure this problem, I was so entraned by all the fields of math being utilized: graph theory, smooth manifolds, network, dynamical systems, control theory. It's very neat. But one particular application is MRIs. MRIs often need to compute the Karcher mean to resolve the sensor's errors. However, this is done in a centralized way. If we could do it in a distributed way, it would make MRI computation even faster. 

I published two papers as first author on this topic: 

## Distributed Consensus on Manifolds using the Riemannian Center of Mass
Consensus theory is the study of aggregating a group of states in a distributed manner. It is the foundation of parallel and distributed computing. However, this theory is mainly focused on discrete spaces or vector spaces. In this paper, we develop a distributed consensus algorithm for agents whose states evolve on a manifold. This has applications wherever one wishes to aggreagate the state of a swarm of robots whose state-space is non-Euclidean. For example, consider a network of robot arms you wish to control in a distributed manner. We provide theoretical convergence guarantees for the proposed manifold consensus provided that agents are initialized within a geodesically convex (g-convex) set. The paper was published to the 2023 Conference on Control, Technology, and Application. [Link](https://ieeexplore.ieee.org/abstract/document/10253227)

## Consensus on Lie groups for the Riemannian Center of Mass
The configuration space of nearly any mechanical robot is not a vector space, but a non-Euclidean space known as a Lie group. Lie groups provide a wealth of fascinating properties that are shared with vector spaces. Average consensus theory is the study of computing averages of points in a distributed manner, and has applications to any distributed network of systems such as social networks, MRIs, machine learning, and satellite constellations. However, this theory has historically been focused on vector spaces. In this paper, we present a novel way to compute the average of a set of points on a Lie group in a distributed manner. For non-Euclidean spaces, the generalization of an average is known as the Riemannian center of mass (RCM). This has many applications wherever one one wishes to estimate the state of a mechanical robot in a distributed manner. For example, consider a swarm of camera-equipped satellites estimating the orientation of a space debris object. We show that if the algorithm achieves consensus, then the consensus point is neccessarily at the RCM. We also emprically show a linear rate of convergence. I published this paper to the 2023 Conference on Decision and Control. I presented it at the conference in Singapore. [Link](https://ieeexplore.ieee.org/abstract/document/10384031)

![plots](../media/solvers.png)


I also was an contributing author to two papers involving this topic:

## Vision-based Distributed Pose Estimation using a Spacecraft Constellation (SCITECH, 2023)
In this paper, we present a simulation framework and consensus algorithms to track the pose (position and attitude) of an uncooperative/defunct spacecraft (Target spacecraft) using a fleet of small spacecraft (Ego spacecraft) in Low Earth Orbit (LEO). Since it is not possible to put traditional active sensors (like differential GPS, inter-satellite communication) on the uncooperative/ defunct Target spacecraft, the fleet of Ego spacecraft have to rely on cameras and inter-spacecraft communication among themselves to estimate the relative pose of the Target spacecraft. We present an end-to-end simulation pipeline for simulating high-fidelity orbital mechanics of multiple spacecraft in Earth orbit and generating photo-realistic images of the Target spacecraft using cameras onboard each Ego spacecraft. [Link](https://arc.aiaa.org/doi/abs/10.2514/6.2023-2506)

## Multi-Agent Passivity-based Control for Perception-based Guidance (SCITECH, 2023)
This work presents a passivity-based control approach for tracking an uncooperative target spacecraft within the ego camera center via attitude guidance stabilization. A camera and ML based state estimation are used to generate target pose and position estimates in ego camera frame in a photo-realistic simulation environment. The control approach is robust to noisy observations and uncertainties in the perception map. The sensing error is modeled using sector bounded non-linearities and passivity conditions on the perception map. We show that feedback interconnection with CNN based observation is stable under set constraints and derive an optimal control law for the corresponding feasible set. [Link](https://arc.aiaa.org/doi/abs/10.2514/6.2023-2156)