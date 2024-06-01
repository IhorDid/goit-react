import { useState, useEffect, useId } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Formik, Form, Field } from "formik";
import axios from "axios";

import "./App.css";
// import Seachbox from "./Seachbox";

// function App() {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={(evt) => console.log(evt)}>Second button</button>
//     </>
//   );
// }

// **************************************************************************

// const CustomButton = ({ message, children }) => {
//   return <button onClick={() => alert(message)}>{children}</button>;
// };

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       {/* <CustomButton message="Uploading your data!">Upload data</CustomButton> */}
//     </>
//   );
// };

// **************************************************************************

// const App = () => {
//   let clicks = 0;

//   const handleClick = () => {
//     clicks = clicks + 1;
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// const App = () => {
//   console.log(useState());
// let clicks = 0;
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// };

// *********************************************************************************

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Currenr :{clicks} </button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// **************************************** Паттерн підняття батька

// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const handleClick = () => setClicks(clicks + 1);

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />;
//       <ClickCounter value={clicks} onUpdate={handleClick} />;
//     </>
//   );
// };

// ********************************************************************

// const App = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };

// ********************************************************************************************
// const App = () => {
// const handleClick = () => console.log(5);
// return <button onClick={handleClick}>Click</button>;

//   const handleClick = (value) => {
//     console.log(value);
//   };
//   return <button onClick={(value) => console.log(value)}> Click me! </button>;
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <>
//       <button onClick={handleClick}>Click:{clicks}</button>
//     </>
//   );
// };

// ******************************************************************************
// const Modal = () => {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close" : "Open"}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

// **********************************************************************************************
// const App = () => {
//   const [clicks, setClicks] = useState(0);

// ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log("Clicks updated: ", clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// ************************************************************************************
// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const saveClicks = localStorage.getItem("save") || 0;
//     return saveClicks;
//   });

//   useEffect(() => {
//     localStorage.setItem("save", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = JSON.parse(localStorage.getItem("saved-clicks"));
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// const LoginForm = () => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
//     const { login, password } = form.elements;

// Посилання на DOM-елементи
//     console.log(login, password);

// Значення полів
//     console.log(login.value, password.value);

// Скидаємо значення полів після відправки
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// Перемикач мов
// const LangSwitcher = () => {
//   const selectId = useId();
//   return (
//     <div>
//       <label htmlFor={selectId}></label>
//       <select id={selectId}>
//         <option value="en">English</option>
//         <option value="uk">Ukrainian</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// const App = () => {
//   return <LangSwitcher />;
// };

// ? Select поза формою ***************************************
// const LangSwitcher = () => {
//   const selectId = useId();
//   const [lang, setLang] = useState("uk");

//   const handleChange = (evt) => {
//     setLang(evt.target.value);
//   };
//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select value={lang} onChange={handleChange} id={selectId}>
//         <option value="en">English</option>
//         <option value="uk">Ukrainian</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// const App = () => {
//   return <LangSwitcher />;
// };

// ?Select*************************************************
// const LangSwitcher = ({ value, onSelect }) => {
//   const selectId = useId();

//   return (
//     <div>
//       <label htmlFor={selectId}>Choose language</label>
//       <select id={selectId} value={value} onChange={onSelect}>
//         <option value="uk">Ukrainian</option>
//         <option value="en">English</option>
//         <option value="pl">Polish</option>
//       </select>
//     </div>
//   );
// };

// const App = () => {
//   const [lang, setLang] = useState("uk");

//   const handeleChange = (evt) => {
//     setLang(evt.target.value);
//   };
//   return (
//     <>
//       <p>Selected language : {lang}</p>
//       <LangSwitcher value={lang} onSelect={handeleChange} />
//     </>
//   );
// };

// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(true);
//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };

// ?checkbox ******************************************************
// const App = () => {
//   const [hasAccepted, setHasAccepted] = useState(false);
//   const checkedId = useId();

//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//     console.log(evt.target.checked);
//   };

//   return (
//     <div>
//       <label htmlFor={checkedId}>
//         <input
//           id={checkedId}
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// };

//  todo 11  Case на динамічні елементи користувача*********************************** todo
// const App = () => {
//   const [inputvalue, setInputValue] = useState("");
//   const [selectValue, setSelectValue] = useState("visa");
//   const [users, setUsers] = useState(["Jacob", "Alice", "John", "Poly"]);

//   const isSelect = users
//     .filter((user) => user.toLowerCase().includes(inputvalue.toLowerCase()))
//     .sort((a, b) => a.localeCompare(b));

//   return (
//     <>
//       <input
//         type="text"
//         value={inputvalue}
//         onChange={(evt) => setInputValue(evt.target.value)}
//       />
//       <select
//         name="payment"
//         value={selectValue}
//         onChange={(evt) => setSelectValue(evt.target.value)}
//       >
//         <option value="visa">visa</option>
//         <option value="mastercard">mastercard</option>
//         <option value="cash">cash</option>
//       </select>
//       <ul>
//         {isSelect.map((user) => (
//           <li key={user}>{user}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// todo використання бібліотеки Formik

// const FeedbackForm = () => {
//   const initialValues = {
//     username: "Ihor",
//     email: "igor@gmail.com",
//   };

//   const handleSubmit = (values, action) => {
//     console.log(values);
//     action.resetForm();
//   };
//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <Field type="text" name="username" />
//         <Field type="email" name="email" />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <FeedbackForm />
//     </>
//   );
// };

// ? HTTP *******************************************

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArt() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://hn.algolia.com/api/v1/search1?query=react"
        );

        console.log(res);

        setArticles(res.data.hits);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArt();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// const App = () => {
//   const searchArticles = async (query) => {
//     try {
//       const response = await axios.get(
//         `https://hn.algolia.com/api/v1/search1?query=${query}`
//       );
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div>
//       <Seachbox onSearch={searchArticles} />
//     </div>
//   );
// };

export default App;
