function likes(names){
    var arrLength = names.length;
    switch(arrLength){
        case 0:
            return "no one likes this"
        case 1:
            return names[0] + " likes this"
        case 2:
            return names[0] + " and " + names[1] + " like this"
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this"
        default:
            return names[0] + ", " + names[1] + " and " + (arrLength-2) + " others like this";
    }
}






// console.log(likes([]))
// console.log(likes(["Peter"]))
// console.log(likes(["Jacob", "Alex"]))
// console.log(likes(["Max", "John", "Mark"]))
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Max", "Max", "Max", "Max", "Max"]))