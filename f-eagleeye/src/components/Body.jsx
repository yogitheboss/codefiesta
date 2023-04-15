import React from 'react';
import gif from './Header.gif'

const Body = () => {
    return (
        <div>
            <div id="main" class="flex flex-row justify-evenly p-8">
                {/* <div class="bg-green-900 w-96 h-96"></div> */}
                {/* <div class="bg-[#ede9fe] w-1/2 h-96"><p class="font-black text-4xl p-4 text-left padding-left: 34px">About Us</p>  */}


                {/* <div class="bg-white w-1/2 h-96"><p class="font-black text-4xl p-4 text-left padding-left: 34px">Eagle Eye</p>
                    <p class="text-xl">New Age Machine Learning based Parking Lot Automation Stytem</p>
                    <p class="p-8 text-left">Develop an affordable and efficient image processing solution for the detection, identification, and monitoring of vehicles in parking spaces through number plate recognition, to enhance parking management efficiency, reduce human errors, and provide an affordable and reliable solution for parking space operators.</p>
                </div> */}

                <div class="bg-white w-1/2 h-96"><p class="font-black text-4xl px-8 text-left padding-left: 34px">Eagle Eye</p>
                    <p class="px-8 py-6 text-left">New Age Machine Learning based Parking Lot Automation Stytem</p>
                    <p class="px-8 py-4 text-left">Develop an affordable and efficient image processing solution for the detection, identification, and monitoring of vehicles in parking spaces through number plate recognition, to enhance parking management efficiency, reduce human errors, and provide an affordable and reliable solution for parking space operators.</p>
                </div>
                <div class="bg-white w-1/2 h-96"><img src={gif} /> </div>
            </div>
        </div>
    );
}

export default Body;






// [#e2e8f0]