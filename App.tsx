
import React, { useState, useMemo } from 'react';
import { QUIZ_QUESTIONS } from './constants';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ResultsCard from './components/ResultsCard';
import ProgressBar from './components/ProgressBar';

const App: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [quizState, setQuizState] = useState<'start' | 'running' | 'finished'>('start');

    const totalScore = useMemo(() => {
        return answers.reduce((acc, score) => acc + score, 0);
    }, [answers]);

    const handleStart = () => {
        setQuizState('running');
    };

    const handleAnswerSelect = (score: number) => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);

        if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizState('finished');
        }
    };
    
    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setAnswers(answers.slice(0, -1));
        }
    };

    const handleRestart = () => {
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setQuizState('start');
    };

    const renderContent = () => {
        switch (quizState) {
            case 'start':
                return <StartScreen onStart={handleStart} />;
            case 'running':
                return (
                    <QuestionCard
                        key={currentQuestionIndex}
                        question={QUIZ_QUESTIONS[currentQuestionIndex]}
                        onAnswerSelect={handleAnswerSelect}
                        onBack={handleBack}
                        isFirstQuestion={currentQuestionIndex === 0}
                    />
                );
            case 'finished':
                return <ResultsCard score={totalScore} onRestart={handleRestart} />;
            default:
                return <StartScreen onStart={handleStart} />;
        }
    };

    return (
        <div className="min-h-screen bg-amber-50 text-stone-800 flex flex-col items-center p-4 sm:p-6 font-sans">
            <div className="w-full max-w-2xl mx-auto flex flex-col flex-grow">
                {quizState === 'running' && (
                    <header className="w-full mb-6">
                        <ProgressBar current={currentQuestionIndex + 1} total={QUIZ_QUESTIONS.length} />
                    </header>
                )}
                <main className="flex-grow flex flex-col items-center justify-center w-full">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;