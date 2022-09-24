import React,{useState} from "react";

function Item({ name, category }) {
  const [itemInCart,setItemInCart]=useState(false)
  function tohandleAdd(){
    setItemInCart((itemInCart)=>!itemInCart)
  }
  return (
    <li className={itemInCart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemInCart?'remove':'add'} onClick={tohandleAdd}>{itemInCart?'Remove From Cart':'Add To Cart'}</button>
    </li>
  );
}

export default Item;
