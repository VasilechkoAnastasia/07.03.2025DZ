import logo from './logo.svg';
import './App.css';
import { User } from './Components/task1';
import { UserData } from './Components/task2';
import { UserData2 } from './Components/task3';
import { UserEf } from './Components/task4Ef';
import { MyTimer } from './Components/Timer';
import { Card } from './Components/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      {/* <User/> */}
      {/* <UserData/> */}
      {/* <UserData2/> */}

      {/* <UserEf/> */}
      {/* <MyTimer/> */}

      <Card name="Basic" price="2.99" text1="✅ Sample text here" text2="❌ Other text here" text3="❌ Text space here" text4="❌ Does print space"></Card>
      <Card name="Standart" price="5.00" text1="✅ Sample text here" text2= "✅ Other text here" text3="✅ Text space here" text4="❌ Does print space" ></Card>
      <Card name="Premium" price="0.99" text1="✅ Sample text here" text2="✅ Other text here" text3="✅ Text space here" text4="✅ Does print space" ></Card>

      </header>
    </div>
  );
}

export default App;
