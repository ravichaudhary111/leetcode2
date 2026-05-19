/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies=new Array(ratings.length).fill(1)
   let n=ratings.length
    for( i=1;i<n;i++){
       if((ratings[i]>ratings[i-1] )){
        candies[i]=candies[i-1]+1;
       }
    }
    for( i=n-2;i>=0;i--){
        if((ratings[i+1]<ratings[i] ) && (candies[i+1]>=candies[i] )){
            candies[i]=candies[i+1]+1;
        }
     } 
       const totalCandies= candies.reduce((total,val)=>{
        return total+val
    },0)
       return totalCandies;

};