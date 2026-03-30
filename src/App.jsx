
import { Suspense } from 'react';
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
  return (
    <>
      <Navbar />
      <Bannar />
      <Suspense>
        <Available sellarPromies={sellarPromies} />
      </Suspense>
      <Getstart/>
    </>
  )
}

export default App
