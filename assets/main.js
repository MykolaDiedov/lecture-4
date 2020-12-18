var height;
do {
    height = prompt( 'Укажите высоту елочки  от 3 до 10' );
} while (height < 3 || height > 10);
var index = 0;
var out ="";
while ( index <= height ) {
    for ( var j = 0; j < height - index; j++ ) {
        out += " ";}
    for ( var j = 0; j < 2 * index + 1; j++ ) {
        out += "*";}
    index++;
    out += "\n";}
alert(out);