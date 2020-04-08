---
layout: post
title: Tight-Binding Method and an example of monolayer graphene's band structure.
time: 7 April, 2020
lastmodify: 8 April, 2020
mathjax: true
intro: Tight-Binding Method was developed almost 100 years ago. But in recent years, it shined when dealing with some solids. Most of old textbooks do not introduce this method in a practical way and I got confused when one of classmate used a "modern" type of Tight-Binding Method. So here, I summarized this method and gave an nice example of monolayer graphene.
---
# Introduction to Tight Binding Method

_Tight binding method_ was developed almost 100 years ago. It was used to calculate solids' band structures under some circumstances, in order to reduce calculation efforts. Imagine there is an atom, with electrons flying around. According to quantum mechanics, each electron is at a specific energy level, and has an orbit (1s, 2p, 3d, etc.). When you put two atoms A and B together, due to nuclei B has interaction on electron in atom A, this electron's energy level and orbit will deviate from previous isolated atom situation. But these two atoms are not too close, which makes this deviation small.

Based on ideas above, band structures of solids can be approximated with knowing free atom orbits and some assumptions. If `$\phi_n$` is a bound level of free atom Hamiltonian `$H_{at}$`, then

`
$$
(1)\ \ H_{at}\phi_n = E_n \phi_n
$$
`
Note that, `$n$` stands for different atomic energy level: 1s, 2d, 3f, etc.

We want to use these atom orbits to construct band structures. But in many cases, there are more than one atom in a primitive cell. If so, molecule orbits are used to construct band structures instead of each atom orbit. And molecule orbits are constructed by atom orbits in one primitive cell.

So, the wave function construction is like below

`$$
\text{Molecule orbit: }\psi_n(\vec r) = \sum_{m=1}^M a_m \phi^m_n(\vec r), \text{ M is the number of atoms in one primitive cell}
$$`

`$$
\text{Band structure: }\psi = \sum_{N=1}^{N_1N_2N_3} c_N\psi_n(\vec r - \vec R_N),\ N_1N_2N_3\text{ is the total primitive cells number.}
$$`


Well for most of time, these two summations' order is reversed:

`
$$
(2)\ \ \psi = \sum_{m=1}^M a_m \sum_{N=1}^{N_1N_2N_3}c_N\phi^m_n(\vec r-\vec R_N) = \sum_{m=1}^M a_m \Phi^m(\vec r)
$$
`

Considering Bloch theorem, coefficient `$c_N$` must be `$exp(i\vec k\cdot \vec R_N)$`. Once we know the wave function assumption and variables in it, variational principles makes everything handy:

`
$$
(3)\ \ E = \langle H \rangle = \frac{ \langle \psi| H | \psi \rangle }
{\langle \psi | \psi\rangle}
 =\frac{ \sum_{i,j=1}^Ma^*_ia_j H_{ij} }
 {\sum_{i,j=1}^Ma^*_ia_jS_{ij}}, \\\text{with }H_{ij} = \langle \Phi^i |H|\Phi^j \rangle,\ S_{ij} = \langle \Phi^i|\Phi^j \rangle
$$
`

Since `$\psi$` may not be normalized, `$\langle \psi | \psi\rangle$` occurs in the energy expression. Now, variational principles say that `$\partial E/\partial a_x = 0$`. This gives

`
$$
(4)\ \ \sum_{j=1}^M H_{xj}a_j = E\sum_{j=1}^MS_{xj}a_j
$$`


So, `$(H)_{xj}$` and `$(S)_{xj}$` are two matrices, band structure problems are now general eigen value problem `$det(H-ES)=0$`. `$S$` is called <i>overlapping integral matrix</i> and `$H$` is called <i>transfer matrix</i>.

In each specific circumstance, making some reasonable assumptions about matrix `$H$` and `$S$`.Then, using MatLab or other langleuages, this should be easy to solve. In the example below, tight binding method will be used to get some ideas about monolayer graphene's band structure.





# Band structure of monolayer graphene

Monolayer graphene's primitive cell has two atoms, called A and B. So, `$M = 2$` and `$H,S$` are matrices with dimension 2*2.

An image of monolayer graphene in real space:

![Monolayer-layer-graphene-in-real-space](/assets/monolayer-graphene/Annotation-2020-04-07-215622.png)

## Diagonal matrix element

By definition:

`
$$
(5)\ \ H_{AA} = H_{BB} = \langle \Phi^A | H | \Phi^A \rangle\\
=\sum_{N=1}^{N_1N_2N_3}\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \langle \phi^A_{2p}(\vec r - \vec R_{N'}) | H | \phi^A_{2p}(\vec r - \vec R_N) \rangle
$$`

`$$
(6)\ \ S_{AA} = S_{BB} = \langle \Phi^A | \Phi^A \rangle\\ 
= \sum_{N=1}^{N_1N_2N_3}\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \langle \phi^A_{2p}(\vec r - \vec R_{N'}) |  \phi^A_{2p}(\vec r - \vec R_N) \rangle
$$`
Note that index `$2p$` means that we're considering `$2p$` electron orbit of graphene. More specifically, all the `$p$` orbits are `$p_z$` orbits, therefore have rotational symmetry (will be used in "off-diagonal matrix element").

And then we need to make a assumption: `$N' \neq N$` terms in equation (5) and (6) can be neglected. For `$S_{AA,BB}$` this makes sense because wave functions of different lattices have almost no overlapping since system is previously assumed to be tight-binding. The same for `$H_{AA,BB}$`. Therefore,

`
$$
(7)\ \ H_{AA} = H_{BB} = N_1N_2N_3E_{2p}\\
(8)\ \ S_{AA} = S_{BB} = N_1N_2N_3
$$`


## Off-diagonal matrix element

By definition: 


`$$
(9)\ \ H_{AB} = H^*_{BA} = \langle \Phi^A | H | \Phi^B \rangle\\
 =\sum_{N=1}^{N_1N_2N_3}\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \langle \phi^A_{2p}(\vec r - \vec R_{N'}) | H | \phi^B_{2p}(\vec r - \vec R_N) \rangle \\
(10)\ \  S_{AB} = S^*_{BA} = \langle \Phi^A | \Phi^B \rangle \\
  = \sum_{N=1}^{N_1N_2N_3}\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \langle \phi^A_{2p}(\vec r - \vec R_{N'}) | \phi^B_{2p}(\vec r - \vec R_N) \rangle
$$`
Then, assume that only integrals between nearest atom A and atom B are not zero:


`$$
(9)\ \ H_{AB} = H^*_{BA} = \langle \Phi^A | H | \Phi^B \rangle\\
 =\sum_{N=1}^{N_1N_2N_3}\sum_{\text{nearest }N'}c_{N'}^*c_N \langle \phi^A_{2p}(\vec r - \vec R_{N'}) | H | \phi^B_{2p}(\vec r - \vec R_N) \rangle \\
 =-\sum_{N=1}^{N_1N_2N_3}\sum_{\text{nearest }N'}\gamma_0e^{i\vec k\cdot (\vec R_N - \vec R_{N'})}
 \\
(10)\ \  S_{AB} = S^*_{BA} = \langle \Phi^A | \Phi^B \rangle \\
  = \sum_{N=1}^{N_1N_2N_3}\sum_{
  \text{nearest }N'}c_{N'}^*c_N \langle \phi^A_{2p}(\vec r - \vec R_{N'}) | \phi^B_{2p}(\vec r - \vec R_N) \rangle\\
  = \sum_{N=1}^{N_1N_2N_3}\sum_{\text{nearest }N'}s_0e^{i\vec k\cdot (\vec R_N - \vec R_{N'})}
$$`


With,


`$$
(11)\ \ \gamma_0 = -\langle \phi^A_{2p}(\vec r - \vec R_{N'}) | H | \phi^B_{2p}(\vec r - \vec R_N) \rangle,\\
(12)\ \ s_0 = \langle \phi^A_{2p}(\vec r - \vec R_{N'}) | \phi^B_{2p}(\vec r - \vec R_N) \rangle, \\
\ N' \text{ and } N\text{ are nearest atom A and atom B}
$$`
For any nearest A atom and B atom pair, `$\gamma_0$` and `$s_0$` are the same. So these two parameters will not be calculated. Instead, they are tunable parameters, to fit actual experimental data. 

For each B atom, there are three nearest A atoms, with `$R_{N'} - R_N$` equals to 

`$$
\vec \delta_1 = (a, 0) \\
\vec \delta_2 = (-\frac 1 2 a, \frac{\sqrt 3}{2} a) \\
\vec \delta_2 = (-\frac 1 2 a, - \frac{\sqrt 3}{2} a) \\
$$`
Therefore `$H_{AB}$` and `$S_{AB}$` is
`$$
H_{AB} = H^*_{BA} = -N_1N_2N_3 \gamma_0 (e^{-ik_xa} + 2e^{ik_xa/2}\cos\frac{\sqrt 3}{2}k_y a)\\
S_{AB} = S^*_{BA} = N_1N_2N_3 s_0 (e^{-ik_xa} + 2e^{ik_xa/2}\cos\frac{\sqrt 3}{2}k_y a)
$$`
Now solve it.

## Result: Band structure, linear dispersion around fermi level

Note that result below uses parameter: different values do not change the shape of resulting band curve but only the scale.
`$$
\gamma_0 = 3.033 \text{ eV},\\
s_0 = 0.129.
$$`

Band structure figure in the figure below:

![3d-monolayer-band](/assets/monolayer-graphene/monolayer-graphene-3D-band.png)

See this figure from the top and calculate more area in the extended brillouin zone. The figrue down below shows a hexagon with different angle (90 degree different) compared to a monolayer graphene's real space hexagon lattice.

![2d-monolayer-band](/assets/monolayer-graphene/monolayer-graphene-2D-band.png)

Zoom in to the fermi level and look into results for only one direction:

![linear-dispersion](/assets/monolayer-graphene/monolayer-graphene-linear-dispersion.png)

Around the fermi level, dispersion can be well approximated by a linear expression. Calculation wiht better resolution in `$k_y$` shows that tight-binding method gives a strictly gapless dirac cone dispersion.