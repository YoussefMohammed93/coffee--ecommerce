export const fetchProducts = async (page = 1) => {
  try {
    const response = await fetch(
      `https://bon-elbasha.up.railway.app/product/get/?page=${page}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};

export async function fetchProductById(id) {
  const response = await fetch(
    `https://bon-elbasha.up.railway.app/product/get/${id}/`
  );
  return response.json();
}
