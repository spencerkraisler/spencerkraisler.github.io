# Direct Policy Optimization through Riemannian Optimization Techniques


Direct policy optimization (PO) is a new subfield of control theory. Here, controllers are designed using policy gradient methods rather than solving for [value functions](https://en.wikipedia.org/wiki/Lyapunov_function) or Lyapunov certificates, say using [linear matrix inequalities](https://en.wikipedia.org/wiki/Linear_matrix_inequality). 

For example, to find the LQR gain, you solve the Ricatti equation. The solution to the Ricatti equation mathematically guarantees a Lyapunov equation for your static feedback controller. This method is 70 years old, and works fantastically. 

In recent years, the CS and reinforcment learning communities have demonstrated the power of simply policy gradient methods for designing policies. We've seen this with the introduction of chat GPT and AlphaGo. But as powerful as these methodologies are, they have one fatal flaw: **there are no stabilization nor robustness guarantees**. Boeing, SpaceX, NASA, Lockheed Martin; these institutes will never in a million years implement anything lacking stabilization guarantees when lives are on the line! 

In recent years, PO has been shown to be an effective first-order procedure for a number of feedback syntehsis problems. Furthermore, PO provides a natural bridge between control synthesis and reinforcement learning with stabilization guarantees. The goal of this niche field of control theory is simple: using policy gradient methods to iteratively *learn* the optimal controller while mathematically guaranteeing stabilization, or whatever safety measure one requires. The emphasis here is we need that mathematical guarnatee for safey. 

In my work, I focus on the linear-quadratic Gaussian problem. Here, we have a linear plant, and we wish to stabilize it with a linear dynamic output-feedback controller. I designed a policy gradient method and proved a local convergence guarantee with linear rate. 

![plots](../media/RGD_plots.png)

A local convergence guarantee means that there exists a neighborhood around the optimal polcy such that if I initialize the system with a policy inside that neighborhood, then convergence to the optimal policy is guarnateed. Furthermore, you get a linear rate of convergence. This means that the error is multipled by some factor $a \in (0,1)$ each iteration. 

A benchmark in control theory for an algortihm to be deemed *practically useful* is for it to have a proven a linear or super-linear convergence rate.

At the time of this writing, there has been no policy gradient method for the LQG problem with a proven convergence guarnatee. And the only one available at the time had a demonstrably sub-linear convergence rate. I'm happy I was able to make a mark on this awesome problem! 

The secret to my technique that those before me did not try was [Riemannian optimization](https://www.nicolasboumal.net/book/), which is a central focus of my entire PhD journal. I was able to show that the set of all stabilizing controllers forms a mathematical construct called a [smooth manifold](https://en.wikipedia.org/wiki/Differentiable_manifold). This means that it is a shape that is locally Euclidean. The universe itself is a smooth manifold, as proven by Einstein...

![the smooth manifold of dynamic controllers](../media/dynamic_controller_manifold_connected.png)

![another one](../media/manifold_2.png)



I wrapped up my work into a paper published to the IEEE Control systems Letters. This is a high quality journal. I will be presenting my work at the 2024 Conferece on Decision and Control in Mulan, Italy! [link](https://ieeexplore.ieee.org/abstract/document/10557741)

I was later invited to write an article to the Springer Encyclopedia on Systems and Control on *geometric techniques* for direct policy optimization. This was a big endeavor for me because I worked alongside so many famous researchers, including Yang Zheng, Na Li, Mehran Mesbahi, and my friend Shahriar Talebi. These are the giants whose shoulders I stand upon for my work. Our article is currently in review. [link](https://arxiv.org/abs/2406.04243)

I am also writing a sequal journal paper with my friend Shahriar from Harvard University. We plan to publish to the Transactions on Automatic Control journal sometime in the coming months. 

