// class Person {
// 	constructor(name = 'Anonymous', age = 0) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getGreeting() {
// 		return `${this.name} is ${this.age} years old.`;
// 	}
// }

// class Student extends Person {
// 	constructor(name, age, major) {
// 		super(name, age);
// 		this.major = major;
// 	}
// 	hasMajor() {
// 		return !!this.major;
// 	}

// 	getGreeting() {
// 		let description = super.getGreeting();

// 		if (this.hasMajor()) {
// 			description += ` Their major version is ${this.major}`
// 		}
// 		return description;
// 	}
// }

// class Traveler extends Person {
// 	constructor(name, age, homeLocation) {
// 		super(name, age);
// 		this.homeLocation = homeLocation;
// 	}

// 	hasHomeLocation() {
// 		return !!this.homeLocation;
// 	}

// 	getGreeting() {
// 		let location = super.getGreeting();

// 		if (this.hasHomeLocation()) {
// 			location += ` I'm visiting from ${this.homeLocation}.`
// 		}
// 		return location;
// 	}
// }

// const me = new Traveler('Fakher', 28, 'Berlin');
// console.log(me.getGreeting());

// const other = new Traveler();
// console.log(other.getGreeting());
