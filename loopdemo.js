function fun(x, y, z) {
    // if ((x>y)&&(x>z)) {
    //     console.log(x);
    // } 
    // else if((y>z)&&(y>x)){
    //     console.log(y);
    // }
    // else {
    //     console.log(z);
    // }
    let key = 'r'
    switch (key) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            {
                console.log('Kshitiz');
                break;
            }
        default:
            console.log('consonant');
            break;
    }
}