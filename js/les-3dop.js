function half_perimetr() {
    return (a+b+c)/2
}

function square(a, b, c) {
    var p = half_perimetr()
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}

var a = Number(prompt ('ведите сторону a'))
var b = Number(prompt ('ведите сторону b'))
var c =Number(prompt ('ведите сторону c'))

alert('площадь треугольника:' + square(a, b, c))