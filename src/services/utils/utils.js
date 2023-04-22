export async function checkResponse(result) {
  if (result.ok) {
    return await result.json();
  } else {
    throw new Error(`Ошибка: ${result.status}`);
  }
}

export function countDropUniqID(array, property) {
  return array.reduce((acc, ingredient) => {
    if (acc[ingredient[property]]) {
      acc[ingredient[property]].count += 1;
    } else {
      acc[ingredient[property]] = { count: 1 };
    }
    return acc;
  }, {});
}
