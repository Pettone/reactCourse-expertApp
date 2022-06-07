import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    /* Si se desea agregar más elementos, no se podría. No se puede mutar un arreglo así en React.
      En cambio debe usarse el Hook useState*/
    //const categories = ['One Punch', 'Samurai X','Dragon Ball'];

    const [ categories, setCategories ] = useState(['Guardians Of The Galaxy']);

    return(
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setCategories } />
        <hr />
      
        <ol>
          {
            categories.map( category => (
              <GifGrid 
                  key = { category }
                  category = { category }
              />
            ))
          }
        </ol>
      </>
    );
  }
