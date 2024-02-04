// import {Profile} from './gallery.js';
// import Gallery from './gallery.js';

// export default function App(){
//   const name = 'Saeed';
//   return(
//     <h1>{name} iam 20 years old</h1>
//   )
// }
// const todate = new Date()

// function formatDate(date){
//   return new Intl.DateTimeFormat(
//     'en-us',
//     {weekday: 'long'}
//   ).format(date);
// }

// export default function TodoList(){
//   return(
//     <h1>To Do List For {formatDate(todate)}</h1>
//   );
// }

// export default function Name(){
//   return(
//     <ul style={{backgroundColor:'black'}}>
//       <li>Saeed choupani</li>
//     </ul>
    
//   )
// }

// import { getImageUrl } from './utils.js';

// function Avatar({person , size}){
//   return(
//     <img
//     className="avatar"
//     src={getImageUrl(person)}
//     alt={person.name}
//     width={size}
//     height={size}/>
//   );
// }

// export default function Profile(){
//   return(
//   <div>
//      <Avatar
//       size={100}
//       person={{
//         name:"saeedchoupani",
//         imageId:'ysffedx'
//   }}/>
//    <Avatar
//     size={80}
//     person={{
//       name:"saeedchoupani",
//       imageId:'ysffedx'
//   }}/>

//   </div>)
// }
// const poem = {
//   lines:[
//     'I write, erase, rewrite',
//     'Erase again, and then',
//     'A poppy blooms.'
//   ]
// };
// export default function Poem(){
//   let output=[];
//   poem.lines.forEach((line , i) =>{
//     output.push(
//       <hr key={i + '-separator'}/>
//     );
//     output.push(
//       <p key={i + '-text'}>
//         {line}
//       </p>
//     );
//   })
//   output.shift()
//  return(
//   <article>
//     {output}
//   </article>
//  )
// }
// function Recipe({drinkers}){
//   return(
//     <ol>
//       <li>Boil {drinkers} cups of water.</li>
//       <li>Add {drinkers} spoons of tea and {1 * drinkers} spoons of spice.</li>
//       <li>Add {1 * drinkers} cups of milk to boil and sugar to taste.</li>
//     </ol>
//   )
// }

// export default function App(){
//   return(
//     <section>
//       <h1>Hello</h1>
//       <h2>Spiced Chai Recipe</h2>
//       <h2>For Two</h2>
//       <Recipe drinkers={2}/>
//       <h2>for Foor</h2>
//       <Recipe drinkers={4}/>
//     </section>
//   )
// }


// function Cup({g}){
// return <h2>HELLO .{g}</h2>
// }

// export default function Test (){
//   let cups =[]
//   for(let i = 1 ; i<=15 ;i++){
//     cups.push(<Cup key={i} g={i}/>);
//   }
//   return cups
// }

// function AlertButton({message , child}){
//   return(
//     <button onClick={()=> alert(message)}>
//       {child}
//     </button>
//   )
// }

// export default function Toolbar(){
//   return(
//     <div>
//     <AlertButton message="playing">
//       PLAY
//     </AlertButton>
//     </div>
//   )
// }

// export default function App(){
//   return(
//     <div className="toolbar" onClick={() => alert("Click toolbar")}>
//       <Button onClick={() => alert('palying')}> Play Movies</Button>
//       <Button onClick={() => alert('uploading')}> uploadImage</Button>

//     </div>
    
//   )
// }


// function Button({onClick , children}){
//   return(
//     <button onClick={e =>{
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   )
// }

// export default function Signup(){
//   return(
//     <form onSubmit={e =>{e.preventDefault();alert("submitting")}}>
//       <input/>
//       <button>Send</button>
//     </form>
//   )
// }

// import Gallery from "./avatar";

// export default function App(){
//   return(
//     <>
//     <Gallery/>
//     <br/>
//     <br/>
//     <Gallery/>
//     </>
//   )
// }
import { useState } from "react"

export default function Form(){
  const [person,setPerson] = useState({
    firstname:"saeed",
    lastname:"choupani",
    email:"saeed@gmail.com"
  })

  function handlerFirstNameChange(e){
    setPerson({
      ...person,
      firstname : e.target.value
    })
  }
  function handlerLastNameChange(e){
    setPerson({
      ...person,
      lastname : e.target.value
    })
  }
  function handlerEmailChange(e){
    setPerson({
      ...person,
      email : e.target.value
    })
  }

  return(
    <>
      <label>
        Firstname:
        <input 
        value={person.firstname}
        onChange={handlerFirstNameChange}
        />
      </label>
      <br/>
      <br/>
      <label>
        Lastname:
        <input 
        value={person.lastname}
        onChange={handlerLastNameChange}
        />
      </label>
      <br/>
      <br/>
      <label>
        Email:
        <input 
        value={person.email}
        onChange={handlerEmailChange}
        />
      </label>
      <p>
        {person.firstname}{' '}
        {person.lastname}{' '}
        {person.email}
      </p>


    </>
  )

}
