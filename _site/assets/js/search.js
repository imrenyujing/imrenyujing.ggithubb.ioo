// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

// Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

// Add to this index the proper metadata from the Jekyll content

index.addDoc({
  title: "Some thoughts towards degenerate perturbation",
  author: null,
  layout: "post",
  content: "Non-degenerate perturbation result\n\nWe have two Hamiltonian, one is $H_0$, and another is perturbation $H'$. For any eigen state of $H_0$, $\\phi_k^{(0)}$, which is nondegenerate, the first order energy correction is\n\n\n$$\n(1)\\ \\ E_k^{(1)} = \\langle\\phi_k^{(0)}|H'|\\phi_k^{(0)}\\rangle\n$$\n\n\nAbout degenerate perturbation\n\nWe also have two Hamiltonian $H_0$ and $H’$. What is different now is that we’re interested in two degenerate state, $\\phi_{k1}^{(0)}$ and $\\phi_{k2}^{(0)}$, with same eigen value $E^{(0)}$. It seems that using Equation (1) causes no problem, but the real problem happens to the 1st order wave function correction:\n\n\n\nIf there are two degenerate states, the denominator of Equation (2)’s RHS will be zero.\n\nCompared to Non-degenerate perturbation, the most different part of degenerate perturbation is that we are adding perturbation to $\\psi^{(0)}$, linear superposed state of $\\phi_{k1}^{(0)}$ and $\\phi_{k2}^{(0)}$, instead of $\\phi_{k1}^{(0)}$ or $\\phi_{k2}^{(0)}$ alone.\n\nUsing $\\psi^{(0)} = \\alpha \\phi_{k1}^{(0)} + \\beta \\phi_{k2}^{(0)}$, and $\\psi = \\psi^{(0)}+\\lambda \\psi^{(1)} + \\cdots$, we get the result that, for 1st order energy correction, a eigen value problem of the matrix $(H’)_{ij}$ must be solved. $(H’)_{ij} = \\langle\\phi_{ki}^{(0)}|H’|\\phi_{kj}^{(0)}\\rangle$. The values of ( \\alpha ) and ( \\beta ) are determined by the eigen vectors of $(H’)_{ij}$.\n\nOne way to understand this is to remind yourself what is the basic procedure to solve a quantum mechanics problem. First write down the Hamiltonian in a specific representation, which is usually a matrix $H$. Then solve the eigen value problem of this matrix $H$. The representation can be chosen arbitrarily, with different difficulty in different representations.\n\nNow we have a representation $A^{(0)}$, which is composed of the eigen states of non-perturbation Hamiltonian $H_0$. What is the eigen value of $H_0 + H’$? Easy, just solve $(H_0 + H’)\\phi = E\\phi$ in the representation $A^{(0)}$, which means you diagonalized $(H_0 + H’)_{ij} = \\langle \\phi^{(0)}_i |H_0 + H’| \\phi^{(0)}_j \\rangle$ in the whole Hilbert space. But that is only possible for some easy problems. Even with computers, this means lots of electricity energy gone.\n\nSo, physicists said that $H’$ is small. You only need to consider eigen values of $(H’)_{ij}$, because they are small compared to eigen values of $(H_0)_{ij}$. Many non-diagonal elements of $( H’)_{ij}$ are very close to zero, so you don’t need to solve a eigen value problem. Just calculating the diagonal element $\\langle\\phi_k^{(0)}|H’|\\phi_k^{(0)}\\rangle$ will be good enough.\n\nThe only exception is when there are degenerate states. In this case, $(H’)_{ij}$ is not closely diagonalized but closely block diagonalized. What you need to do is just diagonalized $(H’)_{ij}$ in the degenerate subspace, with smaller matrix dimensions to diagonalize.\n",
  id: 0
});
index.addDoc({
  title: "Hello jekyll blogs",
  author: null,
  layout: "post",
  content: "This is a “Hello World” blog for my new jekyll blog!\n\nPeople say jekyll is easy to use. Well, compared to Wordpress, yes. But I still encountered some technical problems\nwhen configuring all these things. Good news is, this blog is basically working now!\n\nI’m considering moving everything from Google Sites to Github Pages. That means I still have many things to learn,\nincluding assets management and designing my own layout.\n",
  id: 1
});
index.addDoc({
  title: "Tight-Binding Method and an example of monolayer graphene's band structure.",
  author: null,
  layout: "post",
  content: "Introduction to Tight Binding Method\n\nTight binding method was developed almost 100 years ago. It was used to calculate solids’ band structures under some circumstances, in order to reduce calculation efforts. Imagine there is an atom, with electrons flying around. According to quantum mechanics, each electron is at a specific energy level, and has an orbit (1s, 2p, 3d, etc.). When you put two atoms A and B together, due to nuclei B has interaction on electron in atom A, this electron’s energy level and orbit will deviate from previous isolated atom situation. But these two atoms are not too close, which makes this deviation small.\n\nBased on ideas above, band structures of solids can be approximated with knowing free atom orbits and some assumptions. If $\\phi_n$ is a bound level of free atom Hamiltonian $H_{at}$, then\n\n\n$$\n(1)\\ \\ H_{at}\\phi_n = E_n \\phi_n\n$$\n\nNote that, $n$ stands for different atomic energy level: 1s, 2d, 3f, etc.\n\nWe want to use these atom orbits to construct band structures. But in many cases, there are more than one atom in a primitive cell. If so, molecule orbits are used to construct band structures instead of each atom orbit. And molecule orbits are constructed by atom orbits in one primitive cell.\n\nSo, the wave function construction is like below\n\n$$\n\\text{Molecule orbit: }\\psi_n(\\vec r) = \\sum_{m=1}^M a_m \\phi^m_n(\\vec r), \\text{ M is the number of atoms in one primitive cell}\n$$\n\n$$\n\\text{Band structure: }\\psi = \\sum_{N=1}^{N_1N_2N_3} c_N\\psi_n(\\vec r - \\vec R_N),\\ N_1N_2N_3\\text{ is the total primitive cells number.}\n$$\n\nWell for most of time, these two summations’ order is reversed:\n\n\n$$\n(2)\\ \\ \\psi = \\sum_{m=1}^M a_m \\sum_{N=1}^{N_1N_2N_3}c_N\\phi^m_n(\\vec r-\\vec R_N) = \\sum_{m=1}^M a_m \\Phi^m(\\vec r)\n$$\n\n\nConsidering Bloch theorem, coefficient $c_N$ must be $exp(i\\vec k\\cdot \\vec R_N)$. Once we know the wave function assumption and variables in it, variational principles makes everything handy:\n\n\n$$\n(3)\\ \\ E = \\langle H \\rangle = \\frac{ \\langle \\psi| H | \\psi \\rangle }\n{\\langle \\psi | \\psi\\rangle}\n =\\frac{ \\sum_{i,j=1}^Ma^*_ia_j H_{ij} }\n {\\sum_{i,j=1}^Ma^*_ia_jS_{ij}}, \\\\\\text{with }H_{ij} = \\langle \\Phi^i |H|\\Phi^j \\rangle,\\ S_{ij} = \\langle \\Phi^i|\\Phi^j \\rangle\n$$\n\n\nSince $\\psi$ may not be normalized, $\\langle \\psi | \\psi\\rangle$ occurs in the energy expression. Now, variational principles say that $\\partial E/\\partial a_x = 0$. This gives\n\n\n$$\n(4)\\ \\ \\sum_{j=1}^M H_{xj}a_j = E\\sum_{j=1}^MS_{xj}a_j\n$$\n\nSo, $(H)_{xj}$ and $(S)_{xj}$ are two matrices, band structure problems are now general eigen value problem $det(H-ES)=0$. $S$ is called overlapping integral matrix and $H$ is called transfer matrix.\n\nIn each specific circumstance, making some reasonable assumptions about matrix $H$ and $S$.Then, using MatLab or other langleuages, this should be easy to solve. In the example below, tight binding method will be used to get some ideas about monolayer graphene’s band structure.\n\nBand structure of monolayer graphene\n\nMonolayer graphene’s primitive cell has two atoms, called A and B. So, $M = 2$ and $H,S$ are matrices with dimension 2*2.\n\nAn image of monolayer graphene in real space:\n\n\n\nDiagonal matrix element\n\nBy definition:\n\n\n$$\n(5)\\ \\ H_{AA} = H_{BB} = \\langle \\Phi^A | H | \\Phi^A \\rangle\\\\\n=\\sum_{N=1}^{N_1N_2N_3}\\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) | H | \\phi^A_{2p}(\\vec r - \\vec R_N) \\rangle\n$$\n\n$$\n(6)\\ \\ S_{AA} = S_{BB} = \\langle \\Phi^A | \\Phi^A \\rangle\\\\ \n= \\sum_{N=1}^{N_1N_2N_3}\\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) |  \\phi^A_{2p}(\\vec r - \\vec R_N) \\rangle\n$$\nNote that index $2p$ means that we’re considering $2p$ electron orbit of graphene. More specifically, all the $p$ orbits are $p_z$ orbits, therefore have rotational symmetry (will be used in “off-diagonal matrix element”).\n\nAnd then we need to make a assumption: $N' \\neq N$ terms in equation (5) and (6) can be neglected. For $S_{AA,BB}$ this makes sense because wave functions of different lattices have almost no overlapping since system is previously assumed to be tight-binding. The same for $H_{AA,BB}$. Therefore,\n\n\n$$\n(7)\\ \\ H_{AA} = H_{BB} = N_1N_2N_3E_{2p}\\\\\n(8)\\ \\ S_{AA} = S_{BB} = N_1N_2N_3\n$$\n\nOff-diagonal matrix element\n\nBy definition:\n\n$$\n(9)\\ \\ H_{AB} = H^*_{BA} = \\langle \\Phi^A | H | \\Phi^B \\rangle\\\\\n =\\sum_{N=1}^{N_1N_2N_3}\\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) | H | \\phi^B_{2p}(\\vec r - \\vec R_N) \\rangle \\\\\n(10)\\ \\  S_{AB} = S^*_{BA} = \\langle \\Phi^A | \\Phi^B \\rangle \\\\\n  = \\sum_{N=1}^{N_1N_2N_3}\\sum_{N'=1}^{N_1N_2N_3}c_{N'}^*c_N \\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) | \\phi^B_{2p}(\\vec r - \\vec R_N) \\rangle\n$$\nThen, assume that only integrals between nearest atom A and atom B are not zero:\n\n$$\n(9)\\ \\ H_{AB} = H^*_{BA} = \\langle \\Phi^A | H | \\Phi^B \\rangle\\\\\n =\\sum_{N=1}^{N_1N_2N_3}\\sum_{\\text{nearest }N'}c_{N'}^*c_N \\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) | H | \\phi^B_{2p}(\\vec r - \\vec R_N) \\rangle \\\\\n =-\\sum_{N=1}^{N_1N_2N_3}\\sum_{\\text{nearest }N'}\\gamma_0e^{i\\vec k\\cdot (\\vec R_N - \\vec R_{N'})}\n \\\\\n(10)\\ \\  S_{AB} = S^*_{BA} = \\langle \\Phi^A | \\Phi^B \\rangle \\\\\n  = \\sum_{N=1}^{N_1N_2N_3}\\sum_{\n  \\text{nearest }N'}c_{N'}^*c_N \\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) | \\phi^B_{2p}(\\vec r - \\vec R_N) \\rangle\\\\\n  = \\sum_{N=1}^{N_1N_2N_3}\\sum_{\\text{nearest }N'}s_0e^{i\\vec k\\cdot (\\vec R_N - \\vec R_{N'})}\n$$\n\nWith,\n\n$$\n(11)\\ \\ \\gamma_0 = -\\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) | H | \\phi^B_{2p}(\\vec r - \\vec R_N) \\rangle,\\\\\n(12)\\ \\ s_0 = \\langle \\phi^A_{2p}(\\vec r - \\vec R_{N'}) | \\phi^B_{2p}(\\vec r - \\vec R_N) \\rangle, \\\\\n\\ N' \\text{ and } N\\text{ are nearest atom A and atom B}\n$$\nFor any nearest A atom and B atom pair, $\\gamma_0$ and $s_0$ are the same. So these two parameters will not be calculated. Instead, they are tunable parameters, to fit actual experimental data.\n\nFor each B atom, there are three nearest A atoms, with $R_{N'} - R_N$ equals to\n\n$$\n\\vec \\delta_1 = (a, 0) \\\\\n\\vec \\delta_2 = (-\\frac 1 2 a, \\frac{\\sqrt 3}{2} a) \\\\\n\\vec \\delta_2 = (-\\frac 1 2 a, - \\frac{\\sqrt 3}{2} a) \\\\\n$$\nTherefore $H_{AB}$ and $S_{AB}$ is\n$$\nH_{AB} = H^*_{BA} = -N_1N_2N_3 \\gamma_0 (e^{-ik_xa} + 2e^{ik_xa/2}\\cos\\frac{\\sqrt 3}{2}k_y a)\\\\\nS_{AB} = S^*_{BA} = N_1N_2N_3 s_0 (e^{-ik_xa} + 2e^{ik_xa/2}\\cos\\frac{\\sqrt 3}{2}k_y a)\n$$\nNow solve it.\n\nResult: Band structure, linear dispersion around fermi level\n\nNote that result below uses parameter: different values do not change the shape of resulting band curve but only the scale.\n$$\n\\gamma_0 = 3.033 \\text{ eV},\\\\\ns_0 = 0.129.\n$$\n\nBand structure figure in the figure below:\n\n\n\nSee this figure from the top and calculate more area in the extended brillouin zone. The figrue down below shows a hexagon with different angle (90 degree different) compared to a monolayer graphene’s real space hexagon lattice.\n\n\n\nZoom in to the fermi level and look into results for only one direction:\n\n\n\nAround the fermi level, dispersion can be well approximated by a linear expression. Calculation wiht better resolution in $k_y$ shows that tight-binding method gives a strictly gapless dirac cone dispersion.\n",
  id: 2
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)
var store = [{
  "title": "Some thoughts towards degenerate perturbation",
  "author": null,
  "layout": "post",
  "link": "/texts/31-March-2020-degenerate-perturbation/",
}
,{
  "title": "Hello jekyll blogs",
  "author": null,
  "layout": "post",
  "link": "/texts/hello-jekyll-blog/",
}
,{
  "title": "Tight-Binding Method and an example of monolayer graphene's band structure.",
  "author": null,
  "layout": "post",
  "link": "/texts/tight-binding-with-graphene-band-structure/",
}
]

// Query
var qd = {}; // Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  // The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
