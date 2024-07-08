
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions= [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30,
          "features": [
            "Access to gym facilities during off-peak hours (weekdays 9 AM - 5 PM)",
            "Use of cardio and strength training equipment",
            "Access to locker rooms and showers",
            "One complimentary personal training session per month",
            "Group fitness classes (limited to non-premium classes)"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 50,
          "features": [
            "Unlimited access to gym facilities during all operating hours",
            "Use of cardio and strength training equipment",
            "Access to locker rooms and showers",
            "Two complimentary personal training sessions per month",
            "Access to all group fitness classes",
            "Free Wi-Fi",
            "Towel service"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 70,
          "features": [
            "Unlimited access to gym facilities during all operating hours",
            "Use of cardio and strength training equipment",
            "Access to locker rooms, showers, and saunas",
            "Four complimentary personal training sessions per month",
            "Access to all group fitness classes, including premium classes",
            "Free Wi-Fi and towel service",
            "Access to members-only lounge with complimentary snacks and beverages",
            "Discount on merchandise and additional personal training sessions"
          ]
        },
        {
          "id": 4,
          "name": "Family Membership",
          "price": 120,
          "features": [
            "Unlimited access to gym facilities during all operating hours for all family members",
            "Use of cardio and strength training equipment",
            "Access to locker rooms, showers, and saunas",
            "Two complimentary personal training sessions per month per adult member",
            "Access to all group fitness classes, including premium classes",
            "Free Wi-Fi and towel service",
            "Access to members-only lounge with complimentary snacks and beverages",
            "Discount on merchandise and additional personal training sessions",
            "Family-friendly events and classes"
          ]
        },
        {
          "id": 5,
          "name": "VIP Membership",
          "price": 100,
          "features": [
            "Unlimited access to gym facilities during all operating hours",
            "Use of cardio and strength training equipment",
            "Access to locker rooms, showers, saunas, and steam rooms",
            "Unlimited personal training sessions",
            "Access to all group fitness classes, including premium classes",
            "Free Wi-Fi and towel service",
            "Access to members-only lounge with complimentary snacks and beverages",
            "Discount on merchandise and additional personal training sessions",
            "Priority booking for classes and personal training sessions",
            "Complimentary guest passes (up to 5 per month)",
            "Free entry to special events and workshops"
          ]
        }
      ]

    
      

    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best price in the Town</h2> 
           <div className='grid md:grid-cols-3 gap-6  '>
           {
                priceOptions.map(option=><PriceOption key={option.id} option={option} ></PriceOption> )
            }
           </div>
        </div>
    );
};

export default PriceOptions;