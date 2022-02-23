import React from "react";

type propsType = {
    selected: boolean
}

export const Star = (props: propsType) => {

        if (props.selected === true) {
          return  <span> <b>star </b> </span>
        }else {
           return <span> star  </span>
        }


}