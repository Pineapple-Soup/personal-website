import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdDocumentScanner, MdEmail } from 'react-icons/md';
import Pineapple from '@/components/Pineapple';

export default function Hero() {
  const email = process.env.EMAIL;
  const resume_url = process.env.RESUME_URL;
  const linkedin_url = process.env.LINKEDIN_URL;
  const github_url = process.env.GITHUB_URL;

  return (
    <div id="home" className="w-full min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center gap-4 px-4 py-8 items-center md:items-start md:pl-12">
        <h1 className="text-center md:text-left">
          Hello!
          <span className="text-4xl md:text-7xl lg:text-8xl inline-block hover:animate-wave cursor-pointer ml-4 md:ml-8">
            👋
          </span>
          <br />
          I&apos;m Adithya
        </h1>
        <sub className="leading-normal text-center md:text-left">
          I love building things, solving puzzles, and learning new skills
        </sub>
        <div className="flex mx-auto md:mx-0 my-8 md:my-12 rounded-full drop-shadow-xl">
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer noopener">
            <MdEmail className="homeButton rounded-l-full" />
          </a>
          <a href={resume_url} target="_blank" rel="noreferrer noopener">
            <MdDocumentScanner className="homeButton -mx-0.5" />
          </a>
          <a href={linkedin_url} target="_blank" rel="noreferrer noopener">
            <FaLinkedin className="homeButton -mx-0.5" />
          </a>
          <a href={github_url} target="_blank" rel="noreferrer noopener">
            <FaGithub className="homeButton rounded-r-full" />
          </a>
        </div>
      </div>
      <div className="w-full h-[40vh] md:h-full flex items-center justify-center">
        <Pineapple />
      </div>
    </div>
  );
}
