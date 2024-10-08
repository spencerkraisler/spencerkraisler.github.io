# Spencer Kraisler


**Email**: kraisler (at) uw (dot) edu

**Links**: [linkedin](https://www.linkedin.com/in/spencer-kraisler-250494149/), [github](https://github.com/spencerkraisler), [resume](https://spencerkraisler.github.io/resume.pdf)

## About me
Hello. I am a 4th year PhD student at UW. I work at the RAIN lab within the Aerospace department. My advisor is Mehran Mesbahi. As a PhD student, my job is to research and develop solutions to math-heavy practical problems relating to controls, robotics, and aerospace. 

I love what I do because I get to stand at the intersection of theory and application, and embrace challenging math-heavy engineering problems. For example, over the summer, my lab and I built a quadrotor set-up in order to test control algorithms in real-time. 

<img src="media/quadrotor.jpeg" alt="D.R.O.P.L.E.T." width="200"/>

I had to learn a great deal about hardware implementation, setting up a ROS environment, and uploading autopilot software. I knew none of this at first, but I quickly learned and appreicated how powerful this technology is. Currently, I am writing a [motion system](https://en.wikipedia.org/wiki/Motion_planning) into the ROS environment. By this, I mean that I want a script where the inputs are the quadrotor state, a trajectory cost, and a constraint (e.g. land the quadrotor while satisfying the *line-of-sight constraint*), and the output will be the optimal trajectory. Then, I will have an [MPC script](https://en.wikipedia.org/wiki/Model_predictive_control) to steer the quadrotor (in real time) to track that nominal trajectory. 

<!-- One of my initial motivations for pursuing a PhD in aerospace was the Artemis program: establishing a human prescence on the moon! I wanted to contribute to that! I'm happy that I have, in my own way, through research and publishing several papers on controls, and working alongside amazing people here at UW Aerospace, as well as NASA. Since then, my interests have only grown. I've been learning and utilizing more tools from machine learning and trajectory optimization, especially in the context of robotics and AI.  -->

My main research interests are policy optimization, reinforcement learning, and optimal control. My thesis topic will be on **controller synthesis through Riemannian optimization**. Here, *Riemannian optimization* is a toolkit from optimization theory used when your search space is constrained in a *smooth non-degenerate* way.

Outside of work, I [curl](https://en.wikipedia.org/wiki/Curling), train Shotokan karate (2nd degree black belt), and do lots of reading. My wife and I are huge foodies and enjoy discovering new restaurants in the Seattle region. 

<img src="media/photo.jpeg" alt="me and my wife" width="200"/>

<!-- I specialize in control theory, and my main research interests are policy optimization, reinforcement learning, and optimal control. My thesis topic will be on **controller synthesis through Riemannian optimization**. Here, *Riemannian optimization* is a toolkit from optimization theory used when your search space is constrained in a *smooth non-degenerate* way. -->


<!-- 
But the heart of my interests will always be the same: mathematics, the intersection of theory and applications, and designing simple solutions to complicated math-heavy problems. While my research can lean towards the theoretical side, I make sure to ground myself with practical application and hardware/software implementation. -->





## Projects

[using policy optimization to design optimal controllers](projects/direct_policy_optimization.md)

[steering dynamic agents towards a single point on a smooth manifold](projects/distributed_geometric_consensus.md)

**Manopt contributions**: I contribute to the [Manopt library](https://github.com/NicolasBoumal/manopt). Manopt is a Matlab toolbox for optimization on manifolds I use pretty often. I added a method that returns the Lie identity for Lie groups, and used [Rodrigues' rotation formula](https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula) for optimize the exp() and log() operators for SO(3).


## Publications

[Output-Feedback Synthesis Orbit Geometry: Quotient Manifolds and LQG Direct Policy Optimization](https://ieeexplore.ieee.org/abstract/document/10557741/)

[Policy Optimization in Control: Geometry and Algorithmic Implications](https://arxiv.org/pdf/2406.04243)

[Distributed Consensus on Manifolds using the Riemannian Center of Mass](https://ieeexplore.ieee.org/iel7/10252164/10252092/10253227.pdf)

[Multi-Agent Passivity-based Control for Perception-based Guidance](https://arc.aiaa.org/doi/abs/10.2514/6.2023-2156)

[Consensus on Lie groups for the Riemannian Center of Mass](https://ieeexplore.ieee.org/iel7/10383192/10383193/10384031.pdf)

[Vision-based Distributed Pose Estimation using a Spacecraft Constellation](https://arc.aiaa.org/doi/abs/10.2514/6.2023-2506)


## Awards

**Recipient of CDC 2023 Travel Grant**

**3rd place in UW A&A Research Showcase 2022**: I placed 3rd in UW's A&A Research Showcase 2022. Here, A&A PhD students give 3 minute presentations of their recent research. [Here](https://youtu.be/H1MZtewFQK8?t=2563) is the link to my presentation.
