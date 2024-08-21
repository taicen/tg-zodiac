export const normalizedData = (data, dataJSON, lang) => {
  let horoscopes = [];
  for (const [key, value] of Object.entries(data)) {
    const item = dataJSON.horoscopes[lang !== "ru" ? "en" : lang][key];

    horoscopes.push({
      id: key,
      title: item.title,
      date: item.date,
      description: value,
      src: `/${key}.png`,
    });
  }

  return horoscopes;
};
