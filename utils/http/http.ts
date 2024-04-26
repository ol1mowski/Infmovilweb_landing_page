
import { collection, getDocs } from "firebase/firestore";

import { QueryClient } from "@tanstack/react-query";

import { db } from "@/config/firebase";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

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



export const getImageUrl = async (path: string) => {
  try {
    const storage = getStorage();
    const imagesFolder = path; // image folder path
    const folderRef = ref(storage, imagesFolder);

    const files = await listAll(folderRef);

    const imageUrls = await Promise.all(
      files.items.map(async (fileRef) => {
        return await getDownloadURL(fileRef);
      })
    );

    return imageUrls;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
