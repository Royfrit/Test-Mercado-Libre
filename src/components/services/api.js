import { filteredCollection } from "../utils/index";

export const searchItems = async (query) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/sites/MLA/search?q=${query}`);
    const data = await response.json();
    const resultsColecction = filteredCollection(data.results);
    const processedData = {
      author: {
        name: "Joseph",
        lastname: "Blanco"
      },
      categories: data.available_filters,
      items: resultsColecction,
    };
  
    return processedData;
  };
  
  export const getItemDetail = async (itemId) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/items/${itemId}`);
    const itemData = await response.json();
    const responseDescription = await fetch(`${process.env.REACT_APP_API_URL}/items/${itemId}/description`);
    const descriptionData = await responseDescription.json();
    const processedData = {
      author: {
        name: "Joseph",
        lastname: "Blanco"
      },
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: itemData.price,
          decimals: 0 
        },
        picture: itemData.thumbnail,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: descriptionData.plain_text
      }
    };
  
    return processedData;
  };
  