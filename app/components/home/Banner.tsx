import Image from "next/image"


const Banner = () => {
  return (
    <div className="h-[237px] bg-yellow-400 flex items-center justify-center">
        <div className="h-[137px] relative w-full">
            <Image src={"/u31.jpg"} fill  alt="" className="object-cover"/>


        </div>            
    </div>
  )
}

export default Banner