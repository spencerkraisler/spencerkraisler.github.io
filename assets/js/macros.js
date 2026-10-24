// Global math macros: available in every blog entry via MathJax.
// Single macros: name: 'replacement'  or  name: ['replacement with #1', numberOfArguments]
// Remember to double the backslashes inside the quotes.
window.siteMacros = (function () {
  var m = {
    inner: ['\\langle #1 \\rangle', 1],
    mat: ['\\begin{bmatrix} #1 \\end{bmatrix}', 1]
  };

  var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // \bfa, \bfA = \mathbf{a}, \mathbf{A}
  lower.concat(upper).forEach(function (c) { m['bf' + c] = '\\mathbf{' + c + '}'; });
  // \frakg, \frakG = \mathfrak{g}, \mathfrak{G}
  lower.concat(upper).forEach(function (c) { m['frak' + c] = '\\mathfrak{' + c + '}'; });
  // \bbB = \mathbb{B}, \calA = \mathcal{A}  (capitals only)
  upper.forEach(function (c) {
    m['bb' + c] = '\\mathbb{' + c + '}';
    m['cal' + c] = '\\mathcal{' + c + '}';
  });

  // \bfomega = \boldsymbol{\omega}, \bfGamma = \boldsymbol{\Gamma}, ...
  ('alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota kappa lambda mu nu xi pi varpi ' +
   'rho varrho sigma varsigma tau upsilon phi varphi chi psi omega ' +
   'Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega').split(' ').forEach(function (g) {
    m['bf' + g] = '\\boldsymbol{\\' + g + '}';
  });

  return m;
})();
