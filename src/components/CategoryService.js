export const categories = [
    { _id: 14, name: 'suzuki' },
    { _id: 73, name: 'honda' },
    { _id: 12, name: 'vinfast' },
    { _id: 6, name: 'porsche' },
    { _id: 7, name: 'bugatti' }
  ];
  
export function getCategories() {
  return categories.filter((g) => g);
}