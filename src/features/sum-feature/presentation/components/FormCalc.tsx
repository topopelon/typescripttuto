import { Badge, Button, Form, InputNumber } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { FormEvent, useState } from "react";
import { sumService } from "../../domain/services/Sum.service";
import Number from "../../domain/models/Number";

export const FormCalc = () => {

    const defaultNum: Number = {a: 0, name: '0'}

    const [num1, setNum1] = useState(defaultNum);
    const [num2, setNum2] = useState(defaultNum);
    const [res, setRes] = useState(defaultNum);

    const handleChange1 = (a: string) => {
        let n = parseNumber(a);
        setNum1(n);
    }

    const handleChange2 = (a: string) => {
        let n = parseNumber(a) ?? 0;
        setNum2(n);
    }

    const handleSubmit = (event: FormEvent) => {
        let res = sumService.sum(num1, num2);
        setRes(res);
    }

    const parseNumber = (a: string): Number => {
        return {
            a: parseFloat(a),
            name: a
        }
    }

    return (
    <div>
        <Form onFinish={handleSubmit} role='formCalc'>
            <FormItem>
                <InputNumber value={num1.a} id='num1' onChange={(e) => e && handleChange1(e.toString())}/>
            </FormItem>
            <FormItem>
                <InputNumber value={num2.a} id='num2' onChange={(e) => e && handleChange2(e.toString())}/>
            </FormItem>
            <FormItem>
                <Button role='submitB' type='primary' htmlType='submit'>
                    Calcular
                </Button>
            </FormItem>
        </Form>
        <Badge count={res.a} className='badge'>
            <Button>Ingenieria informática</Button>
        </Badge>
    </div>
    );
}