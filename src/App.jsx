import React, {createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Componanats/Navbar'
import Home from './Pages/Home';
import Products from './Pages/Product';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Footer from './Componanats/Footer';



export const mycontext=createContext();

const App = () => {
  const[id,setid]=useState(0);
  const userdata=[
    {
    id: 1,
    isbn:1234783748922,
    dob:"23/2/1992",
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    publication_year: 1884,
    genre: [
    "Adventure",
    "Satire"
    ],
    description: "A satirical novel following Huck Finn's journey down the Mississippi River.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 2,
    isbn:1234783748923,
    dob:"23/2/1992",
    title: "The Iliad",
    author: "Homer",
    publication_year: "8th century BCE",
    genre: [
    "Epic",
    "Mythology"
    ],
    description: "An ancient Greek epic poem about the Trojan War and the hero Achilles.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 3,
    isbn:1234783748924,
    dob:"23/2/1992",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publication_year: 1954,
    genre: [
    "Fantasy",
    "Adventure"
    ],
    description: "A thrilling epic about the quest to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 4,
    isbn:1234783748925,
    dob:"23/2/1992",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    publication_year: 1605,
    genre: [
    "Classic",
    "Satire"
    ],
    description: "A satirical novel about a deluded knight and his faithful squire, Sancho Panza.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 5,
    isbn:1234783748926,
    dob:"23/2/1992",
    title: "Frankenstein",
    author: "Mary Shelley",
    publication_year: 1818,
    genre: [
    "Gothic",
    "Science Fiction"
    ],
    description: "A novel about the creation of a monster and the consequences of playing god.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 6,
    isbn:1234783748927,
    dob:"23/2/1992",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    publication_year: 1865,
    genre: [
    "Fantasy",
    "Children's Literature"
    ],
    description: "A whimsical tale about a girl named Alice who falls into a magical world.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 7,
    isbn:1234783748928,
    dob:"23/2/1992",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    publication_year: 1943,
    genre: [
    "Fable",
    "Children's Literature"
    ],
    description: "A philosophical novella about a young prince's journey through the universe.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 8,
    isbn:1234783748929,
    dob:"23/2/1992",
    title: "The Book Thief",
    author: "Markus Zusak",
    publication_year: 2005,
    genre: [
    "Historical Fiction",
    "War"
    ],
    description: "A story of a girl living in Nazi Germany, narrated by Death.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 9,
    isbn:1234783748930,
    dob:"23/2/1992",
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    publication_year: 1969,
    genre: [
    "Satire",
    "Science Fiction"
    ],
    description: "An anti-war novel that mixes science fiction and dark humor.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 10,
    isbn:1234783748931,
    dob:"23/2/1992",
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publication_year: 1939,
    genre: [
    "Historical Fiction",
    "Social Commentary"
    ],
    description: "A novel about the plight of migrant workers during the Great Depression.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 11,
    isbn:1234783748931,
    dob:"23/2/1992",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publication_year: 1953,
    genre: [
    "Dystopian",
    "Science Fiction"
    ],
    description: "A dystopian novel depicting a future society where books are banned.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 12,
    isbn:1234783748932,
    dob:"23/2/1992",
    title: "The Lord of the Flies",
    author: "William Golding",
    publication_year: 1954,
    genre: [
    "Dystopian",
    "Psychological Fiction"
    ],
    description: "A novel about a group of British boys stranded on an uninhabited island.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 13,
    isbn:1234783748933,
    dob:"23/2/1992",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publication_year: 1979,
    genre: [
    "Science Fiction",
    "Comedy"
    ],
    description: "A comedic science fiction series about the misadventures of Arthur Dent.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 14,
    isbn:1234783748934,
    dob:"23/2/1992",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    publication_year: 1859,
    genre: [
    "Historical Fiction",
    "Classic"
    ],
    description: "A historical novel set during the French Revolution, exploring themes of sacrifice and resurrection.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 15,
    isbn:1234783748935,
    dob:"23/2/1992",
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    publication_year: 1950,
    genre: [
    "Fantasy",
    "Children's Literature"
    ],
    description: "A series of fantasy novels set in the magical land of Narnia.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 16,
    isbn:1234783748936,
    dob:"23/2/1992",
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publication_year: 1985,
    genre: [
    "Dystopian",
    "Feminist Fiction"
    ],
    description: "A dystopian novel set in a totalitarian society where women are subjugated.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 17,
    isbn:1234783748937,
    dob:"23/2/1992",
    title: "The Name of the Rose",
    author: "Umberto Eco",
    publication_year: 1980,
    genre: [
    "Historical Fiction",
    "Mystery"
    ],
    description: "A medieval mystery novel set in an Italian monastery.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 18,
    isbn:1234783748938,
    dob:"23/2/1992",
    title: "The Trial",
    author: "Franz Kafka",
    publication_year: 1925,
    genre: [
    "Absurdist Fiction",
    "Existential"
    ],
    description: "A surreal novel exploring themes of guilt, law, and justice.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 19,
    isbn:1234783748939,
    dob:"23/2/1992",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    publication_year: 2003,
    genre: [
    "Historical Fiction",
    "Drama"
    ],
    description: "A novel about friendship, redemption, and the impact of war in Afghanistan.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    },
    {
    id: 20,
    isbn:1234783748940,
    dob:"23/2/1992",
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    publication_year: 1989,
    genre: [
    "Historical Fiction",
    "Adventure"
    ],
    description: "An epic historical novel set in 12th-century England, centered around the construction of a cathedral.",
   cover_image: "https://fakeimg.pl/667x1000/cc6600"
    }
    
  ]
  const[userData,setuserdata]=useState(userdata)
  return (
    <div>
     <BrowserRouter>
     <mycontext.Provider value={[userData,setuserdata]}>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/product" element={<Products setid={setid}/>}/>
        <Route path="/Create"  element={<Create/> }/>
        <Route path="/Edit"  element={<Edit id={id}/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
     </mycontext.Provider>
     </BrowserRouter>
    </div>
     
  );
};

export default App;