import { json } from '@sveltejs/kit';
import { comments} from '$lib/comments';

export function GET(requestEvent) {
  const {params} = requestEvent;
  const {commentId}=  params;
  const comment= comments.find((c)=> c.id === parseInt(commentId));

  return json(comment,{status: 200});
}

export async function PATCH( requestEvent ) {
  const { params,request } = requestEvent;
  const { commentId } = params;
  const {text} = await request.json();
  const comment = comments.find((c)=> c.id === parseInt(commentId));
  comment.text = text;
  return json(comment,{status:200});
}

export async function DELETE(requestEvent) {  
  const { params } = requestEvent;
  const { commentId } = params;
  comments.splice(comments.findIndex((c)=> c.id === parseInt(commentId)),1);
  return json({message: 'Comment deleted'});
}