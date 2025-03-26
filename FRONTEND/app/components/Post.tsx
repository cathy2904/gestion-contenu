import React from 'react';
import { PostModel } from '../types';
import Link from 'next/link';

export default function Post({
  id,
  title,
  content,
  author,
  created_at,
  deletePost
}: PostModel & { deletePost: (id: number) => void }) {
  return (
    <tr>
      <td className='w-10 border border-slate-300 text-center'>{id}</td>
      <td className='border border-slate-300'>{title}</td>
      <td className='border border-slate-300'>{content}</td>
      <td className='border border-slate-300'>{author}</td>
      <td className='border border-slate-300 text-center'>{created_at}</td>
      <td className='w-52 border border-slate-300'>
        <span 
          onClick={() => deletePost(id)} 
          className='bg-red-500 p-2 inline-block text-white text-sm cursor-pointer'
        >
          Suppr
        </span>
        <Link 
          href={`/post/edit/${id}`} 
          className='bg-yellow-500 p-2 inline-block ml-3 text-white text-sm'
        >
          Modif
        </Link>
        <Link 
          href={`/post/read/${id}`} 
          className='bg-blue-500 p-2 inline-block ml-3 text-white text-sm'
        >
          Voir
        </Link>
      </td>
    </tr>
  );
}