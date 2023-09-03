import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (data) => apiService.post(urls.cars.base, data)
}

export {
    carService
}