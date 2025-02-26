import { MdCellTower, MdLocationPin, MdMail } from "react-icons/md";
import { GiConversation } from "react-icons/gi";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const email = process.env.EMAIL;
  const address = process.env.ADDRESS;

  return (
    <section
      id='contact'
      className='w-full h-screen grid grid-rows-6 grid-cols-12 gap-4'>
      <div className='bg-primary flex flex-col justify-evenly rounded-3xl row-start-2 row-end-6 col-start-1 col-end-7'>
        <h2 className='mx-auto'> Get In Touch! </h2>
        <ContactForm />
      </div>
      <div className='flex flex-col justify-evenly bg-primary rounded-3xl row-start-4 row-end-6 col-start-7 col-span-4'>
        <h3 className='mx-auto font-bold'> Contact Information </h3>
        <div className='flex bg-secondary rounded-lg mx-4 p-2'>
          <MdMail className='my-auto mx-2' />
          <span>{email}</span>
        </div>
        <div className='flex bg-secondary rounded-lg mx-4 p-2'>
          <MdLocationPin className='my-auto mx-2' />
          <span>{address}</span>
        </div>
      </div>
      <div className='row-start-2 row-end-4 col-start-8 col-span-4'>
        <GiConversation className='h-full w-full' />
      </div>
      <div className='row-start-4 row-end-6 col-start-11 col-span-2'>
        <MdCellTower className='h-full w-full' />
      </div>
    </section>
  );
}
