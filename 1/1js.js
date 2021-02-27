

const startDistance = parseInt(
    prompt("please enter a distance"),
);
const car = {
    brand: "hundai",
    model: "tucson",
    year: 2021,
    speed: 120,
    info: function () {
        console.log(`tehnical information about car: ${car.brand, car.model, car.year, car.speed}`)
    },
    
    timeForDistance: function (distance) {
        let result = distance / car.speed;
        let rest = 0;
        result = Math.trunc(rest) + (((rest - (Math.trunc(result))) * 60) / 100)
        for (let hour = 1; hour <= result; hour++) {
            if (hour % 5 == 0) {
                rest++;
                result++;
            }
        }
        result = result.toFixed(2).split(".");
        if (rest == 0) {
            console.log(`if you whant overcome this distance : ${startDistance} km., you must - ${result[0]}h. ${result[1]}m. And you don’t need rest.`);
        } else {
            console.log(`if you whant overcome this distance : ${startDistance} km., you must - ${result[0]}h. ${result[1]}m., So you need rest: ${rest}h.`);
        }
    }
}







