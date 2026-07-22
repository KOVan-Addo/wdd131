const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// Static weather values

const temperature = 7;
const windSpeed = 12;

// Wind Chill Function
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}


// Display Result
const windChill = document.getElementById("windchill");
if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;
}

else {
    windChill.textContent = "N/A";

}