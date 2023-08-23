






function removeEveryOther(arr){
    const filteredarray = arr.filter((el,index)=>{
        return index % 2 !==1; //удаляем по идексу (четный идекс- каждый второе значение)
    })
    return filteredarray
}