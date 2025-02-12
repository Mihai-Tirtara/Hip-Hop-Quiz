import Header from './components/Header'
import Board from './components/Board'
import background from './assets/background.jpg'
function App() {
  console.log(background)

  return (
    <div className="min-h-screen w-full bg-[url('/src/assets/background.jpg')] bg-fixed bg-cover bg-center ">
    <Header/>
    <Board/>
    </div>
  )
}

export default App
