const indexToValue = (array?: Array<any>, index?: {[key: string]: number}, key?: string) => {
    if(!array || !index || !key) return undefined;
    console.log(key, index, array)
    console.log(index[key])
    console.log(array[index[key]])
    return array[index[key]];
}

export default indexToValue;