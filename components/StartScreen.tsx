
import React from 'react';

interface StartScreenProps {
    onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="w-full max-w-2xl text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-4">气血状态自测问卷</h1>
            <p className="text-stone-600 mb-2">基于「眼、面、头、眠、经、温」6 维度</p>
            <p className="text-sm text-stone-500 mb-8">(总分 100 分，每题 5 分，60 分及格)</p>
            <div className="bg-teal-50 border-l-4 border-teal-500 text-teal-800 p-4 rounded-r-lg mb-8 text-left">
                <p className="font-semibold">测试说明</p>
                <p className="text-sm">本问卷旨在帮助您初步了解自身气血状态，结果仅供参考，不能替代专业医疗诊断。</p>
            </div>
            <button
                onClick={onStart}
                className="w-full sm:w-auto bg-teal-600 text-white font-bold py-3 px-12 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300 transform hover:scale-105"
            >
                开始测试
            </button>
        </div>
    );
};

export default StartScreen;
