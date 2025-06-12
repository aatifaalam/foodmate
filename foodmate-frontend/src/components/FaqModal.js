import React, { useState } from 'react';

const FaqModal = ({ isOpen, onClose }) => {
    const [newQuestion, setNewQuestion] = useState('');
    const [userQuestions, setUserQuestions] = useState([]);
    const [defaultFaqs] = useState([
        {
            question: "What is FoodMate Volunteer Hub?",
            answer: "FoodMate Volunteer Hub is a platform where volunteers can manage their food sharing activities, track donations, and coordinate with other volunteers in their community."
        },
        {
            question: "How do I reset my password?",
            answer: "Click on the 'Forgot password?' link on the login page. You'll receive an email with instructions to reset your password. You can also use the magic link option for passwordless login."
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we use industry-standard encryption and security measures to protect your data. We never share your personal information with third parties without your consent."
        },
        {
            question: "How can I become a volunteer?",
            answer: "Visit our main website and click on 'Get Involved' to learn about volunteer opportunities. Once approved, you'll receive login credentials for the Volunteer Hub."
        }
    ]);

    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        if (newQuestion.trim()) {
            setUserQuestions([
                ...userQuestions,
                {
                    question: newQuestion,
                    answer: "Thank you for your question! Our team will respond within 24 hours.",
                    isPending: true
                }
            ]);
            setNewQuestion('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-md relative">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-purple-900">Frequently Asked Questions</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* FAQ Content */}
                <div className="p-4 max-h-[40vh] overflow-y-auto border-b">
                    <h3 className="text-lg font-medium text-purple-900 mb-4">Common Questions</h3>
                    {defaultFaqs.map((faq, index) => (
                        <div key={`default-${index}`} className="mb-4 last:mb-0">
                            <h4 className="text-md font-medium text-purple-900 mb-2">
                                {faq.question}
                            </h4>
                            <p className="text-gray-600 text-sm">
                                {faq.answer}
                            </p>
                            {index < defaultFaqs.length - 1 && (
                                <div className="border-b my-4"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* User Questions */}
                {userQuestions.length > 0 && (
                    <div className="p-4 max-h-[20vh] overflow-y-auto border-b">
                        <h3 className="text-lg font-medium text-purple-900 mb-4">Your Questions</h3>
                        {userQuestions.map((q, index) => (
                            <div key={`user-${index}`} className="mb-4 last:mb-0">
                                <h4 className="text-md font-medium text-purple-900 mb-2">
                                    {q.question}
                                </h4>
                                <p className={`text-sm ${q.isPending ? 'text-orange-600' : 'text-gray-600'}`}>
                                    {q.answer}
                                </p>
                                {index < userQuestions.length - 1 && (
                                    <div className="border-b my-4"></div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Question Submission Form */}
                <div className="p-4">
                    <h3 className="text-lg font-medium text-purple-900 mb-4">Ask a Question</h3>
                    <form onSubmit={handleSubmitQuestion} className="space-y-4">
                        <div>
                            <textarea
                                value={newQuestion}
                                onChange={(e) => setNewQuestion(e.target.value)}
                                placeholder="Type your question here..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                rows="3"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!newQuestion.trim()}
                        >
                            Submit Question
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FaqModal; 