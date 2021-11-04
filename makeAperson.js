const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName = function() {
      return firstAndLast.split(" ")[0]
    }
  
    this.getLastName = function() {
      return firstAndLast.split(" ")[1]
    }
  
    this.getFullName = function() {
      return firstAndLast
    }
  
    this.setFirstName = function(name) {
      firstAndLast = name+" "+firstAndLast.split(" ")[1]
    }
  
    this.setLastName = function(name) {
      firstAndLast = firstAndLast.split(" ")[0]+" "+name
    }
  
    this.setFullName = function(name) {
      firstAndLast = name
    }
  }
  
  const bob = new Person('Bob Ross')
  bob.getFullName();