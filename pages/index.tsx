import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Button from "@/components/atoms/Button";
import Modal from "@/components/molecules/Dialog";
import { useState } from "react";
import BrochureModalContent from "@/components/organisms/BrochureModalContent";
import DemoModalContent from "@/components/organisms/DemoModalContent";
import ReportModalContent from "@/components/organisms/ReportModalContent";
import ThankYouModal from "@/components/organisms/ThankYouModal";
export default function Home() {
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)

  //rendering the modals depending on the contentId or modal type
  const handleClick = (contentId: string) => {
    let content;
    switch (contentId) {
      case 'brochure':
        content = <BrochureModalContent handleClick = {handleClick}/>;
        break;
      case 'demo':
        content = <DemoModalContent handleClick = {handleClick}/>;
        break;
      case 'report':
        content = <ReportModalContent handleClick = {handleClick}/>;
        break;
      case 'thankyou':
        content = <ThankYouModal />;
        break;
      default:
        content = <div>Default Content</div>;
    }
    setModalContent(content);
    setOpen(true);
  };
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className} bg-lightGray`}
    >
      <Modal open={open} setOpen={setOpen} modalClasses={"bg-lightGray"}>{modalContent}</Modal>
      <div className="content my-20 mx-20 flex flex-col gap-5 items-start">
          <Button onClick={() => handleClick('brochure')}  classes="px-3 py-2 bg-white uppercase rounded-full hover:bg-black hover:text-white text-sm font-semibold" label="DOWNLOAD BROCHURE"/>
          <Button onClick={() => handleClick('demo')}  classes="px-3 py-2 bg-white uppercase rounded-full hover:bg-black hover:text-white text-sm font-semibold" label="Request Demo"/>
          <Button onClick={() => handleClick('report')} classes="px-3 py-2 bg-white uppercase rounded-full hover:bg-black hover:text-white text-sm font-semibold" label="DOWNLOAD REPORT"/>
      </div>
    </main>
  );
}
