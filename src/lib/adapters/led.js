// led, intended to be piped through a via. you can use this with ben eater's blink sketch
export default function led({ output }) {
    // controller function
    return function controller({ read, data }) {
        if (read) return 0;
        else output(data.toString(2).padStart(8, "0"));
    }
};