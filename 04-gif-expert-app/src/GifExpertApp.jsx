
import React, { useState }  from "react";
import { AddCategory,  GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const [category, setCategory] = useState();
    const onAddCategory = (newCategory) => {

       if ( categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories]);
      

        

    }

    return (
        <> 
            <h1> Gift Expert App</h1>
            
            <AddCategory 
                //Esta forma aunque valida, no me permite entender bien el funcionamiento
                // de mi compontente
               // setCategories={setCategories } 
                
               onNewCategory = {event => onAddCategory(event)}

            />
           
            
                { 
                    categories.map( category =>(<GifGrid key={category} category={category}></GifGrid>))

                }
            
        </>
    )

}