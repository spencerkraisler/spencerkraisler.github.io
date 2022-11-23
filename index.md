## Spencer Kraisler

University of Washington

Department of Aeronautics and Astronautics

Seattle, WA 98195

Email: kraisler (at) uw (dot) edu
[linkedin](https://www.linkedin.com/in/spencer-kraisler-250494149/)
[github](https://github.com/spencerkraisler)

## About me
I am a 2nd year Aerospace PhD student at the University of Washington. My advisor is Dr. Mehran Mesbahi and I am member of the Robotics, Aerospace and Information Networks (RAIN) lab! I find geometric control theory and distributed control very exciting. In particular, I study distributed consensus algorithms on Lie groups, and other applications of Lie groups to controls. For hobbies, I am 2nd degree black belt in shotokan karate and I enjoy playing Go! 

## Projects
### Distributed Consensus on Lie groups
As of now, my PhD thesis will revolve around consensus algorithms on non-linear spaces, a topic I am deeply fond of. I am currently writing two (hopefully!) papers for CDC 2023.

### Manopt contributions
I contributed a small amount of code to the [Manopt library](https://github.com/NicolasBoumal/manopt). Manopt is a Matlab toolbox for optimization on manifolds I use pretty often. I added a method that returns the Lie identity for Lie groups, and used [Rodrigues' rotation formula](https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula) for optimize the exp() and log() operators for SO(3).

### PyLieGroup
As a small side project, I'm writing a Python library for Lie group computations. I'm taking an object-oriented approach to this so users can easily swap "parameterizations" without changing any code about their Lie group or algorithm. I have no idea how user-friendly it'll be, but it's a lot of fun to work on. :) I hope to finish this soon but busy with school.

### 3rd place in UW's A&A Research Showcase 2022
I placed 3rd in UW's A&A Research Showcase 2022. Here, A&A PhD students give 3 minute presentations of their recent research. [Here](https://youtu.be/H1MZtewFQK8?t=2563) is the link to my presentation. 

## Publications

### Consensus on Lie groups with Application to Distributed Pose Estimation (unpublished)**
I am currently writing a paper for CDC 2023. In this paper, I present a novel distributed consensus algorithm for all Lie groups with a seemingly linear convergence rate and provide a proof of convergence. Unlike other distributed consensus algorithms for Lie groups where authors only show local convergence is guaranteed, I provide a proof that shows convergence is garanteed if agents are initialized within a geodesically convex post.
