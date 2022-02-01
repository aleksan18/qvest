
import './App.css';
import Footer from './components/Footer/Footer';
import Header  from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import TaskProvider from './context/TaskProvider';
function App() {

    return (
    
      <div className="App">
          <TaskProvider>
          <Header></Header>
          <Tasks>
          </Tasks>
          <Footer></Footer>
          </TaskProvider>
      </div>
    );
   
}

export default App;
