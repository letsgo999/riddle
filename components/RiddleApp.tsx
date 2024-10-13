'use client'

import { useState } from 'react'

// 수수께끼 목록 (실제 앱에서는 더 많은 수수께끼를 추가하세요)
const riddles = [
  { question: "나는 날 수 있지만 새가 아닙니다. 나는 울 수 있지만 개가 아닙니다. 나는 무엇일까요?", answer: "비행기" },
  { question: "항상 오르지만 결코 내려오지 않는 것은 무엇일까요?", answer: "나이" },
  { question: "말을 할 수 있지만 입이 없고, 들을 수 있지만 귀가 없는 것은 무엇일까요?", answer: "전화기" },
]

export default function RiddleApp() {
  const [currentRiddle, setCurrentRiddle] = useState(riddles[Math.floor(Math.random() * riddles.length)])
  const [userAnswer, setUserAnswer] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [showNextButton, setShowNextButton] = useState(false)

  const checkAnswer = () => {
    if (userAnswer.toLowerCase().trim() === currentRiddle.answer.toLowerCase()) {
      setResult('정답입니다!')
    } else {
      setResult(`틀렸습니다. 정답은 ${currentRiddle.answer}입니다.`)
    }
    setShowNextButton(true)
  }

  const nextRiddle = () => {
    const newRiddle = riddles[Math.floor(Math.random() * riddles.length)]
    setCurrentRiddle(newRiddle)
    setUserAnswer('')
    setResult(null)
    setShowNextButton(false)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold text-center mb-6">수수께끼 앱</h1>
      <div className="space-y-4">
        <p className="text-lg font-medium">{currentRiddle.question}</p>
        <input
          type="text"
          placeholder="답을 입력하세요"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={checkAnswer}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          정답 확인
        </button>
        {result && (
          <p className={`text-center font-medium ${result.startsWith('정답') ? 'text-green-600' : 'text-red-600'}`}>
            {result}
          </p>
        )}
      </div>
      {showNextButton && (
        <button
          onClick={nextRiddle}
          className="w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          다음 수수께끼
        </button>
      )}
    </div>
  )
}
