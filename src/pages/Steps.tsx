import * as React from "react";
import { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import StepsLayout from "@Layouts/StepsLayout";
import IconLeft from "@Assets/icons/Arrow_Left_Icon_Svg";

import ButtonText from "@Components/common/ButtonText";
import InputRadio from "@Components/form/InputRadio";
import InputCheckbox from "@Components/form/InputCheckbox";
import InputText from "@Components/form/InputText";
import InputDocument from "@Components/form/InputDocument";
import InputCalendar from "@Components/form/InputCalendar";
import InputSelect from "@Components/form/InputSelect";

interface ParamTypes {
  step?: string
}

function Steps() {
  const params = useParams<ParamTypes>();
  const history = useHistory();
  const [family, setFamily] = useState([]);
  const [typeInsurance, setTypeInsurance] = useState(null);
  const [typeFamily, setTypeFamily] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const deleteFamily = (key: number) => {};

  const addFamily = () => {
    const cloneFamily = family;
    cloneFamily.push({});
  };

  const goTwoStep = () => {
    history.push("/obtener-seguro/proceso/2");
  };

  const goThanks = () => {
    history.push("/obtener-seguro/gracias");
  };

  return (
    <StepsLayout>
      <form className="steps" action="#">
        <div className="steps__goBack">
          <button type="button" className="btn steps__goBack__button">
            <IconLeft />
          </button>
          <div className="steps__goBack__pagination">
            <p>paso 1</p>
            <p>de 7</p>
          </div>
        </div>

        {params.step == "1" && (
          <Fragment>
            <h6 className="steps__welcome">
              Hola, <b>Luisa</b>
            </h6>
            <p className="steps__subtitle">
              Valida que los datos sean correctos.
            </p>

            <p>Datos personales del titular</p>
            <div>
              <InputDocument
                defaultTypeDocument={{ name: "DNI", value: "dni" }}
                optionsTypeDocument={[
                  {
                    name: "DNI",
                    value: "dni",
                  },
                  {
                    name: "CE",
                    value: "ce",
                  },
                ]}
                changeTypeDocument={(data: any) => console.log(data)}
                inputLabelDocument="Nro. de Documento"
                changeDocument={(data: any) => console.log(data)}
              />
              <InputText
                inputLabel="Nombres"
                changeInput={(data: any) => console.log(data)}
              />
              <InputText
                inputLabel="Apellido Paterno"
                changeInput={(data: any) => console.log(data)}
              />
              <InputText
                inputLabel="Apellido Materno"
                changeInput={(data: any) => console.log(data)}
              />
              <InputCalendar
                inputLabel="Fecha de nacimiento"
                changeInput={(data: any) => console.log(data)}
              />

              <div>
                <p>Género</p>
                <div>
                  <InputRadio
                    text="Masculino"
                    id="man"
                    name="gender"
                    changeValue={(data: any) => console.log(data)}
                  />
                  <InputRadio
                    text="Femenino"
                    id="woman"
                    name="gender"
                    changeValue={(data: any) => console.log(data)}
                  />
                </div>
              </div>

              <div>
                <p>¿A quién vamos a asegurar?</p>
                <div>
                  <InputRadio
                    text="Solo a mí"
                    id="solo"
                    name="insurance"
                    changeValue={(data: any) => setTypeInsurance(data.id)}
                  />
                  <InputRadio
                    text="A mí y a mi familia"
                    id="family"
                    name="insurance"
                    changeValue={(data: any) => setTypeInsurance(data.id)}
                  />
                </div>
              </div>
            </div>
            {typeInsurance === "family" && (
              <div>
                <p>Datos de los familiares</p>
                <div>
                  <div className="steps__addFamily">
                    <InputSelect
                      defaultSelect={{ name: "Cónyuge", value: "conyuge" }}
                      options={[
                        {
                          name: "Cónyuge",
                          value: "conyuge",
                        },
                        {
                          name: "Hijo",
                          value: "hijo",
                        },
                      ]}
                      changeOption={(data: any) => console.log(data)}
                    />
                    <InputCalendar
                      inputLabel="Nacimiento"
                      changeInput={(data: any) => console.log(data)}
                    />
                    <button onClick={addFamily} type="button">
                      Agregar
                    </button>
                  </div>
                  <table>
                    <tbody>
                      {family.map((data, key) => (
                        <tr>
                          <th>{data.type}</th>
                          <th>{`${new Date(data.date).getDate()}/${new Date(
                            data.date
                          ).getMonth()}/${new Date(
                            data.date
                          ).getFullYear()}`}</th>
                          <th>
                            <button
                              type="button"
                              onClick={() => deleteFamily(key)}
                            >
                              Eliminar
                            </button>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <ButtonText onTouch={goTwoStep} text="Continuar" active="true" />
          </Fragment>
        )}

        {params.step == "2" && (
          <Fragment>
            <div>
              <div>
                <div>
                  <img src="IconCheck" />
                  <p>Básico</p>
                  <div>
                    <p>
                      <b>S/</b> 160
                    </p>
                    <p>mensual</p>
                  </div>
                </div>
                <div>
                  <img src="IconCheck" />
                  <p>Básico</p>
                  <div>
                    <p>
                      <b>S/</b> 160
                    </p>
                    <p>mensual</p>
                  </div>
                </div>
                <div>
                  <img src="IconCheck" />
                  <p>Básico</p>
                  <div>
                    <p>
                      <b>S/</b> 160
                    </p>
                    <p>mensual</p>
                  </div>
                </div>
                <div>
                  <img src="IconCheck" />
                  <p>Básico</p>
                  <div>
                    <p>
                      <b>S/</b> 160
                    </p>
                    <p>mensual</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <p>Tienes (3) asegurados</p>
                  <button>
                    <p>Resumen del plan</p>
                    <svg />
                  </button>
                </div>
                <div>
                  <div>
                    <p>Cónyuge</p>
                    <p>
                      <b>S/</b> 40
                    </p>
                  </div>
                  <div>
                    <p>Cónyuge</p>
                    <p>
                      <b>S/</b> 40
                    </p>
                  </div>
                  <div>
                    <p>Cónyuge</p>
                    <p>
                      <b>S/</b> 40
                    </p>
                  </div>
                  <div>
                    <p>Pago total mensual</p>
                    <p>S/ 160</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p>Cuentas con estos beneficios:</p>

                <div>
                  <div>
                    <p>Cobertura máxima</p>
                    <p>S/1MM</p>
                    <p>Plan básico</p>
                  </div>
                  <span />
                  <img src="" />
                </div>

                <div>
                  <ul>
                    <li>
                      <svg />
                      <p>Lima</p>
                      <p>(zona de cobertura)</p>
                    </li>
                    <li>
                      <svg />
                      <p>+30 clínicas</p>
                      <p>(en red afiliada)</p>
                    </li>
                    <li>
                      <svg />
                      <p>Médico a domicilio</p>
                    </li>
                    <li>
                      <svg />
                      <p>Chequeos preventivos</p>
                    </li>
                    <li>
                      <svg />
                      <p>Reembolso nacional</p>
                    </li>
                    <li>
                      <svg />
                      <p>Reembolso internacional</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div>
                  <div>
                    <p>Revisa nuestros</p>
                    <p>servicios y exclusiones</p>
                  </div>
                  <svg />
                </div>
                <div>
                  <details open>
                    <summary>
                      <p>Servicios brindados</p>
                      <svg />
                    </summary>
                    <ol>
                      <p>Lorem Ipsum</p>
                    </ol>
                  </details>
                  <details>
                    <summary>
                      <p>Exclusiones</p>
                      <svg />
                    </summary>
                    <ol>
                      <p>Lorem Ipsum</p>
                    </ol>
                  </details>
                </div>
              </div>

              <div>
                <button type="button">enviar cotización por correo</button>
                <div>
                <ButtonText onTouch={goThanks} text="Comprar plan" active="true" />

                </div>
              </div>
            </div>
          </Fragment>
        )}

        {/* <Fragment>
          <p> CASO 1 - eliminar esta linea</p>
          <div>
            <div>
              <p>Ingresa tu nombre</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Nombre y apellido"
              />
            </div>

            <div>
              <p>¿A quién vamos a asegurar?</p>
              <div>
                <label htmlFor="">
                  <input type="radio" name="" id="" />
                  <span />
                  <p>Solo a mí</p>
                </label>
                <label htmlFor="">
                  <input type="radio" name="" id="" />
                  <span />
                  <p>A mí y a mi familia</p>
                </label>
              </div>
            </div>

            <div>
              <p>Datos de tus familiares</p>
              <div>
                <div>
                  <select name="" id="">
                    <option value="vinculo">Vinculo</option>
                  </select>
                  <input type="text" placeholder="nacimiento" />
                  <button>Agregar</button>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Conyuge</th>
                      <th>12/12/1980</th>
                      <th>Eliminar</th>
                    </tr>
                    <tr>
                      <th>Conyuge</th>
                      <th>12/12/1980</th>
                      <th>Eliminar</th>
                    </tr>
                    <tr>
                      <th>Conyuge</th>
                      <th>12/12/1980</th>
                      <th>Eliminar</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <button>
                <p>Continuar</p>
                <svg />
              </button>
            </div>

          </div>

        </Fragment> */}
      </form>
    </StepsLayout>
  );
}

export default Steps;
