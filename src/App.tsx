import './App.css'
import { Button } from './components/Button'

function handleClick(name: string, age: number) {
  console.log(`Me chama ${name} e tenho ${age} anos`)
}

function App() {
  return (
    <div className="App">
      {/* Utiliza os valores padrão */}
      <Button onClick={() => handleClick('Leandro Lopes', 27)}>Button</Button>

      {/* variant secondary */}
      <Button
        variant="secondary"
        onClick={() => handleClick('Leandro Lopes', 27)}
      >
        Button
      </Button>

      {/* variant outline */}
      <Button
        variant="outline"
        onClick={() => handleClick('Leandro Lopes', 27)}
      >
        Button
      </Button>

      {/* size small */}
      <Button size="small" onClick={() => handleClick('Leandro Lopes', 27)}>
        Button
      </Button>

      {/* size medium */}
      <Button
        variant="secondary"
        size="medium"
        onClick={() => handleClick('Leandro Lopes', 27)}
      >
        Button
      </Button>

      {/* full width */}
      <Button fullWidth onClick={() => handleClick('Leandro Lopes', 27)}>
        Button
      </Button>
    </div>
  )
}

export default App
