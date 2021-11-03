//const endangeredSpecies = ["Panda", "Whale", "Tiger", "Chimpanzee"];

const endangeredSpecies = [{ specie: "Panda", since: 1900 }, { specie: "Tiger", since: 1800 }];

function find(sp) {
    return typeof sp !== 'string' ? new Error('wrong type')
        //  : endangeredSpecies.includes(sp) ? "found" : "notFound";
        : (endangeredSpecies.filter(({ specie, since }) => specie.toLocaleLowerCase() === sp.toLocaleLowerCase()).length > 0) ? "found" : "notFound";
}


function extinctionDate(sp) {
    if (find(sp) !== 'notFound')
        return endangeredSpecies.filter(({ specie, since }) => specie.toLocaleLowerCase() === sp.toLocaleLowerCase())[0].since;
    else return "notFound";
}

module.exports = { find, extinctionDate };