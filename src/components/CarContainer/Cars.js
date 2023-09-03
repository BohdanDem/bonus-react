import {useAppReducer} from "../../hooks/useAppReducer";
import {useEffect} from "react";
import {Car} from "./Car";
import {carService} from "../../services/carService";
import {carActions} from "../../reducers/carReducer";


const Cars = () => {

    const [carInitialState, dispatch] = useAppReducer(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carActions.setCars(data)))
    }, [carInitialState.trigger, dispatch])

    return (
        <div>
            {carInitialState.cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};