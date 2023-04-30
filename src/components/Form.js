import { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CH_NOMBRE": {
      return {
        ...state,
        firstName: action.value,
      };
    }
    case "CH_APELLIDO": {
      return {
        ...state,
        lastName: action.value,
      };
    }
    case "CH_EMAIL": {
      return {
        ...state,
        email: action.value,
      };
    }
    case "CH_ERROR": {
      return {
        ...state,
        error: action.value,
      };
    }
  }
  return state;
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={(event) => {
            dispatch({ type: "CH_NOMBRE", value: event.target.value });
            {
              state.firstName.error !== null && <p>{state.firstName.error}</p>;
            }
          }}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={(event) => {
            dispatch({ type: "CH_APELLIDO", value: event.target.value });
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          pattern="^[a-zA-Z0-9!#$%&amp;'*+\/=?^_`\{\|\}~.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*$"
          value={state.email}
          onChange={(event) => {
            dispatch({ type: "CH_EMAIL", value: event.target.value });
          }}
        />
      </div>
      <input type="submit" value="enviar" />
    </form>
  );
};
export default Form;
