import { MdCellTower, MdLocationPin, MdMail } from 'react-icons/md';
import { GiConversation } from 'react-icons/gi';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  const email = process.env.EMAIL;
  const address = process.env.ADDRESS;

  return (
    <div
      id="contact"
      className="w-full h-fit md:h-screen flex flex-col md:grid md:grid-rows-6 md:grid-cols-12 gap-8 md:gap-4 py-12 md:py-0 px-4 lg:px-0"
    >
      <div className="bg-primary flex flex-col justify-evenly rounded-3xl p-6 md:p-0 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-7 shadow-lg">
        <h2 className="mx-auto text-center mb-4 md:mb-0"> Get In Touch! </h2>
        <ContactForm />
      </div>
      <div className="flex flex-col justify-evenly bg-primary rounded-3xl p-6 md:p-0 md:row-start-4 md:row-end-6 md:col-start-7 md:col-span-4 shadow-lg">
        <h3 className="mx-auto font-bold text-center mb-4 md:mb-0"> Contact Information </h3>
        <div className="flex bg-secondary rounded-lg mx-4 p-3 items-center mb-4 md:mb-0">
          <MdMail className="text-2xl mx-2 shrink-0" />
          <span className="break-all">{email}</span>
        </div>
        <div className="flex bg-secondary rounded-lg mx-4 p-3 items-center">
          <MdLocationPin className="text-2xl mx-2 shrink-0" />
          <span>{address}</span>
        </div>
      </div>
      <div className="hidden md:block md:row-start-2 md:row-end-4 md:col-start-8 md:col-span-4">
        <GiConversation className="h-full w-full opacity-80" />
      </div>
      <div className="hidden md:block md:row-start-4 md:row-end-6 md:col-start-11 md:col-span-2">
        <MdCellTower className="h-full w-full opacity-80" />
      </div>
    </div>
  );
}
