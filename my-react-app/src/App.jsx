
import Student from "./Students.jsx";

function App() {
  return(
    <>
      <Student name = "SpongeBob" age = {30} isStudent = {true}/>
      <Student name = "Patrick" age = {34} isStudent = {false}/>
      <Student name = "Squidward" age = {40} isStudent = {false} />
      <Student name = "Sandy" age = {27} isStudent = {true} />
    </>
    
  );
}

export default App
