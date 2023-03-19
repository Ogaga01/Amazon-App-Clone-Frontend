export const createNewProduct = async (
  token: string,
  name: string,
  price: number,
  description: string,
  photo: string,
) => {
  const response = await fetch(
    "https://amazon-clone-api-zq31.onrender.com/api/v1/products",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        price,
        description,
        photo
      }),
    }
  );
  const data = await response.json();
  console.log(data);
};