// Pattern Definition
// Abstrast Part
/** Create an Bastract Invoker that need to contains setCommands or a constructor with commands */
class Invoker {
  constructor() {}

  setCommands() {}
}

/** Create an Abstract command that contains a receiver. A command is hard linked to a specific Receiver */
class Command {
  /** Private receiver attribute */
  receiver = null

  /** Public constructor that store the Receiver */
  constructor(receiver) {
    this.receiver = receiver
  }

  /** Defines the 2 required methods */
  execute() {}
  unExecute() {}
}

/** Create a very simple Receiver that show that it needs nothing */
class Receiver {

}

// Concrete Part
/** Create ta Counter Receiver */
class CounterReceiver {

  /** Private counter value */
  counter = 0

  /** All public method to used in execute and unExecute of commands */
  increment() {
    this.counter++
    // To show what hapened
    console.log(this.counter)
  }
  decrement() {
    this.counter--
    // To show what hapened
    console.log(this.counter)
  }

  multiply2() {
    this.counter *= 2
    // To show what hapened
    console.log(this.counter)
  }

  divide2() {
    this.counter /= 2
    // To show what hapened
    console.log(this.counter)
  }
}

/** Create an Increment Command inherited from Command (with their receiver and constructor) */
class IncrementCommand extends Command {
  
  /** Implement required execute method */
  execute() {
    this.receiver.increment()
  }

  /** Implement required unExecute method */
  unExecute() {
    this.receiver.decrement()
  }
}

/** Create a Multiply by 2 Command inherited from Command (with their receiver and constructor) */
class Multiply2Command extends Command {

  /** Implement required execute method */
  execute() {
    this.receiver.multiply2()
  }

  /** Implement required unExecute method */
  unExecute() {
    this.receiver.divide2()
  }
}

/** Create a Generic invoker linked to button in DOM */
class HTMLButtons extends Invoker {

  /** Private command attributes */
  command1 = null
  command2 = null

  /** Constructor that take the DOM buttons ids and add a Click EventListener on it */
  constructor(idButton1, idButton2, idButton3, idButton4) {
    super()

    document.getElementById(idButton1).addEventListener('click', () => {
      this.clickButton1()
    })

    document.getElementById(idButton2).addEventListener('click', () => {
      this.clickButton2()
    })

    document.getElementById(idButton3).addEventListener('click', () => {
      this.clickButton3()
    })

    document.getElementById(idButton4).addEventListener('click', () => {
      this.clickButton4()
    })
  }

  /** Required method to link commands to this Invoker */
  setCommands(command1, command2) {
    this.command1 = command1
    this.command2 = command2
  }

  /** Invoker internal code that call the command execute and unExecute when needed */
  clickButton1() {
    this.command1.execute()
  }

  clickButton2() {
    this.command1.unExecute()
  }

  clickButton3() {
    this.command2.execute()
  }

  clickButton4() {
    this.command2.unExecute()
  }
}

// Pattern Usage
/** Create Receiver */
const counterReceiver = new CounterReceiver()

/** Create Commands */
const incrementCommand = new IncrementCommand(counterReceiver)
const multiplyCommand = new Multiply2Command(counterReceiver)

/** Create Invoker */
const buttons = new HTMLButtons("button1", "button2", "button3", "button4")
/** Link commands to Invoker */
buttons.setCommands(incrementCommand, multiplyCommand)


