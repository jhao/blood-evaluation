import React, { useState, useEffect } from 'react';
import type { Question, Option } from '../types';

interface QuestionCardProps {
    question: Question;
    onAnswerSelect: (score: number) => void;
    onBack: () => void;
    isFirstQuestion: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswerSelect, onBack, isFirstQuestion }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Reset visibility for the new question
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 50); // Short delay to trigger transition
        return () => clearTimeout(timer);
    }, [question.id]);

    const handleOptionClick = (option: Option) => {
        setIsVisible(false);
        setTimeout(() => {
            onAnswerSelect(option.score);
        }, 300); // Wait for fade-out animation
    };

    return (
        <div
            className={`w-full max-w-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
            }`}
        >
            <p className="text-sm text-teal-700 font-semibold mb-2">{question.category}</p>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-8 leading-relaxed">
                {question.text}
            </h2>
            <div className="space-y-4">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="w-full text-left p-4 bg-amber-50 rounded-lg border-2 border-transparent hover:border-teal-500 hover:bg-teal-50 focus:outline-none focus:ring-4 focus:ring-teal-200 transition-all duration-200 group"
                    >
                        <span className="text-stone-700 group-hover:text-teal-800 font-medium">
                            {option.text}
                        </span>
                    </button>
                ))}
            </div>
            {!isFirstQuestion && (
                <div className="mt-8 text-center">
                    <button
                        onClick={onBack}
                        className="text-sm text-stone-500 hover:text-stone-800 font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        返回上一题
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuestionCard;
