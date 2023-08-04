"use client"
import { usePathname } from "next/navigation";

import Link from "next/link";

import localFont from "next/font/local";
import image1 from '../../public/3rdDec/d58.jpg'
import image2 from '../../public/3rdDec/d195.jpg'
import image3 from '../../public/Diddy x 2018/hotel shoot/cover.jpg'
import image4 from '../../public/Miss Dulcet finals/cover.jpg'
import image5 from '../../public/Miss Dulcet finals/cover2.jpg'
import image6 from '../../public/images/edited/cover.jpg'
import image7 from '../../public/images/unedited jan 2018/cover.jpg'
import image8 from '../../public/images/unedited jan 2018/cover2.jpg'
import image9 from '../../public/images/unedited jan 2018/cover3.jpg'
import image10 from '../../public/images/unedited jan 2018/cover4.jpg'
import Image from "next/image";
const ogg = localFont({
    src: "../../public/fonts/ogg/Ogg-Roman.otf",
    display: "swap",
  });

const Images = [image4,image2,image3,image1,image5, image6,image7,image8,image9,image10]



const Photos = () => {

    const pathname = usePathname();
  return (
    <div className="py-10 px-6">
        

        <div className="w-full h-full mt-24">
            <h1 className={`${ogg.className} text-center font-bold text-7xl text-gray-400`}>Photos</h1>
            <div className="w-full grid md:grid-cols-4 h-full mt-12 gap-2 grid-cols-1 ">
                {Images.map((image,index)=>{
                    return(
                        <div key={index} className="relative h-[400px] cursor-pointer">
                            <Image src={image} fill alt="image" className="object-cover"/>
                        </div>
                        
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Photos