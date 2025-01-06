//Grab data from quotes api
const key = 'tMLNupOrcswflLJgtIoEbQ==xjFDBxGBFcuGWbC1'
var category = ''



async function fetchQuotes() {

    try{
        let response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`, 
        {
            method: 'GET',
            headers: { 'X-Api-Key': key }
        }
        )
        let data = await response.json();
        console.log(data)
        return data[0];
    }
    catch (error){
        console.error('Error fetching data:', error);
    }
}



//Export data from quotes api
export default fetchQuotes();
