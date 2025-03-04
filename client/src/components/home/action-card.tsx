import { Link } from 'react-router-dom';

interface ActionCardProps {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
}

export function ActionCard({ title, description, actionText, actionLink }: ActionCardProps) {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg text-white p-8 rounded-lg z-10">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <Link
        to={actionLink}
        className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
      >
        {actionText} →
      </Link>
    </div>
  );
}