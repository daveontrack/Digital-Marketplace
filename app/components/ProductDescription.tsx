"use client";

import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function ProductDescription({ content }: { content: JSONContent }) {
  const editor = useEditor({
    editable: false,// Read-only mode (user cannot edit)
    extensions: [StarterKit],
    content: content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base",
      },
    },
  });

  if (!editor) {
    return null;
  }
  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}
