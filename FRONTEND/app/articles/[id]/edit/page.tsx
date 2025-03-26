// import ArticleEditForm from "@/components/ArticleEdit";
// import dbClient from "@/lib/mongodb";
// import { Article } from "@/type/article";
// import { ObjectId } from "mongodb";
// import { notFound } from "next/navigation";

// interface EditArticlePageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function EditArticlePage(props: EditArticlePageProps) {
//   const article = await dbClient
//     .db("next-articles")
//     .collection<Article>("articles")
//     .findOne({ _id: new ObjectId(props.params.id) });

//   console.log(article);

//   if (!article) {
//     return notFound();
//   }

//   return (
//     <div>
//       <ArticleEditForm article={article} />
//     </div>
//   );
// }