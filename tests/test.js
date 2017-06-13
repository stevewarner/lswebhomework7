var exercises = require('../exercises');

describe('getBiggest(x, y)', function() {
  it('should return x if it is larger than y', function() {
    expect(exercises.getBiggest(10, 5)).toBe(10);
  });
  it('should return y if it is larger than x', function() {
    expect(exercises.getBiggest(50, 100)).toBe(100);
  });
  it('should return either one if they are the same', function() {
    expect(exercises.getBiggest(1000, 1000)).toBe(1000);
  });
});

describe('greeting(language)', function() {
  it('should return \'Guten Tag!\' for German', function() {
    expect(exercises.greeting('German')).toBe('Guten Tag!');
  });
  it('should return \'Hola!\' for Spanish', function() {
    expect(exercises.greeting('Spanish')).toBe('Hola!');
  });
  it('should return \'Hello!\' for English', function() {
    expect(exercises.greeting('English')).toBe('Hello!');
  });
  it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', function() {
    expect(exercises.greeting('French')).toBe('Hello!');
    expect(exercises.greeting()).toBe('Hello!');
  });
});

describe('isTenOrFive(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(exercises.isTenOrFive(10)).toBe(true);
    expect(exercises.isTenOrFive(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(exercises.isTenOrFive(11)).toBe(false);
    expect(exercises.isTenOrFive(6)).toBe(false);
    expect(exercises.isTenOrFive(0)).toBe(false);
    expect(exercises.isTenOrFive(5.01)).toBe(false);
  });
});

describe('isInRange(num)', function() {
  it('should return true if num is inside range', function() {
    expect(exercises.isInRange(35.5)).toBe(true);
    expect(exercises.isInRange(40)).toBe(true);
    expect(exercises.isInRange(49)).toBe(true);
    expect(exercises.isInRange(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(exercises.isInRange(10)).toBe(false);
    expect(exercises.isInRange(20)).toBe(false);
    expect(exercises.isInRange(50)).toBe(false);
    expect(exercises.isInRange(100)).toBe(false);
  });
});

describe('isInteger(num)', function() {
  it('should return true if num is 5', function() {
    expect(exercises.isInteger(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(exercises.isInteger(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(exercises.isInteger(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(exercises.isInteger(0)).toBe(true);
  });
});

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(exercises.fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(exercises.fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(exercises.fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(exercises.fizzBuzz(4)).toBe(4);
  });
});

describe('isPrime(num)', function() {
  it('should return true if num is prime', function() {
    expect(exercises.isPrime(7)).toBe(true);
    expect(exercises.isPrime(97)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(exercises.isPrime(10)).toBe(false);
    expect(exercises.isPrime(100)).toBe(false);
    expect(exercises.isPrime(0)).toBe(false);
    expect(exercises.isPrime(1)).toBe(false);
  });
});

describe('returnFirst(arr)', function() {
  it('should return the first item in the array', function() {
    expect(exercises.returnFirst([10, 10, 16, 12])).toBe(10);
    expect(exercises.returnFirst([97, 100, 80, 55, 72, 94])).toBe(97);
  });
});

describe('returnLast(arr)', function() {
  it('should return the last item in the array', function() {
    expect(exercises.returnLast([10, 10, 16, 12])).toBe(12);
    expect(exercises.returnLast([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(exercises.returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('getArrayLength(arr)', function() {
  it('should return the length of the array', function() {
    expect(exercises.getArrayLength([10, 10, 16, 12])).toBe(4);
    expect(exercises.getArrayLength([97, 100, 80, 55, 72, 94])).toBe(6);
    expect(exercises.getArrayLength(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
  });
});

describe('incrementByOne(arr)', function() {
  it('should return the array with each value incremented by one', function() {
    expect(exercises.incrementByOne([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(exercises.incrementByOne([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(exercises.incrementByOne([])).toEqual([]);
  });
});

describe('addItemToArray(arr, item)', function() {
  it('should return the array with the item added to the end', function() {
    expect(exercises.addItemToArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(exercises.addItemToArray([97, 100, 80, 55, 72, 94], 'Hello')).toEqual([97, 100, 80, 55, 72, 94, 'Hello']);
    expect(exercises.addItemToArray([], true)).toEqual([true]);
  });
});

describe('addItemToFront(arr, item)', function() {
  it('should return the array with the item added to the front', function() {
    expect(exercises.addItemToFront([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
    expect(exercises.addItemToFront([97, 100, 80, 55, 72, 94], 'Hello')).toEqual(['Hello', 97, 100, 80, 55, 72, 94]);
    expect(exercises.addItemToFront([], true)).toEqual([true]);
  });
});

describe('wordsToSentence(words)', function() {
  it('should return a string that has all of the words from the array separated by spaces', function() {
    expect(exercises.wordsToSentence(['LambdaSchool', 'JavaScript', 'Class'])).toBe('LambdaSchool JavaScript Class');
    expect(exercises.wordsToSentence(['LambdaSchool'])).toBe('LambdaSchool');
  });
});

describe('contains(arr, item)', function() {
  it('should return true if the array contains the item', function() {
    expect(exercises.contains([10, 10, 16, 12], 10)).toBe(true);
    expect(exercises.contains([97, 100, 80, 55, 72, 94], 'Hello')).toBe(false);
    expect(exercises.contains([], true)).toBe(false);
  });
});

describe('addNumbers(numbers)', function() {
  it('should add all of the numbers in the array together and return the sum', function() {
    expect(exercises.addNumbers([10, 10, 16])).toBe(36);
    expect(exercises.addNumbers([97, 100])).toBe(197);
    expect(exercises.addNumbers([0])).toBe(0);
  });
});

describe('averageTestScore(testScores)', function() {
  it('should return the average test score', function() {
    expect(exercises.averageTestScore([10, 10, 16, 12])).toBe(12);
    expect(exercises.averageTestScore([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('largestNumber(numbers)', function() {
  it('should return the largest number', function() {
    expect(exercises.largestNumber([10, 10, 16, 12])).toBe(16);
    expect(exercises.largestNumber([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(exercises.largestNumber([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

describe('makeCat(name, age)', function() {
  it('should create a new cat with the name and age properties set', function() {
    expect(exercises.makeCat('Snowball', 1).name).toBe('Snowball');
    expect(exercises.makeCat('Snowball', 1).age).toBe(1);
    expect(exercises.makeCat('Snowball II', 5).name).toBe('Snowball II');
    expect(exercises.makeCat('Snowball II', 5).age).toBe(5);
  });
  it('should add a method called meow to the new cat object', function() {
    expect(exercises.makeCat('Snowball III', 2).meow()).toBe('Meow!');
  });
});

describe('addProperty(object, property)', function() {
  it('should add the property to the object with a value of null', function() {
    var object = {
      x: 1,
      y: 2
    };
    var updatedObject = {
      x: 1,
      y: 2,
      z: null
    };
    expect(exercises.addProperty(object, 'z')).toEqual(updatedObject);
  });
});

describe('invokeMethod(object, method)', function() {
  it('should invoke the method on the object', function() {
    var object = {
      x: 0,
      incrementX: function() {
        this.x++;
      }
    }
    exercises.invokeMethod(object, 'incrementX');
    expect(object.x).toBe(1);
  });
});

describe('multiplyMysteryNumberByFive(mysteryNumberObject)', function() {
  it('should return the mysteryNumber property multiplied by five', function() {
    var mysteryBox = {
      mysteryNumber: 999
    };
    expect(exercises.multiplyMysteryNumberByFive(mysteryBox)).toBe(4995);
    mysteryBox.mysteryNumber = -5
    expect(exercises.multiplyMysteryNumberByFive(mysteryBox)).toBe(-25);
  });
});

describe('deleteProperty(object, property)', function() {
  it('should delete the property from the object', function() {
    var updatedObject = {
      x: 1,
      y: 2
    };
    var object = {
      x: 1,
      y: 2,
      z: null
    };
    expect(exercises.deleteProperty(object, 'z')).toEqual(updatedObject);
  });
});

describe('newUser(name, email, password)', function() {
  it('should return a new user object with a name, email, and password property that match the arguments', function() {
    var user = {
      name: 'Ben',
      email: 'ben@lambdaschool.com',
      password: 'correcthorsebatterystaple'
    };
    expect(exercises.newUser(user.name, user.email, user.password)).toEqual(user);
    var user = {
      name: 'Austen',
      email: 'austen@lambdaschool.com',
      password: 'password'
    };
    expect(exercises.newUser(user.name, user.email, user.password)).toEqual(user);
  });
});

describe('hasEmail(user)', function() {
  it('should return true if the user object has a value for its email property', function() {
    expect(exercises.hasEmail({ username: 'SunJieMing', email: 'ben@lambdaschool.com' })).toEqual(true);
    expect(exercises.hasEmail({ username: 'Austen', email: '' })).toEqual(false);
    expect(exercises.hasEmail({ username: 'Ryan' })).toEqual(false);
  });
});

describe('hasProperty(object, property)', function() {
  it('should return true if the object has the property that is passed in', function() {
    var obj = {
      x: true
    };
    expect(exercises.hasProperty(obj, 'x')).toEqual(true);
    expect(exercises.hasProperty(obj, 'y')).toEqual(false);
  });
});

describe('verifyPassword(user, password)', function() {
  it('should return true if passwords match', function() {
    var user = {
      password: 'I love js!'
    };
    var password = 'I love js!';
    expect(exercises.verifyPassword(user, password)).toBe(true);
  });
  it('should return false if passwords do not match', function() {
    var user = {
      password: 'I love js!'
    };
    var password = 'Hack this guy!';
    expect(exercises.verifyPassword(user, password)).toBe(false);
  });
});

describe('updatePassword(user, password)', function() {
  it('should return the user object with the updated password', function() {
    var user = {
      password: 'I love js!'
    };
    var password = 'I love js even more!';
    expect(exercises.updatePassword(user, password).password).toBe(password);
  });
});

describe('addFriend(user, newFriend)', function() {
  it('should add a new friend to the end of the friends array property', function() {
    var user = {
      friends: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young']
    };
    var newFriend = 'Shay';
    expect(exercises.addFriend(user, 'Shay').friends.pop()).toBe('Shay');
  });
});

describe('setUsersToPremium(users)', function() {
  it('should return the users array with each user\'s isPremium property set to true', function() {
    var users = [
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
      { isPremium: false }, 
    ];
    var updatedUsers = [
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
      { isPremium: true }, 
    ];
    expect(exercises.setUsersToPremium(users)).toEqual(updatedUsers);
  });
});

describe('sumUserPostLikes(user)', function() {
  it('should return the sum of likes for all user posts', function() {
    var user = {
      username: 'SunJieMing',
      password: 'JavaScript is awesome!',
      posts: [
        {
          id: '1',
          title: 'JS adventures!',
          likes: 10
        },
        {
          id: '2',
          title: 'LambdaSchool forever!',
          likes: 100
        },
        {
          id: '3',
          title: 'What is a JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Online Education',
          likes: 99
        }
      ]
    };
    expect(exercises.sumUserPostLikes(user)).toBe(286);
  });
});

describe('addCalculateDiscountPriceMethod(storeItem)', function() {
  var storeItem = {
    price: 80,
    discountPercentage: 0.1
  };
  var storeItem2 = {
    price: 5,
    discountPercentage: 0.5
  };

  it('should add the method \'calculateDiscountPrice\' to the store item object', function() {
    expect(exercises.addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice).toBeDefined();
    expect(exercises.addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice).toBeDefined();
  });
  it('should return the discount price from the new \'calculateDiscountPrice\' method', function() {
    expect(exercises.addCalculateDiscountPriceMethod(storeItem).calculateDiscountPrice()).toBe(72);
    expect(exercises.addCalculateDiscountPriceMethod(storeItem2).calculateDiscountPrice()).toBe(2.5);
  });
});