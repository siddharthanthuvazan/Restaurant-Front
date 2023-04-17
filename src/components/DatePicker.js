import React,{useRef, useState} from "react";
import { Col, Row } from "react-bootstrap";







const DatePicker = () => {
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
   
    const handleChange = (e) => {
        setDate(e.target.value);
    };
    return (
        <div>
            <Row  className="d-flex p-2 text-white">
                <Col>
                <input
                     type="date"
                     onChange={handleChange}
              />
                 </Col>
                <Col>
                    <p>Selected Date: {date}</p>
                </Col>
                
           </Row>
         
        </div>
        );
}
export default DatePicker;