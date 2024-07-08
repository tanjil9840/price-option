
import PropTypes from 'prop-types';
import Feture from '../Feature/Feture';
const PriceOption = ({option}) => {
    const {name, price,features} =option;
    return (
        <div className=' bg-blue-600 rounded-xl  flex flex-col text-white p-4  '>
            <h2 className='text-center'>
                <span className='text-7xl'>{price} </span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h3 className='text-3xl text-center my-8 ' >{name} </h3>
            <div className='pl-6  flex-grow' >
            {
                features.map( (feature, index)=> <Feture key={index} feature={feature}> </Feture> )
            }
            </div>
            <button className='mt-8 bg-green-700 p-2 rounded-md shadow-black font-semibold w-full hover:bg-green-900 hover:text-red-300'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option:PropTypes.object
}
export default PriceOption;