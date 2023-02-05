import { db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

export const create_post = async (post) => {
  try {
    await setDoc(doc(db, "posts", post.id), post);
  } catch (error) {
    throw error;
  }
};
export const edit_post = async (postId, data) => {
  try {
    await updateDoc(doc(db, "posts", postId), data);
  } catch (error) {
    throw error;
  }
};

export const fetch_posts = async () => {
  try {
    const postRef = collection(db, "posts");
    const postQuey = query(postRef, orderBy("createdAt", "desc"), limit(4));
    const postData = await getDocs(postQuey);
    const posts = postData.docs.map((post) => {
      if (post.exists) {
        return post.data();
      }
      return [];
    });
    return posts;
  } catch (error) {
    throw error;
  }
};

export const fetch_posts_per_category = async (category) => {
  try {
    const postRef = collection(db, "posts");
    const postQuey = query(
      postRef,
      where("category", "==", category),
      orderBy("createdAt", "desc"),
      limit(4)
    );
    const postData = await getDocs(postQuey);
    const posts = postData.docs.map((post) => {
      if (post.exists) {
        return post.data();
      }
      return [];
    });
    return posts;
  } catch (error) {
    throw error;
  }
};

export const update_post = async (postId, data) => {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, data);
  } catch (error) {
    throw error;
  }
};

export const fetch_post_by_id = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    const postData = await getDoc(postRef);
    if (postData.exists()) {
      return postData.data();
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const fetch_Posts_per_country = async (country) => {
  const postsRef = collection(db, "posts");
  const qu = query(
    postsRef,
    where("country", "==", country),
    orderBy("createdAt", "desc")
  );
  const postData = await getDocs(qu);
  if (country === null) {
    return [];
  } else {
    return postData.docs.map((post) => post.data());
  }
};

export const fetch_posts_per_slug = async (slug) => {
  try {
    const postRef = collection(db, "posts");
    const postData = query(postRef, where("slug", "==", slug));
    const postSnapshot = await getDocs(postData);
    const post = postSnapshot.docs[0];
    if (post.exists()) {
      return post.data();
    }
    return null;
  } catch (error) {
    throw error;
  }
};
