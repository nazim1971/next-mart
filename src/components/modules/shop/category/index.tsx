
import { ICategory } from "@/types";
import CreateCategoryModel from "./CreateCategoryModel";

type TCategoriesProps = {
    categories: ICategory[]
}


const ManageCategories = ({categories}: TCategoriesProps ) => {
    console.log("Heello cat", categories);
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