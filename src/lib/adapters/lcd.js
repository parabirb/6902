// 1602 lcd, intended to be piped through a via. you can use this with whatever you'd like
export default function lcd({ update }) {
    // character array
    let array = [];
    for (let i = 0; i < 32; i++) array[i] = "";
    // cursor
    let cursor = 0;
    // rs
    let rs = 0;
    // pending instruction
    let instruction = 0;
    // port a function
    function PA({ data }) {
        // set rs
        rs |= (data >> 5) & 1;
        // if e
        if ((data >> 7) & 1 && instruction) {
            // if we're outputting data to the screen
            if (rs) {
                array[cursor] = String.fromCharCode(instruction);
                if (cursor < 31) cursor++;
                else cursor = 0;
                update(array);
            }
            // if we're clearing the screen
            else if (instruction === 1) {
                array = array.map(x => "");
                cursor = 0;
                update(array);
            }
            // if we're returning home
            else if (instruction & 0b11 === (instruction | 0b10)) {
                cursor = 0;
            }
            rs = 0;
            instruction = 0;
        }
    }
    // port b function
    function PB({ read, data }) {
        // if it's a read
        if (read) {
            // return address
            return cursor;
        }
        // if it's a write
        else {
            instruction = data;
        }
    }
    // return
    return { PA, PB };
};