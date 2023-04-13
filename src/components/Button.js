import React,{useState} from "react";


export default function Button(props){
    return(
      <button className={props.class} onClick = {()=> props.whenClicked()} >
        {props.value}
      </button>
    );
}