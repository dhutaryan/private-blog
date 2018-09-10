import { firestore } from 'firebase';

export interface Post {
  title: string;
  description: string;
  createdAt: firestore.Timestamp;
  updatedAt: firestore.Timestamp;
  ownerId: string;
}

export interface PostId extends Post {
  id: string;
}
