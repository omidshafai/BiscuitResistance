/**
TODO:
Test HiBye
Test Setak
Test petiBour of different manufacturers
Test Farkhondeh
*/

const biscuits = {
    sagheTalaii: 4500, // ساقه طلایی
    sagheTalaiiShokolati: 5500, // ساقه طلایی شکلاتی
    sagheTalaiiWithToot: 6000, // ساقه طلایی با شهد توت
    petiBour: 2000, // پتی بور
    digestive: 5000, // دایجستیو
    madar: 2500, // مادر
    samakOili: 2500, // سامک روغنی
}

function getBiscuitResistance(biscuitName) {
    if (biscuits[biscuitName]) {
        return `The best time for ${biscuitName} is ${biscuits[biscuitName] / 1000} seconds`
    }
    return `This biscuit has not been tested yet :(
If you test it, we will be happy to make a pull request`
}
