import axios from "axios";
import { OrderPayload } from "./types";

const API_URL = process.env.REACT_APP_ACCESS_API_URL;
const mapboxToken = 'pk.eyJ1Ijoiamhvbnl4ZiIsImEiOiJja2pvcDFtdnEwcGt3MnpxbDc4bzBmZHd6In0.g0zC-fmIfyl7FxSN9w25Jw';

export function fetchProducts(){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload){
    return axios.post(`${API_URL}/orders`, payload)
}