export interface Answer{
    text: string;
    correct:boolean;
}

export interface QuizData {
    question: string;
    answers: [Answer, Answer, Answer, Answer];
}

 const quizData: QuizData[] =[
        {
            question: "What is recycling and why is it important?",
            answers:[
                { text: "A way to reuse items without modifying them.", correct: false },
                { text: "A process to transform waste materials into new products.", correct: true },
                { text: "A technique for burning waste.", correct: false },
                { text: "A method for burying waste.", correct: false },
            ],
        },
        {
            question: "Which materials can commonly be recycled?",
            answers: [
              { text: "Food and textiles.", correct: false },
              { text: "Paper, glass, plastic, and metal.", correct: true },
              { text: "Wood and cardboard.", correct: false },
              { text: "Only plastic.", correct: false },
            ],
          },
          {
            question: "What can you do to reduce plastic in your daily life?",
            answers: [
              { text: "Use single-use plastic bottles.", correct: false },
              { text: "Choose products with plastic packaging.", correct: false },
              { text: "Use reusable cloth bags.", correct: true },
              { text: "Ignore the problem.", correct: false },
            ],
          },
          {
            question: "What is the difference between composting and recycling?",
            answers: [
              { text: "Composting turns organic waste into humus, while recycling involves non-organic materials.", correct: true },
              { text: "Composting only happens in winter.", correct: false },
              { text: "Recycling is more expensive than composting.", correct: false },
              { text: "There is no difference.", correct: false },
            ],
          },
          {
            question: "Why is it important to reduce energy consumption to combat climate change?",
            answers: [
              { text: "To save money.", correct: false },
              { text: "To reduce greenhouse gas emissions.", correct: true },
              { text: "To increase energy production.", correct: false },
              { text: "To use more natural resources.", correct: false },
            ],
          },
          {
            question: "What are some examples of renewable energy and how can they help the environment?",
            answers: [
              { text: "Coal and oil.", correct: false },
              { text: "Sun, wind, and water.", correct: true },
              { text: "Natural gas.", correct: false },
              { text: "Nuclear energy.", correct: false },
            ],
          },
          {
            question: "What does 'reduce, reuse, recycle' mean?",
            answers: [
              { text: "To buy more new items.", correct: false },
              { text: "To limit waste, give new life to items, and transform waste materials.", correct: true },
              { text: "To burn waste.", correct: false },
              { text: "To ignore the waste problem.", correct: false },
            ],
          },
          {
            question: "How does climate change affect biodiversity?",
            answers: [
              { text: "It reduces species variety.", correct: true },
              { text: "It increases the number of endangered species.", correct: false },
              { text: "It has no effect.", correct: false },
              { text: "It makes species stronger.", correct: false },
            ],
          },
          {
            question: "What sustainable behaviors can you adopt in your daily routine?",
            answers: [
              { text: "Use public transport or bike.", correct: true },
              { text: "Use a car for every trip.", correct: false },
              { text: "Ignore recycling.", correct: false },
              { text: "Purchase single-use products.", correct: false },
            ],
          },
          {
            question: "What is a negative effect of deforestation?",
            answers: [
              { text: "Increased oxygen production.", correct: false },
              { text: "Loss of habitat for many species.", correct: true },
              { text: "Increased biodiversity.", correct: false },
              { text: "Soil strengthening.", correct: false },
            ],
          },


    ];

export const NumberOfQuestions = quizData.length ;

export default quizData;

