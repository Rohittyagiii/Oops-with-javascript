class User{
    static id = 1;
    constructor(name,age,income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }



    
    // static compareByAge(user1,user2){
    //     return user1.age-user2.age;
    // }

    // static compareByIncome(user1,user2){
    //     return user1.income-user2.income;
    // }

}


const user1 = new User("Rohit",20,4000);
const user2 = new User("Akash",24,6000);
const user3 = new User("Chotu",21,8002);

// const users = [user1,user2,user3];
// // users.sort(User.compareByAge)
// users.sort(User.compareByIncome)


console.log(user1);
console.log(user2

);
console.log(user3);
