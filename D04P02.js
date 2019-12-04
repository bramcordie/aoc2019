const rangeGenerator = function* (start = 0, end = 100, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}
const reg = /([\d])\1+/g;

const checkCriteria = function (number) {
    const digits = number.toString().split('').map(Number);
    let criteria = digits.reduce(
        function(criteria, digit) {
            criteria.neverDecreases = criteria.neverDecreases && digit >= criteria.previousDigit;
            criteria.previousDigit = digit;
            
            return criteria;
        },
        {
            number: number,
            previousDigit: 0,
            hasDouble: !![...number.toString().matchAll(reg)].filter(match => match[0].length === 2).length,
            neverDecreases: true
        }
    )

    criteria.meetsAll = criteria.hasDouble && criteria.neverDecreases;

    return criteria;
}

console.log(
    [...rangeGenerator(273025, 767253)]
    .map(checkCriteria)
    .filter(criteria => criteria.meetsAll)
    .length
);