import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDocumentScanner, MdEmail } from "react-icons/md";
import ThreeScene from "@/components/ThreeScene";

export default function Hero() {
  const email = process.env.EMAIL;
  const resume_url = process.env.RESUME_URL;
  const linkedin_url = process.env.LINKEDIN_URL;
  const github_url = process.env.GITHUB_URL;

  return (
    <section id='home' className='w-full h-screen grid grid-cols-2'>
      <div className='flex flex-col grow justify-center'>
        <h1>
          Hello!
          <span className='text-8xl inline-block hover:animate-wave cursor-pointer ml-12'>
            👋
          </span>
          <br />
          I&apos;m Adithya
        </h1>
        <sub className='leading-normal'>
          I love building things, solving puzzles, and learning new skills
        </sub>
        <div className='flex mx-auto my-12 rounded-full drop-shadow-xl'>
          <a href={`mailto:${email}`} target='_blank' rel='noreferrer noopener'>
            <MdEmail className='homeButton rounded-l-full' />
          </a>
          <a href={resume_url} target='_blank' rel='noreferrer noopener'>
            <MdDocumentScanner className='homeButton -mx-0.5' />
          </a>
          <a href={linkedin_url} target='_blank' rel='noreferrer noopener'>
            <FaLinkedin className='homeButton -mx-0.5' />
          </a>
          <a href={github_url} target='_blank' rel='noreferrer noopener'>
            <FaGithub className='homeButton rounded-r-full' />
          </a>
        </div>
      </div>
      <div className='border'>
        <ThreeScene />
        {/* Placeholder for image */}
      </div>
    </section>
  );
}
