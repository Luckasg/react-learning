import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const course = ({course}) => {
  
    const total = course.parts.reduce((s, p) => s + p.exercises, 0)
  
    return (
      <>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total value={total}/>
      </>
    )
  }
  
export default course;
