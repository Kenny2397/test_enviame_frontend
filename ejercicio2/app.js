import { values, json } from './data.js'

/**
 * Función que procesa y ordena el JSON proveniente de 'data.js' para una mejor lectura al
 * usuario
 * @param {Object} values Información de carriers y services, a relacionarse por items.
 * @param {Object} json Información de items junto con id's de otros items a relacionarse.
 * @returns JSON procesado y ordenado
 */
function ordenarJSON(values, json){

    let result = {};
    
    Object.keys(json.data).forEach(item => {

        let limit = json.data[item].limit,
            over =  json.data[item].over_carrier_service_id,
            under = json.data[item].under_carrier_service_id;

        result[item] = {
            limit: limit,
            over: {
                carrier: values[over].carrier,
                service: values[over].service
            },
            under: {
                carrier: values[under].carrier,
                service: values[under].service
            }
        }
    });

    return result;
}

console.log(ordenarJSON(values, json));
