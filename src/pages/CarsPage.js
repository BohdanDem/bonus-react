import React from 'react';
import CarForm from "../components/CarContainer/CarForm";
import {Cars} from "../components/CarContainer/Cars";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;