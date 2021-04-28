// function perform(value, callBack) {
//     return Promise.resolve(callBack(value));  // todo implement
// }

function perform(value, callBack) {
    let param = callBack(value);

    function then(...args) {

        let callBack;
        let values = [];
        args.forEach(elem => {
            if (typeof (elem) === 'function')
                callBack = elem;
            else
                values.push(elem);
        })
        param = callBack(...values, param);

        return { then };
    }

    return { then };
}

perform(20, function (value) {
    console.log(value) // 20
    var param = 1;
    console.log(param); // 1
    return param;
})
    .then('a', 'b', function (a, b, param) {
        console.log(++param); // 2
        return param;
    })
    .then(function (param) { // param === 2
        console.log(++param); // 3
        return param;
    });

