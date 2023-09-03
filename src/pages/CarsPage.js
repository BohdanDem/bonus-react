import React from 'react';
import {Cars} from "../components/CarContainer/Cars";
import {CarForm} from "../components/CarContainer/CarForm";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;