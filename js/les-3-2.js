function square_perimeter(side) {
    return side*4;
}
function square_perimeter (side) {
    return side*side;
}

function cube(side){
    function square() {
        return square()*side;
    }

    return square()*side
}

otvet=prompt('ведите сторону куба')
alert('число в кубе:' + cube(otvet))
//alert('периметр квадрата'+square_perimeter(otvet) + 'площадь квадрата:' + square_perimeter(otvet))
