const SkillsFetchAPI = async (token) => {
  const request = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/sportschools/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        "Accept-language": "en",
      },
    }
  );
  return await request.json();
};

export default SkillsFetchAPI;
