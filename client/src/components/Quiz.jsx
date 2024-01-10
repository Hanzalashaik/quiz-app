import { useCallback, useState } from "react"
import QUESTIONS from "../data.js"
import Question from "./Question.jsx";
import QuizResult from "./QuizResult.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length
    // console.log(activeQuestionIndex);

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectAnswer) {

        setUserAnswers((prevSelectAnswer) => {
            return [...prevSelectAnswer, selectAnswer]
        })
    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    const quizComplete = activeQuestionIndex === QUESTIONS.length;
    if (quizComplete) {
        return <QuizResult userAnswers={userAnswers}/>
    }

    return (
        <div id="quiz">
            <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
             />
        </div>
    )
}