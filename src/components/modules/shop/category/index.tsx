
import CreateCategoryModel from "./CreateCategoryModel";



const ManageCategories = () => {
    return (
        <div>
           <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Manage Categories</h2>
                  <CreateCategoryModel/>
            </div> 

            
        </div>
    );
};

export default ManageCategories;