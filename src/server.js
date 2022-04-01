import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/data", () => {
      return {
        data: [
          {
            category: "History",
            img: "/assets/image/Category/History.jpg",
            ques: [
              {
                correct_answer: "Buffalo Bill",
                incorrect_answers: [
                  "Billy the Kid",
                  "Wild Bill Hickok",
                  "Pawnee Bill",
                ],
                question: "What was William Frederick Cody better known as?",
              },
              {
                correct_answer: "Illyrians",
                difficulty: "easy",
                incorrect_answers: ["Dorians", "Achaeans", "Ionians"],
                question:
                  "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
              },
              {
                correct_answer: "Marie Antoinette",
                incorrect_answers: [
                  "Czar Nicholas II",
                  "Elizabeth I",
                  "Henry VIII",
                ],
                question:
                  "Which famous world leader is famed for the saying, &quot;Let them eat cake&quot;, yet is rumored that he/she never said it at all?",
              },
              {
                correct_answer: "The Red Baron",
                incorrect_answers: [
                  "The High Flying Ace",
                  "The Blue Serpent ",
                  "The Germany Gunner",
                ],
                question: "What was Manfred von Richthofen&#039;s nickname?",
              },
              {
                correct_answer: "George Washington",
                incorrect_answers: [
                  "James Madison",
                  "Thomas Jefferson",
                  "James K. Polk",
                ],
                question: "Who was the first president of the United States?",
              },
              {
                correct_answer: "September 4, 1998",
                incorrect_answers: [
                  "October 9, 1997",
                  "December 12, 1989",
                  "Feburary 7th, 2000",
                ],
                question: "When was Google founded?",
              },
              {
                correct_answer: "Georgia",
                incorrect_answers: ["Russia", "Germany", "Poland"],
                question: "Which country was Josef Stalin born in?",
              },
              {
                correct_answer: "Ceylon",
                incorrect_answers: ["Myanmar", "Colombo", "Badulla"],
                question: "What is the historical name of Sri Lanka?",
              },
              {
                correct_answer: "Silk Road",
                incorrect_answers: ["Spice Road", "Clay Road", "Salt Road"],
                question:
                  "What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?",
              },
              {
                correct_answer: "World War I",
                incorrect_answers: [
                  "Crimean War",
                  "Serbian Revolution",
                  "Second Balkan War",
                ],
                question:
                  "The Ottoman Empire was dissolved after their loss in which war?",
              },
            ],
          },
          {
            category: "Politics",
            img: "/assets/image/Category/Politics.png",
            ques: [
              {
                correct_answer: "Neville Chamberlain",
                incorrect_answers: [
                  "Clement Attlee",
                  "Winston Churchill",
                  "Stanley Baldwin",
                ],
                question:
                  "Who was the British Prime Minister at the outbreak of the Second World War?",
              },
              {
                correct_answer: "Andrew Jackson",
                difficulty: "easy",
                incorrect_answers: [
                  "Ronald Reagan",
                  "John F. Kennedy",
                  "Franklin Roosevelt",
                ],
                question:
                  "Which president erased the national debt of the United States?",
              },
              {
                correct_answer: "Indonesia",
                incorrect_answers: ["Thailand", "Brunei", "Malaysia"],
                question:
                  "The 2014 movie &quot;The Raid 2: Berandal&quot; was mainly filmed in which Asian country?",
              },
              {
                correct_answer: "2000",
                incorrect_answers: ["2012", "1988", "2008"],
                question: "What was Manfred von Richthofen&#039;s nickname?",
              },
              {
                correct_answer: "3",
                incorrect_answers: ["1", "2", "0"],
                question:
                  "In United States history, how many vice presidents did Franklin D. Roosevelt have during his time in office as president?",
              },
              {
                correct_answer: "Nikita Khrushchev",
                incorrect_answers: [
                  "Leonid Brezhnev",
                  "Mikhail Gorbachev",
                  "Boris Yeltsin",
                ],
                question:
                  "Who succeeded Joseph Stalin as General Secretary of the Communist Party of the Soviet Union?",
              },
              {
                correct_answer: "The Kingfish",
                incorrect_answers: ["The Champ", "The Hoot Owl", "The Oracle"],
                question:
                  "What was the personal nickname of the 40th Governor of the US State Louisiana, Huey Long?",
              },
              {
                correct_answer: "1974",
                incorrect_answers: ["1977", "1973", "1969"],
                question: "What year did Gerald Ford Become President?",
              },
              {
                correct_answer: "Chile",
                incorrect_answers: ["Ethiopia", "Indonesia", "Nicaragua"],
                question:
                  "Between 1973 to 1990, what country was ruled by dictator Augusto Pinochet?",
              },
              {
                correct_answer: "Justin and Pierre",
                incorrect_answers: [
                  "John and Louis",
                  "Brian and Justin",
                  "Brian and Pierre",
                ],
                question:
                  "What are the first names of the first father and son pair that were both Prime Ministers of Canada?",
              },
            ],
          },
          {
            category: "Geography",
            img: "/assets/image/Category/Geography.png",
            ques: [
              {
                correct_answer: "Phoenix",
                incorrect_answers: ["Montgomery", "Tallahassee", "Raleigh"],
                question:
                  "What is the capital of the American state of Arizona?",
              },
              {
                correct_answer: "Qatar",
                incorrect_answers: ["Kuwait", "United Arab Emirates", "Jordan"],
                question:
                  "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
              },
              {
                correct_answer: "Washington, D.C.",
                incorrect_answers: [
                  "Los Angelas, CA",
                  "New York City, NY",
                  "Houston, TX",
                ],
                question: "What is the Capital of the United States?",
              },
              {
                correct_answer: "Equatorial Guinea",
                incorrect_answers: ["Guinea", "Cameroon", "Angola"],
                question:
                  "Which of these African countries list &quot;Spanish&quot; as an official language?",
              },
              {
                correct_answer: "Albany",
                incorrect_answers: ["Buffalo", "New York", "Rochester"],
                question: "What is the capital of the US State of New York?",
              },
              {
                correct_answer: "4",
                incorrect_answers: ["5", "2", "0"],
                question:
                  "How many stars are featured on New Zealand&#039;s flag?",
              },
              {
                correct_answer: "Madrid",
                incorrect_answers: ["Barcelona", "Sevilla", "Toledo"],
                question: "What is the capital of Spain?",
              },
              {
                correct_answer: "Honshu",
                incorrect_answers: ["Hokkaido", "Shikoku", "Kyushu"],
                question:
                  "Which of the following Japanese islands is the biggest?",
              },
              {
                correct_answer: "New Delhi",
                incorrect_answers: ["Bejing", "Montreal", "Tithi"],
                question: "What is the capital of India?",
              },
              {
                correct_answer: "Pacific",
                incorrect_answers: ["Atlantic", "Indian", "Arctic"],
                question:
                  "Which ocean borders the west coast of the United States?",
              },
            ],
          },
          {
            category: "Sports",
            img: "/assets/image/Category/Sports.png",
            ques: [
              {
                correct_answer: "Eagle",
                incorrect_answers: ["Birdie", "Bogey", "Albatross"],
                question:
                  "In golf, what name is given to a hole score of two under par?",
              },
              {
                correct_answer: "Russia",
                difficulty: "easy",
                incorrect_answers: ["Germany", "United States", "Saudi Arabia"],
                question: "Which country has hosted the 2018 FIFA World Cup?",
              },
              {
                correct_answer: "Lewis Hamilton",
                incorrect_answers: [
                  "Nico Rosberg",
                  "Sebastian Vettel",
                  "Jenson Button",
                ],
                question: "Who won the 2015 Formula 1 World Championship?",
              },
              {
                correct_answer: "1872",
                incorrect_answers: ["1880", "1863", "1865"],
                question:
                  "When was the first official international game played?",
              },
              {
                correct_answer: "Fastball",
                incorrect_answers: ["Slowball", "Screwball", "Palmball"],
                question:
                  "What is the most common type of pitch thrown by pitchers in baseball?",
              },
              {
                category: "Roger Federer",
                correct_answer: "September 4, 1998",
                incorrect_answers: [
                  "Bill Tilden",
                  "Boris Becker",
                  "Pete Sampras",
                ],
                question:
                  "Who is often called &quot;the Maestro&quot; in the men&#039;s tennis circuit?",
              },
              {
                correct_answer: "1904",
                incorrect_answers: ["1909", "2008", "1999"],
                question: "When was the FC Schalke 04 founded?",
              },
              {
                correct_answer: "Liverpool",
                incorrect_answers: ["Real Madrid", "Chelsea", "Man City"],
                question:
                  "Who did Steven Gerrard win the Champions League with?",
              },
              {
                correct_answer: "Lewis Hamilton",
                incorrect_answers: [
                  "Sebastian Vettel",
                  "Nico Rosberg",
                  "Max Verstappen",
                ],
                question:
                  "Who won the 2017 Formula One World Drivers&#039; Championship?",
              },
              {
                correct_answer: "1-7",
                incorrect_answers: ["1-5", "1-6", "2-6"],
                question:
                  "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
              },
            ],
          },
          {
            category: "Technical",
            img: "/assets/image/Category/Technical.png",
            ques: [
              {
                correct_answer: "Central Processing Unit",
                incorrect_answers: [
                  "Central Process Unit",
                  "Computer Personal Unit",
                  "Central Processor Unit",
                ],
                question: "What does CPU stand for?",
              },
              {
                correct_answer: "Moving Picture",
                difficulty: "easy",
                incorrect_answers: [
                  "Music Player",
                  "Multi Pass",
                  "Micro Point",
                ],
                question: "What does the &quot;MP&quot; stand for in MP3?",
              },
              {
                correct_answer: "Gigahertz",
                incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
                question: "What does GHz stand for?",
              },
              {
                correct_answer: "Cascading Style Sheet",
                incorrect_answers: [
                  "Counter Strike: Source",
                  "Corrective Style Sheet",
                  "Computer Style Sheet",
                ],
                question: "In web design, what does CSS stand for?",
              },
              {
                correct_answer: "1000000",
                incorrect_answers: ["1024", "1000", "1048576"],
                question: "How many kilobytes in one gigabyte (in decimal)?",
              },
              {
                correct_answer: "140",
                incorrect_answers: ["120", "160", "100"],
                question:
                  "On Twitter, what was the original character limit for a Tweet?",
              },
              {
                correct_answer: "Python",
                incorrect_answers: ["C#", "C++", "Java"],
                question:
                  "Which computer language would you associate Django framework with?",
              },
              {
                correct_answer: "Hexidecimal",
                incorrect_answers: ["Binary", "Duodecimal", "Octal"],
                question:
                  "The numbering system with a radix of 16 is more commonly referred to as ",
              },
              {
                correct_answer: "256",
                incorrect_answers: ["8", "1", "1024"],
                question: "How many values can a single byte represent?",
              },
              {
                correct_answer: "Musical Instrument Digital Interface",
                incorrect_answers: [
                  "Musical Interface of Digital Instruments",
                  "Modular Interface of Digital Instruments",
                  "Musical Instrument Data Interface",
                ],
                question: "In computing, what does MIDI stand for?",
              },
            ],
          },
        ],
      };
    });
  },
});
