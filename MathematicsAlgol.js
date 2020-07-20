class Mathematics {
    static simult2(x1, y1, z1, x2, y2, z2){
        if (x1 == NaN && x2 == NaN && y1 == NaN && y2 == NaN && z1 == NaN && z2 == NaN){
            const err = new Error('Parameters must be number')
            throw err;
        }else{
           let determinant,xdeterminant,ydeterminant, x, y;

           determinant = (x1 * y2) - (y1 * x2);

           xdeterminant = (z1* y2) - (y1 * z2);

           ydeterminant = (x1 * z2) - ( z1 *  x2);

           x = xdeterminant/determinant;

           y = ydeterminant/determinant

           const solution = {
               X: x,
               Y: y
           }

           return solution;
        }
    }

    static quadratic(a, b, c){

        if( a == NaN && b ==NaN && c == NaN){
            const err = new Error('Parameters must be number')
            return 'error';
        }else{
            let bsquare, _2a, _4ac, ss, numeraPositive, numeraNegative, x1, x2;

            bsquare = Math.pow(b,2);

            _4ac =  4*a*c;

            _2a = 2*a;
            
            ss = Math.sqrt( (bsquare - _4ac))

            numeraPositive = -b + ss;

            numeraNegative = -b - ss;

            x1 = numeraPositive/_2a;

            x2 = numeraNegative/_2a;

            if (x1 == NaN && x2 == NaN){
                return 'Complex Number'
            }else{
                return {
                    X1: x1,
                    X2: x2
                }
            }
        }

    }
}


console.log(Mathematics.quadratic(1,3,2))