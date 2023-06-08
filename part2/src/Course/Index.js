import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const course = ({course, updateCoursesNotes}) => {
  
    const total = course.parts.reduce((s, p) => s + p.exercises, 0)
  
    return (
      <>
        <Header title={course.name} />
        <Content courseId={course.id} parts={course.parts} updateCoursesNotes={updateCoursesNotes} />
        <Total value={total}/>
      </>
    )
  }
  
export default course;
