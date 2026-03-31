
import { Suspense, useState } from 'react';
import './App.css'
import Available from './components/Home/Available/Available'
import Bannar from './components/Home/Bannar/Bannar'
import Navbar from './components/Navbar/Navbar'
import Getstart from './components/Home/Getstart/Getstart';
const fetchSellar = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const sellarPromies = fetchSellar();
  const [selectedSellar, setSelectedSellar] = useState([]);
  return (
    <>
      <Navbar selectedSellar={selectedSellar} />
      <Bannar />
      <Suspense fallback={
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>}>
        <Available sellarPromies={sellarPromies} selectedSellar={selectedSellar} setSelectedSellar={setSelectedSellar} />
      </Suspense>
      <Getstart />
    </>
  )
}

export default App
