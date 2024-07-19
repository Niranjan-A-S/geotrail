import { memo } from 'react';
import { IDensityCardProps } from '../../types';

export const DensityCard: React.FC<{ data: IDensityCardProps }> = memo(({ data: { density, name } }) => (
    <div className="w-60 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl z-[1000] absolute right-[10px] top-[10px] hover:shadow-2xl transition-shadow duration-300">
        <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-sm">Density: {density}</p>
        </div>
    </div>
));
