
const myCar = {
    brand: "hundai",
    model: "tucson",
    year: 2021,
    averageSpeed: 100,
    calculateTripTime: function (distance) {
        const result = distance / this.averageSpeed;
        if (result > 4) {
            const correction = Math.trunc(result / 5);
            return result + correction;
        }
        return result;
    },
    printTripTime: function (distance) {
        console.log(
        this.calculateTripTime(distance),
        );
    },
        printCarInfo: function () {
          console.log(
            "Model: " + this.model + "\n",
            "Barnd: " + this.brand + "\n",
            "Year: " + this.year + "\n",
          );
        },
      };
      myCar.printTripTime(
        parseInt(
          prompt("Enter distance"),
        ),
      );
      myCar.printTripTime(800);
      myCar.printCarInfo();
      
  







