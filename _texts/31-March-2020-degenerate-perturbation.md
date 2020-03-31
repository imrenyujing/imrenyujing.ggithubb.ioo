---
layout: post
title: Some thoughts towards degenerate perturbation
time: 31 March, 2020
mathjax: true
---

## Non-degenerate perturbation result

We have two Hamiltonian, one is $H_0$, and another is perturbation \(H'\). For any eigen state of $H_0$, $\phi_k^{(0)}$, which is nondegenerate, the first order energy correction is

$$
(1)\ \ E_k^{(1)} = \langle\phi_k^{(0)}|H'|\phi_k^{(0)}\rangle
$$

## About degenerate perturbation

We also have two Hamiltonian $H_0$ and $H'$. What is different now is that we're interested in two degenerate state, $\phi_{k1}^{(0)}$ and $\phi_{k2}^{(0)}$, with same eigen value $E^{(0)}$. It seems that using Equation (1) causes no problem, but the real problem happens to the 1st order wave function correction:

$$
(2)\ \ \phi_{n}^{(1)}=\sum_{m \neq n} \frac{\left\langle\phi_{m}^{(0)}\left|H^{\prime}\right| \psi_{n}^{(0)}\right\rangle}{\left(E_{n}^{(0)}-E_{m}^{(0)}\right)} \phi_{m}^{(0)}
$$

If there are two degenerate states, the denominator of Equation (2)'s RHS will be zero.

Compared to Non-degenerate perturbation, the most different part of degenerate perturbation is that we are adding perturbation to $\psi^{(0)}$, linear superposed state of $\phi_{k1}^{(0)}$ and $\phi_{k2}^{(0)}$, instead of $\phi_{k1}^{(0)}$ or $\phi_{k2}^{(0)}$ alone.

Using $\psi^{(0)} = \alpha \phi_{k1}^{(0)} + \beta \phi_{k2}^{(0)}$, and $\psi = \psi^{(0)}+\lambda \psi^{(1)} + \cdots$, we get the result that, for 1st order energy correction, a eigen value problem of the matrix $(H')\_{ij}$ must be solved. $(H')\_{ij} = \langle\phi\_{ki}^{(0)}\|H'\|\phi_{kj}^{(0)}\rangle$. The values of \( \alpha \) and \( \beta \) are determined by the eigen vectors of $(H')_{ij}$.

One way to understand this is to remind yourself what is the basic procedure to solve a quantum mechanics problem. First write down the Hamiltonian in a specific representation, which is usually a matrix $H$. Then solve the eigen value problem of this matrix $H$. The representation can be chosen arbitrarily, with different difficulty in different representations.

Now we have a representation $A^{(0)}$, which is composed of the eigen states of non-perturbation Hamiltonian $H_0$. What is the eigen value of $H_0 + H'$? Easy, just solve $(H_0 + H')\phi = E\phi$ in the representation $A^{(0)}$, which means you diagonalized $(H_0 + H')_{ij} = \langle \phi^{(0)}_i \|H_0 + H'\| \phi^{(0)}_j \rangle$ in the whole Hilbert space. But that is only possible for some easy problems. Even with computers, this means lots of electricity energy gone.

So, physicists said that $H'$ is small. You only need to consider eigen values of $(H')_{ij}$, because they are small compared to eigen values of $(H_0)\_{ij}$. Many non-diagonal elements of $( H')\_{ij}$ are very close to zero, so you don't need to solve a eigen value problem. Just calculating the diagonal element $\langle\phi_k^{(0)}\|H'\|\phi_k^{(0)}\rangle$ will be good enough.

The only exception is when there are degenerate states. In this case, $(H')\_{ij}$ is not closely diagonalized but closely **block diagonalized**. What you need to do is just diagonalized $(H')\_{ij}$ in the degenerate subspace, with smaller matrix dimensions to diagonalize.
