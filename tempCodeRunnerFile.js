ar identify = {
    name: "Jerboa Taylor",
    age  : 25,
    gender: "Male",
    healthy: "yes",
    hobbies: "watching anime",
    profession: "bootcamp student",
    education: "Associates",
    learn : function() {
      return this.name + " is learning Javascript";
    },
    bio : function() {
    return "I like " + this.hobbies;
    }
  };