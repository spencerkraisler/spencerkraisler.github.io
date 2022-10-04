# Distributed Consensus on Lie groups
I am currently writing a paper for IEEE Aeroconf 2023. In this paper, I present a novel distributed consensus algorithm for all Lie groups with a seemingly linear convergence rate and provide a proof of convergence. Unlike other distributed consensus algorithms for Lie groups where authors only show _local_ convergence is guaranteed, I provide a proof that the domain of convergence is quite large for my algorithm. 

# Manopt contributions
I am a contributor to the [Manopt library](https://github.com/NicolasBoumal/manopt). Manopt is a Matlab toolbox for optimization on manifolds. I use manopt often since the library provides a nice and clean syntax for manifold computations. You can easily init various matrix manifolds such as Lie groups, projection spaces, etc. I added features such as a method that returns the Lie identity for any Lie group (including arbitrary product and power manifolds), and optimized the log() and exp() operators for $SO(3)$ by implementing [Rodrigues' rotation formula](https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula).

# 3rd place in UW's A&A Research Showcase 2022
I placed 3rd in UW's A&A Research Showcase 2022. Here, A&A PhD students give 3 minute presentations of their recent research. [Here](https://youtu.be/H1MZtewFQK8?t=2563) is the link to my presentation. 
