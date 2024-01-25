import { getImageUrl } from "./utils";

export default function Avatar({person,size}){
    return(
        <img
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    )
   
}
