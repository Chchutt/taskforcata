const digits = {Z:2000, M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

function roman2arabic(str){
    return str.toUpperCase().split('').reduce(function(r,v,i,arr){
        const [ a, b, c ] = [ digits[arr[i]], digits[arr[i+1]], digits[arr[i+2]]];
        return b > a ? r - a : r + a;
    }, 0)
}

function arabic2roman(num){
    if (num < 1) return '';
    let result = '';
    for (let key in digits)
        while ( num >= digits[key] ) {
            result += key;
            num -= digits[key];
        }
    return result;
}
function calculator(str) {
    let arr = str.split(" ");

    if (arr.length > 3 || arr.length < 3 || arr[1] === "%" || arr[0] > 10 || arr[2] > 10 || arr[0] < 1 || arr [2] < 1) {
        throw new Error ("");
    }

    if ((isNaN(+(arr[0])) && Number.isInteger(+(arr[2]))) || (isNaN(+(arr[2])) && Number.isInteger(+(arr[0])))) {
        throw new Error ("");
    }


    let b = arr[1];
    if (arr[0] === "I" ||
        arr[0] === "II" ||
        arr[0] === "III" ||
        arr[0] === "V" ||
        arr[0] === "IV" ||
        arr[0] === "VI" ||
        arr[0] === "VII" ||
        arr[0] === "VII" ||
        arr[0] === "VIII" ||
        arr[0] === "IX" ||
        arr[0] === "X" ||
        arr[0] === "L" ||
        arr[0] === "C" ||
        arr[0] === "D" ||
        arr[0] === "M" ||
        arr[0] === "Z" ||
        arr[2] === "I" ||
        arr[2] === "II" ||
        arr[2] === "III" ||
        arr[2] === "IV" ||
        arr[2] === "V" ||
        arr[2] === "VI" ||
        arr[2] === "VII" ||
        arr[2] === "VIII" ||
        arr[2] === "IX" ||
        arr[2] === "X" ||
        arr[2] === "L" ||
        arr[2] === "C" ||
        arr[2] === "D" ||
        arr[2] === "M" ||
        arr[2] === "Z"
    )  {
        let a = arr[0];
        let c = arr[2];
        let ra = +roman2arabic(a);
        let rc = +roman2arabic(c);
        if (ra > 10 || rc > 10) {
            throw new Error("");
        }

        switch (b) {
            case ('+'):
                return String(arabic2roman(ra + rc));
                break;
            case ('-'):
                if (ra >= rc){
                    return String(arabic2roman(ra - rc));
                    break;
                } else {
                    return "";
                    break;
                }
            case ('*'):
                return String(arabic2roman(ra * rc));
                break;
            case ('/'):
                return String(arabic2roman(Math.floor(ra / rc)));
                break;
            default :
        }
    }
    else {
        let a = +(arr[0]);
        let c = +(arr[2]);
        if (c === 0 && b === '/'){
            return " ";
        }
        switch (b) {
            case ('+'):
                return String(a + c);
                break;
            case ('-'):
                return String(a - c);
                break;
            case ('*'):
                return String(a * c);
                break;
            case ('/'):
                return String(Math.floor(a / c));
                break;
            default :
        }
    }
}
