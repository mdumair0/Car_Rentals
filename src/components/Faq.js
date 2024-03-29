import React from "react";
import { useState } from "react";

function Faq() {
    const [Select, setSelect] = useState('')

    const faqs = [
        {
            id: 1,
            que: '1. What is special about comparing rental car deals ?',
            ans: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.'
        },
        {
            id: 2,
            que: '2. How do I find the car rental deals ?',
            ans: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.'
        },
        {
            id: 3,
            que: '3. How do I find such low rental car prices ?',
            ans: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.'
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center h-screen relative bg-no-repeat bg-left md:bg-[url('./assets/car.png')]">
            <div className="flex flex-col justify-center items-center absolute top-16 md:top-28">
                <h4 className="font-bold text-2xl">FAQ</h4>
                <h1 className="font-black my-8  md:w-full text-center text-4xl md:text-5xl">Frequently Asked Questions</h1>
                <p className="font-medium mx-4 md:mx-48 text-center my-8 md:px-64 text-slate-500">
                    Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
                </p>
                <div className="flex m-4 my-8 md:w-1/2 bg-white rounded-lg shadow-lg">
                    <div className="w-full">
                        {
                            faqs.map(faq => {
                                return <div key={faq.id}>
                                    <div className={`transition duration-500 cursor-pointer font-bold tracking-wide flex justify-between py-4 px-8 ${Select === faq.id ? 'bg-colour shadow-lg shadow-colour/50 text-white' : ''}`} onClick={() => Select !== faq.id ? setSelect(faq.id) : setSelect('')}>
                                        <span>{faq.que}</span>
                                        {Select === faq.id ? <span className="h-2 arrow down"></span> : <span className="h-2 arrow right"></span>}
                                    </div>
                                    <div className={`${Select === faq.id ? 'max-h-96 py-4 px-8' : 'max-h-0 overflow-hidden px-8'} transition-all duration-500 ease '}`}>
                                        <span>{faq.ans}</span>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;