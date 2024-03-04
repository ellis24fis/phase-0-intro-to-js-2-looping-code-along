// Code your solutions in this file
const friends = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards){
    //Create a list here; this is the value you will return.
    var list = [];
    //It starts as an empty list because the values are all appended to it in the for loop.

    //You want to count down for this assignment, so you want to start from the size (or length) of the list and go down until you reach 0.
    //Depending on how you implement this, you may need to adjust the c variable when using it for indexing;
    //since cards.length is the number of variables in the list and the list is zero-indexed, you'll be printing numbers ranging from 1 to length, but the indices will range from 0 to length-1, 
    for (let c = 0; c<friends.length; c++)
    {
        console.log(c);
        //Make the message string here and appen it to the list
      list.push(`Thank you, ${friends[c]}, for the wonderful surprise gift!`);
    }
    //Instead of returning cards, return the variable you made as a new list and appended to.
    return list;
}
writeCards(cards);
function countDown(num){
    for (let c = num; c >= 0;)
    {
        console.log(c--);
    }
    return;
}
countDown(c);