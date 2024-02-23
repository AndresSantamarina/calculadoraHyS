import { Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioCalculadora = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const calcularHoras = (data) => {
    const nombreEmpresa = data.nombreEmpresa;
    const diasTrabajados = parseInt(data.diasTrabajados);
    const horasTrabajadas = parseInt(data.horasTrabajadas);
    const cantidadPersonas = parseInt(data.cantidadPersonas);

    const horasHombre = diasTrabajados * horasTrabajadas * cantidadPersonas;

    Swal.fire({
      title: "Resultado",
      text: `Horas hombre calculadas de ${nombreEmpresa}: ${horasHombre}`,
      icon: "success",
    });

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(calcularHoras)} className="m-4">
      <Form.Group className="mb-3" controlId="formNombreEmpresa">
        <Form.Label className="text-light">Empresa*</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre de la empresa"
          {...register("nombreEmpresa", {
            required: "El nombre de la empresa es obligatorio",
            minLength: {
              value: 2,
              message:
                "El nombre de la empresa debe tener como mínimo 2 caracteres",
            },
            maxLength: {
              value: 50,
              message:
                "El nombre del producto debe tener como máximo 50 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.nombreEmpresa?.message}
        </Form.Text>
      </Form.Group>
      <FormGroup className="mb-3" controlId="formDiasTrabajados">
        {" "}
        <Form.Label className="text-light">Días trabajados*</Form.Label>
        <Form.Control
          type="number"
          placeholder="1, 2, 3..."
          {...register("diasTrabajados", {
            required: "Estos datos son obligatorios",
            min: {
              value: 1,
              message: "Los días trabajados deben ser como mínimo de 1",
            },
            max: {
              value: 1000,
              message: "Los días trabajados deben ser como máximo de 1000",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.diasTrabajados?.message}
        </Form.Text>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formHorasTrabajadas">
        <Form.Label className="text-light">Horas trabajadas*</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresar el total de las horas"
          {...register("horasTrabajadas", {
            required: "Estos datos son obligatorios",
            min: {
              value: 1,
              message: "Las horas trabajadas deben ser como mínimo de 1",
            },
            max: {
              value: 1000,
              message: "Las horas trabajadas deben ser como máximo de 1000",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.horasTrabajadas?.message}
        </Form.Text>
      </FormGroup>
      <FormGroup className="mb-3" controlId="formCantidadPersonas">
        <Form.Label className="text-light">Cantidad de personas*</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresar el total de las personas"
          {...register("cantidadPersonas", {
            required: "Estos datos son obligatorios",
            min: {
              value: 1,
              message: "El número de personas debe ser como mínimo de 1",
            },
            max: {
              value: 500,
              message: "El número de personas debe ser como máximo de 500",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.cantidadPersonas?.message}
        </Form.Text>
      </FormGroup>
      <div className="text-center mt-5">
        <Button variant="dark" type="submit">
          Calcular
        </Button>
      </div>
    </Form>
  );
};

export default FormularioCalculadora;
