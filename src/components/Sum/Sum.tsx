import Number from "../../models/Number";

const sum = (a: Number, b: Number): Number => {
    return {
        a: a.a + b.a,
        name: 'res: ' + a.name + ' + '+ b.name + ' = '
     }
}

export default sum;
