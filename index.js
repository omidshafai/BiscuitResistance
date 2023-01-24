const biscuits = {
    sagheTalaii: 4500,
    sagheTalaiiShokolati: 5500,
    petiBour: 2000,
    digestive: 5000,
    madar: 2500
}

function getBiscuitResistance(biscuitName) {
    if (biscuits[biscuitName]) {
        return `The best time for ${biscuitName} is ${biscuits[biscuitName] / 1000} seconds`
    }
    return `This biscuit has not been tested yet :(
If you test it, we will be happy to make a pull request`
}
