import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { createEditor, BaseEditor, Descendant } from '../../../packages/slate'
import { u } from 'unist-builder'
import {
  Slate,
  Editable,
  withReact,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
} from '../../../packages/slate-react'

type CustomElement = { type: string; children: Descendant[] }
type CustomText = { type: 'text'; value: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

function renderElement({ element, attributes, children }: RenderElementProps) {
  switch (element.type) {
    case 'document':
      return <main {...attributes}>{children}</main>
    case 'paragraph':
      return <p {...attributes}>{children}</p>
    default:
      return <div {...attributes}>{children}</div>
  }
}

function renderLeaf({ leaf, attributes, children }: RenderLeafProps) {
  if (leaf.type === 'text') {
    return <span {...attributes}>{children}</span>
  }
  return children
}

const App = () => {
  // Create a Slate editor object that won't change across renders.
  const editor = useMemo(() => withReact(createEditor()), [])

  // Keep track of state for the value of the editor.
  const [value, setValue] = useState<Descendant[]>([
    u('document', [
      u('paragraph', [u('text', 'leaf 1')]),
      u('paragraph', [u('text', 'leaf 2')]),
      u('paragraph', [u('text', 'leaf 3')]),
    ]),
  ])

  return (
    // Add the editable component inside the context.
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} />
    </Slate>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
