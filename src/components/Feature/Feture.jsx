import { GoCodescanCheckmark } from "react-icons/go";
import  PropTypes from "prop-types";
const Feture = ({feature}) => {
    return (
        <div>
           <p className="flex i items-center  align-center "><GoCodescanCheckmark className=" text-black mr-4"></GoCodescanCheckmark> {feature} </p>
        </div>
    );
};

Feture.propTypes ={
    feature:PropTypes.string
}

export default Feture;