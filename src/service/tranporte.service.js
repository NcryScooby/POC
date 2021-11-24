import axios from "axios";

export async function getCoords(id) {
    return await axios.get(`https://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`);
}

export async function getOnibus(tipoBus) {
    return await axios.get(`https://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=${tipoBus}`);
}