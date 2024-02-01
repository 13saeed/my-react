// export const people = [{
//   id: 0,
//   name: 'Creola Katherine Johnson',
//   profession: 'mathematician',
//   accomplishment: 'spaceflight calculations',
//   imageId: 'MK3eW3A'
// }, {
//   id: 1,
//   name: 'Mario José Molina-Pasquel Henríquez',
//   profession: 'chemist',
//   accomplishment: 'discovery of Arctic ozone hole',
//   imageId: 'mynHUSa'
// }, {
//   id: 2,
//   name: 'Mohammad Abdus Salam',
//   profession: 'physicist',
//   accomplishment: 'electromagnetism theory',
//   imageId: 'bE7W1ji'
// }, {
//   id: 3,
//   name: 'Percy Lavon Julian',
//   profession: 'chemist',
//   accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//   imageId: 'IOjWm71'
// }, {
//   id: 4,
//   name: 'Subrahmanyan Chandrasekhar',
//   profession: 'astrophysicist',
//   accomplishment: 'white dwarf star mass calculations',
//   imageId: 'lrWQx8l'
// }];
import { sculptureList } from "./utils";
import { useState } from "react"

export default function Gallery(){
  const[index , setIndex] = useState(0);
  const[showMore , setShowMore] = useState(false);
  let hasPrev = index > 0
  let hasNext = index < sculptureList.length -1

  function hasPrevClick()
  {
    if(hasPrev){
      setIndex(index - 1)
    }
  }
  function hasNextClick()
  {
    if(hasNext)
    {
      setIndex(index + 1)

    }

  }
  function ShowMoreClick(){
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index]
  return(
    <>
    <button 
    onClick={hasNextClick}
    disabled={!hasNext}>
      next
    </button>
    <button 
    onClick={hasPrevClick}
    disabled={!hasPrev}
    >
      Prev
    </button>
    <h2>
      <i>{sculpture.name}</i>
      by {sculpture.artist}
    </h2>
    <h3>({index + 1} of {sculptureList.length})</h3>
    <button onClick={ShowMoreClick}>
      {showMore ? 'hide':'show'} details
    </button>
    {showMore && <p>{sculpture.description}</p>}
    <br/>
    <br/>
    <img
    src={sculpture.url}
    alt={sculpture.name}
    />
    </>

  )
}