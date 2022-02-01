import './App.css'
import { ToolsBox, ToolsBoxProps } from './components/ToolsBox'

const tools = {
  tools: [
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2F6ECm7pvnSIe3hGdVUy2f&w=48&q=75',
      name: 'React',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2Fmsa7RKJyTKaJYtFy5EbE&w=48&q=75',
      name: 'NextJS',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2Fw1laiqUSzqcQbUwUikcA&w=48&q=75',
      name: 'TypeScript',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCLrqVkjLQEK2ZtAO81Ny&w=48&q=75',
      name: 'Storybook',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2Fsm2hQvPQgugVjL8FHcPl&w=48&q=75',
      name: 'Jest',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FQFiOgFCjQra5586AV85q&w=48&q=75',
      name: 'Testing Library',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FFDjurBksSpeB31bCFZER&w=48&q=75',
      name: 'Node',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2F7k4CzuPSSNiFNuyHXidd&w=48&q=75',
      name: 'GraphQL',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FlmuBJk6Q1ei6FnjthUTp&w=48&q=75',
      name: 'HTML 5',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FC3L61gOcTJeR9fOoOPRx&w=48&q=75',
      name: 'CSS 3',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FKIGeEYfETXKfvl4QsEIV&w=48&q=75',
      name: 'JavaScript',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FmoZhqEbpQRWkY4VE0x2z&w=48&q=75',
      name: 'Git',
    },
  ],
} as ToolsBoxProps

function App() {
  return (
    <div className="App">
      <h1>Minha caixa de ferramentas</h1>
      <ToolsBox {...tools} />
    </div>
  )
}

export default App
