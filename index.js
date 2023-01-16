export default ((global) => {
    /**
     * range function
     * @param {Number} start 
     * @param {Number} stop
     * @param {Number} step 
     * @returns {Generator}
     * @example
     * for(let i of range(10)){
     *    console.log(i);
     * }
     */
    global.range = function* (start, stop, step = 1){
        if(stop === undefined){
            stop = start;
            start = 0;
        }
        for(let i = start; i < stop; i += step){
            yield i;
        }
    }
})((0, eval)('this'))
