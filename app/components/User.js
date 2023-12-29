'use client'
import { Figure } from "react-bootstrap";

export const User = ({name,hp,mp,lv})=>{
    return(
    <>
        <div className="d-flex m-3 w-100 flex-col-reverse flex-lg-row  flex-md-row align-items-center gap-3 ">
            <div>
                <img
                    src='assets/images/image.png'
                    width={100}
                    height={100}
                />
            </div>
            <div className="">
                <div className="text-white">
                    {name}
                </div>
                <div className="text-white">
                    LV:{lv}
                </div>
                <div className="text-white">
                    HP:{hp}
                </div>
                <div className="text-white">
                    MP:{mp}
                </div>
            </div>
        </div>
    </>

    )
}