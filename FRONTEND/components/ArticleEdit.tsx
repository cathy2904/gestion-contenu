"use client";

import { ChangeEvent, useState } from "react";
import { Article } from "@/type/article";
import { editArticleAction } from "@/app/articles/action";

interface ArticleEditFormProps {
  article: Article;
}

export default function ArticleEditForm(props: ArticleEditFormProps) {
  const [article, setArticle] = useState(props.article);

  // Handle Change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticle({...article, [e.target.name]: e.target.value});
  }

  return (
    <form action={editArticleAction.bind(null, article)}>
      <div className="flex flex-col gap-3 max-w-xl mx-auto bg-slate-300 p-5 rounded">
        <h3 className="font-bold">Edit article</h3>

        <div className="flex gap-5">
          <label htmlFor="name">Titre</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={article.title}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={article.content}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="author"
            id="author"
            defaultValue={article.author}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-full"
          />
        </div>

        {/* <div className="flex gap-4">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            defaultValue={article.avatar}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-full"
          />
        </div> */}

        <button type="submit" className="rounded bg-green-500 p-2 text-white font-bold">Update</button>
      </div>
    </form>
  );
}