export const createNewProduct = async (
  token: string,
  name: string,
  price: number,
  description: string
  // photo: File | undefined
) => {
  // const form = new FormData()
  // form.append("name", name)
  // form.append("price", price.toString())
  // form.append("description", description)
  // form.append("photo", JSON.stringify(photo))

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
        // photo,
      }),
    }
  );
  const data = await response.json();
  // const result = data.data.data;
  console.log(data);
  // const picture = JSON.parse(result.photo);
  // console.log(picture);
};
