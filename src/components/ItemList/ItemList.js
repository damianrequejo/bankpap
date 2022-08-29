import React from 'react'
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <div>

    {items.map((item) => {
        return (
            //la key luego pasa al componente Item --> <Item props={props} key={key}/>
            <div>
                <Item item={item}/>
            </div>
        );
    })};
    
</div>
)
}

export default ItemList;