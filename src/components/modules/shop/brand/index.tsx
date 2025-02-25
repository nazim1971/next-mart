import React from 'react';
import CreateBrandModel from './CreateBrandModel';

const ManageBrands = () => {
    return (
        <div>
             <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Manage Brands</h2>
                <CreateBrandModel/>
            </div> 
            
        </div>
    );
};

export default ManageBrands;