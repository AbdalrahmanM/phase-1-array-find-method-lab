// code your solution here
function superbowlWin(record){
    let results=record.find(function(element){
        return element.result==='W'
    })
    if(results){
        return results.year
    }
    else
    {
        return undefined
    }
}