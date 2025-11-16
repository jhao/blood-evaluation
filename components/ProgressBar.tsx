
import React from 'react';

interface ProgressBarProps {
    current: number;
    total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    const progressPercentage = (current / total) * 100;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-1 text-sm text-stone-600">
                <span className="font-medium">进度</span>
                <span>第 {current} / {total} 题</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-teal-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
