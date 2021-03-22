const Createnote = () => {
    return ( 
        <form action="http://localhost:3001/create/note" method="POST">
            <input
            type="text"
            name="title"
            placeholder="Task"
            />
            <button>Crear</button>

        </form>
     );
}
 
export default Createnote;