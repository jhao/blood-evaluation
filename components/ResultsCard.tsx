
import React from 'react';
import CameraIcon from './icons/CameraIcon';
import RestartIcon from './icons/RestartIcon';

interface ResultsCardProps {
    score: number;
    onRestart: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ score, onRestart }) => {
    const isPassing = score >= 60;
    const scoreColor = isPassing ? 'text-teal-600' : 'text-orange-500';

    const result = {
        title: isPassing ? '气血状态良好' : '存在气血不足问题',
        description: isPassing
            ? '气血能够正常滋养身体各部位，维持生理功能稳定。建议继续保持健康的作息、饮食与生活习惯。'
            : '可能已影响到皮肤、睡眠、经期等状态。建议按 “养脾胃→补气血→通气血” 的步骤调理，如调整饮食（多吃健脾养血食材）、规律作息、适度运动（促进气血流通）等。',
    };

    return (
        <div className="w-full max-w-2xl text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-fade-in-up">
            <h2 className="text-2xl font-bold text-stone-700 mb-2">您的气血状态评估报告</h2>
            <p className="text-sm text-stone-500 mb-6">结果仅供参考，非专业医疗建议</p>
            
            <div className="my-8">
                <p className="text-lg text-stone-600">您的总分是</p>
                <p className={`text-7xl font-black my-2 ${scoreColor}`}>{score}</p>
            </div>
            
            <div className={`p-6 rounded-lg ${isPassing ? 'bg-teal-50' : 'bg-orange-50'}`}>
                <h3 className={`text-xl font-bold mb-3 ${isPassing ? 'text-teal-800' : 'text-orange-800'}`}>{result.title}</h3>
                <p className={`text-sm leading-relaxed ${isPassing ? 'text-teal-700' : 'text-orange-700'}`}>{result.description}</p>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg flex items-center justify-center space-x-3">
                <CameraIcon className="w-6 h-6 text-gray-500"/>
                <p className="text-gray-600 font-medium">请截屏保存您的评估结果</p>
            </div>

            <button
                onClick={onRestart}
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center bg-gray-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105"
            >
                <RestartIcon className="w-5 h-5 mr-2" />
                重新测试
            </button>
        </div>
    );
};

export default ResultsCard;
