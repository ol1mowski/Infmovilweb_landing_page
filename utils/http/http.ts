
import { collection, getDocs } from "firebase/firestore";

import { QueryClient } from "@tanstack/react-query";

import { db } from "@/config/firebase";

export const queryClient = new QueryClient();

async function fetchData(collectionName: string) {
  const collectionRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    throw error;
  }
}

export function fetchElements(element: string) {
  const collectionName = element;
  return fetchData(collectionName);
}
