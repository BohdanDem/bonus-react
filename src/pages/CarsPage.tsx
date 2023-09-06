import {Cars} from "../components/Cars";
import {CarForm} from "../components/CarForm";
import {Outlet} from "react-router-dom";

const CarsPage = () => {

    return (
        <div>
            <Outlet/>
            <CarForm />
            <Cars/>
        </div>
    );
};

export {CarsPage};