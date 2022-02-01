import { Fragment } from 'react'

import './ToolsBox.css'

interface Tool {
  src: string
  name: string
}

export interface ToolsBoxProps {
  // informa que receberemos um array de Tool
  tools: Tool[]
}

export const ToolsBox = ({ tools }: ToolsBoxProps) => {
  const renderTools = (tool: Tool) => {
    return (
      <Fragment key={`tool-${tool.name}`}>
        <div className="tool">
          <img src={tool.src} alt={tool.name} />
          <p>{tool.name}</p>
        </div>
      </Fragment>
    )
  }

  return (
    <div className="tool-container">
      <div className="tool-content">
        <div>{tools.slice(0, 6).map(renderTools)}</div>
        <div>{tools.slice(6, 12).map(renderTools)}</div>
      </div>
    </div>
  )
}
