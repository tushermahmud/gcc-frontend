import Typography from "../atoms/Typography";
import Image from "next/image";
import ThankyouImage from "../../public/images/thankyou.svg";
const ThankYouModal = () => {

  return (
    <div className="grid grid-cols-1 gap-10 px-10">
      <div className="col-span-1">
        <div className="flex flex-col gap-5">
          <Typography
            text="Thank you for your interest"
            classes="text-4xl font-bold text-darkText"
          />
          <Typography
            classes="font-light text-lightText"
            text="Lorem ipsum dolor sit amet consectetur. Urna eget quam leo pellentesque quis leo. Scelerisque molestie gravida netus turpis. Nunc vel risus viverra ipsum donec scelerisque."
          />
          <Image src={ThankyouImage} alt="Brochure Image" className="w-full"/>
          <Typography
            classes="font-light"
            text="Lorem ipsum dolor sit amet consectetur. Ultricies lacus orci pharetra mauris magna. Id aliquet ut eget scelerisque pharetra vestibulum quis leo."
          />
          <Typography
            classes="font-light"
            text="Quis sagittis aliquet habitasse neque magna commodo. Nibh bibendum vulputate nunc dolor arcu nullam id neque. Mi a at in praesent venenatis."
          />
          
        </div>
      </div>
      
    </div>
  );
};

export default ThankYouModal;
