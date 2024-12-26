import React from "react";
import { MdCellTower, MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md";
import { GiConversation } from "react-icons/gi";

export default function Contact() {
    return (
        <section id="contact" className="w-full h-screen grid grid-rows-6 grid-cols-12 gap-4">
            <div className="bg-primary flex flex-col justify-evenly rounded-3xl row-start-2 row-end-6 col-start-1 col-end-7">
                <h2 className="mx-auto"> Get In Touch! </h2>
                <form className="flex flex-col p-4">
                    <div className="flex space-x-4">
                        <input type="text" placeholder="First Name" className="bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2"/>
                        <input type="text" placeholder="Last Name" className="bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2 w-1/2"/>
                    </div>
                    <input type="email" placeholder="Email" className="bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2"/>
                    <input type="subject" placeholder="Subject" className="bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 rounded-lg p-2 my-2"/>
                    <textarea placeholder="Message" className="bg-secondary focus:outline-none focus:ring-accent focus:ring-4 placeholder-slate-600 resize-none rounded-lg p-2 my-2" rows={5} cols={40}/>
                    <button type="submit" className="bg-secondary hover:bg-accent rounded-lg p-2 my-2">Submit</button>
                </form>
            </div>
            <div className="flex flex-col justify-evenly bg-primary rounded-3xl row-start-4 row-end-6 col-start-7 col-span-4">
                <h3 className="mx-auto my-2 font-bold"> Contact Information </h3>
                <div className="flex bg-secondary rounded-lg mx-4 p-2">
                    <MdLocalPhone className="my-auto mx-2"/>
                    <span>925-922-2063</span>
                </div>
                <div className="flex bg-secondary rounded-lg mx-4 p-2">
                    <MdMail className="my-auto mx-2"/>
                    <span>adithya.iyer@email.ucr.edu</span>
                </div>
                <div className="flex bg-secondary rounded-lg mx-4 p-2">
                    <MdLocationPin className="my-auto mx-2"/>
                    <span>Pleasanton, CA 94566</span>
                </div>
            </div>
            <div className="row-start-2 row-end-4 col-start-8 col-span-4">
                <GiConversation className="h-full w-full"/>
            </div>
            <div className="row-start-4 row-end-6 col-start-11 col-span-2">
                <MdCellTower className="h-full w-full"/>
            </div>
        </section>
    );
}