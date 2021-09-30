import { Badge, Button, Col, Form, InputNumber } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { FormEvent, useState } from "react";
import Number from "../models/Number";
import sum from "../components/Sum/Sum";

const FormCalc = () => {

    const defaultNum: Number = {a: 0, name: '0'}

    const [num1, setNum1] = useState<Number>(defaultNum);
    const [num2, setNum2] = useState<Number>(defaultNum);
    const [res, setRes] = useState<Number>(defaultNum);
    
    const handleChange1 = (a: string) => {
        let n = parseNumber(a);
        setNum1(n);
    }

    const handleChange2 = (a: string) => {
        let n = parseNumber(a) ?? 0;
        setNum2(n);
    }

    const handleSubmit = (event: FormEvent) => {
        setRes(sum(num1, num2))
    }

    const parseNumber = (a: string): Number => {
        return {
            a: parseFloat(a),
            name: a
        }
    }

    return (
    <div style={{justifyContent: 'center', display: 'flex',  marginTop: 200}}>
    <Col>
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
      </Col>
    </div>
    )
}

export default FormCalc;