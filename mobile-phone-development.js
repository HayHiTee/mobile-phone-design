// Battery - Manufacturer, model, idle time, hours talk, size.
// Screen- Manufacturer, size, color
// Owner - Name, Address, email, Gender, phone number
// Manufacturer- Name of business, Address, phone number
// Operating System - Constants
// Phone - Manufacturer, Model, price, owner features, OS, screen, battery, size
// SmartPhone- Phone, internet-enabled.


class Manufacturer {
    #business_name
    #address
    #phone_number

    constructor(business_name, address, phone_number) {
        this.#business_name = business_name;
        this.#address = address;
        this.#phone_number = phone_number;
    }

    toString() {
        return `Business Name: ${this.#business_name}, Address: ${this.#address}, PhoneNumber: ${this.#phone_number}`;
    }

}

class Battery {
    #model
    #size
    #idle_time
    #hours_talk

    constructor(manufacturer, model, size) {
        this.manufacturer = manufacturer;
        this.#model = model;
        this.#size = size;
    }

    set idle_time(idle_time) {
        this.#idle_time = idle_time
    }

    set hours_talk(hours_talk) {
        this.#hours_talk = hours_talk
    }

    toString() {
        return `Model: ${this.#model}, Size: ${this.#size}, Idle Time: ${this.#idle_time}, Hours Talk: ${this.#hours_talk},Manufacturer: { ${this.manufacturer.toString()} }`
    }

}

class Screen {
    #size
    #color

    constructor(manufacturer, size, color) {
        this.manufacturer = manufacturer;
        this.#size = size;
        this.#color = color;

    }

    set size(size) {
        this.#size = size
    }

    set color(color) {
        this.#color = color
    }

    toString() {
        return `Color: ${this.#color}, Size: ${this.#size}, Manufacturer: { ${this.manufacturer.toString()} }`
    }


}

class Person {
    #name
    #address
    #phone_number
    #gender
    #email

    constructor(name, address, phone_number) {
        this.#name = name;
        this.#address = address;
        this.#phone_number = phone_number;
    }

    get gender() {
        return this.#gender;
    }

    set gender(gender) {
        this.#gender = gender;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    toString() {
        return `Name: ${this.#name}, Address: ${this.#address}, Email: ${this.#email}, Gender: ${this.#gender}, Phone Number: ${this.#phone_number}`
    }

}

const OPERATING_SYSTEM = {
    "ANDROID_OS": "ANDROID OPERATING SYSTEM",
    "IOS": "APPLE MOBILE OPERATING SYSTEM",
    "WINDOWS": "MICROSOFT MOBILE OPERATING SYSTEM",
    "JAVA": "JAVA OPERATING SYSTEM",
    "SYMBIAN": "SYMBIAN OPERATING SYSTEM"
}

class OperatingSystem {
    constructor(os_name, version) {
        if (!!Object.hasOwn(OPERATING_SYSTEM, os_name)) {
            throw new Error("Invalid Operating system")
        }
        this.os_name = os_name
        this.version = version
    }

    toString() {
        return `Operating System Name: ${this.os_name}, Version: ${this.version}`
    }


}

class Owner extends Person {
}

class Phone {
    constructor(manufacturer, price, model, owner, os, screen, battery, size) {
        this.manufacturer = manufacturer;
        this.price = price;
        this.model = model;
        this.owner = owner;
        this.os = os;
        this.screen = screen;
        this.battery = battery;
        this.size = size;
    }


    toString() {
        return `Size: ${this.size}, 
        Price: ${this.price}, 
        Model: ${this.model},
        Manufacturer: { ${this.manufacturer.toString()} }
        Owner: { ${this.owner.toString()} },
        Operating System: { ${this.os.toString()} },
        Screen: { ${this.screen.toString()} },
        Battery: { ${this.battery.toString()} },`

    }

}

class SmartPhone extends Phone {
    #internet_enabled = true

    toString() {
        return`Internet: YES, 
        ${super.toString()}`;
    }

}


// Battery
const battery_manufacturer = new Manufacturer("Bat_manufacture", "Ibadan, Nigeria",
    "123456");
const battery = new Battery(battery_manufacturer, "MK142", "3");
battery.idle_time = 24;
battery.hours_talk = 10;

// Screen
const screen_manufacturer = new Manufacturer("Screen_Man", "Lagos, Nigeria",
    "1243456");
const screen = new Screen(screen_manufacturer, 6, "black");

// Owner => Person
const owner = new Owner("Kolade", "Abuja, Nigeria", "39382932");
owner.email = "nolook@mail.com";
owner.gender = "m";

// Operating system
const os = new OperatingSystem(OPERATING_SYSTEM.IOS, "17.0.3");


const phone_manufacturer = new Manufacturer("Samsung",
    "Suwon si, Korea", "93024824")


// Smartphone
const smartphone = new SmartPhone(phone_manufacturer,
    120,
    "S20",
    owner,
    os,
    screen,
    battery,
    6)

console.log(smartphone.toString())











