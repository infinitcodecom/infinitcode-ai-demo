let items = [
  { id: 1, name: 'Sample Item', description: 'This is a sample item' }
];

module.exports = {
  getAllItems: () => {
    return items;
  },

  createItem: (itemData) => {
    const newItem = {
      id: Date.now(),
      ...itemData
    };
    items.push(newItem);
    return newItem;
  },
};