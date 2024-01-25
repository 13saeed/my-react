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
import Avatar from "./avatar";

function Card({children}){
  return(
    <div className="card">
      {children}
    </div>
  )
}

export default function Profile(){
  return(
    <Card>
      <Avatar
        size={100}
        person={{
          name:"saeedchoupani",
          imageId:"1adwrs"
        }}
      />
    </Card>
  )
}