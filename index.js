// Arrays:

// Immutably add an item to the end of an array
export function addToEnd(array, item) {
  const newArr = [...array, item];
  return newArr;
}

//Immutably add an item to the beginning of an array
export function addToBeginning(array, item) {
  const newArr = [item, ...array];
  return newArr;
}

// Immutably insert an item at a specific position/index within an array
export function insertItem(array, item, index) {
  const newArr = [...array.slice(0, index), item, ...array.slice(index)];
  return newArr;
}

// Immutably replace an item at a specific position/index within an array
export function replaceItem(array, item, index) {
  const newArr = [...array.slice(0, index), item, ...array.slice(index + 1)];
  return newArr;
}

// Immutably remove an item at a specific position/index within an array
export function removeItem(array, index) {
  // const newArr = [...array.slice(0, index), ...array.slice((index+1))]
  const newArr = [...array];
  // const newArr = [...array.splice(index, 1)]
  newArr.splice(index, 1);
  return newArr;
}

// //Objects:

// Immutably update the object so that the value under the "name" property becomes the new name
// For example calling:
//     updateName({ name: "Abe" }, "Barbara")
// should give back:
//     { name: "Barbara"}
export function updateName(object, newName) {
    const newObject = {...object, name: newName}
    return newObject
}

// // Immutably update the object so that the value under the "needsACupOfTea" property becomes the opposite of what it was.
// // Any other properties in the object should be maintained.
// // For example calling:
// //     toggleTeaStatus({ name: "Abe", needsACupOfTea: false })
// // should give back:
// //     { name: "Abe", needsACupOfTea: true }
 export function toggleTeaStatus(object) {
  const teaStatus = { ...object, needsACupOfTea: !object.needsACupOfTea }
  return teaStatus
 }

// // Combo Time!!

// // Immutably update the array as well as the object at the given position/index within the array, so that the value under the "completed" property becomes the opposite of what it was.
// // Any other properties in the object should be maintained.
// // For example calling:
// //    toggleListItemCompleted([{ task: "Cooking", completed: true }, { task: "Walking", completed: false }], 1)
// // should give back:
// //    [{ task: "Cooking", completed: true }, { task: "Walking", completed: true }]
export function toggleListItemCompleted(array, index) {
  const newArray = [...array.slice(0,index),{...array[index], completed: !array[index].completed}, ...array.slice(index + 1)]
  return newArray
}

//finito :)