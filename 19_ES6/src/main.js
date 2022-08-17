let checkArray = (a = 'Error', b, ...rest) => {
    (rest.length < 3) ? console.log("Error") : console.log(`${a} - ${b} - ${rest[0]}`)

    const args = rest.slice(1);
    console.log({...args})
}

checkArray(undefined,2,3,4,5,'sd')

