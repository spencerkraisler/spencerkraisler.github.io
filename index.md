## Spencer Kraisler

University of Washington

Department of Aeronautics and Astronautics

Seattle, WA 98195

Email: kraisler (at) uw (dot) edu
[linkedin](https://www.linkedin.com/in/spencer-kraisler-250494149/)
[github](https://github.com/spencerkraisler)

## About me
I am a 3rd year Aerospace PhD student at the University of Washington. My advisor is Prof. Mehran Mesbahi, and I am member of the Robotics, Aerospace and Information Networks (RAIN) lab! I enjoy studying applications of Riemannian geometry to controls, as well as consensus algorithms and distributed computing. Outside of work, my wife and I enjoy finding new restaurants to try out and attending music venues. For hobbies, I am 2nd degree black belt in shotokan karate and I enjoy playing Go! 

## Projects
### Direct Policy Optimization for LQG and More
I am studying data-driven methods for LQG. I recently submitted a paper (in review) to L-CSS + CDC on this topic, and I am planning to write another journal paper.

### Distributed Consensus on Lie groups
I wrote 2 1st author papers relating to consensus algorithms on non-Euclidean state spaces. 

### Manopt contributions
I contributed a small amount of code to the [Manopt library](https://github.com/NicolasBoumal/manopt). Manopt is a Matlab toolbox for optimization on manifolds I use pretty often. I added a method that returns the Lie identity for Lie groups, and used [Rodrigues' rotation formula](https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula) for optimize the exp() and log() operators for SO(3).

## Publications

### Output-feedback Synthesis Orbit Geometry: Quotient Manifolds and LQG Direct Policy Optimization (L-CSS + CDC, 2024, in review, 1st author)
Direct policy optimization (PO) synthesizes controllers by formalizing constrained optimization problems over controller parameters rather than solving LMIs and Ricatti equations, as one does with LQR, Kalman filters, and LQG. It is funny how when we learn about LQG and Kalman filters, we always assume we are given the noise covariance matrices. In actuality, this is never the case. One must upper bound them via trial and error. Matters get worse in environments when the noise covariances are time-varying. This is why data-driven methods are key in this situation. In recent years, PO has been shown to be an effective first order procedure for a number of feedback synthesis problems, while providing a natural bridge between control synthesis and data-driven methods and learning. Regarding LQG, over the past few years, it has been recognized that the landscape of stabilizing output-feedback controllers of relevance to LQG has an intricate geometry, particularly as it pertains to the existence of spurious stationary points. In order to address such challenges, in this paper, we first adopt a Riemannian metric for the space of stabilizing full-order minimal output-feedback controllers. We then proceed to prove that the orbit of such controllers mod- ulo coordinate transformation admits a Riemannian quotient manifold structure. This geometric structure is then used to develop a Riemannian gradient descent for the direct LQG policy optimization. We prove a local convergence guarantee with linear rate and show the proposed approach exhibits significantly faster and more robust numerical performance as compared with ordinary gradient descent for LQG. [Link](https://arxiv.org/abs/2403.17157)

### Centralized and Distributed Strategies for Handover-Aware Task Allocation in Satellite Constellations (JGCD, 2024, in review)
As satellite constellations grow in size, there is an increasing need for autonomous, scalable, and real-time dynamic task assignment to address the unique operational challenges of such distributed systems. In particular, a time-varying task assignment (i.e., for observing various regions of Earth) often means that the corresponding satellite has to re-orient itself or its sensors, costing time and energy. However, most assignment algorithms for area requests proposed in the literature do not account for the significant cost associated with task handover in satellite constellations. In this paper, we develop a framework for solving the seemingly NP-hard problem of optimal dynamic task allocation while minimizing task handover. In particular, we develop Handover-Aware Assignment with Lookahead (HAAL), an algorithm with centralized and distributed variants, and solutions that provably achieve 50% of the optimal value. We then proceed to show that HAAL significantly outperforms similar heuristic methods proposed in the literature for realistic constellation experiments with up to a thousand satellites. The algorithm scales polynomially in the number of satellites/tasks and offers a smooth trade-off between computational efficiency and performance, allowing the designer to tune the algorithm based on available computing resources, communication bandwidth, and required performance. 

### Consensus on Lie groups for the Riemannian Center of Mass (CDC, 2023, 1st author)
The configuration space of nearly any mechanical robot is not a vector space, but a non-Euclidean space known as a Lie group. Lie groups provide a wealth of fascinating properties that are shared with vector spaces. Average consensus theory is the study of computing averages of points in a distributed manner, and has applications to any distributed network of systems such as social networks, MRIs, machine learning, and satellite constellations. However, this theory has historically been focused on vector spaces. In this paper, we present a novel way to compute the average of a set of points on a Lie group in a distributed manner. For non-Euclidean spaces, the generalization of an average is known as the Riemannian center of mass (RCM). This has many applications wherever one one wishes to estimate the state of a mechanical robot in a distributed manner. For example, consider a swarm of camera-equipped satellites estimating the orientation of a space debris object. We show that if the algorithm achieves consensus, then the consensus point is neccessarily at the RCM. We also emprically show a linear rate of convergence. [Link](https://ieeexplore.ieee.org/abstract/document/10384031)

### Distributed Consensus on Manifolds using the Riemannian Center of Mass (CCTA, 2023, 1st author)
Consensus theory is the study of aggregating a group of states in a distributed manner. It is the foundation of parallel and distributed computing. However, this theory is mainly focused on discrete spaces or vector spaces. In this paper, we develop a distributed consensus algorithm for agents whose states evolve on a manifold. This has applications wherever one wishes to aggreagate the state of a swarm of robots whose state-space is non-Euclidean. For example, consider a network of robot arms you wish to control in a distributed manner. We provide theoretical convergence guarantees for the proposed manifold consensus provided that agents are initialized within a geodesically convex (g-convex) set. [Link](https://ieeexplore.ieee.org/abstract/document/10253227)

### Vision-based Distributed Pose Estimation using a Spacecraft Constellation (SCITECH, 2023)
In this paper, we present a simulation framework and consensus algorithms to track the pose (position and attitude) of an uncooperative/defunct spacecraft (Target spacecraft) using a fleet of small spacecraft (Ego spacecraft) in Low Earth Orbit (LEO). Since it is not possible to put traditional active sensors (like differential GPS, inter-satellite communication) on the uncooperative/ defunct Target spacecraft, the fleet of Ego spacecraft have to rely on cameras and inter-spacecraft communication among themselves to estimate the relative pose of the Target spacecraft. We present an end-to-end simulation pipeline for simulating high-fidelity orbital mechanics of multiple spacecraft in Earth orbit and generating photo-realistic images of the Target spacecraft using cameras onboard each Ego spacecraft. [Link](https://arc.aiaa.org/doi/abs/10.2514/6.2023-2506)

### Multi-Agent Passivity-based Control for Perception-based Guidance (SCITECH, 2023)
This work presents a passivity-based control approach for tracking an uncooperative target spacecraft within the ego camera center via attitude guidance stabilization. A camera and ML based state estimation are used to generate target pose and position estimates in ego camera frame in a photo-realistic simulation environment. The control approach is robust to noisy observations and uncertainties in the perception map. The sensing error is modeled using sector bounded non-linearities and passivity conditions on the perception map. We show that feedback interconnection with CNN based observation is stable under set constraints and derive an optimal control law for the corresponding feasible set. [Link](https://arc.aiaa.org/doi/abs/10.2514/6.2023-2156)

## Awards

### Recipient of CDC 2023 Travel Grant

### 3rd place in UW A&A Research Showcase 2022
I placed 3rd in UW's A&A Research Showcase 2022. Here, A&A PhD students give 3 minute presentations of their recent research. [Here](https://youtu.be/H1MZtewFQK8?t=2563) is the link to my presentation. 
