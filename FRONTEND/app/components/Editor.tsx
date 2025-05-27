'use client'
import { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'

interface Props {
  content: string
  onUpdate: (html: string) => void
}

export default function Editor({ content, onUpdate }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Image,
      Heading.configure({ levels: [1, 2, 3] }),
      Bold,
      BulletList,
      ListItem,
    ],
    content,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML())
    },
  })

  // 🔁 Forcer la mise à jour du contenu si `content` change
  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  if (!editor) return null

  return (
    <div className="border p-4 rounded">
      <div className="mb-2 space-x-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>Gras</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>Liste</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>Titre 1</button>
        <button onClick={() => {
          const url = prompt("URL du lien :")
          if (url) editor.chain().focus().setLink({ href: url }).run()
        }}>Lien</button>
        <button onClick={() => {
          const url = prompt("URL de l'image :")
          if (url) editor.chain().focus().setImage({ src: url }).run()
        }}>Image</button>
      </div>

      <EditorContent editor={editor} className="min-h-[200px] border p-2 rounded bg-black" />
    </div>
  )
}
