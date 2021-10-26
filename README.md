# GraphQl

Execute the following command to install all dependencies:
```bash
npm install
```

Execute the following command to run the server:
```bash
npm start
```

Some examples of queries:
```graphql
query {
  hello
  actualTime
  loggedUser {
    id name email age salary vip
  }
  featuredProduct {
    id name price priceWithDiscount
  }
  numbersLottery
  users {
    id name email age salary
    profile {
      name
    }
  }
  user(id:1) {
    ...completedUser
  }
  profiles {
    id name
  }
  profile(id:1) {
    id name
  }
}

fragment completedUser on User {
  id name age email salary vip status
  profile {
    name
  }
}
``` 