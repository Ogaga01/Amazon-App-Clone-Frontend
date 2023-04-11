export const createNewProduct = async (
  token: string,
  name: string,
  price: number,
  description: string,
  photo: File | undefined
) => {
  const form = new FormData();
  form.append("name", name);
  form.append("price", price.toString());
  form.append("description", description);
  form.append("photo", JSON.stringify(photo));

  console.log(form);

  const response = await fetch(
    "https://amazon-clone-api-zq31.onrender.com/api/v1/products",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: form,
    }
  );
  const data = await response.json();
  console.log(data);
};
