import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Contacto() {
  return (
    <div className="form pt-3">
      <div className="input_nombre">
        <span>Nombre:</span>
        <InputGroup>
          <Form.Control placeholder="Tu nombre" aria-label="nombre" />
        </InputGroup>
      </div>
      <div className="correo">
      <span className="">Correo:</span>
      <InputGroup>
        <Form.Control placeholder="Correo" aria-label="correo" />
      </InputGroup>
      </div>
      <div className="mensaje">
      <span>Tu mensaje:</span>
      <InputGroup>
        <Form.Control
          as="textarea"
          placeholder="Escribe tu mensaje aquí"
          aria-aria-label="With textarea"
        />
      </InputGroup>
      </div>
      
      <Button as="input" type="submit" value="Enviar" className="m-3" />{" "}
    </div>
  );
}
