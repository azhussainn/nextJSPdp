export const getApiData = (rawData) => {
    const finalData = {};
    Object.keys(rawData).forEach((key) => {
      const value = rawData[key];
      if (value !== null) {
        if (key === "metal_carat") {
          finalData["metal_carat"] = value.split("_")[0];
        } else {
          finalData[key] = value;
        }
      } else {
        if (key === "size") finalData["size"] = null;
      }
    });
    return finalData;
};

export const customizeApi = async (id, data) => {
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const url = `http://127.0.0.1:8000/api/rest/v2/products/rings/${id}/customize/`;
  try {
    const res = await fetch(url, config);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getInitialCategoryData = (basic_details) => {
  return {
    diamond_color:
      basic_details.color_list && basic_details.color_list.length > 0
        ? basic_details.color_list[0]
        : null,

    diamond_clarity:
      basic_details.clarity_list && basic_details.clarity_list.length > 0
        ? basic_details.clarity_list[0]
        : null,

    mount_size:
      basic_details.mount_size_list && basic_details.mount_size_list.length > 0
        ? basic_details.mount_size_list[0]
        : null,

    metal_carat:
      basic_details.metal_carat_list &&
      basic_details.metal_carat_list.length > 0
        ? basic_details.metal_carat_list[0]
        : null,

    diamond_type:
      basic_details.diamond_type_list &&
      basic_details.diamond_type_list.length > 0
        ? basic_details.diamond_type_list[0]
        : null,

    size: null,
  };
};
