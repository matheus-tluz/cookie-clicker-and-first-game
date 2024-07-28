function congrats () {
    basic.showString("congrats you reached 10 cookies")
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
}
function buy_A (counter: number) {
    if (counter >= 5) {
        counter_bought_X = counter_bought_X + 1
        balance += -5
    } else {
        basic.showString("No money")
    }
}
input.onButtonPressed(Button.A, function () {
    if (is_waiting_to_reset == 1) {
        control.reset()
    }
    if (is_in_store == 0) {
        balance = balance + 1
        check_balence_and_congrats()
        if (is_waiting_to_reset == 0) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
    } else {
        buy_A(balance)
    }
})
function display_message (counter: number, counter_x: number, counter_y: number) {
    message = "C=" + balance
    message = "" + message + ("X=" + counter_bought_X)
    message = "" + message + ("Y=" + counter_bought_Y)
    basic.showString(message)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
function buy_B (counter: number) {
    if (counter >= 10) {
        counter_bought_Y = counter_bought_Y + 1
        balance += -10
    } else {
        basic.showString("No money")
    }
}
function check_balence_and_congrats () {
    if (balance == 10) {
        congrats()
        basic.pause(100)
        basic.showString("do you want to restart")
        is_waiting_to_reset = 1
    }
}
input.onButtonPressed(Button.AB, function () {
    if (is_in_store == 0) {
        is_in_store = 1
        basic.showString("Welcome")
    } else {
        is_in_store = 0
        basic.showString("See ya")
    }
})
input.onButtonPressed(Button.B, function () {
    if (is_waiting_to_reset == 1) {
        is_waiting_to_reset = 0
    }
    if (is_in_store == 0) {
        display_message(balance, counter_bought_X, counter_bought_Y)
    } else {
        buy_B(balance)
    }
})
let counter_bought_Y = 0
let message = ""
let is_in_store = 0
let is_waiting_to_reset = 0
let balance = 0
let counter_bought_X = 0
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})
