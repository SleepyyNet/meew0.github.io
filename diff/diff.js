var a, b, c, d;
var a_, b_, c_;
var a__, b__;
var l = -5, u = 5;

rndInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

d = (Math.random() > 0.5) ? 0 : rndInt(l,u);
c = rndInt(0,u); // Nullstellen der ersten Ableitung sollen lösbar sein
b = rndInt(l,u);
a = rndInt(l,u);

// Ableiten
c_ = c;
b_ = 2*b;
a_ = 3*a;

b__ = b_;
a__ = 2*a_;

pow = Math.pow;

calc = function(x) {
  return a*pow(x,3)+b*pow(x,2)+c*x+d;
}

calc_ = function(x) {
  return a_*pow(x,2)+b*x+c;
}

calc__ = function(x) {
  return a__*x+b__;
}

delta = function() { return p(b_,2) - 4*a_*c_; }
root_ = function() {
  return [
    ((-b)+Math.sqrt(delta()))/(2*a),
    ((-b)-Math.sqrt(delta()))/(2*a),
  ];
}

root__ = function() {
  return (-b__)/a__;
}

evs = root_();

// Extremwertentscheid
max = (calc__(evs[0]) < 0) ? evs[0] : evs[1];
min = (calc__(evs[0]) >= 0) ? evs[0] : evs[1];
w = root__();

randoms = [
  rndInt(l,u),
  rndInt(l,u),
  rndInt(l,u),
  rndInt(l,u),
  rndInt(l,u)
]

things = [
  [
    katex.renderToString("(" + randoms[0] + "|" + calc(randoms[0]) + ")") + " ist Punkt der Funktion",
    katex.renderToString("(" + 0 + "|" + calc(0) + ")") + " ist Punkt der Funktion",
  ],
  [
    katex.renderToString("f(" + max + ")") + " ist ein lokales Maximum",
    katex.renderToString("f(" + min + ")") + " ist ein lokales Minimum",
    katex.renderToString("(" + randoms[1] + "|" + calc(randoms[1]) + ")") + " ist Punkt der ersten Ableitung"
  ]
  [
    katex.renderToString("f(" + w + ")") + " ist ein Wendepunkt",
    "Die zweite Ableitung hat einen " + katex.renderToString("y") + "-Achsenabschnitt von " + katex.renderToString("" + b__),
    katex.renderToString("(" + randoms[2] + "|" + calc(randoms[2]) + ")") + " ist Punkt der zweiten Ableitung"
  ]
]
