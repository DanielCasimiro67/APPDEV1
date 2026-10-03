const aboutMe = {
  name: "Daniel",
  age: 21,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, taking up ${this.course}.`);
  }
};

aboutMe.hobby = "Chess";
aboutMe.introduce();
console.log(aboutMe.hobby);
