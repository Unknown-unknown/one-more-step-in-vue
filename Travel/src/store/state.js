// Calios: since sometimes the website can fail to visit `localStorage`, 
// we don't wanna our app to crash directly, so just add try-catch.
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
	city: defaultCity
}