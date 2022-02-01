function Student(props){

    console.log(props.name)
    return (
        <div>
            <h2>Student Component</h2>
            <h3>hello {props.name}</h3>
        </div>
    )
}

export default Student;