import { createServer } from "miragejs";
import uuid from "react-uuid";
createServer({
  routes() {
    this.namespace = "api";

    this.get("/data", () => {
      return {
        data: [
          {
            id: uuid(),
            category: "History",
            img: "/assets/image/Category/History.jpg",
            ques: [
              {
                id: uuid(),
                correct_answer: "Buffalo Bill",
                options: [
                  "Billy the Kid",
                  "Wild Bill Hickok",
                  "Pawnee Bill",
                  "Buffalo Bill",
                ],
                question: "What was William Frederick Cody better known as?",
              },
              {
                id: uuid(),
                correct_answer: "Illyrians",
                options: ["Dorians", "Illyrians", "Achaeans", "Ionians"],
                question:
                  "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
              },
              {
                id: uuid(),
                correct_answer: "Marie Antoinette",
                options: [
                  "Czar Nicholas II",
                  "Elizabeth I",
                  "Marie Antoinette",
                  "Henry VIII",
                ],
                question:
                  "Which famous world leader is famed for the saying, &quot;Let them eat cake&quot;, yet is rumored that he/she never said it at all?",
              },
              {
                id: uuid(),
                correct_answer: "The Red Baron",
                options: [
                  "The High Flying Ace",
                  "The Blue Serpent ",
                  "The Red Baron",
                  "The Germany Gunner",
                ],
                question: "What was Manfred von Richthofen's nickname?",
              },
              {
                id: uuid(),
                correct_answer: "George Washington",
                options: [
                  "James Madison",
                  "Thomas Jefferson",
                  "George Washington",
                  "James K. Polk",
                ],
                question: "Who was the first president of the United States?",
              },
              {
                id: uuid(),
                correct_answer: "September 4, 1998",
                options: [
                  "September 4, 1998",
                  "October 9, 1997",
                  "December 12, 1989",
                  "Feburary 7th, 2000",
                ],
                question: "When was Google founded?",
              },
              {
                id: uuid(),
                correct_answer: "Georgia",
                options: ["Russia", "Germany", "Poland", "Georgia"],
                question: "Which country was Josef Stalin born in?",
              },
              {
                id: uuid(),
                correct_answer: "Ceylon",
                options: ["Myanmar", "Colombo", "Badulla", "Ceylon"],
                question: "What is the historical name of Sri Lanka?",
              },
              {
                id: uuid(),
                correct_answer: "Silk Road",
                options: ["Spice Road", "Silk Road", "Clay Road", "Salt Road"],
                question:
                  "What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?",
              },
              {
                id: uuid(),
                correct_answer: "World War I",
                options: [
                  "Crimean War",
                  "Serbian Revolution",
                  "Second Balkan War",
                  "World War I",
                ],
                question:
                  "The Ottoman Empire was dissolved after their loss in which war?",
              },
            ],
          },
          {
            id: uuid(),
            category: "Politics",
            img: "/assets/image/Category/Politics.png",
            ques: [
              {
                id: uuid(),
                correct_answer: "Neville Chamberlain",
                options: [
                  "Clement Attlee",
                  "Winston Churchill",
                  "Neville Chamberlain",
                  "Stanley Baldwin",
                ],
                question:
                  "Who was the British Prime Minister at the outbreak of the Second World War?",
              },
              {
                id: uuid(),
                correct_answer: "Andrew Jackson",
                options: [
                  "Ronald Reagan",
                  "John F. Kennedy",
                  "Franklin Roosevelt",
                  "Andrew Jackson",
                ],
                question:
                  "Which president erased the national debt of the United States?",
              },
              {
                id: uuid(),
                correct_answer: "Indonesia",
                options: ["Thailand", "Brunei", "Malaysia", "Indonesia"],
                question:
                  "The 2014 movie &quot;The Raid 2: Berandal&quot; was mainly filmed in which Asian country?",
              },
              {
                id: uuid(),
                correct_answer: "2000",
                options: ["2000", "2012", "1988", "2008"],
                question: "What was Manfred von Richthofen's nickname?",
              },
              {
                id: uuid(),
                correct_answer: "3",
                options: ["1", "2", "3", "0"],
                question:
                  "In United States history, how many vice presidents did Franklin D. Roosevelt have during his time in office as president?",
              },
              {
                id: uuid(),
                correct_answer: "Nikita Khrushchev",
                options: [
                  "Leonid Brezhnev",
                  "Mikhail Gorbachev",
                  "Nikita Khrushchev",
                  "Boris Yeltsin",
                ],
                question:
                  "Who succeeded Joseph Stalin as General Secretary of the Communist Party of the Soviet Union?",
              },
              {
                id: uuid(),
                correct_answer: "The Kingfish",
                options: [
                  "The Champ",
                  "The Hoot Owl",
                  "The Kingfish",
                  "The Oracle",
                ],
                question:
                  "What was the personal nickname of the 40th Governor of the US State Louisiana, Huey Long?",
              },
              {
                id: uuid(),
                correct_answer: "1974",
                options: ["1977", "1973", "1974", "1969"],
                question: "What year did Gerald Ford Become President?",
              },
              {
                id: uuid(),
                correct_answer: "Chile",
                options: ["Ethiopia", "Indonesia", "Chile", "Nicaragua"],
                question:
                  "Between 1973 to 1990, what country was ruled by dictator Augusto Pinochet?",
              },
              {
                id: uuid(),
                correct_answer: "Justin and Pierre",
                options: [
                  "John and Louis",
                  "Brian and Justin",
                  "Brian and Pierre",
                  "Justin and Pierre",
                ],
                question:
                  "What are the first names of the first father and son pair that were both Prime Ministers of Canada?",
              },
            ],
          },
          {
            id: uuid(),
            category: "Geography",
            img: "/assets/image/Category/Geography.png",
            ques: [
              {
                id: uuid(),
                correct_answer: "Phoenix",
                options: ["Montgomery", "Phoenix", "Tallahassee", "Raleigh"],
                question:
                  "What is the capital of the American state of Arizona?",
              },
              {
                id: uuid(),
                correct_answer: "Qatar",
                options: ["Kuwait", "United Arab Emirates", "Qatar", "Jordan"],
                question:
                  "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
              },
              {
                id: uuid(),
                correct_answer: "Washington, D.C.",
                options: [
                  "Los Angelas, CA",
                  "New York City, NY",
                  "Washington, D.C.",
                  "Houston, TX",
                ],
                question: "What is the Capital of the United States?",
              },
              {
                id: uuid(),
                correct_answer: "Equatorial Guinea",
                options: ["Guinea", "Cameroon", "Equatorial Guinea", "Angola"],
                question:
                  "Which of these African countries list &quot;Spanish&quot; as an official language?",
              },
              {
                id: uuid(),
                correct_answer: "Albany",
                options: ["Buffalo", "New York", "Albany", "Rochester"],
                question: "What is the capital of the US State of New York?",
              },
              {
                id: uuid(),
                correct_answer: "4",
                options: ["5", "2", "4", "0"],
                question:
                  "How many stars are featured on New Zealand&#039;s flag?",
              },
              {
                id: uuid(),
                correct_answer: "Madrid",
                options: ["Barcelona", "Madrid", "Sevilla", "Toledo"],
                question: "What is the capital of Spain?",
              },
              {
                id: uuid(),
                correct_answer: "Honshu",
                options: ["Honshu", "Hokkaido", "Shikoku", "Kyushu"],
                question:
                  "Which of the following Japanese islands is the biggest?",
              },
              {
                id: uuid(),
                correct_answer: "New Delhi",
                options: ["Bejing", "New Delhi", "Montreal", "Tithi"],
                question: "What is the capital of India?",
              },
              {
                id: uuid(),
                correct_answer: "Pacific",
                options: ["Atlantic", "Pacific", "Indian", "Arctic"],
                question:
                  "Which ocean borders the west coast of the United States?",
              },
            ],
          },
          {
            id: uuid(),
            category: "Sports",
            img: "/assets/image/Category/Sports.png",
            ques: [
              {
                id: uuid(),
                correct_answer: "Eagle",
                options: ["Eagle", "Birdie", "Bogey", "Albatross"],
                question:
                  "In golf, what name is given to a hole score of two under par?",
              },
              {
                id: uuid(),
                correct_answer: "Russia",
                options: ["Russia", "Germany", "United States", "Saudi Arabia"],
                question: "Which country has hosted the 2018 FIFA World Cup?",
              },
              {
                id: uuid(),
                correct_answer: "Lewis Hamilton",
                options: [
                  "Nico Rosberg",
                  "Lewis Hamilton",
                  "Sebastian Vettel",
                  "Jenson Button",
                ],
                question: "Who won the 2015 Formula 1 World Championship?",
              },
              {
                id: uuid(),
                correct_answer: "1872",
                options: ["1880", "1863", "1865", "1872"],
                question:
                  "When was the first official international game played?",
              },
              {
                id: uuid(),
                correct_answer: "Fastball",
                options: ["Slowball", "Screwball", "Palmball", "Fastball"],
                question:
                  "What is the most common type of pitch thrown by pitchers in baseball?",
              },
              {
                id: uuid(),
                correct_answer: "Roger Federer",
                options: [
                  "Bill Tilden",
                  "Boris Becker",
                  "Roger Federer",
                  "Pete Sampras",
                ],
                question:
                  "Who is often called the Maestro in the men's tennis circuit?",
              },
              {
                id: uuid(),
                correct_answer: "1904",
                options: ["1909", "2008", "1999", "1904"],
                question: "When was the FC Schalke 04 founded?",
              },
              {
                id: uuid(),
                correct_answer: "Liverpool",
                options: ["Liverpool", "Real Madrid", "Chelsea", "Man City"],
                question:
                  "Who did Steven Gerrard win the Champions League with?",
              },
              {
                id: uuid(),
                correct_answer: "Lewis Hamilton",
                options: [
                  "Lewis Hamilton",
                  "Sebastian Vettel",
                  "Nico Rosberg",
                  "Max Verstappen",
                ],
                question:
                  "Who won the 2017 Formula One World Driver's; Championship?",
              },
              {
                id: uuid(),
                correct_answer: "1-7",
                options: ["1-5", "1-6", "2-6", "1-7"],
                question:
                  "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
              },
            ],
          },
          {
            id: uuid(),
            category: "Technical",
            img: "/assets/image/Category/Technical.png",
            ques: [
              {
                id: uuid(),
                correct_answer: "Central Processing Unit",
                options: [
                  "Central Process Unit",
                  "Computer Personal Unit",
                  "Central Processor Unit",
                  "Central Processing Unit",
                ],
                question: "What does CPU stand for?",
              },
              {
                id: uuid(),
                correct_answer: "Moving Picture",
                options: [
                  "Moving Picture",
                  "Music Player",
                  "Multi Pass",
                  "Micro Point",
                ],
                question: "What does the MP stand for in MP3?",
              },
              {
                id: uuid(),
                correct_answer: "Gigahertz",
                options: ["Gigahotz", "Gigahertz", "Gigahetz", "Gigahatz"],
                question: "What does GHz stand for?",
              },
              {
                id: uuid(),
                correct_answer: "Cascading Style Sheet",
                options: [
                  "Counter Strike: Source",
                  "Corrective Style Sheet",
                  "Computer Style Sheet",
                  "Cascading Style Sheet",
                ],
                question: "In web design, what does CSS stand for?",
              },
              {
                id: uuid(),
                correct_answer: "1000000",
                options: ["1024", "1000", "1000000", "1048576"],
                question: "How many kilobytes in one gigabyte (in decimal)?",
              },
              {
                id: uuid(),
                correct_answer: "140",
                options: ["120", "160", "140", "100"],
                question:
                  "On Twitter, what was the original character limit for a Tweet?",
              },
              {
                id: uuid(),
                correct_answer: "Python",
                options: ["C#", "C++", "Java", "Python"],
                question:
                  "Which computer language would you associate Django framework with?",
              },
              {
                id: uuid(),
                correct_answer: "Hexidecimal",
                options: ["Binary", "Duodecimal", "Hexidecimal", "Octal"],
                question:
                  "The numbering system with a radix of 16 is more commonly referred to as ",
              },
              {
                id: uuid(),
                correct_answer: "256",
                options: ["8", "1", "1024", "256"],
                question: "How many values can a single byte represent?",
              },
              {
                id: uuid(),
                correct_answer: "Musical Instrument Digital Interface",
                options: [
                  "Musical Interface of Digital Instruments",
                  "Musical Instrument Digital Interface",
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
