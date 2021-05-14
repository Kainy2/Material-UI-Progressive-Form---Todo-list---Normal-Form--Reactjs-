import React from "react";
import ReactDOM from "react-dom";
import App from "./App"




ReactDOM.render(<App />, document.getElementById('root'));





















// -----------------A SUCCESSFUL ATTEMPT TO CREATE A CONTACT LIST APP--------------------
// function ContactForm(props) {
//     const [nameFinal, setNameFinal] = useState("")
//     const [numFinal, setNumFinal] = useState("");
//     const [ageFinal, setAgeFinal] = useState("");


//     const contact = <li> {nameFinal} <br /> {numFinal} <br /> {ageFinal} </li>
//     const add = (e) => {
//         e.preventDefault;
//         setNameFinal(props.name);
//         setNumFinal(props.num);
//         setAgeFinal(props.age);
         
//     };
//     return (
//         <div>
//             <div>
//             <form
//                 style={{
//                     textAlign: "center",
//                 }}
//             >
//                 <input
//                     onChange={props.nameFunction} value={props.name}
//                     type="text"
//                     required={true}
//                     placeholder="Contact's Name"
//                     style={{
//                         padding: "2px 10px",
//                         width: "400px",
//                         height: "30px",
//                         border: "1px grey solid",
//                         margin: "5px 10px",
//                     }}
//                 />
//                     <br />
//                 <input
//                     onChange={props.numFunction} value={props.num}
//                     type="tel"
//                     required={true}
//                     placeholder="Contact's Number"
//                     style={{
//                         padding: "2px 10px",
//                         width: "400px",
//                         height: "30px",
//                         border: "1px grey solid",
//                         margin: "5px 10px",
//                     }}
//                 />
//                 <input
//                     onChange={props.ageFunction} value={props.age}
//                     type="Number"
//                     required={true}
//                     placeholder="Contact's Age"
//                     style={{
//                         padding: "2px 10px",
//                         width: "400px",
//                         height: "30px",
//                         border: "1px grey solid",
//                         margin: "5px 10px",
//                     }}
//                 />
//                 <br />
//                 <br />
//                 <input
//                     onClick={add}
//                     type="button"
//                     value="ADD"
//                     style={{
//                         fontWeight: "bold ",
//                         textAlign: "center",
//                         padding: "2px 10px",
//                         margin: "10px",
//                     }}
//                 />
//                 </form>
//             </div>
//             <ul>
//                {contact}
//             </ul>
//         </div>
//     );
// }

// const ContactList = (props) => {

//     return <ul> {props.contact} </ul> 
// };

// function Contacts() {
//     const [name, setName] = useState("");
//     const [num, setNum] = useState();
//     const [age, setAge] = useState();
    
    
//     function nameFunction(e) {
//         setName(e.target.value);
//        }
       
//        function numFunction(e) {
//         setNum(e.target.value);
//        }

//        function ageFunction(e) {
//         setAge(e.target.value);
//        }
//     return (
//         <div>
//             <ContactForm nameFunction={nameFunction} numFunction={numFunction} ageFunction={ageFunction} name={name} num={num} age={age} setName={setName} setNum={setNum} setAge={setAge} />
//             {/* <ContactList contact={contact} /> */}
//     </div>
//     );
// }

// ReactDOM.render(<Contacts />, document.getElementById("root"));

//----------------------------FAILED CONTACT LIST---------------------------------------------------
//     function List(props) {

//         return <li>{props.add}</li>;
//     }

// function Contacts(props) {
//         function contactFunction(name, tel, age) {
//             this.name = name;
//             this.tel = tel;
//             this.age = age;
//         }
//         const [name, setName] = useState("")
//         const [num, setNum] = useState(234)
//         const [age, setAge] = useState(0)
//         const person = new contactFunction(name, num, age);

//         function nameFunction(e) {
//             setName(e.target.value);
//         }

//         function numFunction(e) {
//             setNum(e.target.value);
//         }

//         function ageFunction(e) {
//             setAge(e.target.value);
//         }

//         function add() {
//             const list = document.createElement("li")
//             const p1 = document.createElement("p")
//             const n1 = document.createTextNode({name})
//             const p2 = document.createElement("p")
//             const n2 = document.createTextNode({num})
//             const p3 = document.createElement("p")
//             const n3 = document.createTextNode({age})
//             p1.appendChild(n1);
//             p2.appendChild(n2);
//             p3.appendChild(n3);
//             list.appendChild(p1);
//             list.appendChild(p2);
//             list.appendChild(p3);
//             console.log(p1);

//             return list
//         }

//             return (
//                 <div>
//                     <ContactForm person={person} nameFunction={nameFunction} numfunction={numFunction} ageFunction={ageFunction}/>
//                     <List add={add}/>
//                 </div>
//             );
//         }

//------------------------- LIST OF NAMES THAT SHOW AS A LIST ----------------------------------
// function AddContact(props) {
//     const [contactInput, setContactInput] = useState("");
//     const inputFunction = (e) => {
//         setContactInput(e.target.value);
//     };
//     const add = (e) => {
//         if (contactInput !== "") {
//             setContactInput('');
//             props.data(contactInput);
//             e.preventDefault();
//         }
//     };

//     return (
//         <div>
//             <form>
//                 <input
//                     onChange={inputFunction}
//                     value = {contactInput}
//                     type="text"
//                     required={true}
//                     placeholder="Contact "
//                     style={{
//                         padding: "2px 10px",
//                         width: "400px",
//                         height: "30px",
//                         border: "1px grey solid",
//                         margin: "0px 10px",
//                     }}
//                 />
//                 <input
//                             onSubmit ={add}
//                     type="submit"
//                     value="ContactForm"
//                     style={{
//                         padding: "2px 10px",
//                         margin: "0px 10px",
//                     }}
//                 />
//             </form>
//         </div>
//     );
//
// }

// function List(props) {
//     const contacts = props.contacts;
//     const contact = contacts.map((contacter, a) => (
//         <li
//             style={{
//                 fontFamily: "sans-serif",
//                 padding: "8px",
//                 margin: "10px 0px 10px -30px",
//                 fontWeight: "bold",
//                 backgroundColor: "lightgrey",
//                 listStyle: "none",
//             }}
//             key={a}
//         >
//             {contacter}
//         </li>
//     ));
//     return <ul>{contact}</ul>;
// }

// function ContactManager() {
//     const contact = ["Mumsy", "Chimdi", "Ozi", "UD"];
//     const [contacts, setContacts] = useState(contact);
//     const newContact = (contactSaved) => {
//         setContacts([...contacts, contactSaved]);
//     };

//     return (
//         <div>
//             <AddContact data={newContact} />
//             <List contacts={contacts} />
//         </div>
//     );
// }

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// // import "./style.css";

// function AddPersonForm(props) {
//     const [person, setPerson] = useState("");

//     function handleChange(e) {
//         setPerson(e.target.value);
//     }

//     function handleSubmit(e) {
//         if (person !== "") {
//             props.handleSubmit(person);
//             setPerson("");
//         }
//         e.preventDefault();
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="ContactForm new contact"
//                 onChange={handleChange}
//                 value={person}
//             />
//             <button type="submit">ContactForm</button>
//         </form>
//     );
// }

// function PeopleList(props) {
//     const arr = props.data;
//     const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
//     return <ul>{listItems}</ul>;
// }

// function ContactManager(props) {
//     const [contacts, setContacts] = useState(props.data);

//     function addPerson(name) {
//         setContacts([...contacts, name]);
//     }

//     return (
//         <div>
//             <AddPersonForm handleSubmit={addPerson} />
//             <PeopleList data={contacts} />
//         </div>
//     );
// }
// const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

// ReactDOM.render(
//     <ContactManager data={contacts} />,
//     document.getElementById("root")
// );

// function ContactList(props) {
//   const contactList = props.data;
//   // const [contacts, setContacts] = useState(contactList);
//   const contactListing = contactList.map((contact, a) => [
//     <li key={a}> {console.log(contact)} </li>
//   ]
//   );

//   console.log(typeof contactListing);

//   return <ul>{contactListing}</ul>;
// }

// const contactList = ["Mumsy", "Chimdi", "Ozi", "UD"];

// ReactDOM.render(
//   <ContactList data={contactList} />,
//   document.getElementById('root')
// );

// Class-Based Component counter
// class Test extends Component {
//   state = { counter: 0 }

//   counting = () =>{
//       this.setState( [this.state.counter ++] );
//   }

//   increment = () => {
//     setInterval(() => this.counting(), 10000)

//   }

//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//       <p> {this.state.counter} </p>
//        {this.increment()}
//         <button onClick={this.counting}> Increment </button>
//      </div>
//      )
//     }
//   }

// Function-Based Component counter
// function Hello() {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setInterval(() => {
//       setCounter(counter + 1)
//     }, 1000)
//   }
//   return (
//     <div style={{ textAlign: "center"}}>
//       <p> {counter} </p>
//       {increment()}
//       <button> Increment </button>
//     </div>
//   )
// }

// serviceWorker.unregister();
// {/* <ToDoApp /> */ }
