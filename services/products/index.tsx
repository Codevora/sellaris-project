export const getData = async (url: string) => {
 const res = await fetch(url, {
  cache: "no-store",
  next: {
   tags: ["products"],
   revalidate: 30,
  },
 });

 if (!res.ok) {
  throw new Error("Failed to Fetch Data!");
 }

 return res.json();
};
