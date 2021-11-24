/**
 * @module linear-regression
 * Represents the linear model class.
 * @author Nikolas B Virionis <nikolas.virionis@bandtec.com.br>
 */
class LinearModel {
    /**
     * @constructor
     * @param {number[]} data
     * The dataset to be modeled,
     *  on it's behavior over time.
     *
     */
    constructor(data) {
        this.data = data;
        if (!data) {
            throw "It is necessary to provide the dataset";
        }
        if (data.length < 2) {
            throw "In order to design a linear model, you must provide at least 2 data points";
        }
    }

    /**
     *
     * @param {number} rad angle measured in radians
     * @returns {number}
     * returns the angle measured in degrees
     *  to better visualize the behaviour of the model
     */
    static radsToDegs = rad => (rad * 180) / Math.PI;

    /**
     *
     * @method
     * @returns {number} length of the dataset
     */
    datasetLength() {
        return this.data.length;
    }

    /**
     * @method
     * In order to better describe the dataset's
     * behaviour over time, we need to provide the
     * x axis values to complete the data frame.
     */
    #xAxisValues() {
        let x = [...Array(datasetLength()).keys()];
        x.push(x[x.length - 1] + 1);
        x.shift();
        this.xAxisValues = [...x];
    }
}

let lm = new LinearModel();
lm.datasetLength();
// const getTrendDeg = medicoes => {
//     const radsToDegs = rad => (rad * 180) / Math.PI;

//     let n = medicoes.length;
//     if (!n) {
//         return 0;
//     }
//     let y = [...medicoes];
//     let x = [...Array(n).keys()];
//     x.push(x[x.length - 1] + 1);
//     x.shift();

//     //a
//     let soma = 0;
//     for (let i in x) {
//         soma += x[i] * y[i];
//     }
//     let a = n * soma;
//     //a

//     // b
//     let sumX = 0;
//     for (const iterator of x) {
//         sumX += iterator;
//     }
//     let sumY = 0;
//     for (const iterator of y) {
//         sumY += iterator;
//     }
//     let b = sumY * sumX;
//     // b

//     //c
//     let c = n * [...x.map(el => el ** 2)].reduce((ac, el) => (ac += el));
//     //c

//     //d
//     let d = sumX ** 2;
//     //d

//     // inclination angle in degrees
//     let deg = radsToDegs(Math.atan(slope));
//     // inclination angle in degrees

//     return deg;
// };

// const getTrendBehavior = deg => {
//     let behaviour, intensity;
//     if (deg >= -1 && deg <= 1) {
//         behaviour = "constant";
//         intensity = "";
//     } else {
//         if (deg >= 0) {
//             behaviour = "increase";
//         } else {
//             behaviour = "decrease"; // "atenuamento"
//         }

//         if (Math.abs(deg) < 10) {
//             intensity = "mild";
//         } else if (Math.abs(deg) < 25) {
//             intensity = "moderate";
//         } else if (Math.abs(deg) < 40) {
//             intensity = "significant";
//         } else {
//             intensity = "drastic";
//         }
//     }
//     return {behaviour, intensity};
// };

module.exports = LinearModel;
