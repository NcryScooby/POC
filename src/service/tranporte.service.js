import axios from "axios";

export async function getCoords(id) {
    return await axios.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`);
}

export async function getBus(busType) {
    return await axios.get(`http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=${busType}`);
}