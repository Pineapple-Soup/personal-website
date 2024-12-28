
import Image, { StaticImageData } from 'next/image';

export type ProjectStatus = 'Planned' | 'In Progress' | 'Completed';

export interface CardProps {
    title: string;
    description: string;
    status: ProjectStatus;
    image: StaticImageData;
    stack: string[];
}

export default function Card({ title, description, status, image, stack }: CardProps) {
    return (
        <div className="card">
            <div className="relative h-1/2 m-4">
                <Image src={image} alt={title} fill={true} objectFit="cover" className="rounded-3xl"/>
            </div>
            <div className="flex justify-between items-center mx-6">
                <h3 className='text-lg'>{title}</h3>
                <small className={status === 'In Progress' ? "badge bg-orange-500" : status === 'Completed' ? "badge bg-green-500" : "badge bg-red-500"}>{status}</small>
            </div>
            <small className="mx-6 py-2 flex-1">{description}</small>
            <ul className="flex flex-wrap m-4">
                {stack.map((tech, index) => (
                    <li key={index}>
                        <small className="bg-secondary rounded-3xl p-2 m-2 hover:ring-accent hover:ring-2">{tech}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}