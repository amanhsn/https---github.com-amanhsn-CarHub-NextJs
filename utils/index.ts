export async function fetchCars(){
 const headers = {
    'X-RapidAPI-Key': '997260554emsh209a7e212d184efp17c427jsnd2655f8d086d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
 }
 const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
 headers: headers,
});

const result = await response.json();

return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    //additional rate
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    //total rent
    const rentalPerDay = basePricePerDay + mileageRate + ageRate;
    return rentalPerDay.toFixed(0);

}

