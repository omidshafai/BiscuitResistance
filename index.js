const biscuits = {
    sagheTalaii: 4500, // ساقه طلایی
    sagheTalaiiShokolati: 5500, // ساقه طلایی شکلاتی
    petiBour: 2000, // پتی بور
    digestive: 5000, // دایجستیو
    madar: 2500, // مادر
}

function getBiscuitResistance(biscuitName) {
    if (biscuits[biscuitName]) {
        return `The best time for ${biscuitName} is ${biscuits[biscuitName] / 1000} seconds`
    }
    return `This biscuit has not been tested yet :(
If you test it, we will be happy to make a pull request`
}
