interface FeatureCardProps {
  icon: any;
  title: string;
  bottomIcons: any;
  dark?: boolean;
}

export function FeatureCard({ icon: Icon, title, bottomIcons, dark = false }: FeatureCardProps) {
  return (
    <div className={`relative flex flex-col justify-between py-5 px-5 rounded-xl shadow-md transition-all duration-300 w-full
      ${dark ? 'bg-black text-white' : 'bg-[#A0A0A01A] text-black'}`}>
      <div className="mb-8">
        <img src={Icon} alt={title} className="w-12 h-12" />
      </div>
      <div className='space-y-1 flex justify-between items-center'>
        <h3 className="text-lg font-semibold">{title}</h3>
        {bottomIcons && bottomIcons}
      </div>
    </div>
  );
}
