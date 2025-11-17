import Image from "next/image";

export interface CardProps {
  title: string;
  description: string;
  status: string;
  image: string;
  stack: string[];
}

const Card = ({ title, description, status, image, stack }: CardProps) => {
  return (
    <div className='flex flex-col h-full w-96 bg-primary shadow-lg overflow-hidden rounded-3xl duration-300 hover:ring-4 hover:ring-accent hover:shadow-xl'>
      <div className='relative m-4 h-48'>
        <Image src={image} alt={title} fill className='object-contain' />
      </div>

      <header className='flex justify-between items-center mx-4'>
        <h3 className='text-xl'>{title}</h3>
        <p
          className={`rounded-3xl p-2 text-sm font-semibold
            ${
              status === "In Progress"
                ? "bg-orange-500"
                : status === "Completed"
                  ? "bg-green-500"
                  : "bg-red-500"
            }
          `}>
          {status}
        </p>
      </header>

      <p className='mx-4 py-4 text-sm'>{description}</p>

      <footer>
        <ul className='flex flex-wrap m-4 gap-2'>
          {stack.map((tech, index) => (
            <li key={index}>
              <p className='bg-secondary rounded-3xl p-2 text-xs hover:ring-accent hover:ring-2'>
                {tech}
              </p>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default Card;
