import { defaultValueCtx, Editor, editorViewOptionsCtx, rootCtx } from '@milkdown/kit/core'
import { commonmark } from '@milkdown/kit/preset/commonmark'
import { gfm } from '@milkdown/kit/preset/gfm'
import '@milkdown/kit/prose/tables/style/tables.css'
import '@milkdown/kit/prose/view/style/prosemirror.css'
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react'

interface MarkdownRendererProps {
  markdown: string
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <MilkdownProvider key={markdown}>
      <ReadonlyMilkdown markdown={markdown} />
    </MilkdownProvider>
  )
}

function ReadonlyMilkdown({ markdown }: MarkdownRendererProps) {
  useEditor(
    (root) =>
      Editor.make()
        .config((ctx) => {
          ctx.set(rootCtx, root)
          ctx.set(defaultValueCtx, markdown)
          ctx.set(editorViewOptionsCtx, {
            attributes: {
              class: 'milkdown-prose',
              spellcheck: 'false',
            },
            editable: () => false,
          })
        })
        .use(commonmark)
        .use(gfm),
    [markdown],
  )

  return <Milkdown />
}
