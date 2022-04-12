import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";

import { useNavigate } from "react-router";
import { UserContext } from "./UserContext";

type Inputs = {
  login: string;
  password: string;
};
type formProps = {};

const Form = (props: formProps) => {
  let [sign, setSign] = useState("none");
  let [button, setButton] = useState(true);
  let { name, setName, userLog, setUserLog } = useContext(UserContext);

  const logger = () => {
    setUserLog(true);
  };
  const disButton = () => {
    if (userLog) {
      navigate("/profile");
    }

    setTimeout(() => setButton(false), 0);
    setTimeout(() => {
      setButton(true);
    });
  };
  let navigate = useNavigate();
  const logName = (x: string) => setName(x);
  const trueSign = () => setSign("true");
  const falseSign = () => setSign("false");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (
      data.login === "steve.jobs@example.com" &&
      data.password === "password"
    ) {
      trueSign();
      logger();
      logName(data.login);
    } else {
      falseSign();
      logName(data.login);
    }
  };

  return (
    <>
      <div>
        {userLog ? <div className="error">{name}</div> : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          {sign === "false" ? (
            <div className="error">{`no such user as ${name}`}</div>
          ) : null}

          <label>
            Login <input {...register("login", { required: true })} />
          </label>
          {errors.login && <span>Обязательное поле</span>}

          <label>
            Password <input {...register("password", { required: true })} />
          </label>

          {errors.password && <span>Обязательное поле</span>}
          <span>
            <label>
              <input name="remember" type="checkbox" />
              Запомнить меня
            </label>
          </span>

          <button
            type="submit"
            id="submit"
            disabled={!button ? true : false}
            onClick={disButton}
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;

//
