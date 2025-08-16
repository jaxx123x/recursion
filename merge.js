



function mergeSort(array = []) {

    const thisArray = array;
    let sortedArray = [];
    

    function sort(target = []) {

        if (target.length === 1) {
            const newArr = [target[0]];
            sortedArray.push(newArr);
            return;
        }

        const mid = Math.floor(target.length / 2);


        let firstArray = target.slice(0, mid);
        let secondArray = target.slice(mid);

        sort(firstArray);
        sort(secondArray);
    }

    sort(thisArray);

    function mergeTwo(first, second) {
        const newArray = [];
        let i = 0;
        let k = 0;

        while (i < first.length && k < second.length) {
            if (first[i] < second[k]) {
                newArray.push(first[i]);
                i++;
            }
            else {
                newArray.push(second[k]);
                k++;
            }
        }

        while (i < first.length) newArray.push(first[i++]);
        while (k < second.length) newArray.push(second[k++]);

        return newArray;

        
    }


    function merge(target) {
        let mergedArray = [];

        if (target.length === 1) {
            return target[0];
        }

        for (let i = 0; i < target.length; i += 2) {
            const firstArray = target[i];
            const secondArray = target[i + 1];
            if (secondArray === undefined) {
                mergedArray.push(firstArray);
            }
            else {
                mergedArray.push(mergeTwo(firstArray, secondArray));
            }
        }

        return merge(mergedArray);
    }

    return merge(sortedArray);
    






}


console.log(mergeSort([6, 2, 1, 7, 4, 8, 2]));

