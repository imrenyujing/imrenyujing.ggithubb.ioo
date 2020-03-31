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
  content: "Non-degenerate perturbation result\nWe have two Hamiltonian, one is $H_0$, and another is perturbation (H'). For any eigen state of $H_0$, $\\phi_k^{(0)}$, which is nondegenerate, the first order energy correction is\n$$\n(1)\\ \\ E_k^{(1)} = \\langle\\phi_k^{(0)}|H'|\\phi_k^{(0)}\\rangle\n$$\nAbout degenerate perturbation\nWe also have two Hamiltonian $H_0$ and $H'$. What is different now is that we're interested in two degenerate state, $\\phi_{k1}^{(0)}$ and $\\phi_{k2}^{(0)}$, with same eigen value $E^{(0)}$. It seems that using Equation (1) causes no problem, but the real problem happens to the 1st order wave function correction:\n$$\n(2)\\ \\ \\phi_{n}^{(1)}=\\sum_{m \\neq n} \\frac{\\left\\langle\\phi_{m}^{(0)}\\left|H^{\\prime}\\right| \\psi_{n}^{(0)}\\right\\rangle}{\\left(E_{n}^{(0)}-E_{m}^{(0)}\\right)} \\phi_{m}^{(0)}\n$$\nIf there are two degenerate states, the denominator of Equation (2)'s RHS will be zero.\nCompared to Non-degenerate perturbation, the most different part of degenerate perturbation is that we are adding perturbation to $\\psi^{(0)}$, linear superposed state of $\\phi_{k1}^{(0)}$ and $\\phi_{k2}^{(0)}$, instead of $\\phi_{k1}^{(0)}$ or $\\phi_{k2}^{(0)}$ alone.\nUsing $\\psi^{(0)} = \\alpha \\phi_{k1}^{(0)} + \\beta \\phi_{k2}^{(0)}$, and $\\psi = \\psi^{(0)}+\\lambda \\psi^{(1)} + \\cdots$, we get the result that, for 1st order energy correction, a eigen value problem of the matrix $(H')_{ij}$ must be solved. $(H')_{ij} = \\langle\\phi_{ki}^{(0)}|H'|\\phi_{kj}^{(0)}\\rangle$. The values of ( \\alpha ) and ( \\beta ) are determined by the eigen vectors of $(H')_{ij}$.\nOne way to understand this is to remind yourself what is the basic procedure to solve a quantum mechanics problem. First write down the Hamiltonian in a specific representation, which is usually a matrix $H$. Then solve the eigen value problem of this matrix $H$. The representation can be chosen arbitrarily, with different difficulty in different representations.\nNow we have a representation $A^{(0)}$, which is composed of the eigen states of non-perturbation Hamiltonian $H_0$. What is the eigen value of $H_0 + H'$? Easy, just solve $(H_0 + H')\\phi = E\\phi$ in the representation $A^{(0)}$, which means you diagonalized $(H_0 + H')_{ij} = \\langle \\phi^{(0)}_i |H_0 + H'| \\phi^{(0)}_j \\rangle$ in the whole Hilbert space. But that is only possible for some easy problems. Even with computers, this means lots of electricity energy gone.\nSo, physicists said that $H'$ is small. You only need to consider eigen values of $(H')_{ij}$, because they are small compared to eigen values of $(H_0)_{ij}$. Many non-diagonal elements of $( H')_{ij}$ are very close to zero, so you don't need to solve a eigen value problem. Just calculating the diagonal element $\\langle\\phi_k^{(0)}|H'|\\phi_k^{(0)}\\rangle$ will be good enough.\nThe only exception is when there are degenerate states. In this case, $(H')_{ij}$ is not closely diagonalized but closely block diagonalized. What you need to do is just diagonalized $(H')_{ij}$ in the degenerate subspace, with smaller matrix dimensions to diagonalize.\n",
  id: 0
});
index.addDoc({
  title: "Hello jekyll blogs",
  author: null,
  layout: "post",
  content: "This is a &quot;Hello World&quot; blog for my new jekyll blog!\nPeople say jekyll is easy to use. Well, compared to Wordpress, yes. But I still encountered some technical problems\nwhen configuring all these things. Good news is, this blog is basically working now!\nI'm considering moving everything from Google Sites to Github Pages. That means I still have many things to learn,\nincluding assets management and designing my own layout.\n",
  id: 1
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
